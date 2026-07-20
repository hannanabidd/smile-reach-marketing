import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { type WPPost } from "@/lib/wordpress";

const isDev = process.env.NODE_ENV !== "production";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogGrid({
  posts,
  page,
  totalPages,
}: {
  posts: WPPost[];
  page: number;
  totalPages: number;
}) {
  if (posts.length === 0) {
    return (
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div
            className={`mx-auto max-w-190 rounded-card p-8 text-center ${
              isDev ? "border-2 border-dashed border-blue/50 bg-sky" : "bg-gray"
            }`}
          >
            {isDev ? (
              <>
                <p className="text-sm font-semibold text-blue-text">
                  No posts available
                </p>
                <p className="mt-2 text-sm text-charcoal/70">
                  Either <code>WORDPRESS_API_URL</code> isn&apos;t set yet, or
                  the WordPress site at that URL has no published posts. See{" "}
                  <code>src/lib/wordpress.ts</code>.
                </p>
              </>
            ) : (
              <p className="text-body text-charcoal/90">
                New articles are on the way. Check back soon.
              </p>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <Link
                href={`/resources/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-sky bg-white transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/50"
              >
                <div className="relative aspect-4/3 w-full bg-sky">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt || post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-eyebrow text-blue-text">
                    {formatDate(post.date)}
                  </p>
                  <h3 className="text-display-3 mt-2 font-bold text-navy">
                    {post.title}
                  </h3>
                  <p className="text-body mt-2 line-clamp-3 flex-1 text-charcoal/90">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-[14px] font-semibold text-blue-text">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {totalPages > 1 ? (
          <div className="mt-12 flex justify-center gap-4">
            {page > 1 ? (
              <Button href={`/resources?page=${page - 1}`} variant="ghost">
                &larr; Newer
              </Button>
            ) : null}
            {page < totalPages ? (
              <Button href={`/resources?page=${page + 1}`} variant="ghost">
                Older &rarr;
              </Button>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
