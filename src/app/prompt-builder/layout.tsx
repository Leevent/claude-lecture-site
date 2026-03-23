import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompt 建構器 — 五元素框架 — Claude 應用講座",
  description: "用 Role / Task / Context / Format / Quality 五元素框架即時產生專業 Prompt。含進階技巧：Chain of Thought、Few-shot Learning。",
  openGraph: {
    title: "Prompt 建構器 — 五元素框架即時產生專業 Prompt",
    description: "互動式工具，幫你用五元素框架組合出更好的 AI 提示詞",
  },
};

export default function PromptBuilderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
