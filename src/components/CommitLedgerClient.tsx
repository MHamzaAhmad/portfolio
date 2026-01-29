"use client";

import { ActivityCalendar } from "react-activity-calendar";

interface Contribution {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

interface CommitLedgerClientProps {
    data: Contribution[];
}

export default function CommitLedgerClient({ data }: CommitLedgerClientProps) {
    if (data.length === 0) return null;

    const totalContributions = data.reduce((sum, day) => sum + day.count, 0);
    const startDate = new Date(data[0]?.date);
    const endDate = new Date(data[data.length - 1]?.date);

    const formatDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const timeframe = `${formatDate(startDate)} – ${formatDate(endDate)}`;

    return (
        <div className="pt-8">
            <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-xs text-[#999999]">
                    {totalContributions.toLocaleString()} contributions • {timeframe}
                </span>
            </div>
            <ActivityCalendar
                data={data}
                theme={{
                    light: ["#f0f0f0", "#d4d4d4", "#a3a3a3", "#737373", "#404040"],
                }}
                blockSize={10}
                blockMargin={4}
                blockRadius={2}
                fontSize={12}
                colorScheme="light"
                showWeekdayLabels={false}
                showTotalCount={false}
            />
        </div>
    );
}
