import Reveal from "@/components/motion/Reveal";

export default function ValueBanner() {
  return (
    <div className="relative flex h-18 items-center justify-center overflow-hidden bg-navy px-8 text-center">
      <Reveal className="w-full">
        <p className="text-[16px] font-bold text-white [@media(min-width:640px)]:text-[22px]">
          One School. <span className="text-gold">One Sponsor.</span>{" "}
          <span className="text-gold">Thousands</span> of Family Impressions.
        </p>
      </Reveal>
    </div>
  );
}
