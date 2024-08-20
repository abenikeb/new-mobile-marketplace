import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HomeIcon, ListIcon, ShoppingCartIcon, UserIcon } from "./common";

const Footer = () => {
	return (
		<div>
			{" "}
			<nav className="bg-background border-t flex justify-around py-2 fixed bottom-0 w-full">
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<HomeIcon className="w-6 h-6" />
					<span className="text-xs">Home</span>
				</Link>
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<ListIcon className="w-6 h-6" />
					<span className="text-xs">Categories</span>
				</Link>
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<ShoppingCartIcon className="w-6 h-6" />
					<span className="text-xs">Cart</span>
				</Link>
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<UserIcon className="w-6 h-6" />
					<span className="text-xs">Profile</span>
				</Link>
			</nav>
		</div>
	);
};

export default Footer;
