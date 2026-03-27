import { SectionHeader } from "@/components/ui/section-header";

export function Resume() {
  return (
    <div>
      <SectionHeader command="open resume.pdf" id="resume" />
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-surface1 text-subtext1 rounded-md hover:border-peach hover:text-peach transition-colors"
        >
          <span className="text-overlay0">{"["}</span>
          view
          <span className="text-overlay0">{"]"}</span>
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-surface1 text-subtext1 rounded-md hover:border-peach hover:text-peach transition-colors"
        >
          <span className="text-overlay0">{"["}</span>
          download
          <span className="text-overlay0">{"]"}</span>
        </a>
      </div>
    </div>
  );
}
