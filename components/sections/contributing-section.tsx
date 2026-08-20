import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/shared/github-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import { contributing, site } from "@/lib/content";

export function ContributingSection() {
  return (
    <section id="contribute" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow={contributing.eyebrow} title={contributing.title} />

        <p className="mx-auto mb-10 max-w-2xl text-balance text-center text-sm text-muted-foreground">
          {contributing.intro}
        </p>

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {contributing.items.map((item, i) => (
            <div key={item.title} className="bg-background p-6">
              <span className="text-xs text-amber-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`${site.repoUrl}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 rounded-none")}
          >
            <GithubIcon className="size-4" />
            {contributing.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
