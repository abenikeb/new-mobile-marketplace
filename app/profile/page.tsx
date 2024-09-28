"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, LogOut, User, Package, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UserSession {
	name: string;
	email: string;
}

export default function Profile() {
	const [session, setSession] = useState<UserSession | null | any>(true);
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulating a login process
		setSession({ name: "John Doe", email: "john@example.com" });
	};

	const handleLogout = () => {
		setSession(null);
	};

	if (!session) {
		return (
			<div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
				<Card className="w-full max-w-md">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold text-center">
							Login
						</CardTitle>
						<CardDescription className="text-center">
							Enter your email and password to access your account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleLogin}>
							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="john@example.com"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="password">Password</Label>
									<div className="relative">
										<Input
											id="password"
											type={showPassword ? "text" : "password"}
											placeholder="••••••••"
											required
										/>
										<Button
											type="button"
											variant="ghost"
											size="icon"
											className="absolute right-2 top-1/2 -translate-y-1/2"
											onClick={() => setShowPassword(!showPassword)}>
											{showPassword ? (
												<EyeOff className="h-4 w-4" />
											) : (
												<Eye className="h-4 w-4" />
											)}
											<span className="sr-only">
												Toggle password visibility
											</span>
										</Button>
									</div>
								</div>
							</div>
							<Button className="w-full mt-6" type="submit">
								Login
							</Button>
						</form>
					</CardContent>
					<CardFooter className="flex flex-col items-center">
						<p className="text-sm text-muted-foreground mt-2">
							Don&apos;t have an account?{" "}
							<Link href="/register" className="text-primary hover:underline">
								Sign up
							</Link>
						</p>
					</CardFooter>
				</Card>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8 my-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">My Account</h1>
				<Button variant="outline" onClick={handleLogout}>
					<LogOut className="mr-2 h-4 w-4" />
					Logout
				</Button>
			</div>
			<div className="grid gap-8 md:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>Profile</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center space-x-4">
							<div className="rounded-full bg-muted p-2">
								<User className="h-8 w-8" />
							</div>
							<div>
								<p className="font-medium">{session.name}</p>
								<p className="text-sm text-muted-foreground">{session.email}</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card className="md:col-span-2">
					<CardHeader>
						<CardTitle>Account Overview</CardTitle>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="orders">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="orders">Orders</TabsTrigger>
								<TabsTrigger value="payments">Payments</TabsTrigger>
							</TabsList>
							<TabsContent value="orders" className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<Package className="h-8 w-8 text-muted-foreground" />
										<div>
											<p className="font-medium">Order #12345</p>
											<p className="text-sm text-muted-foreground">
												Shipped on April 23, 2023
											</p>
										</div>
									</div>
									<Button variant="outline" size="sm">
										View Details
									</Button>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<Package className="h-8 w-8 text-muted-foreground" />
										<div>
											<p className="font-medium">Order #12344</p>
											<p className="text-sm text-muted-foreground">
												Delivered on April 15, 2023
											</p>
										</div>
									</div>
									<Button variant="outline" size="sm">
										View Details
									</Button>
								</div>
							</TabsContent>
							<TabsContent value="payments" className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<CreditCard className="h-8 w-8 text-muted-foreground" />
										<div>
											<p className="font-medium">Visa ending in 1234</p>
											<p className="text-sm text-muted-foreground">
												Expires 12/2024
											</p>
										</div>
									</div>
									<Button variant="outline" size="sm">
										Edit
									</Button>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
