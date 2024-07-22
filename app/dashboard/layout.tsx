import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="flex">
			<div className="flex-1 bg-slate-100 dark:bg-slate-900 p-5 min-h-screen">
				<Sidebar />
			</div>
			<div className="flex-[4] p-5">
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default DashboardLayout;

