import { SectionHeader } from "@/components/ui/section-header";
import type { Achievements as AchievementsType } from "@/lib/types";

export function Achievements({
  achievements,
}: {
  achievements: AchievementsType;
}) {
  return (
    <div>
      <SectionHeader command='grep -rn "notable" ~/' id="achievements" />
      <div className="bg-mantle border border-surface0 rounded-md p-4 space-y-4">
        {achievements.items.map((item, i) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="text-overlay0 text-sm font-mono shrink-0 mt-0.5 select-none">
              {i + 1}:
            </span>
            <div>
              <div className="flex items-start gap-2">
                <span className="text-peach text-sm shrink-0 mt-0.5">
                  {item.type === "publication" ? "[pub]" : "[award]"}
                </span>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-subtext1 hover:text-peach transition-colors underline underline-offset-4 decoration-surface1 hover:decoration-peach"
                  >
                    {item.title}
                  </a>
                ) : (
                  <p className="text-subtext1">{item.title}</p>
                )}
              </div>
              <p className="text-overlay0 text-sm mt-0.5 ml-0">{item.venue}</p>
            </div>
          </div>
        ))}
        <p className="text-overlay0 text-xs">
          {achievements.items.length} matches found
        </p>
      </div>
    </div>
  );
}
