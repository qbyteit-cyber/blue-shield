import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { CookieConsentComponent } from "@/components/privacy/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITIS-Secure | Enterprise TISAX & CMMC Compliance",
  description: "From zero to certified. One partner. Full compliance for Automotive & Defence.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-accent-coral focus:text-white focus:rounded-md focus:font-bold focus:shadow-xl transition-all"
        >
          Skip to content
        </a>
        <SchemaMarkup />
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <CookieConsentComponent />
      </body>
    </html>
  );
}
