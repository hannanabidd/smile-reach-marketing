import Image from "next/image";

const BG_CLASSES = {
  white: "bg-white",
  sky: "bg-sky",
};

export default function TagFlipImage({
  front,
  back,
  frontAlt,
  backAlt,
  aspect = "4 / 5",
  className = "",
  imageClassName = "object-contain p-6",
  sizes = "(min-width: 1024px) 45vw, 100vw",
  containerClassName = "",
  background = "white",
}: {
  front: string;
  back: string;
  frontAlt: string;
  backAlt: string;
  aspect?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  containerClassName?: string;
  background?: keyof typeof BG_CLASSES;
}) {
  const bgClass = BG_CLASSES[background];

  return (
    <div
      className={`group w-full [perspective:1500px] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className={`relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${containerClassName || ""}`}>
        <div className={`absolute inset-0 overflow-hidden rounded-card ${bgClass} [backface-visibility:hidden]`}>
          <Image src={front} alt={frontAlt} fill sizes={sizes} className={imageClassName} />
        </div>
        <div className={`absolute inset-0 overflow-hidden rounded-card ${bgClass} [backface-visibility:hidden] [transform:rotateY(180deg)] ${containerClassName || ""}`}>
          <Image src={back} alt={backAlt} fill sizes={sizes} className={imageClassName} />
        </div>
      </div>
    </div>
  );
}
