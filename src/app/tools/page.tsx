"use client";

import { useState } from "react";

type Tool = "claude" | "chatgpt" | "gemini";

interface ComparisonItem {
  category: string;
  claude: { score: number; note: string };
  chatgpt: { score: number; note: string };
  gemini: { score: number; note: string };
}

const comparisons: ComparisonItem[] = [
  {
    category: "長文寫作 / 複雜分析",
    claude: { score: 5, note: "架構嚴謹、指令遵從度高" },
    chatgpt: { score: 3, note: "容易冗長、有時跑題" },
    gemini: { score: 3, note: "中規中矩" },
  },
  {
    category: "程式碼生成",
    claude: { score: 5, note: "Claude Code 生態系強大" },
    chatgpt: { score: 4, note: "Code Interpreter 實用" },
    gemini: { score: 3, note: "持續進步中" },
  },
  {
    category: "即時搜尋 / 最新資訊",
    claude: { score: 3, note: "Research Mode 可用（Pro+）" },
    chatgpt: { score: 5, note: "內建搜尋、即時更新" },
    gemini: { score: 5, note: "Google 搜尋整合最強" },
  },
  {
    category: "圖片生成",
    claude: { score: 2, note: "不擅長" },
    chatgpt: { score: 4, note: "DALL-E / GPT-4o 整合" },
    gemini: { score: 5, note: "Imagen 3 + Veo 2 原生整合" },
  },
  {
    category: "Google 生態整合",
    claude: { score: 3, note: "Connectors 串接中" },
    chatgpt: { score: 3, note: "插件生態多" },
    gemini: { score: 5, note: "原生整合 Docs/Sheets/Meet" },
  },
  {
    category: "指令遵從度",
    claude: { score: 5, note: "會主動糾正你的錯誤" },
    chatgpt: { score: 2, note: "「附和地獄」— 容易附和用戶" },
    gemini: { score: 3, note: "中等" },
  },
  {
    category: "資安 / 隱私政策",
    claude: { score: 5, note: "不用對話資料訓練模型" },
    chatgpt: { score: 3, note: "預設會用對話訓練（可關）" },
    gemini: { score: 3, note: "Google 政策" },
  },
  {
    category: "自動化 / Agent",
    claude: { score: 5, note: "Co-work + Claude Code" },
    chatgpt: { score: 4, note: "GPTs + Actions" },
    gemini: { score: 3, note: "持續發展中" },
  },
];

const toolInfo: Record<Tool, { name: string; color: string; bg: string; scoreColor: string; scoreLightColor: string; price: string }> = {
  claude: {
    name: "Claude",
    color: "text-claude",
    bg: "bg-claude/10",
    scoreColor: "bg-claude",
    scoreLightColor: "bg-claude/20",
    price: "免費 / Pro $20 / Max $100-$200",
  },
  chatgpt: {
    name: "ChatGPT",
    color: "text-emerald-700",
    bg: "bg-emerald-100",
    scoreColor: "bg-emerald-500",
    scoreLightColor: "bg-emerald-200",
    price: "免費 / Plus $20 / Pro $200",
  },
  gemini: {
    name: "Gemini",
    color: "text-blue-700",
    bg: "bg-blue-100",
    scoreColor: "bg-blue-500",
    scoreLightColor: "bg-blue-200",
    price: "免費 / Advanced $20",
  },
};

function ClaudeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16.1 11.2L12.5 2.1c-.2-.5-.9-.5-1.1 0l-3.6 9.1c-.1.2 0 .5.2.6l4.5 2.6c.2.1.4.1.6 0l4.5-2.6c.3-.1.4-.4.2-.6z" fill="#d97757"/>
      <path d="M11.4 15.4L7 12.8c-.2-.1-.5 0-.6.2L4.1 19c-.2.5.2 1 .7.9l5.8-.6c.3 0 .5-.2.5-.5l.5-3.1c0-.1-.1-.3-.2-.3z" fill="#d97757"/>
      <path d="M12.6 15.4l4.4-2.6c.2-.1.5 0 .6.2l2.3 6c.2.5-.2 1-.7.9l-5.8-.6c-.3 0-.5-.2-.5-.5l-.5-3.1c0-.1.1-.3.2-.3z" fill="#d97757"/>
    </svg>
  );
}

function OpenAIIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}

function GeminiIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 24C12 18.838 8.162 14.573 3.166 13.876A11.241 11.241 0 0 1 0 12c1.266.176 2.473.53 3.6 1.04A12.02 12.02 0 0 1 12 0c0 5.162 3.838 9.427 8.834 10.124A11.241 11.241 0 0 1 24 12a12.142 12.142 0 0 1-3.6-1.04A12.02 12.02 0 0 1 12 24z" fill="url(#gemini-grad)"/>
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="12" x2="24" y2="12">
          <stop stopColor="#4285F4"/>
          <stop offset="0.5" stopColor="#9B72CB"/>
          <stop offset="1" stopColor="#D96570"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const toolIcons: Record<Tool, React.ReactNode> = {
  claude: <ClaudeIcon />,
  chatgpt: <OpenAIIcon />,
  gemini: <GeminiIcon />,
};

const scenarios = [
  {
    question: "我需要寫一份 10 頁的企劃書",
    answer: "claude" as Tool,
    reason: "Claude 在長文結構和指令遵從上表現最好",
    icon: "&#128221;",
  },
  {
    question: "我要查最新的產業報告數據",
    answer: "gemini" as Tool,
    reason: "Gemini Deep Research + Canvas 深度搜尋分析最完善",
    icon: "&#128200;",
  },
  {
    question: "我要整理 Google Sheets 裡的銷售數據",
    answer: "gemini" as Tool,
    reason: "Gemini 原生整合 Google 生態系",
    icon: "&#128202;",
  },
  {
    question: "我需要 AI 幫我操作瀏覽器自動填表",
    answer: "claude" as Tool,
    reason: "Claude Co-work 可以直接控制桌面",
    icon: "&#128421;",
  },
  {
    question: "我要做一張社群貼文配圖",
    answer: "gemini" as Tool,
    reason: "Gemini Imagen 3 原生圖片生成，品質與整合度最佳",
    icon: "&#127912;",
  },
  {
    question: "我擔心公司資料外洩",
    answer: "claude" as Tool,
    reason: "Claude 不會用對話資料訓練模型",
    icon: "&#128274;",
  },
];

export default function ToolsPage() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-2">
        <h1 className="text-3xl font-bold">AI 工具比較</h1>
        <span className="text-xs text-muted">資料更新：2026-03-24</span>
      </div>
      <p className="text-muted mb-10">
        不是比誰強，是比誰適合你的工作場景。96.8% 的學員同時使用多個 AI 工具。
      </p>

      {/* Price overview */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        {(["claude", "chatgpt", "gemini"] as Tool[]).map((tool) => (
          <div
            key={tool}
            className={`p-5 rounded-2xl border border-card-border bg-white`}
          >
            <div className="flex items-center gap-2 mb-3">
              {toolIcons[tool]}
              <span className={`text-sm font-semibold ${toolInfo[tool].color}`}>
                {toolInfo[tool].name}
              </span>
            </div>
            <p className="text-xs text-muted">{toolInfo[tool].price}</p>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="bg-white rounded-2xl border border-card-border overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left p-4 font-semibold">能力面向</th>
                <th className="p-4 font-semibold text-center">
                  <span className="inline-flex items-center gap-1.5 text-claude">
                    {toolIcons.claude} Claude
                  </span>
                </th>
                <th className="p-4 font-semibold text-center">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    {toolIcons.chatgpt} ChatGPT
                  </span>
                </th>
                <th className="p-4 font-semibold text-center">
                  <span className="inline-flex items-center gap-1.5 text-blue-700">
                    {toolIcons.gemini} Gemini
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item) => (
                <tr key={item.category} className="border-b border-card-border last:border-0 hover:bg-background/50">
                  <td className="p-4 font-medium">{item.category}</td>
                  <ScoreCell {...item.claude} tool="claude" />
                  <ScoreCell {...item.chatgpt} tool="chatgpt" />
                  <ScoreCell {...item.gemini} tool="gemini" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision scenarios */}
      <h2 className="text-2xl font-bold mb-6">情境選擇器</h2>
      <p className="text-muted text-sm mb-6">
        點選你的需求情境，看看推薦用哪個工具
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {scenarios.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveScenario(activeScenario === i ? null : i)}
            className={`text-left p-4 rounded-xl border transition-all ${
              activeScenario === i
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-card-border bg-white hover:border-primary/30"
            }`}
          >
            <p className="font-medium text-sm mb-2">
              <span dangerouslySetInnerHTML={{ __html: s.icon }} />{" "}
              {s.question}
            </p>
            {activeScenario === i && (
              <div className="mt-2 pt-2 border-t border-card-border">
                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${toolInfo[s.answer].bg} ${toolInfo[s.answer].color} mb-1`}>
                  {toolIcons[s.answer]}
                  {toolInfo[s.answer].name}
                </div>
                <p className="text-xs text-muted">{s.reason}</p>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function ScoreCell({
  score,
  note,
  tool,
}: {
  score: number;
  note: string;
  tool: Tool;
}) {
  return (
    <td className="p-4 text-center">
      <div className="flex justify-center gap-0.5 mb-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i <= score ? toolInfo[tool].scoreColor : toolInfo[tool].scoreLightColor
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-muted">{note}</p>
    </td>
  );
}
