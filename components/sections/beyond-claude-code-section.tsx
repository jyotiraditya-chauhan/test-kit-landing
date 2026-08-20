import { SectionHeading } from "@/components/shared/section-heading";
import { CodeBlock } from "@/components/shared/code-block";
import { beyondClaudeCode } from "@/lib/content";

export function BeyondClaudeCodeSection() {
  return (
    <section id="beyond-claude-code" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow={beyondClaudeCode.eyebrow} title={beyondClaudeCode.title} />

        <p className="mx-auto mb-10 max-w-2xl text-balance text-center text-sm text-muted-foreground">
          {beyondClaudeCode.intro}
        </p>

        <div className="flex flex-col gap-6">
          {beyondClaudeCode.commands.map((command) => (
            <div key={command.label}>
              <p className="mb-2 text-sm font-medium text-muted-foreground">{command.label}</p>
              <CodeBlock code={command.code} />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          {beyondClaudeCode.caveat}
        </p>
      </div>
    </section>
  );
}
