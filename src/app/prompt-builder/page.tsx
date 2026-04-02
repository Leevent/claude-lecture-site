"use client";

import { useState, useCallback } from "react";

interface PromptFields {
  role: string;
  task: string;
  context: string;
  format: string;
  quality: string;
  examples: string;
}

interface AdvancedOptions {
  cot: boolean;
  fewShotEnabled: boolean;
  fewShotExamples: { input: string; output: string }[];
  temperature: "" | "precise" | "balanced" | "creative";
}

const temperatureOptions = [
  { value: "" as const, label: "不指定", desc: "" },
  {
    value: "precise" as const,
    label: "精準模式",
    desc: "分類、擷取、事實查核",
    prompt: "請用最確定、最精準的方式回答，避免推測或創造性發揮。",
  },
  {
    value: "balanced" as const,
    label: "平衡模式",
    desc: "一般任務、商務溝通",
    prompt: "請在準確性和自然表達之間取得平衡。",
  },
  {
    value: "creative" as const,
    label: "創意模式",
    desc: "文案發想、腦力激盪",
    prompt: "請發揮創意，給出多元、新穎的想法，不需要過度保守。",
  },
];

const placeholders: PromptFields = {
  role: "例：你是一位有 10 年經驗的社群行銷專家",
  task: "例：幫我撰寫一篇 Threads 貼文，推廣我們的新課程",
  context: "例：課程主題是 Claude AI 應用，目標受眾是 25-40 歲上班族，品牌調性輕鬆專業",
  format: "例：300 字以內、包含一個 CTA、用條列式重點、附上 3 個 hashtag",
  quality: "例：語氣親切但專業、避免過度銷售感、需要包含具體數據或案例",
  examples: "例：\n輸入：我剛開始學 Claude，有點不知道從哪裡下手\n輸出：建議先從日常工作中找一件重複性高的小事（如整理 Email 摘要），用 Claude 幫你做一次，感受差異之後，再慢慢擴展使用場景。",
};

const labels: Record<keyof PromptFields, { label: string; tip: string }> = {
  role: {
    label: "角色 (Role)",
    tip: "告訴 Claude 用什麼身份回答你",
  },
  task: {
    label: "任務 (Task)",
    tip: "你需要 Claude 做什麼？越具體越好",
  },
  context: {
    label: "背景 (Context)",
    tip: "提供相關的背景資訊、限制條件",
  },
  format: {
    label: "格式 (Format)",
    tip: "你想要什麼樣的輸出格式",
  },
  quality: {
    label: "品質標準 (Quality)",
    tip: "什麼樣的結果才算好？",
  },
  examples: {
    label: "範例 (Examples)",
    tip: "貼上一段你期望的輸出樣式，或類似問題的好答案 — Anthropic、Google、OpenAI 三家官方文件一致認為，提供範例是讓 AI 快速對齊你期望的最有效方法",
  },
};

const examplePresets = [
  {
    name: "社群貼文",
    fields: {
      role: "你是一位擅長台灣市場的社群行銷專家，風格輕鬆但專業",
      task: "撰寫一篇 Threads 貼文，分享 AI 工具使用心得",
      context: "目標受眾是 25-40 歲科技業上班族，對 AI 有興趣但還沒深入使用",
      format: "300 字以內、分段清晰、結尾附一個互動問題和 3 個 hashtag",
      quality: "語氣像朋友分享經驗、避免術語堆砌、需包含一個具體使用場景",
      examples: "我用 Claude 寫完了過去要花 2 小時的週報，現在 20 分鐘搞定。\n\n秘訣不是叫它「寫週報」，而是給它模板 + 背景 + 這週的重點事項。\n\n你現在最想用 AI 省掘哪一個工作環節？",

    },
  },
  {
    name: "會議紀錄",
    fields: {
      role: "你是一位專業的專案管理助理",
      task: "將以下會議逐字稿整理成結構化的會議紀錄",
      context: "這是行銷部門的週會，討論了下季度的推廣計畫",
      format: "包含：決議事項（表格）、行動項目（負責人+截止日）、未決議題、下次會議提醒",
      quality: "確保每個行動項目都有明確的負責人和截止日期，模糊的討論用「待確認」標註",
      examples: "",
    },
  },
  {
    name: "品牌文案",
    fields: {
      role: "你是一位品牌策略顧問，專精 B2B 科技產品行銷",
      task: "為我們的 AI 教育課程撰寫官網的價值主張區塊",
      context: "課程品牌定位是「讓非技術人員也能掌握 AI 生產力」，競品主打技術深度",
      format: "一句主標題（15 字內）+ 三段特色描述（各 50 字）+ 一個 CTA 按鈕文字",
      quality: "強調「實用 > 技術」，避免誇大承諾，語氣自信但不傲慢",
      examples: "",
    },
  },
];

export default function PromptBuilderPage() {
  const [fields, setFields] = useState<PromptFields>({
    role: "",
    task: "",
    context: "",
    format: "",
    quality: "",
    examples: "",
  });
  const [advanced, setAdvanced] = useState<AdvancedOptions>({
    cot: false,
    fewShotEnabled: false,
    fewShotExamples: [{ input: "", output: "" }],
    temperature: "",
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateField = useCallback(
    (key: keyof PromptFields, value: string) => {
      setFields((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const updateFewShot = useCallback(
    (index: number, field: "input" | "output", value: string) => {
      setAdvanced((prev) => {
        const examples = [...prev.fewShotExamples];
        examples[index] = { ...examples[index], [field]: value };
        return { ...prev, fewShotExamples: examples };
      });
    },
    []
  );

  const addFewShot = useCallback(() => {
    setAdvanced((prev) => ({
      ...prev,
      fewShotExamples: [...prev.fewShotExamples, { input: "", output: "" }],
    }));
  }, []);

  const removeFewShot = useCallback((index: number) => {
    setAdvanced((prev) => ({
      ...prev,
      fewShotExamples: prev.fewShotExamples.filter((_, i) => i !== index),
    }));
  }, []);

  const generatedPrompt = buildPrompt(fields, advanced);
  const filledCount = Object.values(fields).filter((v) => v.trim()).length;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreset = (preset: (typeof examplePresets)[0]) => {
    setFields(preset.fields);
  };

  const handleClear = () => {
    setFields({ role: "", task: "", context: "", format: "", quality: "", examples: "" });
    setAdvanced({
      cot: false,
      fewShotEnabled: false,
      fewShotExamples: [{ input: "", output: "" }],
      temperature: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Prompt 建構器</h1>
        <p className="text-muted">
          用六元素框架（Role / Task / Context / Format / Quality / <span style={{color:"var(--claude)"}}>Examples</span>）組合出專業 Prompt。
          填完直接複製貼到 Claude。
        </p>
      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-sm text-muted py-1">快速範例：</span>
        {examplePresets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => handlePreset(preset)}
            className="px-3 py-1 text-sm rounded-full border border-card-border hover:border-claude hover:text-claude transition-colors"
          >
            {preset.name}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="px-3 py-1 text-sm rounded-full border border-card-border hover:border-red-300 hover:text-red-500 transition-colors ml-auto"
        >
          清除全部
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i <= filledCount ? "bg-claude" : "bg-card-border"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted">{filledCount}/6 已填寫</span>
          </div>

          {(Object.keys(labels) as Array<keyof PromptFields>).map((key) => (
            <div key={key}>
              <label className="block text-sm font-semibold mb-1">
                {labels[key].label}
              </label>
              <p className="text-xs text-muted mb-2">{labels[key].tip}</p>
              <textarea
                value={fields[key]}
                onChange={(e) => updateField(key, e.target.value)}
                placeholder={placeholders[key]}
                rows={key === "task" || key === "context" || key === "examples" ? 3 : 2}
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-claude/30 focus:border-claude transition-all resize-none"
              />
            </div>
          ))}

          {/* Advanced techniques panel */}
          <div className="border border-card-border rounded-xl overflow-hidden">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors text-sm font-semibold"
            >
              <span>
                {"\u2699\uFE0F"} 進階技巧
                {(advanced.cot || advanced.fewShotEnabled || advanced.temperature) && (
                  <span className="ml-2 text-xs font-normal text-claude">已啟用</span>
                )}
              </span>
              <span className={`transition-transform ${showAdvanced ? "rotate-180" : ""}`}>
                {"\u25BC"}
              </span>
            </button>
            {showAdvanced && (
              <div className="px-4 py-4 space-y-5 bg-white border-t border-card-border">
                {/* CoT toggle */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={advanced.cot}
                    onChange={(e) => setAdvanced((prev) => ({ ...prev, cot: e.target.checked }))}
                    className="mt-0.5 w-4 h-4 rounded accent-claude"
                  />
                  <div>
                    <span className="text-sm font-semibold">
                      {"\uD83E\uDDE0"} 逐步推理 (Chain of Thought)
                    </span>
                    <p className="text-xs text-muted mt-0.5">
                      讓 Claude 先列出思考步驟再給結論，精確率可從 72% 提升到 95%
                    </p>
                  </div>
                </label>

                {/* Few-shot toggle + examples */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={advanced.fewShotEnabled}
                      onChange={(e) =>
                        setAdvanced((prev) => ({ ...prev, fewShotEnabled: e.target.checked }))
                      }
                      className="mt-0.5 w-4 h-4 rounded accent-claude"
                    />
                    <div>
                      <span className="text-sm font-semibold">
                        {"\uD83D\uDCDD"} 範例學習 (Few-shot)
                      </span>
                      <p className="text-xs text-muted mt-0.5">
                        提供 2-3 組「輸入 → 輸出」範例，讓 Claude 學會你要的格式
                      </p>
                    </div>
                  </label>
                  {advanced.fewShotEnabled && (
                    <div className="mt-3 ml-7 space-y-3">
                      {advanced.fewShotExamples.map((ex, i) => (
                        <div key={i} className="flex gap-2 items-start">
                          <div className="flex-1 space-y-1.5">
                            <input
                              value={ex.input}
                              onChange={(e) => updateFewShot(i, "input", e.target.value)}
                              placeholder={`範例 ${i + 1} 輸入`}
                              className="w-full px-3 py-2 rounded-lg border border-card-border bg-white text-xs focus:outline-none focus:ring-2 focus:ring-claude/30 focus:border-claude"
                            />
                            <input
                              value={ex.output}
                              onChange={(e) => updateFewShot(i, "output", e.target.value)}
                              placeholder={`範例 ${i + 1} 期望輸出`}
                              className="w-full px-3 py-2 rounded-lg border border-card-border bg-white text-xs focus:outline-none focus:ring-2 focus:ring-claude/30 focus:border-claude"
                            />
                          </div>
                          {advanced.fewShotExamples.length > 1 && (
                            <button
                              onClick={() => removeFewShot(i)}
                              className="text-red-400 hover:text-red-600 text-xs mt-1 flex-shrink-0"
                            >
                              {"\u2716"}
                            </button>
                          )}
                        </div>
                      ))}
                      {advanced.fewShotExamples.length < 5 && (
                        <button
                          onClick={addFewShot}
                          className="text-xs text-claude hover:underline"
                        >
                          + 新增範例
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Temperature selector */}
                <div>
                  <p className="text-sm font-semibold mb-2">
                    {"\uD83C\uDF21\uFE0F"} 回答風格
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {temperatureOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() =>
                          setAdvanced((prev) => ({ ...prev, temperature: opt.value }))
                        }
                        className={`px-3 py-2 rounded-lg border text-left text-xs transition-all ${
                          advanced.temperature === opt.value
                            ? "border-claude bg-claude/5 text-claude"
                            : "border-card-border hover:border-claude/50"
                        }`}
                      >
                        <span className="font-medium">{opt.label}</span>
                        {opt.desc && (
                          <span className="block text-muted mt-0.5">{opt.desc}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-white rounded-2xl border border-card-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">產生的 Prompt</h2>
              <button
                onClick={handleCopy}
                disabled={filledCount === 0}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  copied
                    ? "bg-green-100 text-green-700"
                    : filledCount > 0
                    ? "bg-claude text-white hover:bg-claude-light"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                {copied ? "&#10003; 已複製" : "複製 Prompt"}
              </button>
            </div>
            <div className="bg-background rounded-xl p-4 min-h-[300px]">
              {filledCount === 0 ? (
                <p className="text-muted text-sm italic">
                  開始填寫左邊的欄位，Prompt 會即時出現在這裡...
                </p>
              ) : (
                <pre className="whitespace-pre-wrap text-sm font-sans leading-relaxed">
                  {generatedPrompt}
                </pre>
              )}
            </div>
            {filledCount > 0 && filledCount < 6 && (
              <p className="text-xs text-amber-600 mt-3 flex items-center gap-1">
                <span>&#9888;</span>
                還有 {6 - filledCount} 個欄位未填，填越完整效果越好
              </p>
            )}
          </div>

          {/* Tips */}
          <div className="mt-6 p-5 bg-accent/5 rounded-xl border border-accent/10">
            <h3 className="font-semibold text-sm mb-3">Prompt 小技巧</h3>
            <ul className="space-y-2 text-xs text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#9679;</span>
                告訴 Claude 要「做什麼」比說「不要做什麼」更有效 &mdash; Anthropic 官方文件明確指出：正向指令（Tell Claude what to do）比反面限制更精準
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#9679;</span>
                先要求列出 2-3 種方案，選定再執行，試錯時間減少一半
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#9679;</span>
                避免用問句代替指令 &mdash; 「請幫我...」比「你可以幫我...嗎？」效果好
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#9679;</span>
                單一任務完成就開新對話 &mdash; Context 越長 AI 越笨
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildPrompt(fields: PromptFields, advanced: AdvancedOptions): string {
  const parts: string[] = [];

  if (fields.role.trim()) {
    parts.push(`## 角色\n${fields.role.trim()}`);
  }
  if (fields.task.trim()) {
    parts.push(`## 任務\n${fields.task.trim()}`);
  }
  if (fields.context.trim()) {
    parts.push(`## 背景資訊\n${fields.context.trim()}`);
  }
  if (fields.format.trim()) {
    parts.push(`## 輸出格式\n${fields.format.trim()}`);
  }
  if (fields.quality.trim()) {
    parts.push(`## 品質要求\n${fields.quality.trim()}`);
  }

  if (fields.examples.trim()) {
    parts.push(`## 參考範例
請參考以下範例的格式和風格來回答：

${fields.examples.trim()}`);
  }

  // Advanced: Chain of Thought
  if (advanced.cot) {
    parts.push(
      `## 思考方式\n請先逐步列出你的推理過程，再給出最終結論。每一步用編號標示。`
    );
  }

  // Advanced: Few-shot examples
  if (advanced.fewShotEnabled) {
    const validExamples = advanced.fewShotExamples.filter(
      (ex) => ex.input.trim() && ex.output.trim()
    );
    if (validExamples.length > 0) {
      const exampleLines = validExamples
        .map(
          (ex, i) =>
            `### 範例 ${i + 1}\n輸入：${ex.input.trim()}\n輸出：${ex.output.trim()}`
        )
        .join("\n\n");
      parts.push(`## 參考範例\n請依照以下範例的格式和風格回答：\n\n${exampleLines}`);
    }
  }

  // Advanced: Temperature guidance
  if (advanced.temperature) {
    const opt = temperatureOptions.find((o) => o.value === advanced.temperature);
    if (opt && "prompt" in opt) {
      parts.push(`## 回答風格\n${opt.prompt}`);
    }
  }

  return parts.join("\n\n");
}
