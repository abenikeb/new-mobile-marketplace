"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	ChevronRight,
	Search,
	Laptop,
	User,
	Menu,
	Smartphone,
	Headphones,
	Camera,
	Tv,
	Watch,
	Gamepad,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
const Hero2 = () => {
	return (
		<div>
			<section className="py-12 bg-muted">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
					<p className="text-xl mb-8">
						Subscribe to our newsletter for the latest tech news and exclusive
						deals
					</p>
					<form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
						<Input
							type="email"
							placeholder="Enter your email"
							className="w-full"
						/>
						<Button type="submit">Subscribe</Button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Hero2;
