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
    <svg width={size} height={size} viewBox="0 0 512 509.64" fill="#d97757">
      <path d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z"/>
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
    <svg width={size} height={size} viewBox="0 0 65 65" fill="none">
      <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#gemini-grad)"/>
      <defs>
        <linearGradient id="gemini-grad" x1="16" y1="48" x2="48" y2="16" gradientUnits="userSpaceOnUse">
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
