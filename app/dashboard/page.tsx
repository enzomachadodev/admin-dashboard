import { Card } from "@/components/dashboard/card";
import { Chart } from "@/components/dashboard/chart";
import { Rightbar } from "@/components/dashboard/rightbar";
import { Transactions } from "@/components/dashboard/transactions";
import { cards } from "@/data/mock";

const Dashboard = () => {
	return (
		<div className="flex gap-5 mt-5">
			<div className="flex-[3] flex flex-col gap-5">
				<div className="flex gap-5 justify-between">
					{cards.map((item) => (
						<Card
							key={item.id}
							title={item.title}
							number={item.number}
							change={item.change}
						/>
					))}
				</div>
				<Transactions />
				<Chart />
			</div>
			<div className="flex-1">
				<Rightbar />
			</div>
		</div>
	);
};

export default Dashboard;

