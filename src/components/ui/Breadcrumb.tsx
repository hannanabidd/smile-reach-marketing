import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Breadcrumb({ current }: { current: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Products",
        item: "https://smilereachmarketing.com/products",
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
              <Link href="/products" className="hover:text-blue-text">
                Products
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
