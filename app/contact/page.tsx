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

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company, industry, address, message }),
      });

      if (!res.ok) throw new Error("Failed to submit form");
      const data = await res.json();
      console.log("Server response:", data);

      setResponse("Submitted successfully! ✅");

      // clear form (each on its own line to avoid no-unused-expressions warning)
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setIndustry("");
      setAddress("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setResponse("Error sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`min-h-screen flex flex-col transition-colors ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
        {/* Navbar/Header */}
        <nav
          className={`flex justify-between items-center shadow-md ${darkMode ? "bg-white" : "bg-black"}`}
          style={{ position: "sticky", top: 0, zIndex: 50, paddingTop: 0, paddingBottom: 0, minHeight: "64px" }}
        >
          <div className="flex items-center gap-2 py-6 px-6">
            <Link href="/">
              <Image src={darkMode ? "/TD.LT.png" : "/TD.DK.png"} alt="Logo" width={90} height={80} priority className="cursor-pointer"/>
            </Link>
          </div>
          <div className="flex items-center gap-6 py-6 px-6">
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

        {/* Contact Content */}
        <main className="flex flex-1 flex-col items-center justify-center py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Contact Us</h1>
          <p className="max-w-xl text-center mb-8">Fill out the form below and we&apos;ll get back to you soon.</p> {/* ✅ escaped apostrophe */}
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
            <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
            <input type="text" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
            <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white"/>
            <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white"/>
            <input type="text" placeholder="Address*" value={address} onChange={(e) => setAddress(e.target.value)} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required/>
            <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="border rounded px-3 py-2 dark:bg-black dark:text-white" required />
            <button type="submit" disabled={loading} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {response && (
            <div className="mt-4 p-4 border rounded bg-gray-50 text-black">
              {response}
            </div>
          )}

          <Link href="/" className="text-orange-500 hover:underline mt-8">Back to Home</Link>
        </main>

        {/* Footer */}
        <footer className={`w-full py-6 mt-8 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Image src={darkMode ? "/TD.LT.png" : "/TD.DK.png"} alt="Logo" width={40} height={40}/>
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


/*"use client";

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

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] =useState("");
  const [industry, setIndustry] =useState("");
  const [address, setAddress] =useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company, industry, address,  message }),
      });
      const data = await res.json();
      alert('Submitted successfully!')
      setName(""); setEmail(""); setPhone(""); setCompany(""), setIndustry(""), setAddress(""); setMessage(""); // clear form
    } catch (err) {
      console.error(err);
      alert( "Error sending message" );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`min-h-screen flex flex-col transition-colors ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
        {/* Navbar/Header 
        <nav className={`flex justify-between items-center shadow-md ${darkMode ? "bg-white" : "bg-black"}`} style={{ position: "sticky", top: 0, zIndex: 50, paddingTop: 0, paddingBottom: 0, minHeight: "64px" }}>
          <div className="flex items-center gap-2 py-6 px-6">
            <Link href="/">
              <Image src={darkMode ? "/TD.LT.png" : "/TD.DK.png"} alt="Logo" width={90} height={80} priority className="cursor-pointer"/>
            </Link>
          </div>
          <div className="flex items-center gap-6 py-6 px-6">
            <Link href="/about" className="hover:text-orange-500">About</Link>
            <Link href="/technology" className="hover:text-orange-500">Technology</Link>
            <Link href="/pricing" className="hover:text-orange-500">Pricing</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
            <button onClick={() => setDarkMode(!darkMode)} className="transition flex items-center justify-center rounded-full p-2 focus:outline-none" aria-label="Toggle dark mode" style={{ background: "transparent", boxShadow: "none", border: "none" }}>
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </nav>

        {/* Contact Content *
        <main className="flex flex-1 flex-col items-center justify-center py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Contact Us</h1>
          <p className="max-w-xl text-center mb-8">Fill out the form below and we'll get back to you soon.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
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

          {response && <div className="mt-4 p-4 border rounded bg-gray-50 text-black"><pre>{JSON.stringify(response, null, 2)}</pre></div>}

          <Link href="/" className="text-orange-500 hover:underline mt-8">Back to Home</Link>
        </main>

         Footer 
        <footer className={`w-full py-6 mt-8 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Image src={darkMode ? "/TD.LT.png" : "/TD.DK.png"} alt="Logo" width={40} height={40}/>
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
}*/
