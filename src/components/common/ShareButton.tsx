"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { shareProduct } from "@/lib/share";
import { trackEvent } from "@/lib/analytics";
import type { Product } from "@/types/product";

export function ShareButton({
  product,
  compact = false,
  className = ""
}: {
  product: Product;
  compact?: boolean;
  className?: string;
}) {
  const [message, setMessage] = useState("");

  async function handleShare() {
    await shareProduct(product);
    trackEvent("share", { method: "web_share_or_clipboard", content_type: "product", item_id: product.id });
    setMessage("Product link copied");
    window.setTimeout(() => setMessage(""), 2200);
  }

  return (
    <div className="relative">
      <Button
        type="button"
        variant="ghost"
        onClick={handleShare}
        aria-label={compact ? `Share ${product.name}` : undefined}
        className={`${compact ? "min-h-10 w-10 rounded-full px-0 py-0" : ""} ${className}`}
      >
        <Share2 aria-hidden="true" className="size-4" />
        {compact ? null : "Share"}
      </Button>
      {message ? (
        <span className="absolute right-0 top-full z-20 mt-2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
          {message}
        </span>
      ) : null}
    </div>
  );
}
