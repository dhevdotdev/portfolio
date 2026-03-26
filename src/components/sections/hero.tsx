"use client";

import { useState, useEffect } from "react";
import { CursorBlink } from "@/components/ui/cursor-blink";
import type { Identity } from "@/lib/types";

const ASCII_NAME = `      _  _                     _
   __| || |__    ___  __   __ | |
  / _\` || '_ \\  / _ \\ \\ \\ / / (_)
 | (_| || | | ||  __/  \\ V /   _
  \\__,_||_| |_| \\___|   \\_/   (_)`;

export function Hero({ identity }: { identity: Identity }) {
  const fullText = identity.name;
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(interval);
        }
      }, 60);
    }, 2000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [fullText]);

  return (
    <section className="pt-24 sm:pt-32 pb-6">
      <div className="mb-6 hidden sm:block select-none overflow-x-auto">
        <pre className="text-peach text-sm md:text-[1rem] leading-snug">
          {ASCII_NAME}
        </pre>
        <p className="text-overlay1 text-sm mt-3 pl-1">
          backend systems, infrastructure, and the
          <br />
          occasional 2am dotfile rewrite.
        </p>
      </div>

      <div className="mb-2 text-[1rem]">
        <span className="text-green">dhev</span>
        <span className="text-subtext0">@</span>
        <span className="text-blue">dev</span>
        <span className="text-subtext0">:~$ </span>
        <span className="text-subtext1">whoami</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-3 tracking-tight flex items-center">
        <span>{displayed}</span>
        <CursorBlink />
      </h1>

      <p className="text-xl text-mauve mb-2">{identity.title}</p>

      <p className="text-sm text-subtext1 mb-2 font-mono">
        <span>{identity.location}</span>
        <span className="text-surface2 mx-2">·</span>
        <a href={`mailto:${identity.email}`} className="text-subtext1 hover:text-peach transition-colors">{identity.email}</a>
      </p>
      <p className="text-sm text-surface2 mb-4">
        also on your terminal —{" "}
        <code className="text-subtext0">ssh ssh.dhev.dev</code>
      </p>

      <p className="text-[1rem] text-subtext0 max-w-lg leading-relaxed sm:hidden">
        {identity.tagline}
      </p>
    </section>
  );
}
