import { NextResponse } from "next/server";

import {
  interestSchema,
  interestSubject,
  type InterestPayload,
} from "@/lib/interest";
import { site } from "@/lib/navigation";

export const runtime = "nodejs";

function composeBody(data: InterestPayload) {
  return [
    `Type: ${data.type}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.organisation ? `Organisation: ${data.organisation}` : null,
    data.topic ? `Topic: ${data.topic}` : null,
    data.eventSlug ? `Event: ${data.eventSlug}` : null,
    data.amountHint ? `Giving note: ${data.amountHint}` : null,
    "",
    data.message || "(No additional message)",
  ]
    .filter((line) => line !== null)
    .join("\n");
}

async function deliver(data: InterestPayload) {
  const subject = interestSubject(data);
  const text = composeBody(data);
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        subject,
        text,
        site: site.name,
        to: site.email,
      }),
    });
    if (!res.ok) {
      throw new Error(`Webhook failed (${res.status})`);
    }
    return;
  }

  const formSubmitRes = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _subject: subject,
        _template: "table",
        _captcha: "false",
        type: data.type,
        organisation: data.organisation || "",
        topic: data.topic || "",
        event: data.eventSlug || "",
        giving: data.amountHint || "",
        message: text,
      }),
    }
  );

  if (!formSubmitRes.ok) {
    const detail = await formSubmitRes.text().catch(() => "");
    throw new Error(`Form delivery failed (${formSubmitRes.status}) ${detail}`);
  }
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = interestSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Bot honeypot — pretends success
  if (data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  try {
    await deliver(data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[interest]", error);
    return NextResponse.json(
      {
        error:
          "We could not deliver your message automatically. Please email us directly.",
        email: site.email,
      },
      { status: 502 }
    );
  }
}
