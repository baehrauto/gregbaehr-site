import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greg Baehr — Fractional CAIO",
  description:
    "Fractional Chief AI Officer for operating companies. AI strategy, implementation, and governance without hiring a full-time exec.",
  openGraph: {
    title: "Greg Baehr — Fractional CAIO",
    description:
      "Fractional Chief AI Officer for operating companies between $10M and $100M in revenue.",
    url: "https://gregbaehr.com",
    siteName: "Greg Baehr",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        {/* Hidden static form for Netlify Forms bot detection during build */}
        <form name="intake" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="email" name="email" />
          <input type="text" name="domain" />
          <input type="text" name="role" />
          <input type="text" name="revenue" />
          <input type="text" name="timeline" />
          <textarea name="problem"></textarea>
          <input type="text" name="source" />
          <input type="text" name="bot-field" />
        </form>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
