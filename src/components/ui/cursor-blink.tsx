export function CursorBlink() {
  return (
    <span
      className="inline-block bg-peach ml-0.5 w-[0.1em] h-[0.75em]"
      style={{ animation: "blink 1s step-end infinite" }}
    />
  );
}
