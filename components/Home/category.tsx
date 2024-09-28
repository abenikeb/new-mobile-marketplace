import {
	FootprintsIcon,
	ShirtIcon,
	ShoppingBagIcon,
	WatchIcon,
} from "@components/shared/common";
import { ScrollBar, ScrollArea } from "@components/ui/scroll-area";

import Link from "next/link";
import React from "react";

const categories = [
	{
		name: "Clothing",
		icon: <ShirtIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />,
		bgClass: "bg-orange-50",
	},
	{
		name: "Shoes",
		icon: (
			<FootprintsIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />
		),
		bgClass: "bg-orange-50",
	},
	{
		name: "Bags",
		icon: (
			<ShoppingBagIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />
		),
		bgClass: "bg-orange-50",
	},
	{
		name: "Accessories",
		icon: <WatchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />,
		bgClass: "bg-orange-50",
	},
	{
		name: "T-Shirts",
		icon: <ShirtIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />,
		bgClass: "bg-orange-50",
	},
	{
		name: "Sneakers",
		icon: (
			<FootprintsIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />
		),
		bgClass: "bg-orange-50",
	},
	{
		name: "Backpacks",
		icon: (
			<ShoppingBagIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />
		),
		bgClass: "bg-orange-50",
	},
	{
		name: "Watches",
		icon: <WatchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />,
		bgClass: "bg-orange-50",
	},
];

const Category = () => {
	return (
		<div className="py-2 sm:px-4 px-3">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-between w-[100vw]">
					<h2 className="text-xl font-bold">Categories</h2>
					<Link
						href="#"
						className="text-orange-600 underline underline-offset-4"
						prefetch={false}>
						See all
					</Link>
				</div>
			</div>
			<ScrollArea className="w-full whitespace-nowrap">
				<div className="flex gap-4 py-4">
					{categories.map((category, index) => (
						<Link
							key={index}
							href="#"
							className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
							prefetch={false}>
							<div
								className={`${category.bgClass} rounded-full text-sm px-4 py-1.5 sm:p-6 flex items-center justify-center font-semibold`}>
								{/* {category.icon} */}
								{category.name}
							</div>
						</Link>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
};

export default Category;
