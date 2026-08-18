"use client";

import { motion } from "framer-motion";

interface StatCalloutProps {
  value: string;
  label: string;
  index?: number;
}

export function StatCallout({ value, label, index = 0 }: StatCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-xl border border-border bg-card/50 p-6 text-center"
    >
      <div className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}
