import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-pixel text-base tracking-tight transition-colors hover:text-primary"
            >
              {site.name}
            </Link>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              full-stack &amp; infrastructure · {site.location.toLowerCase()}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Social" className="-ml-2 flex items-center gap-0.5 sm:ml-0">
            <Button asChild variant="ghost" size="icon">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="size-[1.05rem]" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="size-[1.05rem]" />
              </a>
            </Button>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <p className="sm:order-last">next.js · tailwind · self-hosted</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
