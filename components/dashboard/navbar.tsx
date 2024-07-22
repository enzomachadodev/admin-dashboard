"use client";

import { usePathname } from "next/navigation";
import {
	MdSearch,
	MdOutlineChat,
	MdNotifications,
	MdPublic,
} from "react-icons/md";

export const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className="p-5 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-between">
			<div className="text-slate-800 dark:text-slate-100 font-bold capitalize">
				{pathname.split("/").pop()}
			</div>
			<div className="flex items-center gap-5">
				<div className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 p-2 rounded-lg">
					<MdSearch />
					<input
						type="text"
						placeholder="Search..."
						className="bg-transparent border-none focus:outline-none"
					/>
				</div>
				<div className="flex gap-5">
					<MdOutlineChat size={20} />
					<MdNotifications size={20} />
					<MdPublic size={20} />
				</div>
			</div>
		</div>
	);
};

