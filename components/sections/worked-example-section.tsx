import { SectionHeading } from "@/components/shared/section-heading";
import { CodeBlock } from "@/components/shared/code-block";
import { InlineCodeText } from "@/components/shared/inline-code-text";
import { workedExample } from "@/lib/content";

export function WorkedExampleSection() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="07 / example" title="What a request actually looks like" />

        <div className="mb-6 rounded-none border border-border bg-card/50 px-5 py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Prompt: </span>
            &quot;{workedExample.prompt}&quot;
          </p>
        </div>

        <CodeBlock code={workedExample.code} filename={workedExample.filename} />

        <div className="mt-6 rounded-none border border-border bg-muted/30 px-5 py-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <InlineCodeText text={workedExample.response} />
          </p>
        </div>
      </div>
    </section>
  );
}
