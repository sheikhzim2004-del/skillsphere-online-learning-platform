"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [openBar, setOpenBar] = useState(false);

  // const userData = authClient.useSession();
  // const user = userData?.data?.user;
  
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleLogout = async () => {
    await authClient.signOut();
  }

  return (
    <nav className="border-b border-gray-200 bg-black/90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg border cursor-pointer hover:border-blue-500 transition"
              onClick={() => setOpenBar(!openBar)}
            >
              <FaBars />
            </button>

            {/* Dropdown menu */}
            {openBar && (
              <div className="absolute left-4 mt-2 border rounded-xl shadow-xl p-3 space-y-2">
                <Link
                  href={"/"}
                  className="block px-2 text-center rounded-xl  border hover:text-black hover:bg-white transition border-blue-500"
                >Home</Link>
                <Link
                  href={"/all-courses"}
                  className="block px-2 text-center rounded-xl  border hover:text-black hover:bg-white transition border-blue-500"
                >Courses</Link>
                <Link
                  href={"/profile"}
                  className="block px-2 text-center rounded-xl  border hover:text-black hover:bg-white transition border-blue-500"
                >My Profile</Link>
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="SkillSphere Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="md:hidden">
            <button className="btn px-5 py-2 rounded-xl border border-gray-300 hover:text-blue-500 cursor-pointer transition font-medium">
              Login
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-500 hover:underline hover:text-blue-500 p-2 rounded-xl transition font-medium"
            >
              Home
            </Link>

            <Link
              href="/all-courses"
              className="text-gray-500 hover:underline hover:text-blue-500 p-2 rounded-xl transition font-medium"
            >
              Courses
            </Link>

            <Link
              href="/profile"
              className="text-gray-500 hover:underline hover:text-blue-500 p-2 rounded-xl transition font-medium"
            >
              My Profile
            </Link>
          </div>

          {/* Auth Buttons */}
          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-gray-600 animate-pulse" />
          ) : !user ? (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <p>Hellow, {user.name}</p>
              <Avatar>
                <Avatar.Image
                  alt={user.name}
                  src={user.image}
                  referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button variant="danger" className="btn px-5 py-2 rounded-xl border border-gray-300 hover:bg-white hover:text-blue-500 cursor-pointer transition font-medium" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
