"use client";

import { useState, useCallback } from "react";
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
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useDropzone } from "react-dropzone";

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

const deliveryOptions = [
	{ id: "pickup", label: "Local Pickup" },
	{ id: "shipping", label: "Shipping" },
	{ id: "both", label: "Both Pickup and Shipping" },
];

const states = [
	{ value: "AA", label: "Addis Ababa" },
	{ value: "AD", label: "Adama" },
	{ value: "HA", label: "Hawasa" },
];

const cities = {
	AA: [
		{ value: "addis-ketema", label: "Addis Ketema" },
		{ value: "bole", label: "Bole" },
		{ value: "yeka", label: "Yeka" },
	],
	AD: [
		{ value: "sub-city", label: "Sub City" },
		{ value: "buffalo", label: "Buffalo" },
		{ value: "albany", label: "Albany" },
	],
	HA: [
		{ value: "houston", label: "Houston" },
		{ value: "austin", label: "Austin" },
		{ value: "dallas", label: "Dallas" },
	],
};

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
	state: z.string({
		required_error: "Please select a state.",
	}),
	city: z.string({
		required_error: "Please select a city.",
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
	price: z.number().min(0, {
		message: "Price must be a positive number.",
	}),
	deliveryOptions: z.array(z.string()).refine((value) => value.length > 0, {
		message: "You must select at least one delivery option.",
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
	const [selectedState, setSelectedState] = useState("");
	const [images, setImages] = useState<File[]>([]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			state: "",
			city: "",
			brand: "",
			model: "",
			price: 0,
			deliveryOptions: [],
			youtubeLink: "",
		},
	});

	const onDrop = useCallback((acceptedFiles: File[]) => {
		setImages((prevImages) => [...prevImages, ...acceptedFiles]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpeg", ".jpg", ".png", ".gif"],
		},
		multiple: true,
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		console.log("Images:", images);
	}

	return (
		<div className="max-w-4xl mx-auto p-2 space-y-8">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<Card className="p-2">
						<CardHeader>
							<CardTitle>Post Your Ad</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title*</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter product title"
												{...field}
												required
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="state"
									render={({ field }) => (
										<FormItem>
											<FormLabel>State</FormLabel>
											<Select
												onValueChange={(value) => {
													field.onChange(value);
													setSelectedState(value);
													form.setValue("city", "");
												}}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a state" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{states.map((state) => (
														<SelectItem key={state.value} value={state.value}>
															{state.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								{selectedState && (
									<FormField
										control={form.control}
										name="city"
										render={({ field }) => (
											<FormItem>
												<FormLabel>City</FormLabel>
												<Select onValueChange={field.onChange}>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select a city" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														{cities[selectedState as keyof typeof cities].map(
															(city) => (
																<SelectItem key={city.value} value={city.value}>
																	{city.label}
																</SelectItem>
															)
														)}
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								)}
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
								<div
									{...getRootProps()}
									className={`mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${
										isDragActive ? "bg-blue-50" : ""
									}`}>
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
												<input {...getInputProps()} />
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
										<p className="text-xs leading-5 text-gray-600">
											PNG, JPG, GIF up to 10MB
										</p>
									</div>
								</div>
								{images.length > 0 && (
									<div className="mt-4">
										<p>{images.length} file(s) selected</p>
										<ul className="list-disc pl-5">
											{images.map((file, index) => (
												<li key={index}>{file.name}</li>
											))}
										</ul>
									</div>
								)}
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
											<FormItem>
												<FormLabel>Condition</FormLabel>

												<Select onValueChange={field.onChange}>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select condition" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														{conditions.map((condition) => (
															<SelectItem
																key={condition.value}
																value={condition.value}>
																{condition.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="price"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Price</FormLabel>
												<FormControl>
													<Input
														type="number"
														placeholder="Enter price"
														{...field}
														onChange={(e) =>
															field.onChange(parseFloat(e.target.value))
														}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="deliveryOptions"
										render={() => (
											<FormItem>
												<div className="mb-4">
													<FormLabel className="text-base">
														Delivery Options
													</FormLabel>
													<FormDescription>
														Select the available delivery options for your
														product.
													</FormDescription>
												</div>
												{deliveryOptions.map((item) => (
													<FormField
														key={item.id}
														control={form.control}
														name="deliveryOptions"
														render={({ field }) => {
															return (
																<FormItem
																	key={item.id}
																	className="flex flex-row items-start space-x-3 space-y-0">
																	<FormControl>
																		<Checkbox
																			checked={field.value?.includes(item.id)}
																			onCheckedChange={(checked) => {
																				return checked
																					? field.onChange([
																							...field.value,
																							item.id,
																					  ])
																					: field.onChange(
																							field.value?.filter(
																								(value) => value !== item.id
																							)
																					  );
																			}}
																		/>
																	</FormControl>
																	<FormLabel className="font-normal">
																		{item.label}
																	</FormLabel>
																</FormItem>
															);
														}}
													/>
												))}
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

					<Button
						type="submit"
						className="w-full bg-orange-300 hover:bg-orange-400 text-black">
						Submit Product Listing
					</Button>
				</form>
			</Form>
		</div>
	);
}
