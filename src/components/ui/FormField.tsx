import { type ReactNode } from "react";

export const fieldInputClass =
  "min-h-12 w-full rounded-[12px] border border-sky bg-gray px-4 text-[16px] text-charcoal outline-none transition-colors focus:border-blue";

export default function FormField({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-[15px] font-semibold text-navy">
        {label}
        {required ? (
          <span className="ml-1 font-normal text-charcoal/50">(required)</span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="mt-1.5 text-sm text-red-700"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
