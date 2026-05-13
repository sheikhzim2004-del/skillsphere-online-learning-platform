"use client";

import { Check, Eye, EyeOff } from "lucide-react";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { CgGoogle } from "react-icons/cg";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {

    const { register, handleSubmit, } = useForm();
    const [showPassword, setShowPassword] = useState(false);


    const handleLoginFunc = async (data) => {
        // console.log("Form Data:", data);

        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        })
        console.log(res, error);

        if (error) {
            toast.error("Login failed: " + error.message)
        }
        if (res) {
            toast.success("Login successful!" + res.message, )
        }
    };

    const hendleGoogleLoginFunc = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        })
    }

    return (

        <div className='min-h-[80vh] flex flex-col justify-center items-center mt-6 container mx-auto rounded-xl p-8'>
            <div className='rounded-xl p-4 border border-teal-300 shadow-md shadow-teal-300/50 w-full max-w-md'>
                <h1 className='text-4xl font-bold text-center mb-4 mt-6'>Login to Your Account</h1>

                <Form
                    className="flex flex-col gap-4 relative"
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
                            className="absolute right-4 bottom-28"
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
                    <p>Don&#39;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register here</Link></p>
                </Form>
                <p className="text-center text-xl font-bold border-b-teal-800 border-b-2 my-4 pb-4">or</p>
                <Button onClick={hendleGoogleLoginFunc} variant="none" className="border-2 border-blue-500 w-full p-4 my-4 text-lg font-bold hover:shadow-teal-400 hover:shadow-sm"><CgGoogle></CgGoogle> Login with <span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-amber-300">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></Button>
            </div>
        </div>
    );
}