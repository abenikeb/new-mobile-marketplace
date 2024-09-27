import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MinusIcon, PlusIcon } from "lucide-react";

const Cart = () => {
	return (
		<main className="flex-1 overflow-auto">
			<div className="px-4 py-6 sm:px-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<h2 className="text-lg font-semibold">Cart</h2>
					</div>
				</div>
				<div className="grid gap-6 py-6">
					<div className="grid gap-4">
						<div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
							<img
								src="/placeholder.svg"
								width={80}
								height={80}
								alt="Product Image"
								className="rounded-md"
								style={{ aspectRatio: "80/80", objectFit: "cover" }}
							/>
							<div>
								<div className="font-medium">Cozy Blanket</div>
								<div className="text-sm text-muted-foreground">
									Warm and Soft for Chilly Nights
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Button variant="outline" size="icon">
									<MinusIcon className="w-4 h-4" />
								</Button>
								<span>1</span>
								<Button variant="outline" size="icon">
									<PlusIcon className="w-4 h-4" />
								</Button>
							</div>
						</div>
						<div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
							<img
								src="/placeholder.svg"
								width={80}
								height={80}
								alt="Product Image"
								className="rounded-md"
								style={{ aspectRatio: "80/80", objectFit: "cover" }}
							/>
							<div>
								<div className="font-medium">Autumn Mug</div>
								<div className="text-sm text-muted-foreground">
									Enjoy Your Hot Beverages in Style
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Button variant="outline" size="icon">
									<MinusIcon className="w-4 h-4" />
								</Button>
								<span>2</span>
								<Button variant="outline" size="icon">
									<PlusIcon className="w-4 h-4" />
								</Button>
							</div>
						</div>
						<div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
							<img
								src="/placeholder.svg"
								width={80}
								height={80}
								alt="Product Image"
								className="rounded-md"
								style={{ aspectRatio: "80/80", objectFit: "cover" }}
							/>
							<div>
								<div className="font-medium">Fall Fragrance Candle</div>
								<div className="text-sm text-muted-foreground">
									Fill Your Space with a Cozy Scent
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Button variant="outline" size="icon">
									<MinusIcon className="w-4 h-4" />
								</Button>
								<span>1</span>
								<Button variant="outline" size="icon">
									<PlusIcon className="w-4 h-4" />
								</Button>
							</div>
						</div>
					</div>
					<div className="grid gap-4">
						<div className="flex items-center justify-between">
							<div className="font-medium">Subtotal</div>
							<div>$169.98</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="font-medium">Shipping</div>
							<div>$10.00</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="font-medium">Taxes</div>
							<div>$15.30</div>
						</div>
						{/* <Separator /> */}
						<div className="flex items-center justify-between">
							<div className="text-xl font-semibold">Total</div>
							<div className="text-xl font-semibold">$195.28</div>
						</div>
					</div>
					<Button className="w-full">Proceed to Checkout</Button>
				</div>
			</div>
		</main>
	);
};

export default Cart;
