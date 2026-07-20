import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ValueBanner from "@/components/layout/ValueBanner";
import BlogGrid from "@/components/sections/BlogGrid";
import { getPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Resources & Guides | Smile Reach Marketing",
  description:
    "Guides and articles on school sponsorship marketing for orthodontists, pediatric dentists, and family practices looking to reach local families.",
  alternates: { canonical: "/resources" },
};

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const { posts, totalPages } = await getPosts({ page, perPage: 9 });

  return (
    <>
      <PageHero
        eyebrow="Resources"
        heading="Guides for school sponsorship marketing"
        body="Articles on school sponsorship, community marketing, and reaching local families, written for orthodontists, pediatric dentists, and family practices."
      />
      <ValueBanner />
      <BlogGrid posts={posts} page={page} totalPages={totalPages} />
    </>
  );
}
