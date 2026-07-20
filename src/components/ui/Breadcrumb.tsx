import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Breadcrumb({
  current,
  parentLabel = "Products",
  parentHref = "/products",
}: {
  current: string;
  parentLabel?: string;
  parentHref?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: parentLabel,
        item: `https://smilereachmarketing.com${parentHref}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: current,
      },
    ],
  };

  return (
    <div className="bg-white pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container>
        <nav aria-label="Breadcrumb" className="text-sm text-charcoal/60">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={parentHref} className="hover:text-blue-text">
                {parentLabel}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-navy">
              {current}
            </li>
          </ol>
        </nav>
      </Container>
    </div>
  );
}
