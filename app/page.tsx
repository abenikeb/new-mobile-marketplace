/**
 * v0 by Vercel.
 * @see https://v0.dev/t/exU4sKwzoLX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Component() {
	return (
		<div className="flex flex-col h-screen">
			<header className="bg-background border-b fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 sm:px-6">
				<Link href="#" className="flex items-center gap-2" prefetch={false}>
					<MountainIcon className="w-6 h-6" />
					<span className="text-lg font-semibold">Acme Inc</span>
				</Link>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="sm:hidden">
							<MenuIcon className="w-6 h-6" />
							<span className="sr-only">Toggle navigation</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="sm:hidden">
						<nav className="grid gap-4 p-4">
							<Link
								href="#"
								className="flex items-center gap-2 text-lg font-medium"
								prefetch={false}>
								<HomeIcon className="w-5 h-5" />
								Home
							</Link>
							<Link
								href="#"
								className="flex items-center gap-2 text-lg font-medium"
								prefetch={false}>
								<ListIcon className="w-5 h-5" />
								Categories
							</Link>
							<Link
								href="#"
								className="flex items-center gap-2 text-lg font-medium"
								prefetch={false}>
								<ShoppingCartIcon className="w-5 h-5" />
								Cart
							</Link>
							<Link
								href="#"
								className="flex items-center gap-2 text-lg font-medium"
								prefetch={false}>
								<UserIcon className="w-5 h-5" />
								Profile
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
				<nav className="hidden sm:flex items-center gap-4">
					<Link
						href="#"
						className="flex items-center gap-2 text-lg font-medium"
						prefetch={false}>
						<HomeIcon className="w-5 h-5" />
						Home
					</Link>
					<Link
						href="#"
						className="flex items-center gap-2 text-lg font-medium"
						prefetch={false}>
						<ListIcon className="w-5 h-5" />
						Categories
					</Link>
					<Link
						href="#"
						className="flex items-center gap-2 text-lg font-medium"
						prefetch={false}>
						<ShoppingCartIcon className="w-5 h-5" />
						Cart
					</Link>
					<Link
						href="#"
						className="flex items-center gap-2 text-lg font-medium"
						prefetch={false}>
						<UserIcon className="w-5 h-5" />
						Profile
					</Link>
				</nav>
			</header>
			<ScrollArea className="flex-1 overflow-auto">
				<div className="px-4 py-6 sm:px-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<h2 className="text-lg font-semibold">Categories</h2>
							<Link
								href="#"
								className="text-primary underline underline-offset-4"
								prefetch={false}>
								See all
							</Link>
						</div>
					</div>
					<div className="flex gap-4 overflow-x-auto py-4">
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-primary rounded-full p-3 sm:p-4">
								<ShirtIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
							</div>
							<span className="text-sm font-medium">Clothing</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-accent rounded-full p-3 sm:p-4">
								<FootprintsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
							</div>
							<span className="text-sm font-medium">Shoes</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-secondary rounded-full p-3 sm:p-4">
								<ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
							</div>
							<span className="text-sm font-medium">Bags</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-muted rounded-full p-3 sm:p-4">
								<WatchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
							</div>
							<span className="text-sm font-medium">Accessories</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-primary rounded-full p-3 sm:p-4">
								<ShirtIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
							</div>
							<span className="text-sm font-medium">T-Shirts</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-accent rounded-full p-3 sm:p-4">
								<FootprintsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
							</div>
							<span className="text-sm font-medium">Sneakers</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-secondary rounded-full p-3 sm:p-4">
								<ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
							</div>
							<span className="text-sm font-medium">Backpacks</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col items-center gap-2 border rounded-lg p-4"
							prefetch={false}>
							<div className="bg-muted rounded-full p-3 sm:p-4">
								<WatchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
							</div>
							<span className="text-sm font-medium">Watches</span>
						</Link>
					</div>
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
						<ScrollArea className="h-[400px]">
							<div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4">
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
													<h3 className="text-base font-semibold">
														Leather Backpack
													</h3>
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
													<h3 className="text-base font-semibold">
														Denim Jeans
													</h3>
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
						</ScrollArea>
					</div>
				</div>
			</ScrollArea>
			<nav className="bg-background border-t flex justify-around py-2 fixed bottom-0 w-full">
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<HomeIcon className="w-6 h-6" />
					<span className="text-xs">Home</span>
				</Link>
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<ListIcon className="w-6 h-6" />
					<span className="text-xs">Categories</span>
				</Link>
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<ShoppingCartIcon className="w-6 h-6" />
					<span className="text-xs">Cart</span>
				</Link>
				<Link
					href="#"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<UserIcon className="w-6 h-6" />
					<span className="text-xs">Profile</span>
				</Link>
			</nav>
		</div>
	);
}

function FootprintsIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
			<path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
			<path d="M16 17h4" />
			<path d="M4 13h4" />
		</svg>
	);
}

function HomeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	);
}

function ListIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<line x1="8" x2="21" y1="6" y2="6" />
			<line x1="8" x2="21" y1="12" y2="12" />
			<line x1="8" x2="21" y1="18" y2="18" />
			<line x1="3" x2="3.01" y1="6" y2="6" />
			<line x1="3" x2="3.01" y1="12" y2="12" />
			<line x1="3" x2="3.01" y1="18" y2="18" />
		</svg>
	);
}

function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

function ShirtIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
		</svg>
	);
}

function ShoppingBagIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
			<path d="M3 6h18" />
			<path d="M16 10a4 4 0 0 1-8 0" />
		</svg>
	);
}

function ShoppingCartIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="8" cy="21" r="1" />
			<circle cx="19" cy="21" r="1" />
			<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
		</svg>
	);
}

function UserIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

function WatchIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="12" cy="12" r="6" />
			<polyline points="12 10 12 12 13 13" />
			<path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
			<path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
		</svg>
	);
}
