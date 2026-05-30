import type { Activity } from "@/components/kibo-ui/contribution-graph";

export type ContributionData = {
  activities: Activity[];
  total: number;
};

const LEVEL: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

type ApiDay = {
  date: string;
  contributionCount: number;
  contributionLevel: keyof typeof LEVEL;
};

/**
 * Fetches the last year of GitHub contributions for `username` on the server,
 * cached via Next's data cache and revalidated daily. The upstream is a
 * community-run service (the previous one, jogruber, went offline), so a dead
 * API must never break the page: on any failure we return null and the caller
 * skips rendering the section.
 */
export async function getContributions(
  username: string,
): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.deno.dev/${username}.json?flat=true`,
      { next: { revalidate: 86_400 } },
    );

    if (!res.ok) {
      throw new Error(`Contributions API responded ${res.status}`);
    }

    const json = (await res.json()) as {
      contributions: ApiDay[];
      totalContributions?: number;
    };

    const activities: Activity[] = json.contributions.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: LEVEL[day.contributionLevel] ?? 0,
    }));

    if (activities.length === 0) {
      throw new Error("Contributions API returned no days");
    }

    const total =
      json.totalContributions ??
      activities.reduce((sum, day) => sum + day.count, 0);

    return { activities, total };
  } catch {
    return null;
  }
}
