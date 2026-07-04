"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/common/Button";
import { openWhatsApp } from "@/lib/whatsapp";

export function WhatsAppButton({
  message,
  label = "WhatsApp"
}: {
  message: string;
  label?: string;
}) {
  return (
    <Button type="button" onClick={() => openWhatsApp(message)}>
      <MessageCircle aria-hidden="true" className="size-4" />
      {label}
    </Button>
  );
}

