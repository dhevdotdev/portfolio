"use client";

import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";

interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

const LANG_COLORS: Record<string, string> = {
  Java: "text-peach",
  TypeScript: "text-blue",
  JavaScript: "text-yellow",
  Go: "text-sapphire",
  Python: "text-green",
  Shell: "text-green",
  HTML: "text-red",
  CSS: "text-mauve",
  HCL: "text-lavender",
};

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "done">("loading");

  useEffect(() => {
    const controller = new AbortController();
    const blacklist = ["dhevdotdev", "portfolio"];

    fetch("https://api.github.com/users/dhevdotdev/repos?sort=pushed&per_page=30&type=owner", {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => !r.fork && !blacklist.includes(r.name)));
        setStatus("done");
      })
      .catch((e) => {
        if (e?.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <SectionHeader command="gh repo list" id="github" />
      {status === "loading" && (
        <p className="text-sm text-overlay0">fetching repos...</p>
      )}
      {status === "error" && (
        <p className="text-overlay0 italic">
          <span className="text-surface2">{"// "}</span>
          unable to fetch repos
        </p>
      )}
      {status === "done" && (
        <div className="grid sm:grid-cols-2 gap-3">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3 border border-surface0 rounded-md hover:border-surface1 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-blue group-hover:text-peach transition-colors font-medium">
                  {repo.name}
                </span>
                <div className="flex items-center gap-3 text-sm">
                  {repo.stargazers_count > 0 && (
                    <span className="text-yellow">* {repo.stargazers_count}</span>
                  )}
                  {repo.language && (
                    <span className={LANG_COLORS[repo.language] || "text-overlay0"}>
                      {repo.language}
                    </span>
                  )}
                </div>
              </div>
              {repo.description && (
                <p className="text-sm text-overlay0 mt-1 line-clamp-1">
                  {repo.description}
                </p>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
