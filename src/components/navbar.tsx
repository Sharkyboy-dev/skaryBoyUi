"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full bg-black px-4 py-3 shadow-md z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Nav */}
        <div className="hidden md:flex gap-6 text-white text-lg font-bold">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <Link href="#about" onClick={handleScroll("about")} className="hover:text-cyan-400">About</Link>
          <Link href="#howtobuy" onClick={handleScroll("howtobuy")} className="hover:text-cyan-400">How to Buy</Link>
          <Link href="#faqs" onClick={handleScroll("faqs")} className="hover:text-cyan-400">FAQs</Link>
        </div>

        {/* Logo Center */}
        <Link href="/" className="flex justify-center items-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <RxHamburgerMenu />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2 bg-black text-white text-lg px-4 py-3 rounded shadow-lg">
          <Link href="/" className="hover:text-cyan-300">Home</Link>
          <Link href="#about" onClick={handleScroll("about")} className="hover:text-cyan-300">About</Link>
          <Link href="#howtobuy" onClick={handleScroll("howtobuy")} className="hover:text-cyan-300">How to Buy</Link>
          <Link href="#faqs" onClick={handleScroll("faqs")} className="hover:text-cyan-300">FAQs</Link>
        </div>
      )}
    </nav>
  );
}
