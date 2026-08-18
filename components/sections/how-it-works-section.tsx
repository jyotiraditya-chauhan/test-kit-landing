import { SectionHeading } from "@/components/shared/section-heading";
import { StepTimeline } from "@/components/shared/step-timeline";
import { howItWorks } from "@/lib/content";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="05 / how-it-works" title="Seven steps, every time" />

        <StepTimeline steps={howItWorks.steps} />

        <p className="mt-10 text-center text-sm font-medium text-muted-foreground">
          {howItWorks.callout}
        </p>
      </div>
    </section>
  );
}
