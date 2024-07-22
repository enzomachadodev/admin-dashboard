"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

interface MenuItemProps {
	path: string;
	icon: React.JSX.Element;
	title: string;
}

export const MenuItem = ({ path, icon, title }: MenuItemProps) => {
	const pathname = usePathname();

	return (
		<Link
			href={path}
			className={cn(
				"p-5 flex items-center gap-2 my-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 duration-200",
				pathname === path && "bg-slate-200 dark:bg-slate-800"
			)}
		>
			{icon}
			{title}
		</Link>
	);
};

