import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aixoniqtechnologies.com"),
  title: {
    default: "Aixoniq Technologies — Transforming Ideas into Intelligent Digital Solutions",
    template: "%s | Aixoniq Technologies",
  },
  description:
    "Aixoniq Technologies builds AI-powered software, secure digital infrastructure, ERP platforms, and SEO related services for startups, institutions, and enterprises.",
  keywords: [
    "Aixoniq Technologies",
    "AI development company",
    "custom software development",
    "cybersecurity services",
    "ERP solutions",
    "cloud solutions",
    "SEO services",
    "SEO related services",
    "SEO company India",
    "best SEO agency near me",
    "local SEO services",
    "on-page SEO services",
    "technical SEO audit",
    "digital marketing agency",
    "website SEO optimization company",
    "Gondia Maharashtra IT company",
  ],
  openGraph: {
    title: "Aixoniq Technologies — AI, Software & SEO Related Services",
    description:
      "AI, software, cybersecurity, cloud, and SEO related services engineered for growth.",
    url: "https://aixoniqtechnologies.com",
    siteName: "Aixoniq Technologies",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-void">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
