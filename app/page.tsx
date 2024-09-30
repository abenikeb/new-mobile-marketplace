"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
	Search,
	ShoppingCart,
	User,
	Menu,
	Star,
	ChevronRight,
	ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Component() {
	const [searchQuery, setSearchQuery] = useState("");
	const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		// Implement search functionality here
		console.log("Searching for:", searchQuery);
	};

	const bannerImages = [
		"/assets/images/banner.jpg?height=400&width=1200&text=Summer+Sale",
		"/assets/images/banner2.jpg?height=400&width=1200&text=New+Arrivals",
		"/assets/images/banner3.jpg?height=400&width=1200&text=Special+Offers",
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentBannerIndex(
				(prevIndex) => (prevIndex + 1) % bannerImages.length
			);
		}, 5000); // Change banner every 5 seconds

		return () => clearInterval(timer);
	}, []);

	const topRatedProducts = [
		{
			id: 1,
			name: "Wireless Earbuds",
			price: 79.99,
			rating: 4.5,
			image: "/assets/images/product2.jpg?height=100&width=100",
		},
		{
			id: 2,
			name: "Smart Watch",
			price: 199.99,
			rating: 4.7,
			image: "/assets/images/banner.jpg?height=100&width=100",
		},
		{
			id: 3,
			name: "Portable Charger",
			price: 39.99,
			rating: 4.3,
			image: "/assets/images/product3.jpg?height=100&width=100",
		},
		{
			id: 4,
			name: "Bluetooth Speaker",
			price: 59.99,
			rating: 4.6,
			image: "/assets/images/product4.jpg?height=100&width=100",
		},
		{
			id: 5,
			name: "Noise-Cancelling Headphones",
			price: 249.99,
			rating: 4.8,
			image: "/assets/images/product2.jpg?height=100&width=100",
		},
		{
			id: 6,
			name: "Fitness Tracker",
			price: 89.99,
			rating: 4.4,
			image: "/assets/images/product2.jpg?height=100&width=100",
		},
	];

	const newArrivals = [
		{
			id: 1,
			name: "Smart Home Hub",
			price: 129.99,
			image: "/assets/images/product2.jpg?height=200&width=200",
		},
		{
			id: 2,
			name: "Wireless Keyboard",
			price: 59.99,
			image: "/assets/images/product2.jpg?height=200&width=200",
		},
		{
			id: 3,
			name: "4K Webcam",
			price: 99.99,
			image: "/assets/images/product2.jpg?height=200&width=200",
		},
		{
			id: 4,
			name: "Ergonomic Mouse",
			price: 49.99,
			image: "/assets/images/product2.jpg?height=200&width=200",
		},
	];

	const allProducts = [
		{
			id: 1,
			name: "Laptop",
			price: 999.99,
			image: "/assets/images/product2.jpg?height=150&width=150",
		},
		{
			id: 2,
			name: "Smartphone",
			price: 699.99,
			image: "/assets/images/product3.jpg?height=150&width=150",
		},
		{
			id: 3,
			name: "Tablet",
			price: 349.99,
			image: "/assets/images/banner2.jpg?height=150&width=150",
		},
		{
			id: 4,
			name: "Desktop Computer",
			price: 1299.99,
			image: "/assets/images/product4.jpg?height=150&width=150",
		},
		{
			id: 5,
			name: "Gaming Console",
			price: 499.99,
			image: "/assets/images/product2.jpg?height=150&width=150",
		},
		{
			id: 6,
			name: "Smart TV",
			price: 799.99,
			image: "/assets/images/product2.jpg?height=150&width=150",
		},
		{
			id: 7,
			name: "Wireless Router",
			price: 89.99,
			image: "/assets/images/product2.jpg?height=150&width=150",
		},
		{
			id: 8,
			name: "External Hard Drive",
			price: 129.99,
			image: "/assets/images/product2.jpg?height=150&width=150",
		},
	];

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Header Navigation */}
			<header className="bg-primary text-white">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between py-4">
						<Link href="/" className="text-2xl font-bold">
							BiishoMarket
						</Link>
						<nav className="hidden md:flex space-x-4">
							<Link
								href="/deals"
								className="hover:text-yellow-300 transition-colors">
								Deals
							</Link>
							<Link
								href="/electronics"
								className="hover:text-yellow-300 transition-colors">
								Electronics
							</Link>
							<Link
								href="/fashion"
								className="hover:text-yellow-300 transition-colors">
								Fashion
							</Link>
							<Link
								href="/books"
								className="hover:text-yellow-300 transition-colors">
								Books
							</Link>
						</nav>
						<div className="flex items-center space-x-4">
							<Link
								href="/cart"
								className="hover:text-yellow-300 transition-colors">
								<ShoppingCart className="h-6 w-6" />
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="hover:text-yellow-300 transition-colors">
										<User className="h-6 w-6" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Profile</DropdownMenuItem>
									<DropdownMenuItem>Orders</DropdownMenuItem>
									<DropdownMenuItem>Sign Out</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden hover:text-yellow-300 transition-colors">
								<Menu className="h-6 w-6" />
							</Button>
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section / Promotional Banner */}
			<section className="relative h-[400px] overflow-hidden">
				<img
					src={bannerImages[currentBannerIndex]}
					alt="Promotional Banner"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							Welcome to BiishoMarket
						</h1>
						<p className="text-xl mb-8">
							Discover amazing deals on all your favorite products
						</p>
						<Button
							size="lg"
							className="bg-primary text-white hover:bg-primary/90">
							Shop Now
						</Button>
					</div>
				</div>
			</section>

			{/* Search Bar */}
			<div className="bg-gray-200 py-4">
				<div className="container mx-auto px-4">
					<form onSubmit={handleSearch} className="flex">
						<Input
							type="search"
							placeholder="Search BiishoMarket"
							className="flex-grow rounded-r-none"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<Button type="submit" className="rounded-l-none">
							Search
						</Button>
					</form>
				</div>
			</div>

			{/* Top-Rated Products Section */}
			<section className="py-8 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-4">Top-Rated Products</h2>
					<div className="relative">
						<div className="flex overflow-x-auto space-x-4 pb-4">
							{topRatedProducts.map((product) => (
								<div key={product.id} className="flex-none w-40">
									<div className="bg-white rounded-lg shadow-md overflow-hidden">
										<img
											src={product.image}
											alt={product.name}
											className="w-full h-40 object-cover"
										/>
										<div className="p-2">
											<h3 className="text-sm font-semibold truncate">
												{product.name}
											</h3>
											<div className="flex items-center mt-1">
												<Star className="h-4 w-4 text-yellow-400 fill-current" />
												<span className="ml-1 text-xs text-gray-600">
													{product.rating}
												</span>
											</div>
											<p className="text-sm font-bold text-gray-800 mt-1">
												${product.price.toFixed(2)}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="absolute top-1/2 left-0 transform -translate-y-1/2">
							<Button
								size="icon"
								variant="ghost"
								className="rounded-full bg-white shadow-md">
								<ChevronLeft className="h-6 w-6" />
							</Button>
						</div>
						<div className="absolute top-1/2 right-0 transform -translate-y-1/2">
							<Button
								size="icon"
								variant="ghost"
								className="rounded-full bg-white shadow-md">
								<ChevronRight className="h-6 w-6" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* New Arrivals Section */}
			<section className="py-8 bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{newArrivals.map((product) => (
							<div
								key={product.id}
								className="bg-white rounded-lg shadow-md overflow-hidden">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h3 className="text-lg font-semibold mb-2">{product.name}</h3>
									<p className="text-xl font-bold text-gray-800">
										${product.price.toFixed(2)}
									</p>
									<Button className="w-full mt-2">Add to Cart</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* All Products Section */}
			<section className="py-8 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-4">All Products</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
						{allProducts.map((product) => (
							<div
								key={product.id}
								className="bg-white rounded-lg shadow-md overflow-hidden">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-32 object-cover"
								/>
								<div className="p-2">
									<h3 className="text-sm font-semibold truncate">
										{product.name}
									</h3>
									<p className="text-sm font-bold text-gray-800 mt-1">
										${product.price.toFixed(2)}
									</p>
									<Button size="sm" className="w-full mt-2">
										Add to Cart
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-white py-8">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-4">Customer Service</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/contact"
										className="hover:text-yellow-300 transition-colors">
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										href="/returns"
										className="hover:text-yellow-300 transition-colors">
										Returns & Exchanges
									</Link>
								</li>
								<li>
									<Link
										href="/faq"
										className="hover:text-yellow-300 transition-colors">
										FAQ
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">About BiishoMarket</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/about"
										className="hover:text-yellow-300 transition-colors">
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="hover:text-yellow-300 transition-colors">
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="hover:text-yellow-300 transition-colors">
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
							<div className="flex space-x-4">
								<a href="#" className="hover:text-yellow-300 transition-colors">
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true">
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
								<a href="#" className="hover:text-yellow-300 transition-colors">
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true">
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
								<a href="#" className="hover:text-yellow-300 transition-colors">
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true">
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="mt-8 text-center text-sm">
						<p>&copy; 2024 BiishoMarket. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
// import { useState } from "react";
// import Link from "next/link";
// import {
// 	Search,
// 	ShoppingCart,
// 	User,
// 	Menu,
// 	Star,
// 	ChevronRight,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export default function Component() {
// 	const [searchQuery, setSearchQuery] = useState("");

// 	const handleSearch = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		// Implement search functionality here
// 		console.log("Searching for:", searchQuery);
// 	};

// 	const topRatedProducts = [
// 		{
// 			id: 1,
// 			name: "Wireless Earbuds",
// 			price: 79.99,
// 			rating: 4.5,
// 			image: "/assets/images/product2.jpg?height=200&width=200",
// 		},
// 		{
// 			id: 2,
// 			name: "Smart Watch",
// 			price: 199.99,
// 			rating: 4.7,
// 			image: "/placeholder.svg?height=200&width=200",
// 		},
// 		{
// 			id: 3,
// 			name: "Portable Charger",
// 			price: 39.99,
// 			rating: 4.3,
// 			image: "/placeholder.svg?height=200&width=200",
// 		},
// 		{
// 			id: 4,
// 			name: "Bluetooth Speaker",
// 			price: 59.99,
// 			rating: 4.6,
// 			image: "/placeholder.svg?height=200&width=200",
// 		},
// 	];

// 	return (
// 		<div className="min-h-screen bg-gray-100">
// 			{/* Header Navigation */}
// 			<header className="bg-primary text-white">
// 				<div className="container mx-auto px-4">
// 					<div className="flex items-center justify-between py-4">
// 						<Link href="/" className="text-2xl font-bold">
// 							BiishoMarket
// 						</Link>
// 						<nav className="hidden md:flex space-x-4">
// 							<Link
// 								href="/deals"
// 								className="hover:text-yellow-300 transition-colors">
// 								Deals
// 							</Link>
// 							<Link
// 								href="/electronics"
// 								className="hover:text-yellow-300 transition-colors">
// 								Electronics
// 							</Link>
// 							<Link
// 								href="/fashion"
// 								className="hover:text-yellow-300 transition-colors">
// 								Fashion
// 							</Link>
// 							<Link
// 								href="/books"
// 								className="hover:text-yellow-300 transition-colors">
// 								Books
// 							</Link>
// 						</nav>
// 						<div className="flex items-center space-x-4">
// 							<Link
// 								href="/cart"
// 								className="hover:text-yellow-300 transition-colors">
// 								<ShoppingCart className="h-6 w-6" />
// 							</Link>
// 							<DropdownMenu>
// 								<DropdownMenuTrigger asChild>
// 									<Button
// 										variant="ghost"
// 										size="icon"
// 										className="hover:text-yellow-300 transition-colors">
// 										<User className="h-6 w-6" />
// 									</Button>
// 								</DropdownMenuTrigger>
// 								<DropdownMenuContent align="end">
// 									<DropdownMenuItem>Profile</DropdownMenuItem>
// 									<DropdownMenuItem>Orders</DropdownMenuItem>
// 									<DropdownMenuItem>Sign Out</DropdownMenuItem>
// 								</DropdownMenuContent>
// 							</DropdownMenu>
// 							<Button
// 								variant="ghost"
// 								size="icon"
// 								className="md:hidden hover:text-yellow-300 transition-colors">
// 								<Menu className="h-6 w-6" />
// 							</Button>
// 						</div>
// 					</div>
// 				</div>
// 			</header>

// 			{/* Hero Section */}
// 			<section className="relative py-16 bg-gradient-to-r from-orange-400 to-yellow-300 overflow-hidden">
// 				<div className="container mx-auto px-4">
// 					<div className="max-w-6xl mx-auto">
// 						<h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
// 							Welcome to <span className="text-primary">BiishoMarket</span>
// 						</h1>
// 						<p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
// 							Discover amazing deals on electronics, fashion, books, and more.
// 						</p>

// 						{/* Search Bar */}
// 						<form onSubmit={handleSearch} className="mb-8 relative z-10">
// 							<div className="flex">
// 								<div className="relative flex-grow">
// 									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// 									<Input
// 										type="search"
// 										placeholder="Search BiishoMarket"
// 										className="w-full pl-10 pr-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-primary"
// 										value={searchQuery}
// 										onChange={(e) => setSearchQuery(e.target.value)}
// 									/>
// 								</div>
// 								<Button
// 									type="submit"
// 									className="px-6 py-3 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors duration-200">
// 									Search
// 								</Button>
// 							</div>
// 						</form>

// 						{/* Category Cards */}
// 						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
// 							{["Electronics", "Fashion", "Home & Kitchen", "Books"].map(
// 								(category) => (
// 									<Link
// 										href={`/category/${category.toLowerCase()}`}
// 										key={category}
// 										className="block">
// 										<div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-200">
// 											<h3 className="text-lg font-semibold text-gray-800">
// 												{category}
// 											</h3>
// 										</div>
// 									</Link>
// 								)
// 							)}
// 						</div>

// 						{/* CTA Button */}
// 						<div className="text-center">
// 							<Button
// 								size="lg"
// 								className="bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-200"
// 								asChild>
// 								<Link href="/deals">
// 									Shop Today's Deals
// 									<ChevronRight className="ml-2 h-5 w-5" />
// 								</Link>
// 							</Button>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Background Pattern */}
// 				<div
// 					className="absolute bottom-0 left-0 right-0 h-16 bg-white/10"
// 					style={{
// 						clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
// 					}}></div>
// 			</section>

// 			{/* Top-Rated Products Section */}
// 			<section className="py-16 bg-white">
// 				<div className="container mx-auto px-4">
// 					<h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
// 						Top-Rated Products
// 					</h2>
// 					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// 						{topRatedProducts.map((product) => (
// 							<div
// 								key={product.id}
// 								className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
// 								<img
// 									src={product.image}
// 									alt={product.name}
// 									className="w-full h-48 object-cover"
// 								/>
// 								<div className="p-4">
// 									<h3 className="text-lg font-semibold mb-2">{product.name}</h3>
// 									<div className="flex items-center mb-2">
// 										<Star className="h-5 w-5 text-yellow-400 fill-current" />
// 										<span className="ml-1 text-sm text-gray-600">
// 											{product.rating}
// 										</span>
// 									</div>
// 									<p className="text-xl font-bold text-gray-800">
// 										${product.price.toFixed(2)}
// 									</p>
// 									<Button className="w-full mt-4 bg-primary text-white hover:bg-primary/90 transition-colors duration-200">
// 										Add to Cart
// 									</Button>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			{/* Footer */}
// 			<footer className="bg-gray-800 text-white py-8">
// 				<div className="container mx-auto px-4">
// 					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 						<div>
// 							<h3 className="text-lg font-semibold mb-4">Customer Service</h3>
// 							<ul className="space-y-2">
// 								<li>
// 									<Link
// 										href="/contact"
// 										className="hover:text-yellow-300 transition-colors">
// 										Contact Us
// 									</Link>
// 								</li>
// 								<li>
// 									<Link
// 										href="/returns"
// 										className="hover:text-yellow-300 transition-colors">
// 										Returns & Exchanges
// 									</Link>
// 								</li>
// 								<li>
// 									<Link
// 										href="/faq"
// 										className="hover:text-yellow-300 transition-colors">
// 										FAQ
// 									</Link>
// 								</li>
// 							</ul>
// 						</div>
// 						<div>
// 							<h3 className="text-lg font-semibold mb-4">About BiishoMarket</h3>
// 							<ul className="space-y-2">
// 								<li>
// 									<Link
// 										href="/about"
// 										className="hover:text-yellow-300 transition-colors">
// 										About Us
// 									</Link>
// 								</li>
// 								<li>
// 									<Link
// 										href="/careers"
// 										className="hover:text-yellow-300 transition-colors">
// 										Careers
// 									</Link>
// 								</li>
// 								<li>
// 									<Link
// 										href="/privacy"
// 										className="hover:text-yellow-300 transition-colors">
// 										Privacy Policy
// 									</Link>
// 								</li>
// 							</ul>
// 						</div>
// 						<div>
// 							<h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
// 							<div className="flex space-x-4">
// 								<a href="#" className="hover:text-yellow-300 transition-colors">
// 									<svg
// 										className="h-6 w-6"
// 										fill="currentColor"
// 										viewBox="0 0 24 24"
// 										aria-hidden="true">
// 										<path
// 											fillRule="evenodd"
// 											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
// 											clipRule="evenodd"
// 										/>
// 									</svg>
// 								</a>
// 								<a href="#" className="hover:text-yellow-300 transition-colors">
// 									<svg
// 										className="h-6 w-6"
// 										fill="currentColor"
// 										viewBox="0 0 24 24"
// 										aria-hidden="true">
// 										<path
// 											fillRule="evenodd"
// 											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
// 											clipRule="evenodd"
// 										/>
// 									</svg>
// 								</a>
// 								<a href="#" className="hover:text-yellow-300 transition-colors">
// 									<svg
// 										className="h-6 w-6"
// 										fill="currentColor"
// 										viewBox="0 0 24 24"
// 										aria-hidden="true">
// 										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// 									</svg>
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="mt-8 text-center text-sm">
// 						<p>&copy; 2024 BiishoMarket. All rights reserved.</p>
// 					</div>
// 				</div>
// 			</footer>
// 		</div>
// 	);
// }
// import Link from "next/link";
// import { Laptop } from "lucide-react";
// import AllProducts from "@components/Home/Products/allProducts";
// import TrendingProduct from "@components/Home/Products/trendingProduct";
// import Category from "@components/Home/Products/category";
// import Header from "@components/Home/header";
// import Hero from "@components/Home/hero";
// import Hero2 from "@components/Home/hero2";
// import PopularProducts from "@components/Home/Products/popularProducts";

// export default function ElectronicsHomePage() {
// 	return (
// 		<div className="flex flex-col min-h-screen">
// 			<Header />
// 			<main className="flex-1">
// 				{/* Welcome to TechMarket */}
// 				<Hero />
// 				{/* Featured Products */}
// 				<PopularProducts />
// 				{/* Shop by Category */}
// 				<Category />
// 				{/* Trending Products */}
// 				<TrendingProduct />
// 				{/* Most Popular */}
// 				{/* <MostPopular /> */}
// 				{/* All Products */}
// 				<AllProducts />

// 				{/* >Stay Updated */}
// 				<Hero2 />
// 			</main>
// 			<footer className="bg-muted py-6">
// 				<div className="container mx-auto px-4">
// 					<div className="flex flex-col md:flex-row justify-between items-center">
// 						<div className="mb-4 md:mb-0">
// 							<Link href="/" className="flex items-center space-x-2">
// 								<Laptop className="h-6 w-6" />
// 								<span className="font-bold">TechMarket</span>
// 							</Link>
// 						</div>
// 						<nav className="flex gap-4">
// 							<Link href="/about" className="text-sm hover:underline">
// 								About
// 							</Link>
// 							<Link href="/terms" className="text-sm hover:underline">
// 								Terms
// 							</Link>
// 							<Link href="/privacy" className="text-sm hover:underline">
// 								Privacy
// 							</Link>
// 							<Link href="/contact" className="text-sm hover:underline">
// 								Contact
// 							</Link>
// 						</nav>
// 					</div>
// 					<div className="mt-4 text-center text-sm text-muted-foreground">
// 						© 2024 TechMarket. All rights reserved.
// 					</div>
// 				</div>
// 			</footer>
// 		</div>
// 	);
// }
