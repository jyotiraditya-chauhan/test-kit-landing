import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col items-center text-center", className)}>
      {eyebrow && (
        <span className="mb-3 text-xs tracking-widest text-amber-400">
          [&nbsp;{eyebrow}&nbsp;]
        </span>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
