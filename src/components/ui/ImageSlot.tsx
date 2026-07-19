const isDev = process.env.NODE_ENV !== "production";

export default function ImageSlot({
  label,
  aspect = "4 / 5",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: aspect }}
      className={`flex w-full items-center justify-center rounded-card ${
        isDev
          ? "border-2 border-dashed border-blue/50 bg-sky"
          : "bg-gray"
      } ${className}`}
    >
      {isDev ? (
        <p className="max-w-[80%] text-center text-sm font-medium text-blue-text">
          {label}
        </p>
      ) : null}
    </div>
  );
}
