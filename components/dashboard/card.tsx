import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

interface CardProps {
	title: string;
	number: number;
	change: number;
}

export const Card = ({ title, number, change }: CardProps) => {
	return (
		<div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-slate-200 dark:hover-bg-slate-800 duration-200">
			<MdSupervisedUserCircle size={24} />
			<div className="flex flex-col gap-5">
				<span className="title">{title}</span>
				<span className="text-2xl font-medium">{number}</span>
				<span className="text-sm font-light">
					<span className={change > 0 ? "text-green-400" : "text-red-400"}>
						{change}%
					</span>
					{change > 0 ? "more" : "less"} than previous week
				</span>
			</div>
		</div>
	);
};

