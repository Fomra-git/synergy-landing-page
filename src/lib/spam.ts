const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 3; // max submissions per IP per window

const MIN_SUBMIT_MS = 1500; // faster than this and no human filled the form
const MAX_SUBMIT_MS = 2 * 60 * 60 * 1000; // stale/replayed session

const URL_PATTERN = /https?:\/\/|www\./i;
const REPEATED_CHAR_PATTERN = /(.)\1{5,}/;

// In-memory, per-server-instance store. Resets on restart/cold start —
// fine for a single small landing page's traffic. Swap for Redis/Upstash
// (or similar) if this ever needs to survive across instances.
const submissionsByIp = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export type BookingSubmission = {
  name: string;
  countryCode: string;
  phone: string;
  age: string;
  pain: string;
  branch: string;
  company: string; // honeypot — real users never see or fill this field
  loadedAt: number; // Date.now() when the form first rendered client-side
};

export type SpamVerdict = {
  isSpam: boolean;
  reasons: string[];
};

export function evaluateSubmission(submission: BookingSubmission): SpamVerdict {
  const reasons: string[] = [];
  const elapsed = Date.now() - submission.loadedAt;

  if (submission.company.trim().length > 0) reasons.push("honeypot field filled");
  if (elapsed < MIN_SUBMIT_MS) reasons.push(`submitted too fast (${elapsed}ms)`);
  if (elapsed > MAX_SUBMIT_MS) reasons.push("stale form session");
  if (!/^\d{10}$/.test(submission.phone)) reasons.push("invalid phone format");
  if (URL_PATTERN.test(submission.name) || URL_PATTERN.test(submission.pain)) {
    reasons.push("URL in free-text field");
  }
  if (REPEATED_CHAR_PATTERN.test(submission.name)) reasons.push("repeated-character name");

  return { isSpam: reasons.length > 0, reasons };
}
