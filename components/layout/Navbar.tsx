"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
        
        <h1 className="heading-font text-2xl font-bold gold-text">
          Sajshringar
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-pink-400 transition">
            Home
          </a>

          <a href="#services" className="hover:text-pink-400 transition">
            Services
          </a>

          <a href="#gallery" className="hover:text-pink-400 transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block rounded-full bg-[#ff4fa3] px-5 py-2 text-sm font-medium transition hover:scale-105">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050816]">
          <nav className="flex flex-col p-4 space-y-4 text-sm">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>

            <button className="rounded-full bg-[#ff4fa3] px-5 py-3 font-medium">
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}