// // pages/verify.js
// "use client";
// import { useState } from "react";
// import { Button, Form, Input, Typography, notification } from "antd";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import "antd/dist/reset.css";
// import axios from "axios";
// import { BASE_URL } from "@/lib/config/constants";

// const { Title, Text } = Typography;

// export default function VerificationPage() {
// 	const router = useRouter();
// 	const searchParams = useSearchParams();
// 	const [code, setCode] = useState("");
// 	const [loading, setLoading] = useState(false);
// 	const phone = searchParams.get("phone");

// 	const handleInputChange = (e: any) => {
// 		let value = e.currentTarget.value.replace(/\D/g, "");
// 		if (value.length > 5) value = value.slice(0, 7);
// 		value = value
// 			.replace(/(\d{1})(\d{1})?(\d{1})?(\d{1})?(\d{1})?/, "$1-$2-$3-$4-$5")
// 			.replace(/-+$/, "");
// 		setCode(value);
// 	};

// 	const handleSubmit = async () => {
// 		setLoading(true);

// 		try {
// 			const { data } = await axios.post(`${BASE_URL}/social-login`, {
// 				phone,
// 				ValidationCode: code.replace(/-/g, ""),
// 				name: "Benjamin Asefa",
// 				image:
// 					"https://lh3.googleusercontent.com/a/ACg8ocIC2HHNtcAy7qyll3kGQucdAei6J5Uor5f8r4hk10PhUpbp5w=s96-c",
// 				type: "credential",
// 			});

// 			if (data.original.code !== "0") {
// 				throw new Error("Network response was not ok");
// 			}

// 			notification.success({
// 				message: "Verification Successful",
// 				description: "You have successfully verified your phone number.",
// 			});
// 			router.replace(`/profile`);
// 		} catch (error) {
// 			notification.error({
// 				message: "Verification Failed",
// 				description: "Please try again later.",
// 			});
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="flex items-start justify-center min-h-screen bg-gray-100">
// 			<div className="w-full max-w-md px-8 py-8 mx-auto">
// 				<Title level={2} className="text-center text-blue-800 mb-6">
// 					Verify Your Phone
// 				</Title>
// 				<img
// 					src="/images/verify.png"
// 					alt="verification"
// 					width={250}
// 					height={250}
// 					className="m-auto"
// 				/>
// 				<Text className="block mb-6 text-center text-gray-700">
// 					Enter the verification code sent to your mobile number{" "}
// 					<span className="font-bold">{phone}</span>
// 				</Text>
// 				<Form onFinish={handleSubmit} className="space-y-6">
// 					<Form.Item
// 						name="verificationCode"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Please enter the verification code!",
// 							},
// 						]}>
// 						<Input
// 							value={code}
// 							onChange={handleInputChange}
// 							placeholder="Enter code here"
// 							maxLength={7}
// 						/>
// 					</Form.Item>
// 					<Form.Item>
// 						<Button
// 							type="primary"
// 							htmlType="submit"
// 							className="w-full bg-orange-500"
// 							loading={loading} // Show loading spinner
// 						>
// 							Verify
// 						</Button>
// 					</Form.Item>
// 				</Form>
// 				<div className="flex justify-between mt-4 text-sm text-center text-orange-600">
// 					<a href="#" className="hover:underline">
// 						Resend Code
// 					</a>
// 					<a href="#" className="hover:underline">
// 						Contact Support
// 					</a>
// 				</div>
// 				<p className="mt-6 text-sm text-center text-gray-500">
// 					By verifying, you agree to our{" "}
// 					<a href="#" className="text-orange-600 hover:underline">
// 						Terms of Service
// 					</a>{" "}
// 					and{" "}
// 					<a href="#" className="text-orange-600 hover:underline">
// 						Privacy Policy
// 					</a>
// 				</p>
// 			</div>
// 		</div>
// 	);
// }
