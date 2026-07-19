export default function StatChip({
  value,
  label,
  unverified = false,
}: {
  value: string;
  label: string;
  unverified?: boolean;
}) {
  return (
    <div className="rounded-card border border-sky bg-white px-5 py-4">
      <p className="text-[32px] font-extrabold leading-none text-gold">
        {value}
        {unverified ? <span className="ml-1 align-top text-xs text-charcoal/40">*</span> : null}
      </p>
      <p className="mt-2 text-sm text-charcoal/80">{label}</p>
    </div>
  );
}
