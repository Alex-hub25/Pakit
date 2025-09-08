"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Icons
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

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Product images
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

        {/* Hero / Waitlist */}
        <main className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">PaKam™</h1>
          <p className="max-w-2xl mb-6 text-lg">The intelligent camera module that streamlines shipping by capturing dimensions, weight, and package data instantly.</p>
        </main>

        {/* Product Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-16">
          {/* Image Gallery */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <Image
              src={"/Module1.png"}
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

          {/* Product Description */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">PaKam™</h2>
            <p className="mb-6">PaKam™ eliminates bottlenecks in your shipping process by automating data capture with precision imaging and AI-driven measurement.</p>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <li>Computer Vision Measuring</li>
              <li>Monitor Bluetooth Connector</li>
              <li>Lightweight, compact, and durable hardware</li>
              <li>Designed for manufacturers & logistics teams</li>
            </ul>
             {/*<p className="text-4xl font-bold mb-3 ">$399</p>*/}{/*Product Pricing*/}
  
            <button className="bg-orange-500 text-white px-5 py-1 rounded-xl shadow-md hover:bg-orange-600 transition">Join Waitlist</button>
          </div>
          
          
        </section>
        {/*Product specs */}
        <section>
        <main className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-orange-500">PaKam™ Specs</h2>
        </main>
          <div className="flex flex-col items-center">
          <p className="max-w-2xl mb-6 text-lg">Computer Vision, API's and More</p>
          
          <div className="flex flex-col md:flex-row gap-8">
           <div>
            <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Camera</h3>
            <ul className="list-disc pl-5 space-y-1 flex-1">
              <li>Automatic package dimensioning</li>
              <li>Seamless API integration with carriers</li>
              <li>Lightweight, compact, and durable hardware</li>
              <li>Designed for manufacturers & logistics teams</li>
            </ul>
          </div> 
           <div>
            <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Bluetooth Connector</h3>
            <ul className="list-disc pl-5 space-y-1 flex-1">
              <li>Automatic package dimensioning</li>
              <li>Seamless API integration with carriers</li>
              <li>Lightweight, compact, and durable hardware</li>
              <li>Designed for manufacturers & logistics teams</li>
            </ul>
          </div>
          </div> 
          <br></br>
          <div  className="flex flex-col md:flex-row gap-9 ">        
          <div>
            <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Bluetooth Connector</h3>
            <ul className="list-disc pl-5 space-y-1 flex-1">
              <li>Automatic package dimensioning</li>
              <li>Seamless API integration with carriers</li>
              <li>Lightweight, compact, and durable hardware</li>
              <li>Designed for manufacturers & logistics teams</li>
            </ul>
          </div>
          <div>
            <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Bluetooth Connector</h3>
            <ul className="list-disc pl-5 space-y-1 flex-1">
              <li>Automatic package dimensioning</li>
              <li>Seamless API integration with carriers</li>
              <li>Lightweight, compact, and durable hardware</li>
              <li>Designed for manufacturers & logistics teams</li>
            </ul>
          </div>
          </div> 
          </div>
        </section>
        {/* Pricing Section 
        <section className="px-8 py-16 bg-gray-100 dark:bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter 
            <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-black text-center">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-4">$49<span className="text-lg">/mo</span></p>
              <ul className="space-y-2 mb-6">
                <li>Up to 500 scans/mo</li>
                <li>Email support</li>
                <li>Basic reporting</li>
              </ul>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">Get Started</button>
            </div>
            {/* Pro 
            <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-black text-center border-2 border-orange-500">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">$149<span className="text-lg">/mo</span></p>
              <ul className="space-y-2 mb-6">
                <li>Unlimited scans</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">Get Pro</button>
            </div>
            {/* Enterprise 
            <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-black text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">Custom</p>
              <ul className="space-y-2 mb-6">
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
                <li>On-site setup & training</li>
              </ul>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">Contact Sales</button>
            </div>
          </div>
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
