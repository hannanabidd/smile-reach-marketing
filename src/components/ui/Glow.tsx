const COLOR_CLASSES = {
  gold: "bg-gold/20",
  blue: "bg-blue/25",
  navy: "bg-navy/20",
  sky: "bg-sky",
};

export default function Glow({
  color = "blue",
  className = "",
}: {
  color?: keyof typeof COLOR_CLASSES;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute h-80 w-80 rounded-full blur-3xl ${COLOR_CLASSES[color]} ${className}`}
    />
  );
}
