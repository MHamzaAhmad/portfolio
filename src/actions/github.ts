"use server";

interface Contribution {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export async function getGitHubContributions(months: number = 10): Promise<Contribution[]> {
    const response = await fetch(
        "https://github-contributions-api.jogruber.de/v4/MHamzaAhmad?y=last",
        { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
        return [];
    }

    const data = await response.json();
    const contributions: Contribution[] = data.contributions || [];

    // Filter to last N months
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);

    return contributions.filter((day) => new Date(day.date) > cutoff);
}
