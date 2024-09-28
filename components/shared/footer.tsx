import React from "react";
import Link from "next/link";
import { HomeIcon, ListIcon, ShoppingCartIcon, UserIcon } from "./common";
import { CameraIcon, MessageCircle } from "lucide-react";

const Footer = () => {
	return (
		<div>
			{" "}
			<nav className="bg-background border-t flex justify-around py-2 fixed bottom-0 w-full">
				<Link
					href="/"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<HomeIcon className="w-6 h-6" />
					<span className="text-xs">Home</span>
				</Link>
				<Link
					href="/cart"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<ShoppingCartIcon className="w-6 h-6" />
					<span className="text-xs">Cart</span>
				</Link>
				<Link
					href="/post"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<CameraIcon className="w-6 h-6" />
					<span className="text-xs">Post</span>
				</Link>
				<Link
					href="/categories"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<MessageCircle className="w-6 h-6" />
					<span className="text-xs">Messages</span>
				</Link>

				<Link
					href="/profile"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<UserIcon className="w-6 h-6" />
					<span className="text-xs">Profile</span>
				</Link>
			</nav>
		</div>
	);
};

export default Footer;
