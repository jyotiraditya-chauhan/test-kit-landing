import { SectionHeading } from "@/components/shared/section-heading";
import { StatCallout } from "@/components/shared/stat-callout";
import { why } from "@/lib/content";

export function WhySection() {
  return (
    <section id="why" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why this exists" title="AI-written tests fail in a specific way" />

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {why.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {why.stats.map((stat, index) => (
            <StatCallout key={stat.label} value={stat.value} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
