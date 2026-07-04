import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/common/Button";

type EmptyStateProps = {
  title: string;
  copy: string;
  actionLabel: string;
  actionHref: string;
};

export function EmptyState({ title, copy, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="mx-auto max-w-xl rounded-4xl border border-line bg-white p-10 text-center shadow-soft">
      <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary text-white shadow-glow">
        <ShoppingBag aria-hidden="true" className="size-6" />
      </div>
      <h2 className="font-display text-3xl font-bold text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">{copy}</p>
      <Button className="mt-6" href={actionHref}>
        {actionLabel}
      </Button>
    </div>
  );
}
