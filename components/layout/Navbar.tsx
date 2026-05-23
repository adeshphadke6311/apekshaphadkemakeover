"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="heading-font text-2xl font-bold gold-text"
        >
          Sajshringar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">

          <Link
            href="/"
            className="transition hover:text-pink-400"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="transition hover:text-pink-400"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            className="transition hover:text-pink-400"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-pink-400"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/payment"
          className="hidden rounded-full bg-[#ff4fa3] px-5 py-2 text-sm font-medium transition hover:scale-105 md:block"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#050816] md:hidden">
          <nav className="flex flex-col space-y-4 p-4 text-sm font-medium">

            <Link
              href="/"
              onClick={closeMenu}
              className="transition hover:text-pink-400"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="transition hover:text-pink-400"
            >
              Services
            </Link>

            <Link
              href="/gallery"
              onClick={closeMenu}
              className="transition hover:text-pink-400"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="transition hover:text-pink-400"
            >
              Contact
            </Link>

            <Link
              href="/payment"
              onClick={closeMenu}
              className="rounded-full bg-[#ff4fa3] px-5 py-3 text-center font-medium transition hover:scale-[1.02]"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}