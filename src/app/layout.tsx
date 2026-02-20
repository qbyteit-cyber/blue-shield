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
  metadataBase: new URL("https://itis-secure.com"),
  title: {
    default: "ITIS-Secure | Enterprise TISAX® & ISO 27001 Compliance",
    template: "%s | ITIS-Secure",
  },
  description:
    "Expert TISAX®, ISO 27001, CMMC 2.0 and NIS2 compliance consultancy. We take automotive and defence suppliers from zero security posture to full certification. 100% first-time pass rate.",
  keywords: [
    "TISAX certification",
    "ISO 27001 consultant",
    "CMMC 2.0 compliance",
    "automotive cybersecurity",
    "NIS2 compliance Europe",
    "TISAX AL3",
    "information security consulting",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg?v=3",
    shortcut: "/favicon.svg?v=3",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "ITIS-Secure",
    images: [
      {
        url: "/api/og?title=Enterprise+TISAX%C2%AE+%26+ISO+27001+Compliance",
        width: 1200,
        height: 630,
        alt: "ITIS-Secure — Enterprise TISAX® & ISO 27001 Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=Enterprise+TISAX%C2%AE+%26+ISO+27001+Compliance"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
