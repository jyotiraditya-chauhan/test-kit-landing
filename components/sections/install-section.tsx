import { SectionHeading } from "@/components/shared/section-heading";
import { CodeBlock } from "@/components/shared/code-block";
import { install } from "@/lib/content";

export function InstallSection() {
  return (
    <section id="install" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Install" title="Two commands, either way" />

        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">Inside Claude Code</p>
            <CodeBlock code={install.interactive} />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">Or non-interactively</p>
            <CodeBlock code={install.nonInteractive} />
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-3 text-sm text-muted-foreground">
            Then just ask, in plain language, no explicit command needed:
          </p>
          <div className="flex flex-col gap-2">
            {install.tryItPrompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-muted-foreground"
              >
                &quot;{prompt}&quot;
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
