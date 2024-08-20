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
				<ScrollArea className="h-[100vh] w-[100vw] pt-16 flex-1">
					<Category />
					<ProductList />
					<ScrollBar orientation="vertical" />
				</ScrollArea>
			</main>
			<Footer />
		</div>
	);
}

{
	/* <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
	<div className="flex w-max space-x-4 p-4">
		{works.map((artwork) => (
			<figure key={artwork.artist} className="shrink-0">
				<div className="overflow-hidden rounded-md">
					<Image
						src={artwork.art}
						alt={`Photo by ${artwork.artist}`}
						className="aspect-[3/4] h-fit w-fit object-cover"
						width={300}
						height={400}
					/>
				</div>
				<figcaption className="pt-2 text-xs text-muted-foreground">
					Photo by{" "}
					<span className="font-semibold text-foreground">
						{artwork.artist}
					</span>
				</figcaption>
			</figure>
		))}
	</div>
	<ScrollBar orientation="horizontal" />
</ScrollArea>; */
}
