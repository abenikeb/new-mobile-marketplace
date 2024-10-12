"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const categories = [
	{ value: "computers", label: "Computers" },
	{ value: "phones", label: "Phones & Tablets" },
	{ value: "audio", label: "Audio" },
];

const subCategories = {
	computers: [
		{ value: "laptop", label: "Laptop" },
		{ value: "desktop", label: "Desktop" },
	],
	phones: [
		{ value: "smartphone", label: "Smartphone" },
		{ value: "tablet", label: "Tablet" },
	],
	audio: [
		{ value: "headphones", label: "Headphones" },
		{ value: "speakers", label: "Speakers" },
	],
};

const conditions = [
	{ value: "new", label: "New" },
	{ value: "like-new", label: "Like New" },
	{ value: "good", label: "Good" },
	{ value: "fair", label: "Fair" },
	{ value: "poor", label: "Poor" },
];

const formSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	category: z.string({
		required_error: "Please select a category.",
	}),
	subCategory: z.string({
		required_error: "Please select a sub-category.",
	}),
	description: z.string().min(10, {
		message: "Description must be at least 10 characters.",
	}),
	location: z.string().min(2, {
		message: "Location must be at least 2 characters.",
	}),
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	phone: z.string().min(10, {
		message: "Phone number must be at least 10 characters.",
	}),
	brand: z.string().min(2, {
		message: "Brand must be at least 2 characters.",
	}),
	model: z.string().min(2, {
		message: "Model must be at least 2 characters.",
	}),
	condition: z.string({
		required_error: "Please select a condition.",
	}),
	processor: z.string().optional(),
	ram: z.string().optional(),
	storage: z.string().optional(),
	screenSize: z.string().optional(),
	batteryLife: z.string().optional(),
	cameraResolution: z.string().optional(),
	driverSize: z.string().optional(),
	frequency: z.string().optional(),
	youtubeLink: z.string().url().optional().or(z.literal("")),
});

export default function ProductPostForm() {
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			location: "",
			name: "",
			phone: "",
			brand: "",
			model: "",
			youtubeLink: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="max-w-4xl mx-auto p-2 space-y-8">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<Card className="p-2">
						<CardHeader>
							<CardTitle>Post Your Electronics Product</CardTitle>
							<CardDescription>
								Fill in the details about your product
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Title</FormLabel>
											<FormControl>
												<Input placeholder="Enter product title" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="location"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Location</FormLabel>
											<FormControl>
												<Input placeholder="Enter your location" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="category"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Category</FormLabel>
										<Select
											onValueChange={(value) => {
												field.onChange(value);
												setCategory(value);
												setSubCategory("");
												form.setValue("subCategory", "");
											}}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a category" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{categories.map((category) => (
													<SelectItem
														key={category.value}
														value={category.value}>
														{category.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{category && (
								<FormField
									control={form.control}
									name="subCategory"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Sub-Category</FormLabel>
											<Select
												onValueChange={(value) => {
													field.onChange(value);
													setSubCategory(value);
												}}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a sub-category" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{subCategories[
														category as keyof typeof subCategories
													].map((subCategory) => (
														<SelectItem
															key={subCategory.value}
															value={subCategory.value}>
															{subCategory.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							)}

							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Enter product description"
												className="resize-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div>
								<FormLabel>Images</FormLabel>
								<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
									<div className="text-center">
										<svg
											className="mx-auto h-12 w-12 text-gray-300"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true">
											<path
												fillRule="evenodd"
												d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
												clipRule="evenodd"
											/>
										</svg>
										<div className="mt-4 flex text-sm leading-6 text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer rounded-md bg-white font-semibold text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
												<span>Upload files</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
													multiple
												/>
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
										<p className="text-xs leading-5 text-gray-600">
											PNG, JPG, GIF up to 10MB
										</p>
									</div>
								</div>
							</div>

							{subCategory && (
								<>
									<FormField
										control={form.control}
										name="brand"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Brand</FormLabel>
												<FormControl>
													<Input placeholder="Enter brand name" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="model"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Model</FormLabel>
												<FormControl>
													<Input placeholder="Enter model name" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="condition"
										render={({ field }) => (
											<FormItem className="space-y-3">
												<FormLabel>Condition</FormLabel>
												<FormControl>
													<RadioGroup
														onValueChange={field.onChange}
														defaultValue={field.value}
														className="flex flex-col space-y-1">
														{conditions.map((condition) => (
															<FormItem
																className="flex items-center space-x-3 space-y-0"
																key={condition.value}>
																<FormControl>
																	<RadioGroupItem value={condition.value} />
																</FormControl>
																<FormLabel className="font-normal">
																	{condition.label}
																</FormLabel>
															</FormItem>
														))}
													</RadioGroup>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									{(subCategory === "laptop" || subCategory === "desktop") && (
										<>
											<FormField
												control={form.control}
												name="processor"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Processor</FormLabel>
														<FormControl>
															<Input
																placeholder="Enter processor details"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="ram"
												render={({ field }) => (
													<FormItem>
														<FormLabel>RAM</FormLabel>
														<FormControl>
															<Input placeholder="Enter RAM size" {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="storage"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Storage</FormLabel>
														<FormControl>
															<Input
																placeholder="Enter storage capacity"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</>
									)}

									{(subCategory === "laptop" || subCategory === "tablet") && (
										<FormField
											control={form.control}
											name="screenSize"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Screen Size</FormLabel>
													<FormControl>
														<Input placeholder="Enter screen size" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									)}

									{(subCategory === "laptop" ||
										subCategory === "smartphone" ||
										subCategory === "tablet") && (
										<FormField
											control={form.control}
											name="batteryLife"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Battery Life</FormLabel>
													<FormControl>
														<Input
															placeholder="Enter battery life"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									)}

									{(subCategory === "smartphone" ||
										subCategory === "tablet") && (
										<FormField
											control={form.control}
											name="cameraResolution"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Camera Resolution</FormLabel>
													<FormControl>
														<Input
															placeholder="Enter camera resolution"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									)}

									{subCategory === "speakers" && (
										<FormField
											control={form.control}
											name="driverSize"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Driver Size</FormLabel>
													<FormControl>
														<Input placeholder="Enter driver size" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									)}

									{(subCategory === "headphones" ||
										subCategory === "speakers") && (
										<FormField
											control={form.control}
											name="frequency"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Frequency Response</FormLabel>
													<FormControl>
														<Input
															placeholder="Enter frequency response"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									)}
								</>
							)}

							<FormField
								control={form.control}
								name="youtubeLink"
								render={({ field }) => (
									<FormItem>
										<FormLabel>YouTube Link</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter YouTube video link (optional)"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											Add a YouTube link to showcase your product (optional)
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
					</Card>

					<Card className="p-6">
						<CardHeader>
							<CardTitle>Contact Information</CardTitle>
							<CardDescription>
								Please provide your contact details
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Your Name</FormLabel>
											<FormControl>
												<Input placeholder="Enter your name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your phone number"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</CardContent>
					</Card>

					<Button type="submit" className="w-full">
						Submit Product Listing
					</Button>
				</form>
			</Form>
		</div>
	);
}
