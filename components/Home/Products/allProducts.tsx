"use client";

import Image from "next/image";
import { Card, CardContent, CardContents } from "@/components/ui/card";
import { Button } from "@components/ui/button";

const allProducts = [
	{
		id: 1,
		name: "Laptop",
		price: 999.99,
		image: "/assets/images/banner3.jpg?height=150&width=150",
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
		image: "/assets/images/product1.jpg?height=150&width=150",
	},
	{
		id: 8,
		name: "External Hard Drive",
		price: 129.99,
		image: "/assets/images/product4.jpg?height=150&width=150",
	},
];

const AllProducts = () => {
	return (
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
									{product.price.toFixed(2)} ETB
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
	);
};

export default AllProducts;
