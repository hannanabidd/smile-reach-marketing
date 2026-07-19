import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Request free Parent Pick-Up Tags for your school, covered entirely by a local sponsor.",
  alternates: { canonical: "/for-schools" },
};

export default function ForSchoolsPage() {
  return (
    <ComingSoon
      eyebrow="For Schools"
      heading="The school request form is on its way"
      body="Soon your school will be able to request free Parent Pick-Up Tags right from this page, covered entirely by a local sponsor."
    />
  );
}
