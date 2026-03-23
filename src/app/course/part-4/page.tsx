import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Part 4：Co-work 初體驗 — 不寫程式的自動化 — Claude 應用講座",
  description: "Co-work vs Claude Code 比較、四大核心能力、兩個 Live Demo 場景、AI 三層能力模型。",
  openGraph: {
    title: "Part 4：Co-work 初體驗 — 不寫程式的自動化",
    description: "兩個 Live Demo 場景、AI 三層能力模型",
  },
};

const section1 = {
  id: "4-1",
  title: "Co-work 是什麼",
  definition:
    "Co-work = 不用寫程式的桌面助手，用你的電腦和帳號，幫你做日常工作",
  comparison: {
    cowork: {
      label: "Co-work（本堂重點）",
      desc: "像聘請一位助理，操作你的瀏覽器和檔案",
      for: "非技術背景，先從這裡開始就對了",
    },
    code: {
      label: "Claude Code（隱藏班內容）",
      desc: "像聘請一位開發者，在終端機裡建造軟體",
      for: "有程式基礎的進階用戶",
    },
  },
  capabilities: [
    "多工平行處理 — 同時執行多個任務",
    "瀏覽器自動化 — 代你操作網頁",
    "Connectors 一鍵連結 — 串接 Google / Notion / Slack",
    "Skills 流程打包 — 把重複動作變成一鍵執行",
  ],
  limitation:
    "目前限制：僅支援 macOS + Pro/Team 以上訂閱（Windows 用戶需提前說明）",
};

const section2 = {
  id: "4-2",
  title: "Live Demo：兩個實用場景",
  demos: [
    {
      name: "Demo A：網站資料擷取與整理",
      desc: "從特定網站抓取資訊 → 整理成表格",
      respondTo: "呼應 RPA 需求 + 行政人員場景",
      quote:
        "電子製造業特助用 Claude「自己去抓相關檔案、自己寫分析」，寫報告超好用",
    },
    {
      name: "Demo B：批次表單操作",
      desc: "讓 Claude 代替你操作重複性的網頁任務",
      respondTo: "呼應行政、專案管理者需求",
      quote:
        "財務會計「繁瑣的輸入和各報表連結，要花好幾天的工作，他就跑完了」",
    },
  ],
  levels: [
    {
      level: "Level 1 效率工具",
      desc: "單點使用，問一個問題得一個答案",
      note: "大多數人在這裡",
      active: false,
    },
    {
      level: "Level 2 AI 串流水線",
      desc: "工作流串接，多步驟自動化",
      note: "今天教到這裡",
      active: true,
    },
    {
      level: "Level 3 自主 Agent",
      desc: "AI 自己做完整件事",
      note: "B 班 / 隱藏班的事",
      active: false,
    },
  ],
  quote: "",
  quoteAuthor: "",
  stat: "",
};

export default function Part4Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-claude transition-colors mb-8"
      >
        &#8592; 回到課程首頁
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">&#129302;</span>
        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
          Part 4
        </span>
        <span className="text-sm text-muted">25 min</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        Co-work 初體驗 — 不寫程式的自動化
      </h1>
      <p className="text-muted mb-10">
        兩個 Live Demo 場景、AI 三層能力模型
      </p>

      <div className="space-y-8">
        {/* Section 4-1 */}
        <div className="bg-white rounded-2xl border border-card-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center">
              {section1.id}
            </span>
            <h2 className="text-lg font-bold">{section1.title}</h2>
          </div>

          <div className="bg-claude/5 border border-claude/20 rounded-xl p-4 mb-4">
            <p className="text-sm font-medium text-claude">
              &#128172; 一句話定位：{section1.definition}
            </p>
          </div>

          {/* Comparison */}
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-claude/5 border border-claude/20 rounded-xl">
              <p className="text-sm font-bold text-claude mb-1">
                {section1.comparison.cowork.label}
              </p>
              <p className="text-sm mb-2">
                {section1.comparison.cowork.desc}
              </p>
              <p className="text-xs text-claude">
                &#10003; {section1.comparison.cowork.for}
              </p>
            </div>
            <div className="p-4 bg-background border border-card-border rounded-xl">
              <p className="text-sm font-bold text-muted mb-1">
                {section1.comparison.code.label}
              </p>
              <p className="text-sm mb-2">
                {section1.comparison.code.desc}
              </p>
              <p className="text-xs text-muted">
                {section1.comparison.code.for}
              </p>
            </div>
          </div>

          <p className="text-sm font-medium mb-2">&#9889; 四大核心能力</p>
          <ul className="space-y-2 mb-4">
            {section1.capabilities.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-accent mt-0.5 flex-shrink-0">&#9670;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="bg-red/5 border border-red/20 rounded-xl p-3">
            <p className="text-xs text-red">
              &#9888; {section1.limitation}
            </p>
          </div>
        </div>

        {/* Section 4-2 */}
        <div className="bg-white rounded-2xl border border-claude/30 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center">
              {section2.id}
            </span>
            <h2 className="text-lg font-bold">{section2.title}</h2>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-claude/10 text-claude text-xs font-medium">
              Live Demo
            </span>
          </div>

          <div className="space-y-4 mb-6">
            {section2.demos.map((d, i) => (
              <div
                key={i}
                className="bg-blue/5 border border-blue/20 rounded-xl p-4"
              >
                <p className="text-sm font-bold text-blue mb-1">
                  &#127916; {d.name}
                </p>
                <p className="text-sm mb-2">{d.desc}</p>
                <p className="text-xs text-muted mb-2">
                  &#127919; {d.respondTo}
                </p>
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-xs italic text-foreground/60">
                    &ldquo;{d.quote}&rdquo;
                  </p>
                  <p className="text-xs text-muted mt-1">
                    — LINE 群真實案例
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm font-medium mb-3">
            &#128200; AI 三層能力模型
          </p>
          <div className="space-y-2 mb-4">
            {section2.levels.map((l) => (
              <div
                key={l.level}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  l.active
                    ? "bg-claude/10 border border-claude/30"
                    : "bg-background border border-card-border"
                }`}
              >
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium ${
                      l.active ? "text-claude" : ""
                    }`}
                  >
                    {l.level}
                  </p>
                  <p className="text-xs text-muted">{l.desc}</p>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    l.active
                      ? "bg-claude text-white"
                      : "bg-card-border text-muted"
                  }`}
                >
                  {l.note}
                </span>
              </div>
            ))}
          </div>

          {/* removed: quote + stat */}
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 pt-6 border-t border-card-border">
        <Link
          href="/course/part-3"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &#8592; Part 3：Projects & Artifacts
        </Link>
        <Link
          href="/course/part-5"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-light transition-colors"
        >
          Part 5：Q&A + 下一步 &#8594;
        </Link>
      </div>
    </div>
  );
}
