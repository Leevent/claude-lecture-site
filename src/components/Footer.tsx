export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-primary text-white/70 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-claude">&#9670;</span>
            <span>Claude 應用講座 &mdash; 工作者該懂得 AI 溝通技巧</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-accent">Lee Vent</span>
            <span>&middot;</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
