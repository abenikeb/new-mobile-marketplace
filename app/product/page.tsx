"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight, Search } from "lucide-react";
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
import Link from "next/link";

const allProducts = [
	{
		id: 1,
		name: "Ultra-Slim Laptop",
		price: 999.99,
		image: "/assets/images/product2.jpg?height=200&width=200",
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
		image: "/assets/images/product3.jpg?height=200&width=200",
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
	{
		id: 9,
		name: "Foldable Phone",
		price: 1299.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Smartphones",
	},
	{
		id: 10,
		name: "Gaming Laptop",
		price: 1799.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Laptops",
	},
	{
		id: 11,
		name: "Smart Home Hub",
		price: 129.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Smart Home",
	},
	{
		id: 12,
		name: "Drone with 4K Camera",
		price: 799.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Cameras",
	},
	{
		id: 13,
		name: "Wireless Charging Pad",
		price: 39.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Accessories",
	},
	{
		id: 14,
		name: "Bluetooth Speaker",
		price: 79.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Audio",
	},
	{
		id: 15,
		name: "Fitness Tracker",
		price: 99.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Wearables",
	},
	{
		id: 16,
		name: "Portable SSD",
		price: 149.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Storage",
	},
	{
		id: 17,
		name: "Mechanical Keyboard",
		price: 129.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Accessories",
	},
	{
		id: 18,
		name: "Ultrawide Monitor",
		price: 699.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Monitors",
	},
	{
		id: 19,
		name: "Wireless Mouse",
		price: 49.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Accessories",
	},
	{
		id: 20,
		name: "External GPU",
		price: 299.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Components",
	},
];

const categories = [
	...new Set(allProducts.map((product: any) => product.category)),
];

export default function Product() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 8;

	const filteredProducts = allProducts.filter(
		(product) =>
			product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
			(selectedCategory === "All" || product.category === selectedCategory)
	);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="container mx-auto px-4 pt-8 pb-20">
			<header className="flex flex-row items-start">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/">
						<ArrowLeft className="h-6 w-6" />
						<span className="sr-only">Back</span>
					</Link>
				</Button>
				<h1 className="text-3xl font-bold mb-8">All Products</h1>
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
				<Select value={selectedCategory} onValueChange={setSelectedCategory}>
					<SelectTrigger className="w-full md:w-[200px]">
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
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
				{currentProducts.map((product) => (
					<Card key={product.id} className="flex flex-col justify-between">
						<CardContent className="p-4">
							<Image
								src={product.image}
								alt={product.name}
								width={200}
								height={200}
								className="w-full h-48 object-cover mb-4 rounded-md"
							/>
							<h2 className="font-semibold text-lg mb-2">{product.name}</h2>
							<Badge className="mb-2">{product.category}</Badge>
							<p className="text-gray-600 mb-4">
								{product.price.toFixed(2)} ETB
							</p>
							{/* <Button className="w-full">Add to Cart</Button> */}
						</CardContent>
					</Card>
				))}
			</div>
			{filteredProducts.length > productsPerPage && (
				<div className="flex justify-center items-center space-x-2">
					<Button
						variant="outline"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}>
						<ChevronLeft className="h-4 w-4" />
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
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			)}
		</div>
	);
}
