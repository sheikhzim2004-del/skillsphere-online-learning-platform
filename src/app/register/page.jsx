"use client";

import { Check, Eye, EyeOff } from "lucide-react";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function RegisterPage() {

    const { register, handleSubmit, } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        const { name, photoUrl, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            photoUrl,
            callbackURL: "/login",

        })
        console.log(res, error);

        if (error) {
            alert("Registration failed: " + error.message);
        }
        if (res) {
            alert("Registration successful! Please check your email to verify your account.");
        }

    };

    return (

        <div className='min-h-[80hv] flex flex-col justify-center items-center mt-6 container mx-auto rounded-xl p-8'>
            <div className='rounded-xl p-4 border border-teal-300 shadow-md shadow-teal-300/50 w-full max-w-md'>
                <h1 className='text-4xl font-bold text-center mb-4 mt-6'>Register Your Account</h1>

                <Form
                    className="flex flex-col gap-4 relative"
                    onSubmit={handleSubmit(handleRegisterFunc)}
                >
                    <TextField
                        isRequired
                        type="text"
                        validate={(value) => {
                            if (value.trim() === "") {
                                return "Name is required";
                            }
                        }}
                    >
                        <Label>Name</Label>
                        <Input
                            {...register("name")}
                            placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        type="text"
                        validate={(value) => {
                            if (value.trim() === "") {
                                return "Photo URL is required";
                            }
                        }}
                    >
                        <Label>Photo URL</Label>
                        <Input
                            {...register("photoUrl")}
                            placeholder="Enter your photo URL" />
                        <FieldError />
                    </TextField>
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
                        type={showPassword ? "text" : "password"}
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
                        <Button
                            type="button"
                            className="absolute right-4 bottom-32"
                            variant="none"
                            onClick={() => setShowPassword(!showPassword)}
                        >{showPassword ? <Eye /> : <EyeOff />}
                        </Button>
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
                    <p className="mb-4">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login here</Link></p>
                </Form>
            </div>
        </div>
    );
}