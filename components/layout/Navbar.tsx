"use client";

import Link from "next/link";

import {
  Menu,
  X,
  Sparkles,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const closeMenu = () =>
    setIsOpen(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const navLinks = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Services",
    href: "/services",
  },

  {
    name: "Portfolio",
    href: "/portfolio",
  },

  
  {
    name: "Contact",
    href: "/contact",
  },
];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500
      ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/85 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,79,163,0.08)]"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >

          {/* ICON */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 shadow-[0_0_20px_rgba(255,79,163,0.35)] transition duration-300 group-hover:scale-110">

            <Sparkles className="h-5 w-5 text-white" />
          </div>

          {/* TEXT */}
          <div>

            <h1 className="heading-font text-2xl font-bold gold-text">
              Sajshringar
            </h1>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Beauty Studio
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-white/75 transition duration-300 hover:text-pink-400"
            >

              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DESKTOP CTA */}
          <Link
            href="/payment"
            className="hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,79,163,0.35)] md:block"
          >
            Book Now
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-pink-400/40 md:hidden"
            aria-label="Toggle Menu"
          >

            <div className="transition-all duration-300">
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden
        ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl">

          <nav className="flex flex-col gap-5 px-5 py-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm font-medium text-white/80 transition duration-300 hover:border-pink-500/30 hover:bg-pink-500/10 hover:text-pink-400"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <Link
              href="/payment"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.02]"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}