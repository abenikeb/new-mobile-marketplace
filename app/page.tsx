import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Header from "@components/Home/header";
import Footer from "@components/shared/footer";
import Category from "@components/Home/category";
import ProductList from "@components/Home/Products/productList";
import FeaturedProduct from "@components/Home/FeaturedProduct";
import TrendingProduct from "@components/Home/Products/tendingProduct";
import MostPopular from "@components/Home/Products/mostPopular";

export default function Component() {
	return (
		<div className="flex flex-col h-screen mb-20">
			<main className="flex-1">
				<div className="h-[100vh] w-screen py-14 flex-1">
					<FeaturedProduct />
					<Category />
					<TrendingProduct />
					<MostPopular />
					<ProductList />
				</div>
				{/* <ScrollArea className="h-[100vh] w-screen pt-16 flex-1">
					<ScrollBar orientation="vertical" />
				</ScrollArea> */}
			</main>
		</div>
	);
}
