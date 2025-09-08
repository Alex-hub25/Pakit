"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [showContact, setShowContact] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] =useState("");
  const [industry, setIndustry] =useState("");
  const [address, setAddress] =useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration-safe
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`min-h-screen transition-colors ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
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
              className="transition flex items-center justify-center rounded-full p-2 focus:outline-none"
              aria-label="Toggle dark mode"
              style={{ background: "transparent", boxShadow: "none", border: "none" }}
            >
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 h-[80vh] px-6">
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <h2 className="text-5xl font-bold mb-4 text-center">
              Welcome to <span className="text-orange-500">PAKIT</span>
            </h2>
            <p className={`text-lg max-w-xl mb-6 text-center ${darkMode ? "text-black" : "text-white"}`}>
              Fulfillment at any scale.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="px-8 py-1 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-colors"
                onClick={() => setShowContact(true)}
              >
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/3">
            <Image
              src={darkMode ? "/Logo.DK.png" : "/Logo.LT.png"}
              alt="Logo"
              width={250}
              height={250}
              className="rounded-xl shadow-md"
              priority
            />
          </div>
          
        </section>
                {/* Automation Process */}
        <section className={`w-full py-6 mt-8 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Process</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Scan */}
              <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-black text-center border-2 border-orange-500">
            <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
              <h3 className="text-2xl font-bold  mb-4 text-orange-500">Scan</h3>
              <Image
              src={darkMode ? "/shutter .png" : "/shutter .png"}
              alt="shutter"
              width={60}
              height={50}
              className="rounded-xl shadow-md"
              priority
              />
              <p className="gap-4 mt-6">
          
                Within seconds of setting your package on the scale, PaKam™ system captures your packages dimensions, weight, and package information.
              </p>
            </div>
            </div>
            {/* Print */}
            <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-black text-center border-2 border-orange-500">
            <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Print</h3>
              <Image
              src={darkMode ? "/box1.png" : "/box1.png"}
              alt="print"
              width={60}
              height={50}
              className="rounded-xl shadow-md"
              priority
              />
              <p className="gap-4 mt-6">
                In the blink of an eye our system completes your fulfillment process, time to print your shipping label! Elimating manual entry of package information, rate shopping/buying,
                and customer managment.
              </p>
            </div>
            </div>
            {/* Ship */}
            <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-black text-center border-2 border-orange-500">
            <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Ship</h3>
              <Image
              src={darkMode ? "/ship.png" : "/ship.png"}
              alt="Ship"
              width={60}
              height={50}
              className="rounded-xl shadow-md"
              priority
              />
              <p className="gap-4 mt-6">
                Pakit doesn'&apos;s end at when the carrier picks up the package. Our system includes end-to-end tracking information and border document managment.
              </p>
            </div> 
          </div>
          </div>  
            <div className="flex justify-center gap-4 mt-6">
            <Link href="/technology">
            <button className="justify-center px-10 py-.5 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-colors">
              Learn More
            </button>
            </Link>
          </div>
        </section>
     
        {/* Sales Pitch */}
        
        
        <section className={`w-full py-6 mt-8 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">True Touchless Automation</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
            {/* Scale, Next! */}
          <div className="p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
            
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Weigh it, Next!</h3>
            <p>
            Our technology works like a checkout scanner: the instant a package touches the scale, 
            its information is logged and the workflow continues automatically.</p>
          </div>
          {/* Auto-Rate */}
          <div className="p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Auto-Rate</h3>
            <p>
          Manually scrolling through endless carrier rates is a thing of the past. With pre-set configurations and machine learning, 
          our API automatically selects and schedules the best freight option — no buttons required.</p>
          </div>
          {/* API */}
          <div className="p-6 rounded-xl shadow-md bg-white dark:bg-black text-black dark:text-white text-left">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Document Pipeline</h3>
            <p>
                End-to-end encrypted document management gives you and customs 
                agents a secure, centralized portal for all USMCA and commercial invoices — eliminating paper copies and manual sending.
            </p>           
          </div>             
        </div>

        </section>
               
        {/*Spec Sheet 
        <section className="flex justify-center w-full px-6 mt-8">
          <div className="w-full max-w-2xl bg-white/80 dark:bg-black/60 rounded-xl shadow p-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-500 text-center">PAKIT Spec Sheet</h3>
            <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
              <li><span className="font-semibold">Computer Vision:</span> .</li>
              <li><span className="font-semibold">Scalable Warehousing:</span> Flexible storage solutions for businesses of any size.</li>
              <li><span className="font-semibold">Real-Time Tracking:</span> Monitor inventory and shipments with live updates.</li>
              <li><span className="font-semibold">Seamless Integrations:</span> Connect with major e-commerce platforms and carriers.</li>
              <li><span className="font-semibold">Custom Packaging:</span> Enhance your brand with tailored packaging options.</li>
              <li><span className="font-semibold">Analytics Dashboard:</span> Gain insights into your fulfillment operations.</li>
              <li><span className="font-semibold">Dedicated Support:</span> Expert assistance available 24/7.</li>
            </ul>
          </div>
        </section>}

        {/* Contact Popup */}
        {showContact && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-black text-black dark:text-white rounded-xl p-8 shadow-lg max-w-md w-full relative">
              <button
                className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
                onClick={() => setShowContact(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">Join Waitlist</h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  try {
                    console.log("Submitting:", { name, email, message});
                    const res = await fetch("/api/create", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ name, email, phone, company, industry, address, message, timestamp: Date.now() }),
                    });
                    alert('Submitted successfully!')
                    setName(""); setEmail(""); setPhone(""); setCompany(""), setIndustry(""), setAddress(""); setMessage(""); // clear form
                    setShowContact(false);
                    
                  } catch (err) {
                    console.error(err);
                    alert("Error submitting form");
                  } finally {
                    setLoading(false);
                  }
                }}
                className="flex flex-col gap-4"
              >
                <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
                <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
                <input type="text" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
                <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white"/>
                <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white"/>
                <input type="text" placeholder="Address*" value={address} onChange={(e) => setAddress(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white"required/>
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
                <button type="submit" disabled={loading} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        )}

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
              <Link href="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-orange-500">Terms of Service</Link>
            </nav>
            <span className="text-sm text-center">&copy; {new Date().getFullYear()} PAKIT. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/*
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/