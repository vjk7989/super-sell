"use client";

import { Search } from "lucide-react";

export function ProductSearch({
  value,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative block">
      <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
      <span className="sr-only">Search products</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products"
        className="focus-ring h-12 w-full rounded-2xl border border-line bg-bg px-12 text-sm font-semibold text-ink placeholder:text-muted"
      />
    </label>
  );
}
