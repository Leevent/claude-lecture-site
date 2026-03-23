import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 工具比較 — Claude vs ChatGPT vs Gemini — Claude 應用講座",
  description: "8 大維度比較 Claude、ChatGPT、Gemini。根據你的使用情境選擇最適合的 AI 工具。",
  openGraph: {
    title: "AI 工具比較 — Claude vs ChatGPT vs Gemini",
    description: "8 大維度比較，根據使用情境選擇最適合的 AI 工具",
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
