"use client";

import { Bar, BarChart } from "recharts";

import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "../ui/chart";
import { charts } from "@/data/mock";

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#2563eb",
	},
	mobile: {
		label: "Mobile",
		color: "#60a5fa",
	},
} satisfies ChartConfig;

export const Chart = () => {
	return (
		<div className="h-[450px] bg-slate-100 dark:bg-slate-900 p-5 rounded-lg">
			<h2 className="text-slate-900 dark:text-slate-100 font-extralight mb-5">
				Weekly Recap
			</h2>
			<ChartContainer config={chartConfig}>
				<BarChart data={charts}>
					<Bar dataKey="value" />
					<ChartTooltip content={<ChartTooltipContent />} />
				</BarChart>
			</ChartContainer>
		</div>
	);
};

