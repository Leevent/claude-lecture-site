import Link from "next/link";

const sections = [
  {
    id: "2-1",
    title: "為什麼你的 Claude 總是「聽不懂」",
    points: [
      "核心觀念：AI 的輸出品質，九成由你的輸入框架決定",
      "AI 是放大器，不是魔法 — 輸入清楚就放大，流程模糊也只會把模糊放大",
    ],
    stat: "哈佛 + BCG 研究：758 名顧問實驗，有結構化流程的使用者表現高出 19%",
    demo: "Live Demo：同一個需求，三種問法的結果差異",
    bad_examples: [
      "用問句代替指令 —「你可以幫我...嗎？」vs「請幫我...」",
      "沒有說明目標對象 — 寫給誰看？老闆？客戶？同事？",
      "把多個任務混在一起 — 一次塞三件事，每件都做不好",
    ],
  },
  {
    id: "2-2",
    title: "五元素溝通框架",
    highlight: true,
    framework: [
      { element: "Role", label: "角色", desc: "你希望 AI 扮演什麼角色", example: "你是一位資深社群行銷專家" },
      { element: "Task", label: "任務", desc: "具體要做什麼事", example: "幫我寫一則 Instagram 貼文" },
      { element: "Context", label: "背景", desc: "必要的脈絡資訊", example: "產品是手工皂，目標客群是 25-35 歲女性" },
      { element: "Format", label: "格式", desc: "產出的形式規格", example: "300 字以內，包含 3 個 hashtag" },
      { element: "Quality", label: "品質標準", desc: "好的標準是什麼", example: "語氣親切但不浮誇，要有一個明確的 CTA" },
    ],
    tips: [
      "「先列方案再動手」— 要求 Claude 先條列 2-3 種方案，由你決定再執行",
      "「反面約束比正向鼓勵有效」— 告訴 Claude「不要做什麼」的遵守率更高",
    ],
    ipo: "補充框架 IPO 模型：大多數人只給了 Input，沒有把 Process 交代清楚",
  },
  {
    id: "2-3",
    title: "實戰練習：用框架改造你的 Prompt",
    practices: [
      {
        scenario: "社群貼文撰寫",
        desc: "用 Role + Task 讓 Claude 寫出「像你寫的」文案",
        respondTo: "8 人提及社群行銷需求",
      },
      {
        scenario: "會議紀錄 → 行動清單",
        desc: "用 Context（上傳錄音/逐字稿）讓 Claude 抓出重點",
        respondTo: "4 人提及內容整理需求",
      },
      {
        scenario: "品牌風格一致的內容",
        desc: "用 Format + Quality 確保每次產出都符合品牌調性",
        respondTo: "學員品牌套版需求",
      },
    ],
    note: "",
  },
  {
    id: "2-4",
    title: "對話的藝術：追問、修正、迭代",
    points: [
      "不是一次問到位，而是「帶著 Claude 走」",
      "蘇格拉底式提問法：「有哪些做法？推薦哪個？為什麼？」— 打破砂鍋問到底",
      "Context 越長 AI 越笨 — 對話超過 40% 用量時表現明顯下降",
      "實用建議：單一任務完成就開新對話，不要一個對話塞所有事情",
    ],
    stat: "Andrew Ng 發現：單一 prompt 成功率 48% → 設計「寫 → 執行 → 修正」工作流後跳到 95%",
    quote:
      "「他給你一段文字可能只要三秒鐘，但你可能要花 30 分鐘思考+修改」",
  },
];

export default function Part2Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-claude transition-colors mb-8"
      >
        &#8592; 回到課程首頁
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">&#128172;</span>
        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
          Part 2
        </span>
        <span className="text-sm text-muted">40 min</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        AI 溝通術 — Prompt 不是咒語
      </h1>
      <p className="text-muted mb-10">
        五元素溝通框架、實戰練習、對話迭代技巧
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
                  核心框架
                </span>
              )}
            </div>

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

            {s.bad_examples && (
              <div className="bg-red/5 border border-red/20 rounded-xl p-4 mb-3">
                <p className="text-sm font-medium text-red mb-2">
                  &#9888; 壞 Prompt 的三大特徵
                </p>
                <ul className="space-y-1">
                  {s.bad_examples.map((ex, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-red mt-0.5">&#10007;</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {s.framework && (
              <div className="space-y-3 mb-4">
                {s.framework.map((f) => (
                  <div
                    key={f.element}
                    className="flex items-start gap-3 p-3 bg-background rounded-xl"
                  >
                    <span className="flex-shrink-0 w-16 h-8 rounded-lg bg-claude text-white text-xs font-bold flex items-center justify-center">
                      {f.element}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">
                        {f.label} — {f.desc}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        &#128221; {f.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.ipo && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-3">
                <p className="text-sm font-medium text-accent">
                  &#128161; {s.ipo}
                </p>
              </div>
            )}

            {s.tips && (
              <div className="space-y-2 mt-3">
                {s.tips.map((tip, i) => (
                  <div
                    key={i}
                    className="bg-blue/5 border border-blue/20 rounded-xl p-3"
                  >
                    <p className="text-sm text-blue">{tip}</p>
                  </div>
                ))}
              </div>
            )}

            {s.practices && (
              <div className="space-y-3 mb-3">
                {s.practices.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-background rounded-xl"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-claude text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{p.scenario}</p>
                      <p className="text-xs text-muted mt-0.5">{p.desc}</p>
                      <p className="text-xs text-claude mt-1">
                        &#127919; {p.respondTo}
                      </p>
                    </div>
                  </div>
                ))}
                {s.note ? (
                  <p className="text-xs text-muted text-center mt-2">
                    &#9997; {s.note}
                  </p>
                ) : null}
              </div>
            )}

            {s.demo && (
              <div className="bg-blue/5 border border-blue/20 rounded-xl p-4 mb-3">
                <p className="text-sm font-medium text-blue">
                  &#127916; {s.demo}
                </p>
              </div>
            )}

            {s.stat && (
              <p className="text-xs text-muted mt-2">
                &#128202; {s.stat}
              </p>
            )}

            {s.quote && (
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 mt-3">
                <p className="text-sm italic text-foreground/70">
                  {s.quote}
                </p>
                <p className="text-xs text-muted mt-1">— 課堂金句</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-12 pt-6 border-t border-card-border">
        <Link
          href="/course/part-1"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &#8592; Part 1：重新認識 Claude
        </Link>
        <Link
          href="/course/part-3"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-light transition-colors"
        >
          Part 3：Projects & Artifacts &#8594;
        </Link>
      </div>
    </div>
  );
}
