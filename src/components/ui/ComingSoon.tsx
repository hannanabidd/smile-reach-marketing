import Container from "@/components/ui/Container";

export default function ComingSoon({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-[720px] text-center">
        <p className="text-eyebrow mb-3 text-blue-text">{eyebrow}</p>
        <h1 className="text-display-1 font-extrabold text-navy">{heading}</h1>
        <p className="text-body-lg mt-6 text-charcoal/90">{body}</p>
      </Container>
    </section>
  );
}
