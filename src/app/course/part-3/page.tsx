import Link from "next/link";

const sections = [
  {
    id: "3-1",
    title: "Projects = 幫新員工入職",
    highlight: true,
    metaphor:
      "Projects 就像幫新員工入職 — 多花一點時間教他，但教完之後，這個流程就永遠不用你再操心了",
    painPoint:
      "16.1% 學員反映「長對話後 Claude 會忘記前面講的」— Projects 一次解決",
    points: [
      "常見混淆：很多人一直在 Chat 窗口重複餵資料，不知道 Projects 可以存起來",
      "右側面板三個欄位：Memory / Instructions / Files — 各放什麼要示範",
      "Custom Instructions 設定教學（Pro 功能，現場展示免費版與 Pro 版差異）",
      "上傳參考資料（PDF、文件、圖片）",
    ],
    demo: "Live Demo：建立一個「社群小編 Project」",
    tip: "從 ChatGPT 搬家小技巧：Anthropic 提供記憶匯入工具，整個流程不到 60 秒",
  },
  {
    id: "3-2",
    title: "Artifacts = Claude 的交付物",
    points: [
      "什麼時候會觸發 Artifacts — 程式碼、文件、圖表的產出",
      "Artifacts 的迭代功能 — 不滿意可以直接要求修改特定部分",
      "實用案例：用 Artifacts 產出一個互動圖表",
    ],
    demo: "Live Demo：即時產出互動圖表",
  },
  {
    id: "3-3",
    title: "把兩者串起來的工作流",
    subtitle: "從碎片到系統",
    painPoint:
      "痛點回扣：「碎片化應用」→ Projects 就是把零散用法串成穩定工作流的關鍵",
    coreFiles: [
      {
        type: "系統指令",
        desc: "你是誰、工作規則",
        example: "你是我的社群小編，所有貼文使用繁體中文...",
      },
      {
        type: "品牌語氣文件",
        desc: "風格定義、禁用詞、範例字句",
        example: "語氣親切不浮誇、禁用「最」「第一」等絕對詞...",
      },
      {
        type: "背景脈絡文件",
        desc: "產品知識、客戶資料、公司簡介",
        example: "公司主要產品為手工皂，目標客群 25-35 歲...",
      },
    ],
    templates: "課後提供 3 個可以直接複製的 Project 設定模板",
  },
];

export default function Part3Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-claude transition-colors mb-8"
      >
        &#8592; 回到課程首頁
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">&#128193;</span>
        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
          Part 3
        </span>
        <span className="text-sm text-muted">35 min</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        你的 AI 工作空間 — Projects & Artifacts
      </h1>
      <p className="text-muted mb-10">
        Projects 入職法、Artifacts 交付物、三種核心文件模板
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
              {s.subtitle && (
                <span className="text-sm text-muted">— {s.subtitle}</span>
              )}
              {s.highlight && (
                <span className="ml-auto px-2 py-0.5 rounded-full bg-claude/10 text-claude text-xs font-medium">
                  重點
                </span>
              )}
            </div>

            {s.metaphor && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-4">
                <p className="text-sm font-medium text-accent">
                  &#128161; {s.metaphor}
                </p>
              </div>
            )}

            {s.painPoint && (
              <div className="bg-claude/5 border border-claude/20 rounded-xl p-4 mb-4">
                <p className="text-sm text-foreground/80">
                  &#127919; {s.painPoint}
                </p>
              </div>
            )}

            {s.points && (
              <ul className="space-y-2 mb-4">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5 flex-shrink-0">&#9670;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}

            {s.coreFiles && (
              <div className="space-y-3 mb-4">
                <p className="text-sm font-medium mb-2">
                  &#128196; 三種核心文件類型（建議放在 Project Instructions 裡）
                </p>
                {s.coreFiles.map((f) => (
                  <div
                    key={f.type}
                    className="flex items-start gap-3 p-3 bg-background rounded-xl"
                  >
                    <span className="flex-shrink-0 px-2 py-1 rounded-lg bg-primary text-white text-xs font-bold">
                      {f.type}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">{f.desc}</p>
                      <p className="text-xs text-muted mt-0.5">
                        &#128221; 例：{f.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.demo && (
              <div className="bg-blue/5 border border-blue/20 rounded-xl p-4 mb-3">
                <p className="text-sm font-medium text-blue">
                  &#127916; {s.demo}
                </p>
              </div>
            )}

            {s.tip && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-3">
                <p className="text-sm text-green-700">
                  &#128161; {s.tip}
                </p>
              </div>
            )}

            {s.templates && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                <p className="text-sm font-medium text-accent">
                  &#127873; {s.templates}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-12 pt-6 border-t border-card-border">
        <Link
          href="/course/part-2"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &#8592; Part 2：AI 溝通術
        </Link>
        <Link
          href="/course/part-4"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-light transition-colors"
        >
          Part 4：Co-work 初體驗 &#8594;
        </Link>
      </div>
    </div>
  );
}
