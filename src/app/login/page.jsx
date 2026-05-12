"use client";

import { Check } from "lucide-react";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function LoginPage() {

    const {register, handleSubmit,} = useForm();

    const handleLoginFunc = (data) => {
        console.log("Form Data:", data);
    };

    return (

        <div className='min-h-[80hv] flex flex-col justify-center items-center mt-6 container mx-auto rounded-xl p-8'>
            <div className='rounded-xl p-4 border border-teal-300 shadow-md shadow-teal-300/50 w-full max-w-md'>
                <h1 className='text-4xl font-bold text-center mb-4'>Login to Your Account</h1>

                <Form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(handleLoginFunc)}
                >

                    <TextField
                        isRequired
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input 
                        {...register("email")}
                        placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input 
                        {...register("password")}
                        placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                    <p>Don&#39;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register here</Link></p>
                </Form>
            </div>
        </div>
    );
}