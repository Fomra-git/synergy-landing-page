import type { Metadata } from "next";
import localFont from "next/font/local";
import { BookingModalProvider } from "@/context/BookingModalContext";
import BookingModal from "@/components/BookingModal";
import ImageRecovery from "@/components/ImageRecovery";
import "./globals.css";

// Self-hosted (rather than next/font/google) so the build doesn't depend on
// reaching Google's font CDN — a Vercel build failed when that fetch got
// blocked mid-build. Both files are the actual variable-weight fonts Google
// serves (latin subset), so every weight in use (400–800 for Inter, 500–700
// for Fraunces) still renders correctly from the one file each.
const fraunces = localFont({
  src: "../fonts/fraunces-variable.woff2",
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-variable.woff2",
  variable: "--font-inter",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRTPGN8F');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans text-ink antialiased pb-16 lg:pb-0">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRTPGN8F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <BookingModalProvider>
          {children}
          <BookingModal />
        </BookingModalProvider>
        <ImageRecovery />
      </body>
    </html>
  );
}
