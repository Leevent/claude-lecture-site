import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Part 5：Q&A + 下一步預告 — Claude 應用講座",
  description: "常見問題解答、課後作業、B 班 & 隱藏班預告。簡立峰 AI 應用四層次框架。",
  openGraph: {
    title: "Part 5：Q&A + 下一步預告",
    description: "常見問題解答、課後作業、B 班 & 隱藏班預告",
  },
};

export default function Part5Layout({ children }: { children: React.ReactNode }) {
  return children;
}
