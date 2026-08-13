import type { BookingSubmission } from "./spam";

const ACCOUNTS_DOMAIN = process.env.ZOHO_ACCOUNTS_DOMAIN || "https://accounts.zoho.in";
const API_DOMAIN = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.in";
const LEAD_SOURCE = "Google Landing Page";
const DEFAULT_COMPANY = "Synergy Healthcare & Wellness";

// Access tokens last 1 hour; cached in-memory per server instance and
// refreshed a little early to avoid racing the actual expiry.
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) return cachedToken.value;

  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Zoho credentials are not configured (ZOHO_CLIENT_ID/ZOHO_CLIENT_SECRET/ZOHO_REFRESH_TOKEN)");
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
  });

  const res = await fetch(`${ACCOUNTS_DOMAIN}/oauth/v2/token?${params.toString()}`, { method: "POST" });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Zoho token refresh failed: ${JSON.stringify(data)}`);
  }

  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return cachedToken.value;
}

function splitName(fullName: string) {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return { firstName: "", lastName: trimmed };
  return { firstName: trimmed.slice(0, spaceIndex), lastName: trimmed.slice(spaceIndex + 1) };
}

export async function createZohoLead(submission: BookingSubmission) {
  const token = await getAccessToken();
  const { firstName, lastName } = splitName(submission.name);

  const res = await fetch(`${API_DOMAIN}/crm/v2/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          Last_Name: lastName || firstName || "Website Lead",
          First_Name: firstName || undefined,
          Phone: `${submission.countryCode}${submission.phone}`,
          Company: DEFAULT_COMPANY,
          Lead_Source: LEAD_SOURCE,
          "Area Of Pain": submission.pain,
          "Branch Preferred": submission.branch,
          Description: `Age: ${submission.age}`,
        },
      ],
    }),
  });

  const result = await res.json();
  const entry = result?.data?.[0];
  if (!res.ok || entry?.status !== "success") {
    throw new Error(`Zoho lead creation failed: ${JSON.stringify(result)}`);
  }

  return entry;
}
