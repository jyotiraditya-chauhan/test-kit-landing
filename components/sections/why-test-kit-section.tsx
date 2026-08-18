import { SectionHeading } from "@/components/shared/section-heading";
import { whyTestKit } from "@/lib/content";

export function WhyTestKitSection() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow={whyTestKit.eyebrow} title={whyTestKit.title} />

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {whyTestKit.items.map((item, i) => (
            <div key={item.title} className="bg-background p-6">
              <span className="text-xs text-amber-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
