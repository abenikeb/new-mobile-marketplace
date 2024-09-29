"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	ChevronRight,
	Search,
	Laptop,
	User,
	Menu,
	Smartphone,
	Headphones,
	Camera,
	Tv,
	Watch,
	Gamepad,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const categories = [
	{ name: "Laptops", icon: Laptop },
	{ name: "Smartphones", icon: Smartphone },
	{ name: "Audio", icon: Headphones },
	{ name: "Cameras", icon: Camera },
	{ name: "TVs", icon: Tv },
	{ name: "Wearables", icon: Watch },
	{ name: "Gaming", icon: Gamepad },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Implement search functionality here
		console.log("Searching for:", searchQuery);
	};
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex flex-col md:flex-row h-auto md:h-16 items-center py-2 md:py-0">
				<div className="flex items-center w-screen md:w-auto justify-between md:justify-start px-2">
					<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden text-navy-700">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="w-[300px] sm:w-[400px] bg-amber-50">
							<nav className="flex flex-col gap-4">
								{categories.map((category) => (
									<Link
										key={category.name}
										href={`/category/${category.name.toLowerCase()}`}
										className="flex items-center space-x-2 text-lg text-navy-700 hover:text-amber-600 transition-colors">
										<category.icon className="h-6 w-6" />
										<span>{category.name}</span>
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
					<Link href="/" className="flex items-center space-x-2 text-navy-700">
						<Laptop className="h-6 w-6 text-amber-500" />
						<span className="font-bold text-xl">TechMarket</span>
					</Link>
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden text-navy-700">
						<User className="h-6 w-6" />
						<span className="sr-only">User account</span>
					</Button>
				</div>
				<nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex">
					{categories.map((category) => (
						<Button asChild variant="ghost" key={category.name}>
							<Link
								href={`/category/${category.name.toLowerCase()}`}
								className="text-sm font-medium transition-colors">
								{category.name}
							</Link>
						</Button>
					))}
				</nav>
				{/* <div className="flex items-center space-x-4 mt-2 md:mt-0 md:ml-auto w-full md:w-auto">
					<Button variant="ghost" size="icon" className="hidden md:flex">
						<User className="h-5 w-5" />
						<span className="sr-only">User account</span>
					</Button>
				</div> */}
			</div>
		</header>
	);
};

export default Header;
