import type { BookingSubmission } from "./spam";

// Comma-separated list of URLs; each receives the same JSON payload via
// POST whenever a booking is verified. Lets the same submission fan out
// to Google Sheets (via an Apps Script Web App URL), Pabbly Connect,
// Zapier, Make, n8n, etc. — wiring up a new platform is just adding its
// webhook URL here, no code changes.
function getWebhookUrls(): string[] {
  const raw = process.env.BOOKING_WEBHOOK_URLS || "";
  return raw
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);
}

export async function sendBookingWebhooks(submission: BookingSubmission) {
  const urls = getWebhookUrls();
  if (urls.length === 0) return;

  const payload = {
    name: submission.name,
    phone: `${submission.countryCode}${submission.phone}`,
    countryCode: submission.countryCode,
    age: submission.age,
    painArea: submission.pain,
    branch: submission.branch,
    submittedAt: new Date().toISOString(),
    source: "Synergy Landing Page",
  };

  await Promise.allSettled(
    urls.map(async (url) => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          console.error(`[webhook] ${url} responded with ${res.status}`);
        }
      } catch (err) {
        console.error(`[webhook] failed to reach ${url}`, err);
      }
    }),
  );
}
