import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridgeview Consulting | Student-Led Market Intelligence",
  description:
    "Ridgeview Consulting delivers competitive intelligence and market research for B2B companies. 50+ student analysts across multiple colleges.",
  keywords: [
    "market research",
    "competitive intelligence",
    "B2B research",
    "student consulting",
    "due diligence",
    "market entry analysis",
  ],
  openGraph: {
    title: "Ridgeview Consulting",
    description:
      "Student-led market intelligence and competitive research for B2B companies.",
    url: "https://ridgeviewconsulting.in",
    siteName: "Ridgeview Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
