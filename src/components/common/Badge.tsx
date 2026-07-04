import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "primary" | "accent" | "neutral" | "danger";
  className?: string;
};

const tones = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-ink",
  neutral: "border border-line bg-white text-muted",
  danger: "bg-danger text-white"
};

export function Badge({ children, tone = "neutral", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-xl px-3 py-1 text-xs font-bold ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
