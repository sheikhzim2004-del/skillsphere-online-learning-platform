import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere",
  description: "A platform to connect skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      data-theme="dark"
    >
      <body className="">
        <Navbar></Navbar>
        <main className=" bg-[#080d0f]"><div className="max-w-7xl mx-auto">{children}</div></main>
        <Footer></Footer>
        </body>
    </html>
  );
}
