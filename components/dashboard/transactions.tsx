import Image from "next/image";
import { transactions } from "@/data/mock";

export const Transactions = () => {
	return (
		<div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-lg">
			<h2 className="mb-5 font-extralight text-slate-900 dark:text-slate-100">
				Latest Transactions
			</h2>
			<table className="w-full">
				<thead>
					<tr>
						<td>Name</td>
						<td>Status</td>
						<td>Date</td>
						<td>Amount</td>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction, index) => (
						<tr key={index}>
							<td>
								<div className="flex items-center gap-2">
									<Image
										src={transaction.user_image ?? "/noavatar.png"}
										alt=""
										width={40}
										height={40}
										className="object-cover rounded-full"
									/>
									{transaction.user_name}
								</div>
							</td>
							<td>
								<span className={`rounded-sm p-1 text-sm bg-amber-500/50`}>
									{transaction.status === "pending" ? "Pending" : "Cancelled"}
								</span>
							</td>
							<td>{transaction.date}</td>
							<td>${transaction.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

