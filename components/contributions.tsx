import { ArrowUpRight } from "lucide-react";

import { ContributionCalendar } from "@/components/contribution-calendar";
import { getContributions } from "@/lib/github-contributions";
import { site } from "@/lib/site";

const username = site.links.github.replace(/\/+$/, "").split("/").pop() ?? "";

export async function Contributions() {
  const data = await getContributions(username);

  if (!data || data.activities.length === 0) {
    return null;
  }

  const { activities, total } = data;

  return (
    <section id="contributions" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          // contributions
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-pixel text-2xl leading-tight tracking-tight uppercase sm:text-3xl md:text-4xl">
            Always <span className="text-primary">building</span>.
          </h2>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            @{username}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="mt-10 overflow-hidden">
          <ContributionCalendar data={activities} total={total} />
        </div>
      </div>
    </section>
  );
}
