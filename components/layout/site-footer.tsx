import { site, footer } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-sm sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="font-semibold text-foreground">{site.name}</span>
          <span aria-hidden>·</span>
          <a
            href={site.repoLicenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            {site.license} Licensed
          </a>
        </div>

        <div className="flex items-center gap-6 text-muted-foreground">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <span>v{site.version}</span>
        </div>
      </div>
    </footer>
  );
}
