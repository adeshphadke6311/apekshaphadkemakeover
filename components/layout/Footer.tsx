import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040611] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="heading-font text-3xl font-bold gold-text mb-6">
              Sajshringar
            </h2>

            <p className="text-white/70 leading-relaxed">
              Professional bridal makeup artistry, Aari work,
              jewellery making, and beauty training academy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>
                <a href="#home" className="hover:text-pink-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-pink-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-pink-400 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#testimonials" className="hover:text-pink-400 transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-white/70">

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-pink-400" />

                <p>+91 7498645883</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-pink-400" />

                <p>contact@sajshringar.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-pink-400" />

                <p>A/P Hatwalan, Tal Daund, Pune,Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Follow Us
            </h3>

          <div className="flex gap-4">

  <a
    href="#"
    className="rounded-full border border-white/10 px-5 py-3 text-sm transition hover:border-pink-400 hover:text-pink-400"
  >
    Instagram
  </a>

  <a
    href="#"
    className="rounded-full border border-white/10 px-5 py-3 text-sm transition hover:border-pink-400 hover:text-pink-400"
  >
    WhatsApp
  </a>

</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2026 Sajshringar by Apeksha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}