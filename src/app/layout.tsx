import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WistiaScripts from "@/components/WistiaScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "International Master Kushager Krishnater | Elite Chess Coach",
  description:
    "Train with International Master Kushager Krishnater — World's Youngest FIDE Trainer, Chief Openings Coach for Singapore National Team, and coach to Super Grandmasters including Arjun Erigaisi (World No.3) and Vidit Gujarathi. Book your free 15-minute intro call today.",
  keywords: [
    "chess coach",
    "online chess coaching",
    "Kushager Krishnater",
    "International Master Kushager Krishnater",
    "IM Kushager Krishnater",
    "FIDE Trainer",
    "chess lessons",
    "chess improvement",
    "Arjun Erigaisi coach",
    "Singapore chess",
    "chess training India",
  ],
  openGraph: {
    title: "International Master Kushager Krishnater | Elite Chess Coach",
    description:
      "World's Youngest FIDE Trainer. Coach to Super Grandmasters. Book your free 15-minute intro call.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-[#1c1917]">
        <WistiaScripts />
        {children}
      </body>
    </html>
  );
}
