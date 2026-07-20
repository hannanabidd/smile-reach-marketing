const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: { url: string; alt: string } | null;
  categories: string[];
};

type RawWPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
    "wp:term"?: { name: string; taxonomy: string }[][];
  };
};

function stripTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function mapPost(raw: RawWPPost): WPPost {
  const media = raw._embedded?.["wp:featuredmedia"]?.[0];
  const categoryTerms = raw._embedded?.["wp:term"]?.flat() ?? [];

  return {
    id: raw.id,
    slug: raw.slug,
    date: raw.date,
    title: stripTags(raw.title.rendered),
    excerpt: stripTags(raw.excerpt.rendered),
    content: raw.content.rendered,
    featuredImage: media
      ? { url: media.source_url, alt: media.alt_text || "" }
      : null,
    categories: categoryTerms
      .filter((term) => term.taxonomy === "category")
      .map((term) => term.name),
  };
}

// WordPress isn't configured yet, callers should treat an empty result as
// "no posts available" rather than an error, so the page can render an
// honest empty state instead of crashing the build.
function isConfigured(): boolean {
  return Boolean(WORDPRESS_API_URL);
}

export async function getPosts({
  page = 1,
  perPage = 9,
}: {
  page?: number;
  perPage?: number;
} = {}): Promise<{ posts: WPPost[]; totalPages: number }> {
  if (!isConfigured()) return { posts: [], totalPages: 0 };

  const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return { posts: [], totalPages: 0 };

    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "0");
    const raw: RawWPPost[] = await res.json();
    return { posts: raw.map(mapPost), totalPages };
  } catch {
    return { posts: [], totalPages: 0 };
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  if (!isConfigured()) return null;

  const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const raw: RawWPPost[] = await res.json();
    return raw[0] ? mapPost(raw[0]) : null;
  } catch {
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!isConfigured()) return [];

  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=100&_fields=slug`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];

    const raw: { slug: string }[] = await res.json();
    return raw.map((p) => p.slug);
  } catch {
    return [];
  }
}
