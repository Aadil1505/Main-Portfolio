import { Button } from "@/components/ui/button";
import {
  Ticker,
  TickerPrice,
  TickerPriceChange,
  TickerSymbol,
} from "@/components/kibo-ui/ticker";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// A playful "$AADIL, up and to the right" chip. Random arbitrary price; the
// green up-arrow is a deliberate exception to the one-azure rule (same lane the
// user approved for the contribution graph).
const price = Math.round((Math.random() * 400 + 120) * 100) / 100;
const change = Math.round((Math.random() * 7 + 1.2) * 100) / 100;

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-6 py-14 text-center sm:py-16">
        <Ticker className="cursor-default gap-2 font-mono text-base">
          <TickerSymbol symbol="AADIL" className="font-pixel text-foreground" />
          <TickerPrice price={price} />
          <TickerPriceChange change={change} isPercent />
        </Ticker>

        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-sm"
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

        <nav aria-label="Social" className="flex items-center gap-1">
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
    </footer>
  );
}
