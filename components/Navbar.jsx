"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Katie Bug's Logo"
              width={40}
              height={40}
              className="rounded-full border border-accent"
            />
            <Link href="/" className="font-serif text-xl tracking-wide">
              Katie Bug's Kitchen
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <Link href="/" className="hover:text-accent transition">Home</Link>
            <Link href="/categories" className="hover:text-accent transition">Shop</Link>
            <Link href="/about" className="hover:text-accent transition">About</Link>
            <Link href="/contact" className="hover:text-accent transition">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-primary border-t border-accent px-4 pb-3 space-y-2">
          <Link href="/" className="block py-2" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/categories" className="block py-2" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/about" className="block py-2" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="block py-2" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
