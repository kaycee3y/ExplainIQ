"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ExplainIQ
        </Link>

        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="/#how-it-works" className="hover:text-blue-600">How it works</a>
          <a href="/#features" className="hover:text-blue-600">Features</a>
          <a href="/#about" className="hover:text-blue-600">About</a>
        </div>

        <div className="hidden md:block">
          <Link href="/explain">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 text-gray-600">
          <a href="/#how-it-works" onClick={() => setOpen(false)} className="hover:text-blue-600">How it works</a>
          <a href="/#features" onClick={() => setOpen(false)} className="hover:text-blue-600">Features</a>
          <a href="/#about" onClick={() => setOpen(false)} className="hover:text-blue-600">About</a>
          <Link href="/explain" onClick={() => setOpen(false)}>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium w-full">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}