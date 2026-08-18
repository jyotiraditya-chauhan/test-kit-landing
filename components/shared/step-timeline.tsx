"use client";

import { motion } from "framer-motion";

interface Step {
  n: number;
  title?: string;
  description: string;
}

interface StepTimelineProps {
  steps: readonly Step[];
}

export function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <ol className="mx-auto flex max-w-2xl flex-col">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <motion.li
            key={step.n}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex gap-6"
          >
            <div className="flex flex-col items-center">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted font-mono text-sm font-semibold text-foreground">
                {step.n}
              </span>
              {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
            </div>

            <div className={isLast ? "pb-0" : "pb-10"}>
              {step.title && <h3 className="text-base font-semibold">{step.title}</h3>}
              <p className={`text-sm text-muted-foreground ${step.title ? "mt-1.5" : ""}`}>
                {step.description}
              </p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
