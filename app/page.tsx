"use client";

import { useState } from "react";
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

const featuredProducts = [
	{
		id: 1,
		name: "Ultra-Slim Laptop",
		price: 999.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Laptops",
	},
	{
		id: 2,
		name: "5G Smartphone",
		price: 799.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Smartphones",
	},
	{
		id: 3,
		name: "Noise-Cancelling Headphones",
		price: 299.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Audio",
	},
	{
		id: 4,
		name: "4K OLED TV",
		price: 1499.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "TVs",
	},
	{
		id: 5,
		name: "Mirrorless Camera",
		price: 1299.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Cameras",
	},
	{
		id: 6,
		name: "Smartwatch",
		price: 249.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Wearables",
	},
	{
		id: 7,
		name: "Gaming Console",
		price: 499.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Gaming",
	},
	{
		id: 8,
		name: "Wireless Earbuds",
		price: 159.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Audio",
	},
];

export default function ElectronicsHomePage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col min-h-screen">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center">
					<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-[300px] sm:w-[400px]">
							<nav className="flex flex-col gap-4">
								{categories.map((category) => (
									<Link
										key={category.name}
										href={`/category/${category.name.toLowerCase()}`}
										className="flex items-center space-x-2 text-lg">
										<category.icon className="h-5 w-5" />
										<span>{category.name}</span>
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<Laptop className="h-6 w-6" />
						<span className="font-bold">TechMarket</span>
					</Link>
					<nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
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
					<div className="flex items-center space-x-4 ml-auto">
						<form className="hidden lg:block">
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Search electronics..."
									className="w-[300px] pl-8"
								/>
							</div>
						</form>
						<Button variant="ghost" size="icon">
							<User className="h-5 w-5" />
							<span className="sr-only">User account</span>
						</Button>
					</div>
				</div>
			</header>
			<main className="flex-1">
				<section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl font-bold mb-4">Welcome to TechMarket</h1>
						<p className="text-xl mb-8">
							Discover the latest and greatest in electronics
						</p>
						<Button size="lg" variant="secondary" asChild>
							<Link href="/products">
								Explore All Products
								<ChevronRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</section>
				<section className="py-12">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-8">Featured Products</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{featuredProducts.map((product) => (
								<Card key={product.id}>
									<CardContent className="flex flex-col items-center p-6">
										<Image
											src={product.image}
											alt={product.name}
											width={200}
											height={200}
											className="mb-4 rounded-md"
										/>
										<h3 className="font-semibold text-lg mb-2">
											{product.name}
										</h3>
										<Badge className="mb-2">{product.category}</Badge>
										<p className="text-muted-foreground mb-4">
											${product.price.toFixed(2)}
										</p>
										<Button className="w-full">Add to Cart</Button>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
				<section className="py-12 bg-muted">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
							{categories.map((category) => (
								<Link
									key={category.name}
									href={`/category/${category.name.toLowerCase()}`}
									className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
									<category.icon className="h-8 w-8 mb-2" />
									<span className="text-sm font-medium text-center">
										{category.name}
									</span>
								</Link>
							))}
						</div>
					</div>
				</section>
				<section className="py-12">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
						<p className="text-xl mb-8">
							Subscribe to our newsletter for the latest tech news and exclusive
							deals
						</p>
						<form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
							<Input
								type="email"
								placeholder="Enter your email"
								className="w-full"
							/>
							<Button type="submit">Subscribe</Button>
						</form>
					</div>
				</section>
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
// import Link from "next/link";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import Header from "@components/Home/header";
// import Footer from "@components/shared/footer";
// import Category from "@components/Home/category";
// import ProductList from "@components/Home/Products/productList";
// import FeaturedProduct from "@components/Home/FeaturedProduct";
// import TrendingProduct from "@components/Home/Products/tendingProduct";
// import MostPopular from "@components/Home/Products/mostPopular";

// export default function Component() {
// 	return (
// 		<div className="flex flex-col h-screen mb-20">
// 			<main className="flex-1">
// 				<div className="h-[100vh] w-screen py-14 flex-1">
// 					<FeaturedProduct />
// 					<Category />
// 					<TrendingProduct />
// 					<MostPopular />
// 					<ProductList />
// 				</div>
// 				{/* <ScrollArea className="h-[100vh] w-screen pt-16 flex-1">
// 					<ScrollBar orientation="vertical" />
// 				</ScrollArea> */}
// 			</main>
// 		</div>
// 	);
// }
