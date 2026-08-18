import { SectionHeading } from "@/components/shared/section-heading";
import { FaultInjectionDemo } from "@/components/shared/fault-injection-demo";
import { InlineCodeText } from "@/components/shared/inline-code-text";
import { faultInjection } from "@/lib/content";

export function FaultInjectionSection() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="The fault-injection self-check" title="Proving the test actually catches bugs" />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FaultInjectionDemo className="lg:sticky lg:top-24" />

          <ol className="flex flex-col gap-4">
            {faultInjection.steps.map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-xs font-semibold text-foreground">
                  {step.n}
                </span>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <p className="text-sm leading-relaxed text-zinc-300">
            <InlineCodeText text={faultInjection.verifiedCallout} />
          </p>
        </div>
      </div>
    </section>
  );
}
