"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const GOOD_LINE = "  if (weight <= 0) throw new Error('weight must be positive');";
const FAULTY_LINE = "  if (weight < 0) throw new Error('weight must be positive');";

const CODE_BEFORE = "function calculateShippingCost(weight, expedited) {";
const CODE_AFTER = `  const base = weight * 2.5;
  return expedited ? base * 1.5 : base;
}`;

type DemoState = "pass" | "fault" | "fail" | "revert";

const sequence: DemoState[] = ["pass", "fault", "fail", "revert"];
const STEP_DURATION_MS = 2200;

export function FaultInjectionDemo({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sequence.length);
    }, STEP_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const state = sequence[index];
  const isFaulty = state === "fault" || state === "fail";
  const status: "pass" | "fail" = state === "fail" ? "fail" : "pass";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-zinc-950 font-mono text-sm",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="text-xs text-zinc-500">shipping.js</span>
        <StatusPill status={status} />
      </div>

      <pre className="whitespace-pre-wrap break-words px-4 py-4 text-xs leading-relaxed text-zinc-300 sm:text-sm">
        <code>
          {CODE_BEFORE}
          {"\n"}
          <motion.span
            animate={{
              backgroundColor: isFaulty ? "rgba(248,113,113,0.15)" : "rgba(0,0,0,0)",
              color: isFaulty ? "#f87171" : "#d4d4d8",
            }}
            transition={{ duration: 0.4 }}
            className="-mx-1 block rounded px-1"
          >
            {isFaulty ? FAULTY_LINE : GOOD_LINE}
          </motion.span>
          {CODE_AFTER}
        </code>
      </pre>
    </div>
  );
}

function StatusPill({ status }: { status: "pass" | "fail" }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={status}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
          status === "pass"
            ? "bg-emerald-500/15 text-emerald-400"
            : "bg-red-500/15 text-red-400"
        )}
      >
        {status === "pass" ? <Check className="size-3.5" /> : <X className="size-3.5" />}
        {status === "pass" ? "PASS" : "FAIL"}
      </motion.span>
    </AnimatePresence>
  );
}
