import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "@components/Home/header";

const ProductList = () => {
	return (
		<div className="border-t">
			<div className="px-4 py-3 flex items-center justify-between sm:px-6">
				<h2 className="text-lg font-semibold">Featured Products</h2>
				<Link
					href="#"
					className="text-primary underline underline-offset-4"
					prefetch={false}>
					See all
				</Link>
			</div>
			<div className="grid grid-cols-2 gap-4 p-3 sm:grid-cols-4 flex-1 w-[100vw]">
				<Card className="overflow-hidden">
					<CardContent className="p-0">
						<img
							src="/placeholder.svg"
							width={300}
							height={300}
							alt="Product Image"
							className="w-full aspect-square object-cover"
						/>
					</CardContent>
					<CardFooter className="px-4 py-3">
						<div className="flex flex-col">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-base font-semibold">
										Cozy Cotton Sweater
									</h3>
									<p className="text-sm text-muted-foreground">
										Soft and comfortable
									</p>
								</div>
							</div>
							<div className="text-lg font-semibold mt-2">$49.99</div>
						</div>
					</CardFooter>
				</Card>
				<Card className="overflow-hidden">
					<CardContent className="p-0">
						<img
							src="/placeholder.svg"
							width={300}
							height={300}
							alt="Product Image"
							className="w-full aspect-square object-cover"
						/>
					</CardContent>
					<CardFooter className="px-4 py-3">
						<div className="flex flex-col">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-base font-semibold">Leather Backpack</h3>
									<p className="text-sm text-muted-foreground">
										Durable and stylish
									</p>
								</div>
							</div>
							<div className="text-lg font-semibold mt-2">$79.99</div>
						</div>
					</CardFooter>
				</Card>
				<Card className="overflow-hidden">
					<CardContent className="p-0">
						<img
							src="/placeholder.svg"
							width={300}
							height={300}
							alt="Product Image"
							className="w-full aspect-square object-cover"
						/>
					</CardContent>
					<CardFooter className="px-4 py-3">
						<div className="flex flex-col">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-base font-semibold">
										Wireless Headphones
									</h3>
									<p className="text-sm text-muted-foreground">
										High-quality audio
									</p>
								</div>
							</div>
							<div className="text-lg font-semibold mt-2">$99.99</div>
						</div>
					</CardFooter>
				</Card>
				<Card className="overflow-hidden">
					<CardContent className="p-0">
						<img
							src="/placeholder.svg"
							width={300}
							height={300}
							alt="Product Image"
							className="w-full aspect-square object-cover"
						/>
					</CardContent>
					<CardFooter className="px-4 py-3">
						<div className="flex flex-col">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-base font-semibold">Denim Jeans</h3>
									<p className="text-sm text-muted-foreground">
										Classic and comfortable
									</p>
								</div>
							</div>
							<div className="text-lg font-semibold mt-2">$59.99</div>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default ProductList;
