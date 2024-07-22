import {
	MdDashboard,
	MdSupervisedUserCircle,
	MdShoppingBag,
	MdAttachMoney,
	MdWork,
	MdAnalytics,
	MdPeople,
	MdOutlineSettings,
	MdHelpCenter,
	MdLogout,
} from "react-icons/md";
import { MenuItem } from "./menu-item";
import Image from "next/image";

const menuItems = [
	{
		title: "Pages",
		list: [
			{
				title: "Dashboard",
				path: "/dashboard",
				icon: <MdDashboard />,
			},
			{
				title: "Users",
				path: "/dashboard/users",
				icon: <MdSupervisedUserCircle />,
			},
			{
				title: "Products",
				path: "/dashboard/products",
				icon: <MdShoppingBag />,
			},
			{
				title: "Transactions",
				path: "/dashboard/transactions",
				icon: <MdAttachMoney />,
			},
		],
	},
	{
		title: "Analytics",
		list: [
			{
				title: "Revenue",
				path: "/dashboard/revenue",
				icon: <MdWork />,
			},
			{
				title: "Reports",
				path: "/dashboard/reports",
				icon: <MdAnalytics />,
			},
			{
				title: "Teams",
				path: "/dashboard/teams",
				icon: <MdPeople />,
			},
		],
	},
	{
		title: "User",
		list: [
			{
				title: "Settings",
				path: "/dashboard/settings",
				icon: <MdOutlineSettings />,
			},
			{
				title: "Help",
				path: "/dashboard/help",
				icon: <MdHelpCenter />,
			},
		],
	},
];
export const Sidebar = () => {
	return (
		<div className="sticky top-10">
			<div className="flex items-center gap-5 mb-5">
				<Image
					src="/noavatar.png"
					alt="Profile pic"
					width={50}
					height={50}
					className="rounded-full object-cover"
				/>
				<div className="flex flex-col">
					<span className="font-medium">John Doe</span>
					<span className="text-slate-800 dark:text-slate-200 text-xs">
						Administrator
					</span>
				</div>
			</div>
			<ul>
				{menuItems.map((item) => (
					<li key={item.title}>
						<span className="text-slate-800 dark:text-slate-200 font-bold text-sm my-2">
							{item.title}
						</span>
						{item.list.map((item) => (
							<MenuItem
								key={item.title}
								path={item.path}
								icon={item.icon}
								title={item.title}
							/>
						))}
					</li>
				))}
			</ul>
			<form
				action={async () => {
					"use server";
					// await signOut();
				}}
			>
				<button className="p-5 my-1 flex items-center gap-2 cursor-pointer rounded-lg w-full hover:bg-slate-200 dark:hover:bg-slate-500 duration-200">
					<MdLogout />
					Logout
				</button>
			</form>
		</div>
	);
};

