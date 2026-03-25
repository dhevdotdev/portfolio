import { SectionHeader } from "@/components/ui/section-header";
import type { Skills as SkillsType } from "@/lib/types";

export function Skills({ skills }: { skills: SkillsType }) {
  return (
    <div>
      <SectionHeader command="ls -la skills/" id="skills" />
      <div className="bg-mantle border border-surface0 rounded-md p-4 overflow-x-auto">
        <div className="text-xs text-overlay0 mb-3">
          total {skills.groups.reduce((acc, g) => acc + g.items.length, 0)}
        </div>
        {skills.groups.map((group) => (
          <div key={group.label} className="mb-3 last:mb-0">
            <div className="flex items-baseline text-sm">
              <span className="text-blue w-4">d</span>
              <span className="text-overlay0 w-24 sm:w-32">rwxr-xr-x</span>
              <span className="text-peach">{group.label}/</span>
            </div>
            {group.items.map((item) => (
              <div key={item} className="flex items-baseline text-sm pl-4">
                <span className="text-overlay0 w-4">-</span>
                <span className="text-overlay0 w-24 sm:w-32">rw-r--r--</span>
                <span className="text-subtext0">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
