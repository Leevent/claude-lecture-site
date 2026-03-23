import Link from "next/link";

const courseOutline = [
  {
    part: "Part 1",
    title: "重新認識 Claude",
    time: "20 min",
    desc: "Claude vs ChatGPT vs Gemini 決策框架、功能地圖、資安說明",
    icon: "🧭",
  },
  {
    part: "Part 2",
    title: "AI 溝通術 — Prompt 不是咒語",
    time: "40 min",
    desc: "五元素溝通框架、實戰練習、對話迭代技巧",
    icon: "💬",
  },
  {
    part: "Part 3",
    title: "你的 AI 工作空間 — Projects & Artifacts",
    time: "35 min",
    desc: "Projects 入職法、Artifacts 交付物、三種核心文件模板",
    icon: "📁",
  },
  {
    part: "Part 4",
    title: "Co-work 初體驗",
    time: "25 min",
    desc: "不寫程式的自動化、兩個 Live Demo 場景、AI 三層能力模型",
    icon: "🤖",
  },
  {
    part: "Part 5",
    title: "Q&A + 下一步預告",
    time: "10 min",
    desc: "開放提問、課後作業、B 班 & 隱藏班預告",
    icon: "🚀",
  },
];

const features = [
  {
    title: "Prompt 建構器",
    desc: "用五元素框架即時產生專業 Prompt",
    href: "/prompt-builder",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "AI 工具比較",
    desc: "Claude vs ChatGPT vs Gemini 決策指南",
    href: "/tools",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "學習資源",
    desc: "精選連結、模板、延伸閱讀",
    href: "/resources",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              2026/3/24（二）20:00-22:00 線上直播
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
              Claude 應用講座
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-white/90 mb-2">
              工作者該懂得 AI 溝通技巧
            </p>
            <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl">
              問題不在 Claude，在你跟它說話的方式。2 小時學會跟 AI 好好溝通的框架，
              讓 Claude 從「偶爾問問」變成「每天幫你幹活的同事」。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/prompt-builder"
                className="px-6 py-3 bg-white text-primary-dark font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
              >
                試試 Prompt 建構器
              </Link>
              <Link
                href="/resources"
                className="px-6 py-3 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-colors border border-white/20"
              >
                瀏覽學習資源
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-card-border"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-lg mb-3`}
              >
                {f.title[0]}
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-muted">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Course outline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
          課程大綱
        </h2>
        <p className="text-muted text-center mb-12">
          2 小時 &middot; 5 個單元 &middot; 從入門到上手
        </p>
        <div className="space-y-4">
          {courseOutline.map((item) => (
            <div
              key={item.part}
              className="bg-white rounded-2xl border border-card-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {item.part}
                    </span>
                    <span className="text-xs text-muted">{item.time}</span>
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-white border-y border-card-border py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-green-500">&#10003;</span> 適合你
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span>用過 Claude 但覺得回答「不夠好」、「太泛」的人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span>知道 AI 很紅但不確定怎麼融入日常工作的人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span>想要有一套方法、不是每次都在碰運氣的人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  <span>
                    聽過 Projects、Artifacts 但沒真正用過的人
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-red-400">&#10007;</span> 不太適合
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span>
                    已在用 Skills / MCP / Extended Thinking 的重度使用者（推薦 B 班）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span>想學寫程式或 API 串接的人（推薦隱藏班）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            準備好讓 Claude 變聰明了嗎？
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            其實是你終於學會怎麼跟它合作了
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>&#128197;</span> 2026/3/24（二）20:00
            </div>
            <div className="flex items-center gap-2">
              <span>&#9201;</span> 2 小時（含回放）
            </div>
            <div className="flex items-center gap-2">
              <span>&#128176;</span> $300
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
