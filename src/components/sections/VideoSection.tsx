import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function VideoSection() {
  return (
    <section className="bg-gray py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-220">
          <div className="overflow-hidden rounded-card border border-sky bg-navy">
            <video
              src="/Images/SRM-school-video.mov"
              controls
              preload="metadata"
              className="aspect-video w-full"
            >
              Your browser does not support this video. You can{" "}
              <a href="/Images/SRM-school-video.mov" className="underline">
                download it here
              </a>
              .
            </video>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
