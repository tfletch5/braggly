import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braggly - Your Digital Growth Partner",
  description:
    "Turn your marketing into a growth system with digital marketing, custom software, and automation.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "small business marketing",
    "AI agency",
    "digital marketing",
  ],
  authors: [{ name: "Braggly" }],
  creator: "Braggly",
  publisher: "Braggly",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.braggly.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.braggly.com",
    title: "Braggly - Your Digital Growth Partner",
    description:
      "Turn your marketing into a growth system with marketing, software, and automation.",
    siteName: "Braggly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braggly - Your Digital Growth Partner",
    description:
      "Digital marketing, custom software, and automation for business growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
