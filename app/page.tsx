import Link from "next/link";
import { Laptop } from "lucide-react";
import AllProducts from "@components/Home/Products/allProducts";
import TrendingProduct from "@components/Home/Products/trendingProduct";
import Category from "@components/Home/Products/category";
import Header from "@components/Home/header";
import Hero from "@components/Home/hero";
import Hero2 from "@components/Home/hero2";
import PopularProducts from "@components/Home/Products/popularProducts";

export default function ElectronicsHomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1">
				{/* Welcome to TechMarket */}
				<Hero />
				{/* Featured Products */}
				<PopularProducts />
				{/* Shop by Category */}
				<Category />
				{/* Trending Products */}
				<TrendingProduct />
				{/* Most Popular */}
				{/* <MostPopular /> */}
				{/* All Products */}
				<AllProducts />

				{/* >Stay Updated */}
				<Hero2 />
			</main>
			<footer className="bg-muted py-6">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<Link href="/" className="flex items-center space-x-2">
								<Laptop className="h-6 w-6" />
								<span className="font-bold">TechMarket</span>
							</Link>
						</div>
						<nav className="flex gap-4">
							<Link href="/about" className="text-sm hover:underline">
								About
							</Link>
							<Link href="/terms" className="text-sm hover:underline">
								Terms
							</Link>
							<Link href="/privacy" className="text-sm hover:underline">
								Privacy
							</Link>
							<Link href="/contact" className="text-sm hover:underline">
								Contact
							</Link>
						</nav>
					</div>
					<div className="mt-4 text-center text-sm text-muted-foreground">
						© 2023 TechMarket. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
