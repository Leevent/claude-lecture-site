import Link from "next/link";

const sections = [
  {
    id: "1-1",
    title: "Claude 到底是什麼？",
    points: [
      "Anthropic 與 Claude 的定位 — 不是 Google、不是 OpenAI，是一家專注 AI 安全的公司",
      "Claude 的核心理念：有用、誠實、無害（Helpful, Honest, Harmless）",
    ],
  },
  {
    id: "1-2",
    title: "Claude vs ChatGPT vs Gemini — 決策框架",
    highlight: true,
    points: [
      "不是比誰強，是比誰適合你的工作場景",
      "長文寫作 / 複雜分析 / 程式碼 / 指令遵從 → Claude 擅長",
      "搜尋最新資訊 / 圖片生成 / 聯網 / 插件生態 → ChatGPT 擅長",
      "Google 生態整合 / 大量資料處理 / 成本優勢 → Gemini 擅長",
    ],
    demo: "Live Demo：同一個任務分別丟三家，看差異",
    story:
      "ChatGPT「附和地獄」案例（Meta PM Zevi Arnovitz）：問 GPT 兩個毫無關係的框架是否相似，GPT 回答「對，完全一樣！」— Claude 會主動糾正你",
    stat: "96.8% 學員同時使用多個 AI 工具，需要明確的選擇依據",
  },
  {
    id: "1-3",
    title: "你可能不知道的功能地圖",
    points: [
      "免費版 vs Pro($20) vs Max($100/$200) 差在哪",
      "Haiku / Sonnet / Opus 怎麼選 — 以任務複雜度決定，不是越貴越好",
      "一張圖看懂 Claude 的所有功能：「今天學 / 下次學 / 進階學」三層架構",
      "Connectors 一鍵連接 Google Calendar / Notion / Slack（30 秒設定）",
    ],
    tip: "省著用 Sonnet 足夠，Opus 留給重要任務",
  },
  {
    id: "1-4",
    title: "Claude 的限制與資安",
    points: [
      "知識截止日、幻覺問題、Context Window — 知道限制 = 知道怎麼避坑",
      "AI 品質不穩定是正常的 —「算數學還是會算錯」「同一個問題問兩次答案不同」",
      "重要內容仍需人工覆核",
    ],
    security: [
      "Claude 不用對話資料訓練模型（與 ChatGPT 不同）",
      "Pro 版資料政策 vs 免費版差異",
      "建議：敏感資料仍應脫敏後再給 AI",
    ],
  },
];

export default function Part1Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-claude transition-colors mb-8"
      >
        &#8592; 回到課程首頁
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">&#129517;</span>
        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
          Part 1
        </span>
        <span className="text-sm text-muted">20 min</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">重新認識 Claude</h1>
      <p className="text-muted mb-10">
        Claude vs ChatGPT vs Gemini 決策框架、功能地圖、資安說明
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div
            key={s.id}
            className={`bg-white rounded-2xl border p-6 ${
              s.highlight
                ? "border-claude/30 shadow-sm"
                : "border-card-border"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center">
                {s.id}
              </span>
              <h2 className="text-lg font-bold">{s.title}</h2>
              {s.highlight && (
                <span className="ml-auto px-2 py-0.5 rounded-full bg-claude/10 text-claude text-xs font-medium">
                  重點
                </span>
              )}
            </div>

            <ul className="space-y-2 mb-4">
              {s.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-0.5 flex-shrink-0">&#9670;</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {s.demo && (
              <div className="bg-blue/5 border border-blue/20 rounded-xl p-4 mb-3">
                <p className="text-sm font-medium text-blue">
                  &#127916; {s.demo}
                </p>
              </div>
            )}

            {s.story && (
              <div className="bg-claude/5 border border-claude/20 rounded-xl p-4 mb-3">
                <p className="text-sm text-foreground/80">
                  &#128172; {s.story}
                </p>
              </div>
            )}

            {s.stat && (
              <p className="text-xs text-muted mt-2">
                &#128202; {s.stat}
              </p>
            )}

            {s.tip && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mt-3">
                <p className="text-sm font-medium text-accent">
                  &#128161; {s.tip}
                </p>
              </div>
            )}

            {s.security && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-3">
                <p className="text-sm font-medium text-green-800 mb-2">
                  &#128274; 資安重點
                </p>
                <ul className="space-y-1">
                  {s.security.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-green-700 flex items-start gap-2"
                    >
                      <span className="mt-0.5">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-12 pt-6 border-t border-card-border">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &#8592; 課程首頁
        </Link>
        <Link
          href="/course/part-2"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-light transition-colors"
        >
          Part 2：AI 溝通術 &#8594;
        </Link>
      </div>
    </div>
  );
}
