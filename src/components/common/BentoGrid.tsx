import type { ReactNode } from "react";

export function BentoGrid({ children }: { children: ReactNode }) {
  return <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{children}</div>;
}
