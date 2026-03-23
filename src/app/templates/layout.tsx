import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project 模板庫 — Claude 應用講座",
  description: "10 個可直接複製到 Claude Projects 的 Custom Instructions 模板。社群小編、會議紀錄、Email 撰寫、學習筆記等實用模板。",
  openGraph: {
    title: "Project 模板庫 — 10 個可直接複製的模板",
    description: "社群小編、會議紀錄、Email 撰寫、學習筆記等實用 Claude Project 模板",
  },
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
