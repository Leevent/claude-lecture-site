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
    chatgpt: { score: 5, note: "DALL-E 整合完善" },
    gemini: { score: 4, note: "Imagen 持續改進" },
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

const scenarios = [
  {
    question: "我需要寫一份 10 頁的企劃書",
    answer: "claude" as Tool,
    reason: "Claude 在長文結構和指令遵從上表現最好",
  },
  {
    question: "我要查最新的產業報告數據",
    answer: "chatgpt" as Tool,
    reason: "ChatGPT 的即時搜尋功能最完善",
  },
  {
    question: "我要整理 Google Sheets 裡的銷售數據",
    answer: "gemini" as Tool,
    reason: "Gemini 原生整合 Google 生態系",
  },
  {
    question: "我需要 AI 幫我操作瀏覽器自動填表",
    answer: "claude" as Tool,
    reason: "Claude Co-work 可以直接控制桌面",
  },
  {
    question: "我要做一張社群貼文配圖",
    answer: "chatgpt" as Tool,
    reason: "ChatGPT 整合 DALL-E 圖像生成",
  },
  {
    question: "我擔心公司資料外洩",
    answer: "claude" as Tool,
    reason: "Claude 不會用對話資料訓練模型",
  },
];

export default function ToolsPage() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">AI 工具比較</h1>
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
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${toolInfo[tool].bg} ${toolInfo[tool].color} mb-3`}>
              {toolInfo[tool].name}
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
                <th className="p-4 font-semibold text-center text-claude">Claude</th>
                <th className="p-4 font-semibold text-center text-emerald-700">ChatGPT</th>
                <th className="p-4 font-semibold text-center text-blue-700">Gemini</th>
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
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
            <p className="font-medium text-sm mb-2">{s.question}</p>
            {activeScenario === i && (
              <div className="mt-2 pt-2 border-t border-card-border">
                <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${toolInfo[s.answer].bg} ${toolInfo[s.answer].color} mb-1`}>
                  {toolInfo[s.answer].name}
                </div>
                <p className="text-xs text-muted">{s.reason}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Key insight */}
      <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
        <h3 className="font-bold mb-2 flex items-center gap-2">
          <span>&#128161;</span> LINE 5000+ 人社群的共識
        </h3>
        <p className="text-sm text-muted">
          Claude 架構嚴謹，適合寫作和分析；ChatGPT 適合搜尋和驗算；Gemini 適合 Google 生態整合。
          不是選最強的，是選最合的。大多數人最終會同時使用 2-3 個工具。
        </p>
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
