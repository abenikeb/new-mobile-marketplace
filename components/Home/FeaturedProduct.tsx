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
						className="mx-auto relative"
						onSelect={(index: any) => setCurrentSlide(index)}>
						<CarouselContent className="flex gap-6">
							{featuredProducts.map((product, index) => (
								<CarouselItem
									key={product.id}
									className="min-w-[70%] md:min-w-[45%] transition-transform transform hover:scale-105">
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
						{/* <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md" />
						<CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md" /> */}
					</Carousel>
					<div className="flex justify-center mt-6 space-x-2">
						{featuredProducts.map((_, index) => (
							<div
								key={index}
								className={`h-3 w-3 rounded-full ${
									currentSlide === index ? "bg-primary" : "bg-gray-400"
								}`}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
