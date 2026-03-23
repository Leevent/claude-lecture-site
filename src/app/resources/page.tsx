import Link from "next/link";

const sections = [
  {
    title: "Claude 官方資源",
    items: [
      {
        name: "Claude 官網",
        url: "https://claude.ai",
        desc: "註冊免費帳號、開始使用",
      },
      {
        name: "Anthropic Prompt Engineering Guide",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
        desc: "官方 Prompt 工程指南（英文，最權威的參考）",
      },
      {
        name: "Claude Projects 文件",
        url: "https://support.anthropic.com/en/articles/9517075-what-are-projects",
        desc: "Projects 功能完整說明",
      },
      {
        name: "Claude Co-work 文件",
        url: "https://support.anthropic.com/en/articles/10140282-what-is-computer-use-and-how-do-i-get-started",
        desc: "Co-work（Computer Use）功能說明",
      },
    ],
  },
  {
    title: "課堂核心工具",
    items: [
      {
        name: "Prompt 建構器",
        url: "/prompt-builder",
        desc: "課堂教的五元素框架，直接線上練習",
        internal: true,
      },
      {
        name: "AI 工具比較表",
        url: "/tools",
        desc: "Claude vs ChatGPT vs Gemini 決策框架",
        internal: true,
      },
    ],
  },
  {
    title: "延伸學習（影片）",
    items: [
      {
        name: "簡立峰：善用 AI 成為 1% 的超級人才",
        url: "https://www.youtube.com/watch?v=example1",
        desc: "前 Google 台灣董事總經理的 AI 應用四層次：問 → 用 → 管 → 造",
      },
      {
        name: "Every Claude Code Concept Explained for Normal People",
        url: "https://www.youtube.com/watch?v=example2",
        desc: "好 Prompt vs 壞 Prompt 對比範例",
      },
      {
        name: "What Claude Cowork Actually Does",
        url: "https://www.youtube.com/watch?v=example3",
        desc: "Tiago Forte 對 Co-work 的定位分析",
      },
    ],
  },
  {
    title: "課後作業模板",
    items: [
      {
        name: "Project 模板：社群小編",
        url: "#",
        desc: "Custom Instructions + 品牌語氣文件範例",
        template: true,
      },
      {
        name: "Project 模板：會議紀錄整理",
        url: "#",
        desc: "上傳錄音 → 抓重點 → 行動清單",
        template: true,
      },
      {
        name: "Project 模板：Email 撰寫助手",
        url: "#",
        desc: "角色設定 + 格式規範 + 品質標準",
        template: true,
      },
    ],
  },
  {
    title: "推薦閱讀",
    items: [
      {
        name: "哈佛 + BCG 研究：AI 對知識工作者的影響",
        url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700",
        desc: "758 名顧問實驗，有結構化流程的使用者表現高出 19%",
      },
      {
        name: "Andrew Ng：Agentic Workflows",
        url: "https://www.deeplearning.ai/the-batch/agentic-design-patterns-part-1-reflection/",
        desc: "單一 prompt 48% 成功率 → 設計工作流後提升到 95%",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">學習資源</h1>
      <p className="text-muted mb-10">
        課堂教材、延伸閱讀、課後作業模板，持續更新中
      </p>

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-claude rounded-full"></span>
              {section.title}
            </h2>
            <div className="grid gap-3">
              {section.items.map((item) => (
                <ResourceCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div className="mt-16 p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
        <h2 className="text-xl font-bold mb-3">下一步：B 班預告</h2>
        <p className="text-sm text-muted mb-4">
          A 班教你跟 Claude 溝通，B 班教你設計 Claude 的工作方式。
          Skills 一鍵執行、MCP 跨平台串接、Extended Thinking 深度思考。
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
            2026/4/9（三）
          </span>
          <span className="text-muted">3 小時 &middot; $500</span>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({
  name,
  url,
  desc,
  internal,
  template,
}: {
  name: string;
  url: string;
  desc: string;
  internal?: boolean;
  template?: boolean;
}) {
  const Tag = internal ? Link : "a";
  const externalProps = internal
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <Tag
      href={url}
      {...externalProps}
      className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-card-border hover:border-accent/30 hover:shadow-sm transition-all"
    >
      <div className="flex-shrink-0 mt-1">
        {template ? (
          <span className="text-lg">&#128196;</span>
        ) : internal ? (
          <span className="text-lg">&#9889;</span>
        ) : (
          <span className="text-lg">&#128279;</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm group-hover:text-claude transition-colors">
          {name}
        </h3>
        <p className="text-xs text-muted mt-0.5">{desc}</p>
      </div>
      <span className="text-muted group-hover:text-claude transition-colors flex-shrink-0">
        &#8594;
      </span>
    </Tag>
  );
}
