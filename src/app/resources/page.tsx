import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Resources & Guides | Smile Reach Marketing",
  description:
    "Guides and articles on school sponsorship marketing for orthodontists, pediatric dentists, and family practices looking to reach local families.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <ComingSoon
      eyebrow="Resources"
      heading="Our blog is on its way"
      body="This is where Resources articles will live, written to help practices understand school sponsorship marketing and to bring in organic search traffic."
    />
  );
}
