import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Breadcrumb({
  current,
  parentLabel = "Products",
  parentHref = "/products",
  light = false,
}: {
  current: string;
  parentLabel?: string;
  parentHref?: string;
  /** Eyebrow-styled white text, no strip or container. Replaces the eyebrow in a photo hero. */
  light?: boolean;
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

  const nav = light ? (
    <nav aria-label="Breadcrumb" className="text-eyebrow text-white">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          {/* Padding with negative margin grows the tap target without moving the layout */}
          <Link
            href={parentHref}
            className="-my-3 inline-flex items-center gap-1 py-3 underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            {/* On phones the trail collapses to a back link; the page name is the H1 right below */}
            <ChevronLeft size={16} strokeWidth={2} aria-hidden className="sm:hidden" />
            {parentLabel}
          </Link>
        </li>
        <li aria-hidden="true" className="hidden sm:block">/</li>
        <li aria-current="page" className="hidden sm:block">{current}</li>
      </ol>
    </nav>
  ) : (
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
  );

  return (
    <div className={light ? "" : "bg-white pt-8"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {light ? nav : <Container>{nav}</Container>}
    </div>
  );
}
