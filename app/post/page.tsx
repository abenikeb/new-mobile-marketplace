"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const categories = [
	"Electronics",
	"Clothing",
	"Home & Garden",
	"Toys & Games",
	"Books",
	"Sports & Outdoors",
	"Beauty & Personal Care",
	"Automotive",
	"Health & Wellness",
];

const formSchema = z.object({
	title: z.string().min(3, {
		message: "Title must be at least 3 characters.",
	}),
	description: z.string().min(10, {
		message: "Description must be at least 10 characters.",
	}),
	price: z.number().min(0.01, {
		message: "Price must be at least 0.01.",
	}),
	category: z.string({
		required_error: "Please select a category.",
	}),
	condition: z.enum(["New", "Like New", "Good", "Fair", "Poor"], {
		required_error: "Please select a condition.",
	}),
	quantity: z.number().int().min(1, {
		message: "Quantity must be at least 1.",
	}),
});

export default function Post() {
	const [images, setImages] = useState<string[]>([]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			price: 0,
			category: "",
			condition: "New",
			quantity: 1,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Here you would typically send the form data to your backend
		console.log(values);
		console.log(images);
		toast({
			title: "Product Posted!",
			description:
				"Your product has been successfully posted to the marketplace.",
		});
	}

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			const newImages = Array.from(files).map((file) =>
				URL.createObjectURL(file)
			);
			setImages((prevImages) => [...prevImages, ...newImages]);
		}
	};

	const removeImage = (index: number) => {
		setImages((prevImages) => prevImages.filter((_, i) => i !== index));
	};

	return (
		<div className="container mx-auto px-4 py-8 mb-10">
			<h1 className="text-3xl font-bold mb-8">Post a New Product</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Product Title</FormLabel>
								<FormControl>
									<Input placeholder="Enter product title" {...field} />
								</FormControl>
								<FormDescription>
									Provide a clear and concise title for your product.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Product Description</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Describe your product in detail"
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Include relevant details about your product's features and
									condition.
								</FormDescription>
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
										step="0.01"
										placeholder="Enter price"
										{...field}
										onChange={(event) =>
											field.onChange(parseFloat(event.target.value))
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a category" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{categories.map((category) => (
											<SelectItem key={category} value={category}>
												{category}
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
						name="condition"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Condition</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select product condition" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{["New", "Like New", "Good", "Fair", "Poor"].map(
											(condition) => (
												<SelectItem key={condition} value={condition}>
													{condition}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="quantity"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Quantity</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder="Enter quantity"
										{...field}
										onChange={(event) =>
											field.onChange(parseInt(event.target.value, 10))
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div>
						<FormLabel>Product Images</FormLabel>
						<div className="mt-2 flex items-center gap-4">
							<label htmlFor="image-upload" className="cursor-pointer">
								<div className="flex items-center justify-center w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50">
									<Upload className="w-8 h-8 text-gray-400" />
								</div>
								<input
									id="image-upload"
									type="file"
									multiple
									accept="image/*"
									className="hidden"
									onChange={handleImageUpload}
								/>
							</label>
							{images.map((image, index) => (
								<div key={index} className="relative">
									<img
										src={image}
										alt={`Product image ${index + 1}`}
										className="w-24 h-24 object-cover rounded-lg"
									/>
									<button
										type="button"
										onClick={() => removeImage(index)}
										className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
										<X className="w-4 h-4" />
									</button>
								</div>
							))}
						</div>
						<FormDescription className="mt-2">
							Upload up to 5 images of your product. The first image will be the
							main display image.
						</FormDescription>
					</div>
					<Button type="submit">Post Product</Button>
				</form>
			</Form>
		</div>
	);
}
