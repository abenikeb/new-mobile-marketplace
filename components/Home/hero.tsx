"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};
	return (
		<div>
			<section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Welcome to TechMarket</h1>
					<p className="text-xl mb-8">
						Discover the latest and greatest in electronics
					</p>
					<form onSubmit={handleSearch} className="flex-1 md:flex-none">
						<div className="relative">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search for products..."
								className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-orange-300 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<Button
								type="submit"
								className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-2xl px-6 py-2 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
								Search
							</Button>
						</div>
					</form>
					<br />
					<Button
						size="lg"
						variant="secondary"
						className="bg-gray-200 hover:bg-amber-600 text-gray-500"
						asChild>
						<Link href="/products">
							Explore All Products
							<ChevronRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
};

export default Hero;
