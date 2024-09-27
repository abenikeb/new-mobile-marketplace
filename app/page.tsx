import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Header from "@components/Home/header";
import Footer from "@components/shared/footer";
import Category from "@components/Home/category";
import ProductList from "@components/Home/Products/productList";

export default function Component() {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="flex-1">
				<ScrollArea className="h-[100vh] pt-16 flex-1">
					<Category />
					<ProductList />
					<ScrollBar orientation="vertical" />
				</ScrollArea>
			</main>
		</div>
	);
}
