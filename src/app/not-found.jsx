import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#080d0f] text-white px-6 text-center">
      
      <h1 className="text-6xl font-bold text-teal-400">404</h1>

      <h2 className="text-2xl mt-4 font-semibold">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-xl transition"
      >
        Go Home
      </Link>
    </div>
  );
}