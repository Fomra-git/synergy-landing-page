import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { BookingModalProvider } from "@/context/BookingModalContext";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synergy Healthcare & Wellness | Chennai's Trusted Physio Clinic",
  description:
    "Expert physiotherapy for pain relief, injury recovery and better mobility across 5 Chennai locations. 15,000+ patients healed, 14+ years of clinical experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans text-ink antialiased pb-16 lg:pb-0">
        <BookingModalProvider>
          {children}
          <BookingModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
