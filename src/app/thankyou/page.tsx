import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Thank You | Synergy Healthcare & Wellness",
  description: "Your appointment request has been received. Our team will call you shortly to confirm your slot.",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;
  const firstName = name?.trim().split(" ")[0] || "there";

  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center bg-[#f1f7ff] px-4 py-12">
        <div className="w-full max-w-[440px] rounded-[20px] border border-line bg-white p-8 text-center shadow-lifted">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-accent/10 text-2xl">
            ✅
          </div>
          <h1 className="text-lg text-navy sm:text-xl">Thank you, {firstName}!</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Our team will call you shortly to confirm your appointment. For any queries, call us at{" "}
            <a href={`tel:${PHONE_TEL}`} className="font-semibold text-accent hover:text-accent-dark">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <Link href="/" className="mt-4 inline-block text-sm font-semibold text-accent hover:text-accent-dark">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
