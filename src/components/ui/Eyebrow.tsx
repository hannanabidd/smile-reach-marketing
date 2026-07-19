export default function Eyebrow({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p
      className={`text-eyebrow mb-3 ${light ? "text-white/80" : "text-blue-text"}`}
    >
      {children}
    </p>
  );
}
