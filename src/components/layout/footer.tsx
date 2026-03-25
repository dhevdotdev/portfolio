import { TerminalPrompt } from "@/components/ui/terminal-prompt";

export function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 pt-8 pb-12">
      <div className="text-sm">
        <TerminalPrompt command="exit" />
      </div>
      <p className="text-overlay0 text-sm mt-2">logout</p>
      <p className="text-surface2 text-xs mt-4">
        Connection to dhev.dev closed.
      </p>
      <span
        className="inline-block w-2 h-3.5 bg-surface2 mt-3"
        style={{ animation: "blink 1s step-end infinite" }}
      />
    </footer>
  );
}
