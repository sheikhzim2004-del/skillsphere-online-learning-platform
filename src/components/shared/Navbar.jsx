"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <nav className="border-b border-gray-200 sticky top-0 z-50">
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
                <a className="block px-2 text-center rounded-xl  border hover:text-black hover:bg-white transition border-blue-500">Home</a>
                <a className="block px-2 text-center rounded-xl  border hover:text-black hover:bg-white transition border-blue-500">Courses</a>
                <a className="block px-2 text-center rounded-xl  border hover:text-black hover:bg-white transition border-blue-500">My Profile</a>
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
              href="#"
              className="text-gray-500 hover:underline hover:text-blue-500 p-2 rounded-xl transition font-medium"
            >
              Home
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:underline hover:text-blue-500 p-2 rounded-xl transition font-medium"
            >
              Courses
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:underline hover:text-blue-500 p-2 rounded-xl transition font-medium"
            >
              My Profile
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Logged Out State */}
            <button className="btn px-5 py-2 rounded-xl border border-gray-300 hover:text-blue-500 cursor-pointer transition font-medium">
              Login
            </button>

            <button className="btn px-5 border border-gray-300 py-2 rounded-xl hover:text-blue-500 bg-black text-white transition font-medium">
              Register
            </button>

            {/* Logged In State Example */}
            {/*
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/4pDNDk1/avatar.png"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />

              <button className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition">
                Logout
              </button>
            </div>
            */}
          </div>
        </div>
      </div>
    </nav>
  );
}
