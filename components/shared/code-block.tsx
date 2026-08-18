import { CopyButton } from "@/components/shared/copy-button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, filename, className }: CodeBlockProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-zinc-950", className)}>
      {filename && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="font-mono text-xs text-zinc-500">{filename}</span>
          <CopyButton text={code} />
        </div>
      )}
      <div className="relative">
        {!filename && <CopyButton text={code} className="absolute right-3 top-3" />}
        <pre className="overflow-x-auto px-4 py-4 text-sm leading-relaxed">
          <code className="font-mono text-zinc-300">{code}</code>
        </pre>
      </div>
    </div>
  );
}
