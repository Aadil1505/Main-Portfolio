import { cn } from "@/lib/utils";

// The site mark: the Departure Mono "A" glyph (same outline as app/icon.svg)
// on an azure tile. Colors route through tokens so it adapts in dark mode.
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      role="img"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <rect width="512" height="512" rx="96" className="fill-primary" />
      <path
        transform="translate(162.25 106) scale(0.75 -0.75) translate(-50 -400)"
        d="M50 300V0H100V150H250V0H300V300H250V200H100V300ZM150 400V350H200V400ZM100 350V300H150V350ZM200 350V300H250V350Z"
        className="fill-primary-foreground"
      />
    </svg>
  );
}
