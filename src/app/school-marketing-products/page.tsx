import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "School Marketing Products",
  description:
    "Explore every product a Smile Reach sponsorship can put in front of local families, from Parent Pick-Up Tags to take-home folders.",
  alternates: { canonical: "/school-marketing-products" },
};

export default function SchoolMarketingProductsPage() {
  return (
    <ComingSoon
      eyebrow="School Marketing Products"
      heading="The full product catalog is on its way"
      body="Every sponsorship product, from Pick-Up Tags to water bottles and pencils, will be detailed here soon."
    />
  );
}
