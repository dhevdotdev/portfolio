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

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/dhevdotdev/repos?sort=pushed&per_page=30&type=owner",
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork).slice(0, 6);
  } catch {
    return [];
  }
}

export async function GithubActivity() {
  const repos = await getRepos();

  return (
    <div>
      <SectionHeader command="gh repo list --limit 6" id="github" />
      {repos.length === 0 ? (
        <p className="text-overlay0 italic">
          <span className="text-surface2">{"// "}</span>
          unable to fetch repos
        </p>
      ) : (
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
                    <span className="text-yellow">
                      * {repo.stargazers_count}
                    </span>
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
