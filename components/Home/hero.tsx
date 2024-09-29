"use client";

import { useState, FormEvent } from "react";
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
			{/* <section className="py-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white"> */}
			<section className="relative py-8 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 text-white overflow-hidden">
				{/* Background SVG pattern */}
				<div className="absolute -bottom-44 inset-0 pointer-events-none">
					<svg
						className="w-full h-full"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 800 400"
						fill="none">
						<path
							d="M0 200 Q150 50 400 200 T800 200 V400 H0 Z"
							fill="rgba(255, 255, 255, 0.1)"
						/>
					</svg>
				</div>

				<div className="container relative mx-auto px-4 text-center">
					<h1 className="text-4xl font-extrabold mb-4">
						Welcome to <span className="text-orange-300">TechMarket</span>
					</h1>
					<p className="font-light mb-10 max-w-xl mx-auto">
						Discover the latest and greatest in electronics, gadgets, and more.
					</p>

					{/* Search Bar */}
					<form
						onSubmit={handleSearch}
						className="md:w-2/3 lg:w-1/2 mx-auto mb-8 relative z-10">
						<div className="relative">
							<Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
							<Input
								type="search"
								placeholder="Search for products..."
								className="w-full pl-12 pr-28 py-4 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 transition-all duration-300"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<Button
								type="submit"
								className="absolute right-0 top-1/2 transform -translate-y-1/2 px-8 py-3 bg-orange-300 text-indigo-800 rounded-full hover:bg-yellow-500 transition-all duration-300">
								Search
							</Button>
						</div>
					</form>

					{/* Explore Button */}
					<Button
						size="lg"
						variant="secondary"
						className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 z-10 relative"
						asChild>
						<Link href="/product">
							Explore All Products
							<ChevronRight className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
};

export default Hero;
