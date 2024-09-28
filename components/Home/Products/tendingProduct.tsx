"use client";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const products = [
	{
		id: 1,
		image: "assets/images/product1.jpg",
		name: "Cozy Cotton Sweater",
		price: 49.99,
		rating: 4.5,
	},
	{
		id: 2,
		image: "assets/images/product2.jpg",
		name: "Leather Backpack",
		price: 79.99,
		rating: 4.8,
	},
	{
		id: 3,
		image: "assets/images/product3.jpg",
		name: "Wireless Headphones",
		price: 99.99,
		rating: 4.7,
	},
	{
		id: 4,
		image: "assets/images/product4.jpg",
		name: "Denim Jeans",
		price: 59.99,
		rating: 4.2,
	},
];

const ProductCard = ({ product, handleClick }: any) => (
	<Card
		className="overflow-hidden w-[40%] flex-shrink-0 transition-transform hover:scale-105"
		onClick={() => handleClick()}>
		<CardContent className="p-0">
			<img
				src={product.image}
				width={300}
				height={300}
				alt={product.name}
				className="w-full aspect-square object-cover"
			/>
		</CardContent>
		<CardFooter className="flex flex-col items-start px-2 py-2">
			<div className="text-base font-bold mt-1">
				{product.price.toFixed(2)} Birr
			</div>
			<h3 className="text-sm">{product.name}</h3>

			<div className="flex items-center mt-1">
				<span className="text-yellow-500">★</span>
				<span className="text-sm ml-1 text-gray-500">{product.rating}</span>
			</div>
		</CardFooter>
	</Card>
);

const TrendingProduct = () => {
	const router = useRouter();
	const onClickAction = () => {
		router.push("/product/1");
	};
	return (
		<div>
			<div className="px-4 py-1 flex items-center justify-between sm:px-6">
				<h2 className="text-xl font-bold">Trending Products</h2>
				<Link href="#" className="text-primary" prefetch={false}>
					See all
				</Link>
			</div>
			<div className="flex gap-2 overflow-x-auto p-3">
				{products.map((product, index) => (
					<ProductCard
						key={product.id}
						product={product}
						handleClick={onClickAction}
					/>
				))}
			</div>
		</div>
	);
};

export default TrendingProduct;
