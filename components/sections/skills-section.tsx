import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/lib/content";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Five skills" title="One skill per stack, matched by detection" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((skill) => (
            <Card key={skill.id} className="flex flex-col gap-3 bg-card/50">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="font-mono text-base">{skill.id}</CardTitle>
                  {"badge" in skill && skill.badge && (
                    <Badge variant="secondary">{skill.badge}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3 text-sm text-muted-foreground">
                <code className="w-fit rounded bg-muted px-2 py-1 font-mono text-xs text-foreground">
                  {skill.command}
                </code>
                <p>
                  <span className="text-foreground">Fires on: </span>
                  {skill.firesOn}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tooling.map((tool) => (
                    <Badge key={tool} variant="outline" className="font-normal">
                      {tool}
                    </Badge>
                  ))}
                </div>
                {"note" in skill && skill.note && <p className="text-xs">{skill.note}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">{skills.subNote}</p>

        <Accordion className="mx-auto mt-10 max-w-2xl">
          <AccordionItem value="flutter-layers">
            <AccordionTrigger className="text-sm">
              flutter-testing: unit, widget, golden &amp; integration layers
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 font-medium">Layer</th>
                      <th className="px-4 py-2 font-medium">Purpose</th>
                      <th className="px-4 py-2 font-medium">Tooling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.flutterLayers.map((row) => (
                      <tr key={row.layer} className="border-t border-border">
                        <td className="px-4 py-3 align-top font-medium">{row.layer}</td>
                        <td className="px-4 py-3 align-top text-muted-foreground">{row.purpose}</td>
                        <td className="px-4 py-3 align-top text-muted-foreground">{row.tooling}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
