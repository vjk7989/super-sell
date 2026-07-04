import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  copy?: string;
  action?: ReactNode;
};

export function SectionHeading({ title, copy, action }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold leading-[1.02] tracking-normal text-ink md:text-5xl [text-wrap:balance]">
          {title}
        </h2>
        {copy ? <p className="mt-3 max-w-xl text-base leading-7 text-muted [text-wrap:pretty]">{copy}</p> : null}
      </div>
      {action}
    </div>
  );
}
