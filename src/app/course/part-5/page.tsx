"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "費用多少、多快燒完、有沒有免費版可以先試",
    a: "免費版可以體驗基本功能，Pro $20/月 省著用 Sonnet 足夠日常工作。Opus 留給重要任務，不會一下就燒完。",
  },
  {
    q: "Windows 能不能用 Co-work？",
    a: "目前 Co-work 僅支援 macOS + Pro/Team 以上訂閱。Windows 用戶可以先用 Projects + Artifacts 建立工作流，等官方支援後再升級。",
  },
  {
    q: "公司資料上雲安不安全",
    a: "Claude 不會用對話資料訓練模型（與 ChatGPT 不同）。Pro 版有更嚴格的資料政策。但建議敏感資料仍應脫敏後再給 AI。",
  },
  {
    q: "Claude 和 ChatGPT 到底哪個比較好用",
    a: "不是比誰強，是比誰適合。長文/分析/指令遵從 → Claude；即時搜尋/圖片生成 → ChatGPT；Google 生態 → Gemini。96.8% 的人同時用多個工具。",
  },
  {
    q: "Project 的 Memory / Instructions / Files 各放什麼",
    a: "Instructions 放系統指令和品牌語氣；Files 放參考資料（PDF、文件）；Memory 讓 Claude 自動記住對話中的重要資訊。",
  },
  {
    q: "Co-work 和 Claude Code 有什麼不一樣",
    a: "Co-work = 不用寫程式的桌面助手，操作瀏覽器和檔案；Claude Code = 開發者的終端機工具，用來建造軟體。非技術背景先從 Co-work 開始。",
  },
];

export default function Part5Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-claude transition-colors mb-8"
      >
        &#8592; 回到課程首頁
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">&#128640;</span>
        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
          Part 5
        </span>
        <span className="text-sm text-muted">10 min</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">Q&A + 下一步預告</h1>
      <p className="text-muted mb-10">
        開放提問、課後作業、你的 Claude 還可以做到什麼
      </p>

      <div className="space-y-8">
        {/* 5-1 Q&A */}
        <div className="bg-white rounded-2xl border border-card-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center">
              5-1
            </span>
            <h2 className="text-lg font-bold">開放提問</h2>
          </div>
          <p className="text-sm text-muted mb-4">
            課堂中的任何問題，都可以在這個環節提出來討論。
          </p>
          <p className="text-sm font-medium mb-3">
            &#128172; 最可能被問到的 6 題
          </p>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left"
              >
                <div
                  className={`rounded-xl border transition-all ${
                    openIndex === i
                      ? "border-claude/30 bg-claude/5 shadow-sm"
                      : "border-card-border bg-background hover:border-accent/30"
                  }`}
                >
                  <div className="flex items-center gap-2 p-3">
                    <span className="text-accent font-bold text-sm flex-shrink-0">
                      Q{i + 1}
                    </span>
                    <p className="text-sm font-medium flex-1">{faq.q}</p>
                    <span
                      className={`text-muted transition-transform flex-shrink-0 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </div>
                  {openIndex === i && (
                    <div className="px-3 pb-3 pt-0">
                      <div className="border-t border-card-border pt-3">
                        <p className="text-sm text-foreground/70">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 5-2 Homework */}
        <div className="bg-white rounded-2xl border border-claude/30 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center">
              5-2
            </span>
            <h2 className="text-lg font-bold">課後作業</h2>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-claude/10 text-claude text-xs font-medium">
              必做
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-claude/5 border border-claude/20 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-claude text-white text-sm font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <p className="text-sm font-medium">
                  建立一個屬於你的 Project
                </p>
                <p className="text-xs text-muted mt-0.5">
                  用 Part 3 教的方法，建立一個你工作中最常用的 Project，設定好
                  Instructions 和參考文件
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-claude/5 border border-claude/20 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-claude text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="text-sm font-medium">
                  用五元素框架重寫你最常用的 Prompt
                </p>
                <p className="text-xs text-muted mt-0.5">
                  把你平常丟給 Claude 的問題，用 Role + Task + Context + Format
                  + Quality 重新組織一次，比較前後差異
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary-dark rounded-xl text-sm font-medium hover:bg-accent-light transition-colors"
            >
              &#128196; 查看課後作業模板庫
            </Link>
          </div>
        </div>

        {/* 5-3 Next Level */}
        <div className="bg-white rounded-2xl border border-card-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center">
              5-3
            </span>
            <h2 className="text-lg font-bold">
              Next Level Preview — 你的 Claude 還可以做到什麼
            </h2>
          </div>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-blue/5 border border-blue/20 rounded-xl">
              <p className="text-sm font-bold text-blue mb-1">
                &#128270; Research Mode
              </p>
              <p className="text-xs text-muted">
                丟一個問題，Claude 花 5-45
                分鐘搜尋上百來源、交叉比對、產出有引用的研究報告（Pro
                以上功能）
              </p>
            </div>
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl">
              <p className="text-sm font-bold text-accent mb-1">
                &#9889; Skills + MCP（B 班內容）
              </p>
              <p className="text-xs text-muted">
                Skill：同一件事手動做第三次，就值得做成 Skill —
                一鍵執行重複流程
              </p>
              <p className="text-xs text-muted mt-1">
                MCP = 通用遙控器，讓 Claude 一次連接所有 App（Connectors 就是
                MCP 的使用者友善版）
              </p>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-sm font-bold mb-1">
                &#128187; Vibe Coding（隱藏班內容）
              </p>
              <p className="text-xs text-muted">
                用自然語言讓 Claude Code 生成完整互動網頁 — 30 秒 Demo
              </p>
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-4">
            <p className="text-sm font-medium text-accent mb-2">
              &#127891; 簡立峰框架 — AI 應用四層次
            </p>
            <p className="text-xs text-muted mb-3">
              前 Google 台灣董事總經理
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { level: "問", label: "Ask", current: false },
                { level: "用", label: "Use", current: true },
                { level: "管", label: "Manage", current: true },
                { level: "造", label: "Build", current: false },
              ].map((l) => (
                <div
                  key={l.level}
                  className={`text-center p-2 rounded-lg ${
                    l.current
                      ? "bg-claude text-white"
                      : "bg-background text-muted"
                  }`}
                >
                  <p className="text-lg font-bold">{l.level}</p>
                  <p className="text-xs">{l.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-3 text-center">
              今天教你從「問」升級到「用」和「管」，B 班教你開始「造」
            </p>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4">
            <p className="text-sm italic text-foreground/70">
              「A 班教你跟 Claude 溝通，B 班教你設計 Claude 的工作方式」
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 pt-6 border-t border-card-border">
        <Link
          href="/course/part-4"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &#8592; Part 4：Co-work 初體驗
        </Link>
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary-dark rounded-xl text-sm font-medium hover:bg-accent-light transition-colors"
        >
          查看學習資源 &#8594;
        </Link>
      </div>
    </div>
  );
}
