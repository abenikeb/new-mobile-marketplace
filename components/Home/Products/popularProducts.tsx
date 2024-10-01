"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

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
		image: "/assets/images/product2.jpg?height=200&width=200",
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
		image: "/assets/images/product1?height=200&width=200",
		category: "Wearables",
	},
	{
		id: 7,
		name: "Gaming Console",
		price: 499.99,
		image: "/assets/images/product1?height=200&width=200",
		category: "Gaming",
	},
	{
		id: 8,
		name: "Wireless Earbuds",
		price: 159.99,
		image: "/assets/images/product1?height=200&width=200",
		category: "Audio",
	},
];

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

const PopularProducts = () => {
	const router = useRouter();

	const handleRoute = () => {
		router.push("/product/1");
	};

	return (
		<section className="py-8 bg-white">
			<div className="container mx-auto px-4">
				<div className="flex flex-row justify-between items-start">
					<h2 className="text-2xl font-bold mb-4">Top-Rated Products</h2>
					<Link href="/products" className="flex items-center justify-center">
						See More
						<ChevronRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
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
											{product.price.toFixed(2)} ETB
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
	);
};

export default PopularProducts;
