import { after } from "next/server";
import { evaluateSubmission, isRateLimited, type BookingSubmission } from "@/lib/spam";

export async function POST(request: Request) {
  let body: Partial<BookingSubmission>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, age, pain, branch, loadedAt } = body;
  if (!name || !phone || !age || !pain || !branch || typeof loadedAt !== "number") {
    return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // Rate limiting is real abuse prevention a legitimate user could
  // genuinely trigger (e.g. retrying), so it's the one check we
  // surface synchronously instead of silently dropping.
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const submission: BookingSubmission = {
    name,
    phone,
    age,
    pain,
    branch,
    company: body.company ?? "",
    loadedAt,
  };

  // Respond immediately so the form never hangs waiting on spam
  // checks, and so bots get no signal about whether they were caught.
  // The actual verification runs in the background after the response
  // has already been sent.
  after(() => {
    const verdict = evaluateSubmission(submission);

    if (verdict.isSpam) {
      console.warn("[booking] flagged as spam, discarding", {
        ip,
        reasons: verdict.reasons,
        name: submission.name,
      });
      return;
    }

    // Verified lead. No notification provider (email/SMS/CRM) is wired
    // up yet — this is the integration point for one.
    console.log("[booking] verified lead", {
      ip,
      name: submission.name,
      phone: submission.phone,
      branch: submission.branch,
    });
  });

  return Response.json({ ok: true });
}
