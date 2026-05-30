import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { BrandMark } from "@/components/brand-mark";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border/60 bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-4 font-pixel text-base tracking-tight transition-colors hover:text-primary"
        >
          <BrandMark className="size-6" />
          {site.name}
        </Link>

        <nav className="flex items-center gap-0.5">
          <Button asChild variant="ghost" size="icon">
            <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GitHubIcon className="size-[1.05rem]" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedInIcon className="size-[1.05rem]" />
            </a>
          </Button>
          <AnimatedThemeToggler
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          />
        </nav>
      </div>
    </header>
  );
}
