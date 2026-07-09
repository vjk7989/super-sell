"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";

export function ContactClient() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-4xl border border-line bg-bg p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="font-display text-3xl font-bold">Send a message</h2>
      <div className="mt-6 grid gap-4">
        {["Name", "Phone", "Email"].map((label) => (
          <label key={label} className="grid gap-2 text-sm font-semibold">
            {label}
            <input className="focus-ring h-12 rounded-2xl border border-line bg-bg px-4 font-normal" required={label !== "Email"} type={label === "Email" ? "email" : "text"} />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold">
          Message
          <textarea className="focus-ring min-h-32 rounded-2xl border border-line bg-bg p-4 font-normal" required />
        </label>
      </div>
      <Button className="mt-5" type="submit">
        Submit
      </Button>
      {sent ? (
        <p className="mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-sm font-semibold text-ink">
          Thanks for contacting us. We will get back to you soon.
        </p>
      ) : null}
    </form>
  );
}
