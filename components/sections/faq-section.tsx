import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { faq } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeading eyebrow="09 / faq" title="Common questions" />

        <Accordion>
          {faq.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
