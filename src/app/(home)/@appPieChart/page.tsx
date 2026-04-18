"use client";

import { TrendingUp } from "lucide-react";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
	{ browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
	{ browser: "safari", visitors: 200, fill: "var(--color-safari)" },
	{ browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
	{ browser: "edge", visitors: 173, fill: "var(--color-edge)" },
	{ browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "#ef4444",
	},
	safari: {
		label: "Safari",
		color: "#10b981",
	},
	firefox: {
		label: "Firefox",
		color: "#eab308",
	},
	edge: {
		label: "Edge",
		color: "#3b82f6",
	},
	other: {
		label: "Other",
		color: "#9ca3af",
	},
} satisfies ChartConfig;

export default function appPieChart() {
	const totalVisitors = React.useMemo(() => {
		return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
	}, []);

	return (
		<>
			<h1 className="mb-10 text-lg font-medium">Traffic</h1>

			<div className="flex flex-col">
				<ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px] h-full w-full!">
					<PieChart>
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<ChartLegend />
						<Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
												<tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
													{totalVisitors.toLocaleString()}
												</tspan>
												<tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
													Visitors
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
				<div className="mt-5 flex-col gap-2 text-sm text-center">
					<div className="flex items-center justify-center gap-2 leading-none font-medium mb-3">
						Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
					</div>
					<div className="leading-none text-muted-foreground">Showing total visitors for the last 6 months</div>
				</div>
			</div>
		</>
	);
}
