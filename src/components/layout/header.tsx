"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    for (const item of NAV_ITEMS) {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-md border-b border-surface0">
      <nav className="max-w-3xl mx-auto px-6 h-12 flex items-center justify-between gap-4">
        <a
          href="#"
          className="text-peach text-sm font-medium hover:text-text transition-colors shrink-0"
        >
          dhev.dev
        </a>
        <ul className="flex gap-3 sm:gap-4 text-xs overflow-x-auto scrollbar-none">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="shrink-0">
              <a
                href={item.href}
                className={`transition-colors ${
                  active === item.href.slice(1)
                    ? "text-peach"
                    : "text-overlay0 hover:text-subtext1"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
