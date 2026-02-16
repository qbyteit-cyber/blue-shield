import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
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
  title: "ITIS-SECURE | Enterprise TISAX & CMMC Compliance",
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
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
