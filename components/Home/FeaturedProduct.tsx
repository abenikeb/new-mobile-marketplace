"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const featuredProducts = [
	{
		id: 2,
		name: "Smartwatch Pro",
		price: 249.99,
		image: "/assets/images/product1.jpg",
	},
	{
		id: 3,
		name: "Wireless Earbuds",
		price: 129.99,
		image: "/assets/images/product1.jpg",
	},
	{
		id: 4,
		name: "4K Ultra HD TV",
		price: 799.99,
		image: "/assets/images/product1.jpg",
	},
];

export default function FeaturedProduct() {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<main className="flex-grow">
			<section className="py-3 bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-lg font-semibold text-left mb-3 text-primary">
						Featured Products
					</h2>
					<Carousel
						className="mx-auto relative overflow-hidden"
						onSelect={(index: any) => setCurrentSlide(index)}>
						<CarouselContent className="flex gap-4 overflow-visible">
							{featuredProducts.map((product, index) => (
								<CarouselItem
									key={product.id}
									className="min-w-[85%] md:min-w-[48%] transition-transform transform hover:scale-105">
									<Card className="shadow-lg rounded-lg overflow-hidden">
										<CardContent className="flex flex-row items-center p-3 bg-white h-[17vh]">
											<Image
												src={product.image}
												alt={product.name}
												width={50}
												height={50}
												className="mx-4 rounded-md object-contain"
											/>
											<div>
												<h3 className="font-semibold mb-2 text-center">
													{product.name}
												</h3>
												<p className="text-muted-foreground text-lg">
													${product.price.toFixed(2)}
												</p>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</section>
		</main>
	);
}
