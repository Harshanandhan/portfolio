import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Harshanandhan Reddy — AI/ML · Cybersecurity · Blockchain",
  description: "Cybersecurity Analyst specializing in AI/ML-enhanced security and blockchain auditing. Building intelligent systems that secure the future.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
