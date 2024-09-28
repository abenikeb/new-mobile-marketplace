import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	HomeIcon,
	ListIcon,
	MenuIcon,
	MountainIcon,
	ShoppingCartIcon,
	UserIcon,
} from "@components/shared/common";

const Header = () => {
	return (
		<header className="bg-background border-b flex items-center justify-between px-4 py-2 sm:px-6 fixed top-0 right-0 left-0">
			<Link href="#" className="flex items-center gap-2" prefetch={false}>
				<MountainIcon className="w-6 h-6" />
				<span className="text-lg font-semibold">Biisho</span>
			</Link>
			<Sheet>
				{/* <SheetTrigger asChild>
					<Button variant="outline" size="icon" className="sm:hidden">
						<MenuIcon className="w-6 h-6" />
						<span className="sr-only">Toggle navigation</span>
					</Button>
				</SheetTrigger> */}
				<Button variant="ghost" size="icon">
					<Search className="h-5 w-5" />
					<span className="sr-only">Search</span>
				</Button>
				{/* <SheetContent side="right" className="sm:hidden">
					<nav className="grid gap-4 p-4">
						<Link
							href="#"
							className="flex items-center gap-2 text-lg font-medium"
							prefetch={false}>
							<HomeIcon className="w-5 h-5" />
							Home
						</Link>
						<Link
							href="#"
							className="flex items-center gap-2 text-lg font-medium"
							prefetch={false}>
							<ListIcon className="w-5 h-5" />
							Categories
						</Link>
						<Link
							href="#"
							className="flex items-center gap-2 text-lg font-medium"
							prefetch={false}>
							<ShoppingCartIcon className="w-5 h-5" />
							Cart
						</Link>
						<Link
							href="#"
							className="flex items-center gap-2 text-lg font-medium"
							prefetch={false}>
							<UserIcon className="w-5 h-5" />
							Profile
						</Link>
					</nav>
				</SheetContent> */}
			</Sheet>
			<nav className="hidden sm:flex items-center gap-4">
				<Link
					href="#"
					className="flex items-center gap-2 text-lg font-medium"
					prefetch={false}>
					<HomeIcon className="w-5 h-5" />
					Home
				</Link>
				<Link
					href="#"
					className="flex items-center gap-2 text-lg font-medium"
					prefetch={false}>
					<ListIcon className="w-5 h-5" />
					Categories
				</Link>
				<Link
					href="#"
					className="flex items-center gap-2 text-lg font-medium"
					prefetch={false}>
					<ShoppingCartIcon className="w-5 h-5" />
					Cart
				</Link>
				<Link
					href="#"
					className="flex items-center gap-2 text-lg font-medium"
					prefetch={false}>
					<UserIcon className="w-5 h-5" />
					Profile
				</Link>
			</nav>
		</header>
	);
};

export default Header;
