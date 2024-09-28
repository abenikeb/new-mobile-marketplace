import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Header from "@components/Home/header";
import Footer from "@components/shared/footer";
import Category from "@components/Home/category";
import ProductList from "@components/Home/Products/productList";
import FeaturedProduct from "@components/Home/FeaturedProduct";

export default function Component() {
	return (
		<div className="flex flex-col h-screen">
			<main className="flex-1">
				<div className="h-[100vh] w-screen pt-14 flex-1">
					<FeaturedProduct />
					<Category />
					<ProductList />
				</div>
				{/* <ScrollArea className="h-[100vh] w-screen pt-16 flex-1">
					<ScrollBar orientation="vertical" />
				</ScrollArea> */}
			</main>
		</div>
	);
}
