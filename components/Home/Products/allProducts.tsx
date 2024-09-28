"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const allProducts = [
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
		image: "/placeholder.svg?height=200&width=200",
		category: "Components",
	},
];

const AllProducts = () => {
	return (
		<section className="py-2 bg-muted">
			<div className="container mx-auto px-4">
				<h2 className="text-xl font-bold mb-5">All Products</h2>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
					{allProducts.map((product) => (
						<Card key={product.id}>
							<CardContent className="flex flex-col sm:flex-row items-center p-3">
								<Image
									src={product.image}
									alt={product.name}
									width={100}
									height={100}
									className="mb-4 sm:mb-0 sm:mr-4 rounded-md"
								/>
								<div className="flex-1 text-center sm:text-left">
									<h3 className="font-semibold text-lg mb-1">{product.name}</h3>
									<Badge className="mb-2 bg-gray-700">{product.category}</Badge>
									<p className="text-muted-foreground mb-4">
										${product.price.toFixed(2)}
									</p>
									{/* <Button className="w-full sm:w-auto">Add to Cart</Button> */}
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
