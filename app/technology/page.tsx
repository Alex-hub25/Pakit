"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    <path stroke="currentColor" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      stroke="currentColor"
      strokeWidth="2"
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
      fill="currentColor"
    />
  </svg>
);

export default function Technology() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`min-h-screen flex flex-col transition-colors ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
        {/* Navbar/Header */}
        <nav className={`flex justify-between items-center p-6 shadow-md ${darkMode ? "bg-white" : "bg-black"}`}>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src={darkMode ? "/Logo.DK.png" : "/Logo.LT.png"}
                alt="Logo"
                width={90}
                height={80}
                priority
                className="cursor-pointer"
              />
            </Link>
            <h1 className="text-2xl font-bold text-orange-500"></h1>
          </div>
          <div className="flex items-center gap-6">
            {/* Removed Home link */}
            <Link href="/about" className="hover:text-orange-500">
              About
            </Link>
            <Link href="/technology" className="hover:text-orange-500">
              Technology
            </Link>
            <Link href="/pricing" className="hover:text-orange-500">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-orange-500">
              Contact
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="transition flex items-center justify-center rounded-full p-2 focus:outline-none"
              aria-label="Toggle dark mode"
              style={{ background: "transparent", boxShadow: "none", border: "none" }}
            >
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </nav>

        {/* Technology Content */}
        <main className="flex flex-1 flex-col items-center justify-center py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Our Technology</h1>
          <p className="max-w-2xl mb-8">
            PAKIT leverages advanced automation, real-time tracking, and seamless integrations with major e-commerce platforms.
            Our analytics dashboard and scalable warehousing ensure your fulfillment operations are always optimized.
          </p>
          <Link href="/" className="text-orange-500 hover:underline">Back to Home</Link>
        </main>

        {/* Footer with navigation */}
        <footer className={`w-full py-6 mt-8 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={darkMode ? "/Logo.DK.png" : "/Logo.LT.png"}
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-orange-500">PAKIT</span>
            </div>
            <nav className="flex gap-6 justify-center">
              {/* Removed Home link */}
              <Link href="/about" className="hover:text-orange-500">
                About
              </Link>
              <Link href="/technology" className="hover:text-orange-500">
                Technology
              </Link>
                <Link href="/pricing" className="hover:text-orange-500">
              Pricing
                </Link>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </nav>
            <span className="text-sm text-center">&copy; {new Date().getFullYear()} PAKIT. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}