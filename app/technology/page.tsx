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
  const productImages = [
    "/images/pakit-front.png",
    "/images/pakit-side.png",
    "/images/pakit-back.png",
    "/images/pakit-top.png",
  ];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`min-h-screen flex flex-col transition-colors ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
        
        {/* Navbar */}
        <nav className={`flex justify-between items-center p-6 shadow-md ${darkMode ? "bg-white" : "bg-black"}`}>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src={darkMode ? "/TD.LT.png" : "/TD.DK.png"}
                alt="Logo"
                width={90}
                height={80}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-orange-500">About</Link>
            <Link href="/technology" className="hover:text-orange-500">Technology</Link>
            <Link href="/pricing" className="hover:text-orange-500">Pricing</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="transition flex items-center justify-center rounded-full p-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </nav>

        {/* Technology Content */}
        <main className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-orange-500">Our Technology</h1>
          <p className="max-w-2xl mb-8">
            PAKIT leverages advanced automation, real-time tracking, and seamless integrations with major e-commerce platforms.
            Our analytics dashboard and scalable warehousing ensure your fulfillment operations are always optimized.
          </p>

          {/* Product Gallery */}
          <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-8">
            <div className="flex flex-col items-center w-full md:w-1/2">
              <Image
                src={selectedImage}
                alt="PaKam™ Camera Module"
                width={500}
                height={500}
                className="rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                priority
              />
              <div className="flex gap-3 mt-4 flex-wrap justify-center">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`rounded-lg overflow-hidden border-2 transition 
                      ${selectedImage === img ? "border-orange-500" : "border-transparent"}`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      width={80}
                      height={60}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">How It Works</h2>
              <ul className="list-disc pl-5 space-y-2 text-lg">
                <li>Automated package measurement with precision 12MP imaging</li>
                <li>Seamless API integration with major freight carriers</li>
                <li>Real-time shipment tracking & analytics</li>
                <li>Smart document generation for borders & customs</li>
                <li>Scalable from small shops to enterprise</li>
              </ul>
            </div>
          </section>

          {/* Software / Hardware / API Blocks */}
          <section className="grid md:grid-cols-3 gap-8 max-w-6xl w-full px-8 py-16">
            {/* Software */}
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Software</h3>
              <p>
                Our intelligent software handles data capture, analytics, and workflow automation,
                giving you real-time visibility into your shipping operations.
              </p>
            </div>
            {/* Hardware */}
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Hardware</h3>
              <p>
                The 12MP PaKam™ camera module is compact and rugged, built to measure and capture
                package dimensions accurately at any scale.
              </p>
            </div>
            {/* API */}
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">API</h3>
              <p>
                Robust API integrations connect your software directly with leading freight carriers,
                allowing instant shipment creation and tracking automation.
              </p>
            </div>
          </section>

          <Link href="/" className="mt-8 text-orange-500 hover:underline">Back to Home</Link>
        </main>

        {/* Footer */}
        <footer className={`w-full py-6 mt-8 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={darkMode ? "/TD.LT.png" : "/TD.DK.png"}
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-orange-500">PAKIT</span>
            </div>
            <nav className="flex gap-6 justify-center">
              <Link href="/about" className="hover:text-orange-500">About</Link>
              <Link href="/technology" className="hover:text-orange-500">Technology</Link>
              <Link href="/pricing" className="hover:text-orange-500">Pricing</Link>
              <Link href="/contact" className="hover:text-orange-500">Contact</Link>
            </nav>
            <span className="text-sm text-center">&copy; {new Date().getFullYear()} PAKIT. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
