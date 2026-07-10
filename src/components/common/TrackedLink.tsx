"use client";

import type { ReactNode } from "react";
import { trackEvent, type AnalyticsParams } from "@/lib/analytics";

export function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  children,
  target
}: {
  href: string;
  eventName: string;
  eventParams?: AnalyticsParams;
  className?: string;
  children: ReactNode;
  target?: "_blank";
}) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </a>
  );
}
