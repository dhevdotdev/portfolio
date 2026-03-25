import { TerminalPrompt } from "@/components/ui/terminal-prompt";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-4">
          <TerminalPrompt command="cd ???" />
        </div>
        <p className="text-red text-sm mb-2">
          bash: page: command not found
        </p>
        <a
          href="/"
          className="text-xs text-overlay0 hover:text-peach transition-colors"
        >
          cd ~
        </a>
      </div>
    </main>
  );
}
