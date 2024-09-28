"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredProducts = [
	{
		id: 1,
		name: "Ultra-Slim Laptop",
		price: 999.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Laptops",
	},
	{
		id: 2,
		name: "5G Smartphone",
		price: 799.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Smartphones",
	},
	{
		id: 3,
		name: "Noise-Cancelling Headphones",
		price: 299.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Audio",
	},
	{
		id: 4,
		name: "4K OLED TV",
		price: 1499.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "TVs",
	},
	{
		id: 5,
		name: "Mirrorless Camera",
		price: 1299.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Cameras",
	},
	{
		id: 6,
		name: "Smartwatch",
		price: 249.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Wearables",
	},
	{
		id: 7,
		name: "Gaming Console",
		price: 499.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Gaming",
	},
	{
		id: 8,
		name: "Wireless Earbuds",
		price: 159.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Audio",
	},
];

const trendingProducts = [
	{
		id: 9,
		name: "Foldable Phone",
		price: 1299.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Smartphones",
	},
	{
		id: 10,
		name: "Gaming Laptop",
		price: 1799.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Laptops",
	},
	{
		id: 11,
		name: "Smart Home Hub",
		price: 129.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Smart Home",
	},
	{
		id: 12,
		name: "Drone with 4K Camera",
		price: 799.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Cameras",
	},
];

const popularProducts = [
	{
		id: 13,
		name: "Wireless Charging Pad",
		price: 39.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Accessories",
	},
	{
		id: 14,
		name: "Bluetooth Speaker",
		price: 79.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Audio",
	},
	{
		id: 15,
		name: "Fitness Tracker",
		price: 99.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Wearables",
	},
	{
		id: 16,
		name: "Portable SSD",
		price: 149.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Storage",
	},
];

const allProducts = [
	...featuredProducts,
	...trendingProducts,
	...popularProducts,
	{
		id: 17,
		name: "Mechanical Keyboard",
		price: 129.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Accessories",
	},
	{
		id: 18,
		name: "Ultrawide Monitor",
		price: 699.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Monitors",
	},
	{
		id: 19,
		name: "Wireless Mouse",
		price: 49.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Accessories",
	},
	{
		id: 20,
		name: "External GPU",
		price: 299.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Components",
	},
];
const AllProducts = () => {
	return (
		<section className="py-12 bg-muted">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8">All Products</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
					{allProducts.map((product) => (
						<Card key={product.id}>
							<CardContent className="flex flex-col sm:flex-row items-center p-4">
								<Image
									src={product.image}
									alt={product.name}
									width={100}
									height={100}
									className="mb-4 sm:mb-0 sm:mr-4 rounded-md"
								/>
								<div className="flex-1 text-center sm:text-left">
									<h3 className="font-semibold text-lg mb-1">{product.name}</h3>
									<Badge className="mb-2">{product.category}</Badge>
									<p className="text-muted-foreground mb-4">
										${product.price.toFixed(2)}
									</p>
									<Button className="w-full sm:w-auto">Add to Cart</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default AllProducts;
