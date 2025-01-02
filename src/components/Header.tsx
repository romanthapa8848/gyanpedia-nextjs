import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar"; // Importing the NavBar component

export default function Header() {
  return (
    <header className="bg-white text-black py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between space-x-8">
        {/* Navigation Links on the Left (Hidden on Mobile) */}
        <div className="hidden lg:flex">
          <NavBar /> {/* Use NavBar here */}
        </div>

        {/* Logo in the Center */}
        <div className="flex justify-center absolute inset-x-0">
          <Link href="/" className="text-2xl font-semibold">
            <Image
              src="/logo.png"
              alt="Gyanpedia Logo"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Login/Signup Buttons on the Right (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-6">
          <Link
            href="/login"
            className="bg-gray-200 text-black p-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-gray-300 text-black p-3 rounded-full shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Version of the Header (for small screens) */}
      <div className="lg:hidden flex flex-col items-center">
        {/* Logo on Mobile */}
        <Link href="/" className="text-2xl font-semibold mb-4">
          <Image
            src="/logo.png"
            alt="Gyanpedia Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center space-y-4">
          <NavBar /> {/* Reuse NavBar here for mobile view */}
        </div>

        {/* Mobile Login/Signup Buttons */}
        <div className="flex space-x-6 mt-4">
          <Link
            href="/login"
            className="bg-gray-200 text-black p-3 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-gray-300 text-black p-3 rounded-full shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
