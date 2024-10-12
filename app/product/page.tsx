"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
	ArrowLeft,
	ChevronLeft,
	ChevronRight,
	Search,
	SlidersHorizontal,
	Grid,
	List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const allProducts = [
	{
		id: 1,
		name: "Ultra-Slim Laptop",
		price: 999.99,
		image: "/assets/images/product2.jpg?height=200&width=200",
		category: "Laptops",
		location: "Addis Ababa",
		rating: 4.5,
		description: "Powerful and portable, perfect for on-the-go professionals.",
	},
	{
		id: 2,
		name: "5G Smartphone",
		price: 799.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Smartphones",
		location: "Adama",
		rating: 4.7,
		description:
			"Experience lightning-fast connectivity with our latest 5G model.",
	},
	{
		id: 3,
		name: "Noise-Cancelling Headphones",
		price: 299.99,
		image: "/assets/images/product3.jpg?height=200&width=200",
		category: "Audio",
		location: "Awasa",
		rating: 4.6,
		description:
			"Immerse yourself in pure sound with advanced noise-cancelling technology.",
	},
	{
		id: 4,
		name: "4K OLED TV",
		price: 1499.99,
		image: "/assets/images/product4.jpg?height=200&width=200",
		category: "TVs",
		location: "Addis Ababa",
		rating: 4.8,
		description:
			"Experience stunning visuals with our latest 4K OLED technology.",
	},
	{
		id: 5,
		name: "Mirrorless Camera",
		price: 1299.99,
		image: "/assets/images/product5.jpg?height=200&width=200",
		category: "Cameras",
		location: "Adama",
		rating: 4.4,
		description: "Capture life's moments with exceptional clarity and detail.",
	},
	{
		id: 6,
		name: "Smartwatch",
		price: 249.99,
		image: "/assets/images/product6.jpg?height=200&width=200",
		category: "Bahir Dar",
		location: "Boston",
		rating: 4.3,
		description:
			"Stay connected and track your fitness with our latest smartwatch.",
	},
];

const categories = [...new Set(allProducts.map((product) => product.category))];
const locations = [...new Set(allProducts.map((product) => product.location))];

export default function Product() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedLocation, setSelectedLocation] = useState("All");
	const [priceRange, setPriceRange] = useState([0, 2000]);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortBy, setSortBy] = useState("featured");
	const [viewMode, setViewMode] = useState("grid");
	const [isLoading, setIsLoading] = useState(true);
	const productsPerPage = viewMode === "grid" ? 6 : 5;

	useEffect(() => {
		// Simulate loading delay
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	const filteredProducts = allProducts.filter(
		(product) =>
			product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
			(selectedCategory === "All" || product.category === selectedCategory) &&
			(selectedLocation === "All" || product.location === selectedLocation) &&
			product.price >= priceRange[0] &&
			product.price <= priceRange[1]
	);

	const sortedProducts = [...filteredProducts].sort((a, b) => {
		switch (sortBy) {
			case "priceLowToHigh":
				return a.price - b.price;
			case "priceHighToLow":
				return b.price - a.price;
			case "rating":
				return b.rating - a.rating;
			default:
				return 0;
		}
	});

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = sortedProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [
		searchQuery,
		selectedCategory,
		selectedLocation,
		priceRange,
		sortBy,
		viewMode,
	]);

	const ProductCard = ({ product, viewMode }: any) => (
		<Card
			className={`flex ${
				viewMode === "list" ? "flex-row" : "flex-col"
			} overflow-hidden group h-full`}>
			<div className={`relative ${viewMode === "list" ? "w-1/3" : "w-full"}`}>
				<Image
					src={product.image}
					alt={product.name}
					width={400}
					height={300}
					className={`object-cover ${
						viewMode === "list" ? "h-full" : "h-48"
					} w-full transition-transform duration-300 group-hover:scale-110`}
				/>
				<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
					<Button variant="secondary">View Details</Button>
				</div>
			</div>
			<CardContent
				className={`p-4 flex flex-col justify-between flex-grow ${
					viewMode === "list" ? "w-2/3" : "w-full"
				}`}>
				<div>
					<h2 className="font-semibold text-lg mb-2 line-clamp-1">
						{product.name}
					</h2>
					<div className="flex justify-between items-center mb-2">
						<Badge variant="secondary">{product.category}</Badge>
						<span className="text-sm text-gray-500">{product.location}</span>
					</div>
					{viewMode === "list" && (
						<p className="text-sm text-gray-600 mb-2 line-clamp-2">
							{product.description}
						</p>
					)}
				</div>
				<div className="mt-4">
					<div className="flex items-center justify-between">
						<p className="text-xl font-bold text-primary">
							{product.price.toFixed(2)} ETB
						</p>
						<div className="flex items-center">
							<span className="text-yellow-400 mr-1">★</span>
							<span className="text-sm font-medium">
								{product.rating.toFixed(1)}
							</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);

	const SkeletonCard = ({ viewMode }: any) => (
		<Card
			className={`flex ${
				viewMode === "list" ? "flex-row" : "flex-col"
			} overflow-hidden h-full`}>
			<div className={`${viewMode === "list" ? "w-1/3" : "w-full"}`}>
				<Skeleton
					className={`${viewMode === "list" ? "h-full" : "h-48"} w-full`}
				/>
			</div>
			<CardContent
				className={`p-4 flex flex-col justify-between flex-grow ${
					viewMode === "list" ? "w-2/3" : "w-full"
				}`}>
				<div>
					<Skeleton className="h-6 w-3/4 mb-2" />
					<div className="flex justify-between items-center mb-2">
						<Skeleton className="h-4 w-20" />
						<Skeleton className="h-4 w-24" />
					</div>
					{viewMode === "list" && <Skeleton className="h-4 w-full mb-2" />}
				</div>
				<div className="mt-4">
					<div className="flex items-center justify-between">
						<Skeleton className="h-6 w-20" />
						<Skeleton className="h-4 w-10" />
					</div>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<div className="container mx-auto px-4 pt-8 pb-20">
			<header className="flex flex-row items-center mb-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/">
						<ArrowLeft className="h-6 w-6" />
						<span className="sr-only">Back</span>
					</Link>
				</Button>
				<h1 className="text-2xl font-bold ml-2">All Products</h1>
			</header>
			<div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
				<div className="w-full md:w-1/3 relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					<Input
						type="search"
						placeholder="Search products..."
						className="pl-10"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
				<div className="flex space-x-2">
					<Select value={sortBy} onValueChange={setSortBy}>
						<SelectTrigger className="w-[200px]">
							<SelectValue placeholder="Sort by" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="featured">Featured</SelectItem>
							<SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
							<SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
							<SelectItem value="rating">Rating</SelectItem>
						</SelectContent>
					</Select>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline">
								<SlidersHorizontal className="mr-2 h-4 w-4" />
								Filters
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Filter Products</SheetTitle>
								<SheetDescription>Refine your product search</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4">
								<div className="space-y-2">
									<h3 className="font-medium">Category</h3>
									<Select
										value={selectedCategory}
										onValueChange={setSelectedCategory}>
										<SelectTrigger>
											<SelectValue placeholder="Select category" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="All">All Categories</SelectItem>
											{categories.map((category) => (
												<SelectItem key={category} value={category}>
													{category}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<h3 className="font-medium">Location</h3>
									<Select
										value={selectedLocation}
										onValueChange={setSelectedLocation}>
										<SelectTrigger>
											<SelectValue placeholder="Select location" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="All">All Locations</SelectItem>
											{locations.map((location) => (
												<SelectItem key={location} value={location}>
													{location}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<h3 className="font-medium">Price Range</h3>
									<Slider
										min={0}
										max={2000}
										step={10}
										value={priceRange}
										onValueChange={setPriceRange}
									/>
									<div className="flex justify-between text-sm text-gray-500">
										<span>{priceRange[0]} ETB</span>
										<span>{priceRange[1]} ETB</span>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
					<Toggle
						aria-label="Toggle view"
						pressed={viewMode === "list"}
						onPressedChange={() =>
							setViewMode(viewMode === "grid" ? "list" : "grid")
						}>
						{viewMode === "grid" ? (
							<List className="h-4 w-4" />
						) : (
							<Grid className="h-4 w-4" />
						)}
					</Toggle>
				</div>
			</div>
			<div
				className={`grid gap-6 mb-8 ${
					viewMode === "grid" ? "grid-cols-2 sm:grid-cols-2" : "grid-cols-1"
				}`}>
				{isLoading
					? Array.from({ length: productsPerPage }).map((_, index) => (
							<SkeletonCard key={index} viewMode={viewMode} />
					  ))
					: currentProducts.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								viewMode={viewMode}
							/>
					  ))}
			</div>
			{!isLoading && sortedProducts.length > productsPerPage && (
				<div className="flex justify-center items-center space-x-2">
					<Button
						variant="outline"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}>
						<ChevronLeft className="h-4 w-4 mr-2" />
						Previous
					</Button>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<Button
							key={page}
							variant={currentPage === page ? "default" : "outline"}
							onClick={() => handlePageChange(page)}>
							{page}
						</Button>
					))}
					<Button
						variant="outline"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}>
						Next
						<ChevronRight className="h-4 w-4 ml-2" />
					</Button>
				</div>
			)}
		</div>
	);
}
