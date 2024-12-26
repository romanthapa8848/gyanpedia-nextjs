// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image"; // Importing Image for better optimization

export default function Header() {
  return (
    <header className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation Links on the Left */}
        <div className="flex space-x-8">
          <Link
            href="/guides"
            className="text-lg font-medium hover:text-blue-500 transition-all"
          >
            Guides
          </Link>
          <Link
            href="/syllabi"
            className="text-lg font-medium hover:text-blue-500 transition-all"
          >
            Syllabi
          </Link>
          <Link
            href="/old-questions"
            className="text-lg font-medium hover:text-blue-500 transition-all"
          >
            Old Questions
          </Link>
        </div>

        {/* Empty space to balance out navigation links, so logo is centered */}
        <div className="flex-grow"></div>

        {/* Logo in the Center */}
        <div className="flex justify-center absolute inset-x-0">
          <Link href="/" className="text-2xl font-semibold">
            <Image
              src="/logo.png" // Logo image path
              alt="Gyanpedia Logo"
              width={120} // Adjust the width as needed
              height={40} // Adjust the height as needed
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Login/Signup Buttons on the Right */}
        <div className="flex space-x-4">
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
