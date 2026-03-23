import Link from "next/link";

const courseOutline = [
  {
    part: "Part 1",
    title: "重新認識 Claude",
    time: "20 min",
    desc: "Claude vs ChatGPT vs Gemini 決策框架、功能地圖、資安說明",
    icon: "🧭",
    href: "/course/part-1",
  },
  {
    part: "Part 2",
    title: "AI 溝通術 — Prompt 不是咒語",
    time: "40 min",
    desc: "五元素溝通框架、實戰練習、對話迭代技巧",
    icon: "💬",
    href: "/course/part-2",
  },
  {
    part: "Part 3",
    title: "你的 AI 工作空間 — Projects & Artifacts",
    time: "35 min",
    desc: "Projects 入職法、Artifacts 交付物、三種核心文件模板",
    icon: "📁",
    href: "/course/part-3",
  },
  {
    part: "Part 4",
    title: "Co-work 初體驗",
    time: "25 min",
    desc: "不寫程式的自動化、兩個 Live Demo 場景、AI 三層能力模型",
    icon: "🤖",
    href: "/course/part-4",
  },
  {
    part: "Part 5",
    title: "Q&A + 下一步預告",
    time: "10 min",
    desc: "開放提問、課後作業、B 班 & 隱藏班預告",
    icon: "🚀",
    href: "/course/part-5",
  },
];

const features = [
  {
    title: "Prompt 建構器",
    desc: "用五元素框架即時產生專業 Prompt",
    href: "/prompt-builder",
    color: "from-claude to-claude-light",
  },
  {
    title: "模板庫",
    desc: "10 個可直接複製的 Project 模板",
    href: "/templates",
    color: "from-accent to-accent-light",
  },
  {
    title: "AI 工具比較",
    desc: "Claude vs ChatGPT vs Gemini 決策指南",
    href: "/tools",
    color: "from-blue to-blue-light",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero — Black + Gold + Claude accent */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-claude/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-light text-sm mb-6 border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              2026/3/24（二）20:00-22:00 線上直播
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
              Claude 應用講座
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-accent mb-2">
              工作者該懂得 AI 溝通技巧
            </p>
            <p className="text-base sm:text-lg text-white/60 mb-8 max-w-2xl">
              問題不在 Claude，在你跟它說話的方式。2 小時學會跟 AI 好好溝通的框架，
              讓 Claude 從「偶爾問問」變成「每天幫你幹活的同事」。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/prompt-builder"
                className="px-6 py-3 bg-accent text-primary-dark font-semibold rounded-xl hover:bg-accent-light transition-colors shadow-lg"
              >
                試試 Prompt 建構器
              </Link>
              <Link
                href="/resources"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                瀏覽學習資源
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/40">by Lee Vent</p>
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
              <h3 className="font-bold text-lg mb-1 group-hover:text-claude transition-colors">
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
            <Link
              key={item.part}
              href={item.href}
              className="group block bg-white rounded-2xl border border-card-border p-6 hover:shadow-md hover:border-accent/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary text-white text-xs font-semibold">
                      {item.part}
                    </span>
                    <span className="text-xs text-muted">{item.time}</span>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-claude transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">{item.desc}</p>
                </div>
                <span className="text-muted group-hover:text-claude transition-colors flex-shrink-0 mt-2">
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-white border-y border-card-border py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-blue">&#10003;</span> 適合你
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-0.5">&#10003;</span>
                  <span>用過 Claude 但覺得回答「不夠好」、「太泛」的人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-0.5">&#10003;</span>
                  <span>知道 AI 很紅但不確定怎麼融入日常工作的人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-0.5">&#10003;</span>
                  <span>想要有一套方法、不是每次都在碰運氣的人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-0.5">&#10003;</span>
                  <span>聽過 Projects、Artifacts 但沒真正用過的人</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-red">&#10007;</span> 不太適合
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red mt-0.5">&#10007;</span>
                  <span>已在用 Skills / MCP / Extended Thinking 的重度使用者（推薦 B 班）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red mt-0.5">&#10007;</span>
                  <span>想學寫程式或 API 串接的人（推薦隱藏班）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-primary rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              準備好讓 Claude 變聰明了嗎？
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              其實是你終於學會怎麼跟它合作了
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-accent-light mb-6">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.accupass.com/go/claude0409"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary-dark font-semibold rounded-xl hover:bg-accent-light transition-colors shadow-lg text-sm"
              >
                B 班報名：4/9（四）Skills + MCP 實戰 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
