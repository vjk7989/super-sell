import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode;
};

const variants = {
  primary: "bg-primary text-white shadow-glow hover:-translate-y-0.5 hover:bg-primary/95",
  secondary: "bg-ink text-white shadow-soft hover:-translate-y-0.5",
  ghost: "border border-line bg-white text-ink hover:border-primary/35 hover:bg-panel/70",
  danger: "bg-danger text-white shadow-soft hover:-translate-y-0.5"
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold transition duration-300 disabled:pointer-events-none disabled:opacity-45 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
