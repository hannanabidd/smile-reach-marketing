import { type ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-card border border-sky bg-white p-8 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/50 ${className}`}
    >
      {children}
    </div>
  );
}
