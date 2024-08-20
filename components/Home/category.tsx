import {
	FootprintsIcon,
	ShirtIcon,
	ShoppingBagIcon,
	WatchIcon,
} from "@components/shared/common";
import { ScrollBar, ScrollArea } from "@components/ui/scroll-area";

import Link from "next/link";
import React from "react";

const Category = () => {
	return (
		<div className="px-4 py-6 sm:px-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<h2 className="text-lg font-semibold">Categories</h2>
					<Link
						href="#"
						className="text-primary underline underline-offset-4"
						prefetch={false}>
						See all
					</Link>
				</div>
			</div>
			<ScrollArea className="w-96 whitespace-nowrap">
				<div className="flex gap-4 py-4">
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-primary rounded-full p-3 sm:p-4">
							<ShirtIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
						</div>
						<span className="text-sm font-medium">Clothing</span>
					</Link>
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-accent rounded-full p-3 sm:p-4">
							<FootprintsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
						</div>
						<span className="text-sm font-medium">Shoes</span>
					</Link>
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-secondary rounded-full p-3 sm:p-4">
							<ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
						</div>
						<span className="text-sm font-medium">Bags</span>
					</Link>
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-muted rounded-full p-3 sm:p-4">
							<WatchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
						</div>
						<span className="text-sm font-medium">Accessories</span>
					</Link>
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-primary rounded-full p-3 sm:p-4">
							<ShirtIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
						</div>
						<span className="text-sm font-medium">T-Shirts</span>
					</Link>
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-accent rounded-full p-3 sm:p-4">
							<FootprintsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
						</div>
						<span className="text-sm font-medium">Sneakers</span>
					</Link>
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-secondary rounded-full p-3 sm:p-4">
							<ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
						</div>
						<span className="text-sm font-medium">Backpacks</span>
					</Link>
					<Link
						href="#"
						className="flex flex-col items-center gap-2 border rounded-lg p-4"
						prefetch={false}>
						<div className="bg-muted rounded-full p-3 sm:p-4">
							<WatchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
						</div>
						<span className="text-sm font-medium">Watches</span>
					</Link>
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
};

export default Category;
