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
  title: "AI 해커톤 2026 - 참가 신청",
  description:
    "GPT x Claude x Gemini — AI 해커톤 2026 참가 신청 페이지. 48시간 동안 혁신적인 프로젝트를 만들어보세요.",
  openGraph: {
    title: "AI 해커톤 2026 - 참가 신청",
    description:
      "GPT x Claude x Gemini — AI 해커톤 2026 참가 신청 페이지. 48시간 동안 혁신적인 프로젝트를 만들어보세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
