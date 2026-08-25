import type { BookingSubmission } from "@/lib/spam";
import { createZohoLead } from "@/lib/zoho";
import { sendBookingWebhooks } from "@/lib/webhook";

// Inbound integration endpoint — lets another system (a partner CRM, a
// separate intake form, an automation platform) push a lead into ours
// the same way our own booking form does. Auth is a single shared
// secret rather than the browser-facing spam checks in /api/booking
// (loadedAt timing, honeypot field), since those don't apply to a
// server-to-server call. The secret is required to be configured —
// if it's unset, the endpoint refuses all traffic rather than silently
// accepting unauthenticated requests.
export async function POST(request: Request) {
  const expectedSecret = process.env.INBOUND_WEBHOOK_SECRET;
  if (!expectedSecret) {
    return Response.json({ ok: false, error: "Inbound webhook is not configured." }, { status: 503 });
  }

  if (request.headers.get("x-webhook-secret") !== expectedSecret) {
    return Response.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  let body: Partial<Record<keyof BookingSubmission, string>>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, countryCode, phone, age, pain, branch } = body;
  if (!name || !countryCode || !phone || !age || !pain || !branch) {
    return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const submission: BookingSubmission = {
    name,
    countryCode,
    phone,
    age,
    pain,
    branch,
    company: "",
    loadedAt: Date.now(),
  };

  try {
    const lead = await createZohoLead(submission);
    await sendBookingWebhooks(submission);
    return Response.json({ ok: true, leadId: lead?.details?.id ?? null });
  } catch (err) {
    console.error("[inbound-webhook] failed to create lead", err);
    return Response.json({ ok: false, error: "Failed to create lead." }, { status: 502 });
  }
}
