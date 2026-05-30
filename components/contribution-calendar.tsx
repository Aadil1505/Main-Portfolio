"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { format, parseISO } from "date-fns";

import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";

type Tip = { text: string; x: number; y: number };

function tipText(activity: Activity) {
  const count =
    activity.count === 0
      ? "No contributions"
      : `${activity.count} contribution${activity.count === 1 ? "" : "s"}`;
  return `${count} on ${format(parseISO(activity.date), "MMM d, yyyy")}`;
}

export function ContributionCalendar({
  data,
  total,
}: {
  data: Activity[];
  total: number;
}) {
  const [tip, setTip] = useState<Tip | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // When the chart overflows on narrow screens, start scrolled to the right
  // (the most recent dates) so older history is reached by scrolling left.
  useEffect(() => {
    const scroller =
      rootRef.current?.querySelector<HTMLElement>(".overflow-x-auto");
    if (scroller) scroller.scrollLeft = scroller.scrollWidth;
  }, []);

  function show(activity: Activity, el: SVGRectElement) {
    const rect = el.getBoundingClientRect();
    setTip({
      text: tipText(activity),
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  }

  return (
    <div className="relative" ref={rootRef}>
      <ContributionGraph
        data={data}
        totalCount={total}
        labels={{ totalCount: "{{count}} contributions" }}
        className="w-full text-xs text-muted-foreground"
      >
        <ContributionGraphCalendar onMouseLeave={() => setTip(null)}>
          {({ activity, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              activity={activity}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
              onMouseEnter={(event) => show(activity, event.currentTarget)}
              onFocus={(event) => show(activity, event.currentTarget)}
            />
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="mt-1 items-center font-mono">
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>

      {/* Portaled to <body> so the blur-fade wrapper's transform/filter
          containing block can't displace this fixed-positioned tooltip. */}
      {tip && typeof document !== "undefined"
        ? createPortal(
            <div
              role="tooltip"
              style={{ left: tip.x, top: tip.y }}
              className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-[calc(100%+8px)] rounded-md border border-border bg-popover px-2 py-1 font-mono text-xs whitespace-nowrap text-popover-foreground shadow-md"
            >
              {tip.text}
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
