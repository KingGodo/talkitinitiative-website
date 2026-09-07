"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { InterestType } from "@/lib/interest";
import { site } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type InterestFormProps = {
  type: InterestType;
  topicDefault?: string;
  eventSlug?: string;
  topics?: readonly string[];
  showOrganisation?: boolean;
  showAmountHint?: boolean;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  className?: string;
  compact?: boolean;
};

export function InterestForm({
  type,
  topicDefault,
  eventSlug,
  topics,
  showOrganisation = false,
  showAmountHint = false,
  messageLabel = "Message",
  messagePlaceholder = "Tell us a little more…",
  submitLabel = "Send message",
  className,
  compact = false,
}: InterestFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      type,
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      topic: String(data.get("topic") ?? topicDefault ?? "").trim() || undefined,
      organisation: String(data.get("organisation") ?? "").trim() || undefined,
      amountHint: String(data.get("amountHint") ?? "").trim() || undefined,
      eventSlug: eventSlug || undefined,
      honeypot: String(data.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { error?: string; email?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          json.error ||
            `Something went wrong. Please email ${json.email || site.email}.`
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `Network error. Please email ${site.email} and we’ll get back to you.`
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative space-y-5", className)}
      noValidate={false}
    >
      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div className="space-y-2">
          <Label htmlFor={`${type}-name`} className="text-[#1F2937]">
            Name
          </Label>
          <Input
            id={`${type}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-11 rounded-xl border-black/10 bg-white px-3.5 text-[15px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${type}-email`} className="text-[#1F2937]">
            Email
          </Label>
          <Input
            id={`${type}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="h-11 rounded-xl border-black/10 bg-white px-3.5 text-[15px]"
          />
        </div>
      </div>

      {showOrganisation ? (
        <div className="space-y-2">
          <Label htmlFor={`${type}-org`} className="text-[#1F2937]">
            Organisation (optional)
          </Label>
          <Input
            id={`${type}-org`}
            name="organisation"
            autoComplete="organization"
            placeholder="School, NGO, hub…"
            className="h-11 rounded-xl border-black/10 bg-white px-3.5 text-[15px]"
          />
        </div>
      ) : null}

      {topics && topics.length > 0 ? (
        <div className="space-y-2">
          <Label htmlFor={`${type}-topic`} className="text-[#1F2937]">
            Topic
          </Label>
          <select
            id={`${type}-topic`}
            name="topic"
            required
            defaultValue={topicDefault || topics[0]}
            className="flex h-11 w-full rounded-xl border border-black/10 bg-white px-3.5 text-[15px] text-[#1F2937] outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {showAmountHint ? (
        <div className="space-y-2">
          <Label htmlFor={`${type}-amount`} className="text-[#1F2937]">
            Gift note (optional)
          </Label>
          <Input
            id={`${type}-amount`}
            name="amountHint"
            placeholder="One-time, monthly, or approximate amount"
            className="h-11 rounded-xl border-black/10 bg-white px-3.5 text-[15px]"
          />
        </div>
      ) : null}

      {type !== "newsletter" ? (
        <div className="space-y-2">
          <Label htmlFor={`${type}-message`} className="text-[#1F2937]">
            {messageLabel}
          </Label>
          <Textarea
            id={`${type}-message`}
            name="message"
            required={type === "contact" || type === "media"}
            rows={compact ? 3 : 5}
            placeholder={messagePlaceholder}
            className="min-h-[100px] rounded-xl border-black/10 bg-white px-3.5 py-3 text-[15px]"
          />
        </div>
      ) : (
        <input type="hidden" name="message" value="Please add me to updates." />
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <Label htmlFor={`${type}-company`}>Company</Label>
        <Input id={`${type}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-11 w-full rounded-full bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand/90 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : submitLabel}
      </Button>

      {status === "success" ? (
        <p className="text-[13px] leading-relaxed text-[#065782]">
          Thank you, your message was sent. We’ll reply to your email soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-[13px] leading-relaxed text-[#c41e3a]">
          {errorMessage}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
        </p>
      ) : null}
    </form>
  );
}
