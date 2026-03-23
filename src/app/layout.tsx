import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude 應用講座 — 工作者該懂得 AI 溝通技巧",
  description:
    "從入門到上手：學會跟 AI 好好溝通的框架，讓 Claude 從偶爾問問變成每天幫你幹活的同事。Projects & Co-work 實戰教學。",
  openGraph: {
    title: "Claude 應用講座 — 工作者該懂得 AI 溝通技巧",
    description:
      "2 小時學會跟 AI 溝通的框架，含 Projects、Co-work 實戰教學",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSansTC.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
