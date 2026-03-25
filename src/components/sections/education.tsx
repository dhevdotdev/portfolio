import { SectionHeader } from "@/components/ui/section-header";
import { TimelineItem } from "@/components/ui/timeline-item";
import type { Education as EducationType } from "@/lib/types";

export function Education({ education }: { education: EducationType }) {
  return (
    <div>
      <SectionHeader command="cat /etc/education" id="education" />
      <div className="space-y-0">
        {education.items.map((item) => (
          <TimelineItem
            key={item.institution}
            title={item.institution}
            subtitle={`${item.degree} | CGPA ${item.cgpa}`}
            dateRange={`${item.start} – ${item.end}`}
            description=""
          />
        ))}
      </div>
    </div>
  );
}
