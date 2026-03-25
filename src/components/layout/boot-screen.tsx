"use client";

import { useEffect, useRef, useState } from "react";

const BOOT_LINES = [
  { text: "booting dhev.dev ...", color: "#a6adc8" },
  { text: "loading kernel modules", color: "#a6adc8" },
  { text: "[ OK ] mounted /about", color: "#a6e3a1" },
  { text: "[ OK ] mounted /experience", color: "#a6e3a1" },
  { text: "[ OK ] mounted /skills", color: "#a6e3a1" },
  { text: "[ OK ] started portfolio.service", color: "#a6e3a1" },
  { text: "ready.", color: "#fab387" },
];

export function BootScreen() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const container = ref.current;
    if (!container) return;

    const delays = [100, 300, 500, 650, 800, 1000, 1200];
    const timers: ReturnType<typeof setTimeout>[] = [];

    delays.forEach((delay, i) => {
      timers.push(
        setTimeout(() => {
          const line = document.createElement("div");
          line.textContent = BOOT_LINES[i].text;
          line.style.color = BOOT_LINES[i].color;
          line.style.marginBottom = "6px";
          line.style.fontSize = BOOT_LINES[i].text === "ready." ? "16px" : "14px";
          line.style.fontWeight = BOOT_LINES[i].text === "ready." ? "700" : "400";
          container.insertBefore(line, container.lastElementChild);
        }, delay)
      );
    });

    timers.push(setTimeout(() => setDone(true), 1800));
    return () => timers.forEach(clearTimeout);
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        backgroundColor: "#11111b",
        opacity: 1,
        transition: "opacity 300ms ease-out",
      }}
    >
      <div ref={ref} style={{ maxWidth: "28rem", width: "100%", fontFamily: "monospace" }}>
        <span
          style={{
            display: "inline-block",
            width: "10px",
            height: "16px",
            backgroundColor: "#fab387",
            marginTop: "4px",
            animation: "blink 1s step-end infinite",
          }}
        />
      </div>
    </div>
  );
}
