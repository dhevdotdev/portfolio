import { SectionHeader } from "@/components/ui/section-header";

export function FeaturedBlog() {
  return (
    <div>
      <SectionHeader command="tail -f ~/blog/feed.log" id="blog" />
      <p className="text-sm text-overlay0">waiting for data...</p>
    </div>
  );
}
