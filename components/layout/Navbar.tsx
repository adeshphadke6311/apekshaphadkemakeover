"use client";

import Link from "next/link";

import {
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  GraduationCap,
  UserPlus,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function Navbar() {

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const [
    loginDropdownOpen,
    setLoginDropdownOpen,
  ] = useState(false);

  const [
    scrolled,
    setScrolled,
  ] = useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  const closeMobileMenu = () =>
    setMobileMenuOpen(false);

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

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {

    const handleClickOutside = (
      event: MouseEvent
    ) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {

        setLoginDropdownOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
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
      name: "Gallery",
      href: "/gallery",
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
          ? "border-b border-white/10 bg-[#050816]/90 shadow-[0_0_40px_rgba(255,79,163,0.08)] backdrop-blur-2xl"
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

              <span className="relative">

                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* LOGIN DROPDOWN */}
          <div
            className="relative hidden md:block"
            ref={dropdownRef}
          >

            <button
              onClick={() =>
                setLoginDropdownOpen(
                  !loginDropdownOpen
                )
              }
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-pink-400 hover:text-pink-400"
            >

              <ShieldCheck size={16} />

              Login

              <ChevronDown
                size={16}
                className={`transition duration-300 ${
                  loginDropdownOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {/* DROPDOWN MENU */}
            {loginDropdownOpen && (
              <div className="absolute right-0 top-16 w-72 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020]/95 p-3 shadow-[0_0_40px_rgba(255,79,163,0.12)] backdrop-blur-2xl">

                {/* STUDENT LOGIN */}
                <Link
                  href="/student/login"
                  onClick={() =>
                    setLoginDropdownOpen(
                      false
                    )
                  }
                  className="mb-2 flex items-start gap-4 rounded-2xl px-5 py-4 transition hover:bg-pink-500/10"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">

                    <GraduationCap size={20} />
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-white">
                      Student Login
                    </h3>

                    <p className="mt-1 text-xs text-white/50">
                      Attendance, payments,
                      certificates & courses
                    </p>
                  </div>
                </Link>

                {/* STUDENT REGISTER */}
                <Link
                  href="/student/register"
                  onClick={() =>
                    setLoginDropdownOpen(
                      false
                    )
                  }
                  className="mb-2 flex items-start gap-4 rounded-2xl px-5 py-4 transition hover:bg-pink-500/10"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">

                    <UserPlus size={20} />
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-white">
                      Student Register
                    </h3>

                    <p className="mt-1 text-xs text-white/50">
                      New student registration
                      for academy courses
                    </p>
                  </div>
                </Link>

                {/* ADMIN LOGIN */}
                <Link
                  href="/admin/login"
                  onClick={() =>
                    setLoginDropdownOpen(
                      false
                    )
                  }
                  className="flex items-start gap-4 rounded-2xl px-5 py-4 transition hover:bg-pink-500/10"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">

                    <ShieldCheck size={20} />
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-white">
                      Admin Login
                    </h3>

                    <p className="mt-1 text-xs text-white/50">
                      Manage students,
                      attendance & academy
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* BOOK NOW */}
          <Link
            href="/payment"
            className="hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,79,163,0.35)] md:block"
          >
            Book Now
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-pink-400/40 md:hidden"
            aria-label="Toggle Menu"
          >

            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl md:hidden">

          <nav className="flex flex-col gap-5 px-5 py-6">

            {/* NAV LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm font-medium text-white/80 transition duration-300 hover:border-pink-500/30 hover:bg-pink-500/10 hover:text-pink-400"
              >
                {link.name}
              </Link>
            ))}

            {/* LOGIN OPTIONS */}
            <div className="mt-2 rounded-[2rem] border border-white/10 bg-white/5 p-3">

              <p className="mb-3 px-3 text-xs uppercase tracking-[0.25em] text-pink-400">
                Login Portal
              </p>

              {/* STUDENT LOGIN */}
              <Link
                href="/student/login"
                onClick={closeMobileMenu}
                className="mb-2 flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-medium text-white/80 transition hover:bg-pink-500/10 hover:text-pink-400"
              >

                <GraduationCap size={18} />

                Student Login
              </Link>

              {/* REGISTER */}
              <Link
                href="/student/register"
                onClick={closeMobileMenu}
                className="mb-2 flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-medium text-white/80 transition hover:bg-pink-500/10 hover:text-pink-400"
              >

                <UserPlus size={18} />

                Student Register
              </Link>

              {/* ADMIN */}
              <Link
                href="/admin/login"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-medium text-white/80 transition hover:bg-pink-500/10 hover:text-pink-400"
              >

                <ShieldCheck size={18} />

                Admin Login
              </Link>
            </div>

            {/* MOBILE BOOK NOW */}
            <Link
              href="/payment"
              onClick={closeMobileMenu}
              className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.02]"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}