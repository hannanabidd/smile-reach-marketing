import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllPostSlugs, getPostBySlug } from "@/lib/wordpress";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const description = post.excerpt.slice(0, 155);

  return {
    title: `${post.title} | Smile Reach Marketing`,
    description,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: post.featuredImage ? { images: [post.featuredImage.url] } : undefined,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ResourcePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    image: post.featuredImage?.url,
    publisher: {
      "@type": "Organization",
      name: "Smile Reach Marketing",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb current={post.title} parentLabel="Resources" parentHref="/resources" />

      <article className="bg-white py-8 sm:py-12">
        <Container>
          <Reveal className="mx-auto max-w-190">
            {post.categories.length ? (
              <p className="text-eyebrow text-blue-text">
                {post.categories.join(" · ")}
              </p>
            ) : null}
            <h1 className="text-display-1 mt-3 font-extrabold text-navy">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-charcoal/60">
              {formatDate(post.date)}
            </p>

            {post.featuredImage ? (
              <div className="relative mt-8 aspect-16/9 w-full overflow-hidden rounded-card">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  fill
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : null}

            <div
              className="wp-content mt-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>
        </Container>
      </article>

      <FinalCTA
        heading="See what community marketing could do near you"
        body="Tell us where you practise and we will show you which local schools are looking for a sponsor."
      />
    </>
  );
}
