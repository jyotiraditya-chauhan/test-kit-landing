import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/copy-button";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";
import { hero, install, site } from "@/lib/content";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-muted/20 py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-[0.07] [background-size:20px_20px]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Install {site.name}
        </h2>
        <p className="mt-3 max-w-lg text-balance text-muted-foreground">
          Five stack-aware skills, one marketplace, zero setup beyond a single command.
        </p>

        <div className="mt-8 flex w-full max-w-md items-center justify-between gap-3 rounded-none border border-border bg-zinc-950 px-4 py-3 font-mono text-xs text-zinc-300 sm:text-sm">
          <code className="truncate">{install.interactive.split("\n")[0]}</code>
          <CopyButton text={install.interactive} />
        </div>

        <a
          href={hero.secondaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "mt-4 gap-2 rounded-none")}
        >
          <GithubIcon className="size-4" />
          {hero.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
