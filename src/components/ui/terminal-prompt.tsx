export function TerminalPrompt({ command }: { command?: string }) {
  return (
    <span className="text-[1rem]">
      <span className="text-green">dhev</span>
      <span className="text-subtext0">@</span>
      <span className="text-blue">dev</span>
      <span className="text-subtext0">:~$ </span>
      {command && <span className="text-subtext1">{command}</span>}
    </span>
  );
}
