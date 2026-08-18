"use client";

import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GithubIcon } from "@/components/shared/github-icon";
import { cn } from "@/lib/utils";
import { hero, nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-base font-semibold tracking-tight">
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={hero.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <GithubIcon className="size-4" />
          </a>
          <a href={nav.installCta.href} className={cn(buttonVariants({ size: "sm" }))}>
            {nav.installCta.label}
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-10 flex flex-col gap-1 px-4">
              {nav.links.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <GithubIcon className="size-4" />
                Star on GitHub
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
