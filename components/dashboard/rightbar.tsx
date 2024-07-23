import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";
import { Button } from "../ui/button";

export const Rightbar = () => {
	return (
		<div className="fixed">
			<div className="bg-gradient-to-t from-slate-600 to-slate-400 dark:from-slate-400 dark:to-slate-600 py-5 px-6 rounded-lg mb-5 relative">
				<div className="flex flex-col gap-6">
					<span className="font-bold">🔥 Available Now</span>
					<h3 className="title">
						How to use the new version of the admin dashboard?
					</h3>
					<span className="text-slate-900 dark:text-slate-100 font-medium text-xs">
						Takes 4 minutes to learn
					</span>
					<p className="text-slate-900 dark:text-slate-100 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit eius libero perspiciatis recusandae possimus.
					</p>
					<Button className="gap-2 w-max">
						<MdPlayCircleFilled />
						Watch
					</Button>
				</div>
			</div>
		</div>
	);
};

