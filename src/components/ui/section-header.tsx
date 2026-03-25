import { TerminalPrompt } from "./terminal-prompt";

export function SectionHeader({
  command,
  id,
}: {
  command: string;
  id: string;
}) {
  return (
    <h2 id={id} className="mb-6 font-mono">
      <TerminalPrompt command={command} />
    </h2>
  );
}
