import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaintSAL™ - AI-Powered Real Estate Brokerage",
  description:
    "Transform your real estate investments with AI-driven automation, advanced analytics, and seamless CRM integration. Join the future of property investment with SaintSAL™.",
  keywords:
    "real estate investment, AI-powered analytics, CRM integration, property investment, BRRRR strategy, fix and flip, wholesale real estate, investment sandbox",
  authors: [{ name: "Saint Vision Group" }],
  openGraph: {
    title: "SaintSAL™ - AI-Powered Real Estate Brokerage",
    description:
      "Transform your real estate investments with AI-driven automation, advanced analytics, and seamless CRM integration.",
    url: "https://saintvisiongroup.com",
    siteName: "SaintSAL™",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SaintSAL™ - AI-Powered Real Estate Brokerage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaintSAL™ - AI-Powered Real Estate Brokerage",
    description:
      "Transform your real estate investments with AI-driven automation, advanced analytics, and seamless CRM integration.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
