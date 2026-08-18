"use client";

import { motion } from "framer-motion";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";
import { hero } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <AnimatedGradientBackground
        gradientColors={["#09090b", "#1e1b4b", "#111827", "#000000"]}
        gradientStops={[40, 65, 85, 100]}
        Breathing
        breathingRange={8}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          {hero.badges.map((badge) => (
            <Badge key={badge} variant="outline" className="border-white/15 bg-white/5 text-zinc-300">
              {badge}
            </Badge>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-balance text-xl font-medium text-zinc-200 sm:text-2xl"
        >
          {hero.subhead}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 max-w-2xl text-balance text-base text-zinc-400 sm:text-lg"
        >
          {hero.supportingLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={hero.primaryCta.href}
            className={cn(buttonVariants({ size: "lg" }), "px-6")}
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
            )}
          >
            <GithubIcon className="size-4" />
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
