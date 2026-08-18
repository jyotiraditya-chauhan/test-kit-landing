import { Bug, ShieldCheck } from "lucide-react";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/shared/github-icon";
import { CodeBlock } from "@/components/shared/code-block";
import { cn } from "@/lib/utils";
import { hero, install } from "@/lib/content";

const ICONS = {
  shield: ShieldCheck,
  bug: Bug,
} as const;

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatedGradientBackground
        gradientColors={["#09090b", "#1e1b4b", "#111827", "#000000"]}
        gradientStops={[40, 65, 85, 100]}
        Breathing
        breathingRange={8}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-[0.07] [background-size:20px_20px]" />

      <main className="relative z-10 pb-20 pt-28">
        <div
          role="heading"
          aria-level={1}
          aria-label={hero.ariaLabel}
          className="flex w-full flex-col justify-center gap-2 px-4 sm:px-6 md:items-center"
        >
          <div aria-hidden="true" className="contents">
            {hero.rows.map((row, i) => (
              <div key={i} className="md:flex md:items-center md:gap-6">
                {i === 0 && "aside" in row && row.aside && (
                  <p className="max-w-[220px] text-start text-xs leading-5 text-muted-foreground md:max-w-[180px] md:text-right md:text-sm">
                    {row.aside}
                  </p>
                )}

                <div className="flex flex-wrap items-center font-bold uppercase leading-none tracking-wider text-white">
                  {row.words.map((word, wi) =>
                    "text" in word ? (
                      <span key={wi} className="text-6xl md:text-7xl xl:text-[7rem]">
                        {word.text}
                      </span>
                    ) : (
                      (() => {
                        const Icon = ICONS[word.icon];
                        return (
                          <Icon
                            key={wi}
                            className="size-14 shrink-0 text-amber-400 md:size-20 xl:size-28"
                            strokeWidth={1.5}
                          />
                        );
                      })()
                    )
                  )}
                </div>

                {i === 1 && "aside" in row && row.aside && (
                  <p className="max-w-[250px] pt-4 text-xs leading-5 text-muted-foreground md:max-w-[180px] md:pt-8 md:text-sm">
                    {row.aside}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-3 md:mx-8 md:flex md:justify-end">
            <Separator className="mx-auto my-6 w-full max-w-3xl" />
            <div className="whitespace-nowrap text-xs uppercase tracking-wide text-muted-foreground md:text-sm">
              {hero.metaLeft}
            </div>
            <div className="flex w-full items-end gap-3">
              <span className="text-2xl font-thin md:text-4xl">{hero.signature.thin}</span>
              <span className="text-3xl font-bold italic text-amber-400 md:text-5xl">
                {hero.signature.accent}
              </span>
            </div>
          </div>
        </div>

        <div className="items-end gap-6 px-4 pt-12 sm:px-6 md:flex md:px-20">
          <CodeBlock code={install.interactive} filename="install.sh" className="mb-8 w-full max-w-md md:mb-0" />
          <p className="max-w-md pt-8 text-xs leading-5 text-muted-foreground md:text-sm">
            {hero.panelCaption}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 px-4 sm:px-6 sm:flex-row sm:justify-center">
          <a href={hero.primaryCta.href} className={cn(buttonVariants({ size: "lg" }), "rounded-none px-6")}>
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 rounded-none border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
            )}
          >
            <GithubIcon className="size-4" />
            {hero.secondaryCta.label}
          </a>
        </div>

        <div className="absolute bottom-8 right-8 md:right-12">
          <a
            href={hero.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className="text-white/70 transition-colors hover:text-white"
          >
            <GithubIcon className="size-6" />
          </a>
        </div>
      </main>
    </section>
  );
}
