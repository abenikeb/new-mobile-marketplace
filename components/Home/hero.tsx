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

const Hero = () => {
	return (
		<div>
			<section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold mb-4">Welcome to TechMarket</h1>
					<p className="text-xl mb-8">
						Discover the latest and greatest in electronics
					</p>
					<Button size="lg" variant="secondary" asChild>
						<Link href="/products">
							Explore All Products
							<ChevronRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
};

export default Hero;
