import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionHeading } from "@/components/shared/section-heading";
import { capabilities } from "@/lib/content";

export function CapabilitiesSection() {
  const rows = Math.max(capabilities.does.length, capabilities.doesnt.length);

  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="03 / does-and-doesnt" title="What it does and doesn't" />
        <p className="mx-auto mb-10 max-w-2xl text-balance text-center text-muted-foreground">
          {capabilities.intro}
        </p>

        <div className="overflow-hidden rounded-none border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Does</TableHead>
                <TableHead className="w-1/2">Doesn&apos;t</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: rows }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="whitespace-normal align-top">
                    {capabilities.does[i] && (
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                        {capabilities.does[i]}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="whitespace-normal align-top">
                    {capabilities.doesnt[i] && (
                      <span className="flex items-start gap-2">
                        <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                        {capabilities.doesnt[i]}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
