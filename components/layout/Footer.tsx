import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040611] pt-20 pb-10">

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>

            <h2 className="heading-font mb-6 text-3xl font-bold gold-text">
              Sajshringar
            </h2>

            <p className="leading-relaxed text-white/70">
              Professional bridal makeup artistry,
              Aari work,
              jewellery making,
              and beauty training academy crafted
              with elegance and creativity.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-pink-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-pink-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="transition hover:text-pink-400"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition hover:text-pink-400"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-pink-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-white/70">

              {/* PHONE */}
              <a
                href="tel:+917498645883"
                className="flex items-start gap-3 transition hover:text-pink-400"
              >

                <Phone
                  size={18}
                  className="mt-1 text-pink-400"
                />

                <p>+91 7498645883</p>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:contact@sajshringar.com"
                className="flex items-start gap-3 transition hover:text-pink-400"
              >

                <Mail
                  size={18}
                  className="mt-1 text-pink-400"
                />

                <p>contact@sajshringar.com</p>
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-pink-400"
                />

                <p>
                  A/P Hatwalan,
                  Tal Daund,
                  Pune,
                  Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4">

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm transition hover:border-pink-400 hover:text-pink-400"
              >

                <BadgeCheck size={16} />

                Instagram
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917498645883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm transition hover:border-pink-400 hover:text-pink-400"
              >

                <MessageCircle size={16} />

                WhatsApp
              </a>
            </div>

            {/* BOOK CTA */}
            <Link
              href="/payment"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,79,163,0.35)]"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">

          © 2026 Sajshringar by Apeksha.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}