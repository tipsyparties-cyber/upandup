import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GsapProvider } from "@/lib/gsap-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "up+up | AI & Automation Agency",
    template: "%s | up+up",
  },
  description:
    "We use AI & automation to make businesses faster, stronger, and simpler. Bespoke automation systems built for real operations.",
  metadataBase: new URL("https://upandup.agency"),
  openGraph: {
    title: "up+up | AI & Automation Agency",
    description:
      "We use AI & automation to make businesses faster, stronger, and simpler.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "up+up | AI & Automation Agency",
    description:
      "We use AI & automation to make businesses faster, stronger, and simpler.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <GsapProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </GsapProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
