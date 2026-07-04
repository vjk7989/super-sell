import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
};

export function BentoCard({ children, className = "" }: BentoCardProps) {
  return <div className={`rounded-4xl border border-line p-6 shadow-soft ${className}`}>{children}</div>;
}
