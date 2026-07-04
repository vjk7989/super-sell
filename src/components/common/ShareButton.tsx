"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { shareProduct } from "@/lib/share";
import type { Product } from "@/types/product";

export function ShareButton({ product }: { product: Product }) {
  const [message, setMessage] = useState("");

  async function handleShare() {
    await shareProduct(product);
    setMessage("Product link copied");
    window.setTimeout(() => setMessage(""), 2200);
  }

  return (
    <div className="relative">
      <Button type="button" variant="ghost" onClick={handleShare}>
        <Share2 aria-hidden="true" className="size-4" />
        Share
      </Button>
      {message ? (
        <span className="absolute left-0 top-full mt-2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
          {message}
        </span>
      ) : null}
    </div>
  );
}

