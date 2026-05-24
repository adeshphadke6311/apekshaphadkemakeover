import {
  Brush,
  Sparkles,
  GraduationCap,
  Gem,
} from "lucide-react";

import Link from "next/link";

export const metadata = {
  title: "Services | Sajshringar by Apeksha",
  description:
    "Professional bridal makeup, Aari work classes, jewellery making, and beauty academy services.",
};

const services = [
  {
    title: "Bridal Makeup",
    description:
      "Luxury bridal makeup services including HD makeup, Airbrush makeup, engagement looks, reception makeup, and complete bridal transformation.",
    icon: Brush,
  },
  {
    title: "Aari Work Classes",
    description:
      "Professional Aari embroidery classes including stone work, thread work, blouse designs, mirror work, and fashion embroidery training.",
    icon: Sparkles,
  },
  {
    title: "Jewellery Making",
    description:
      "Creative jewellery and traditional nath making workshops with elegant handcrafted design techniques.",
    icon: Gem,
  },
  {
    title: "Beauty Training Academy",
    description:
      "Professional beauty skill development academy for aspiring makeup artists and beauty professionals.",
    icon: GraduationCap,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24 pb-24 text-white md:pt-32">

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HERO */}
        <div className="mb-20 text-center md:mb-24">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Our Professional Services
          </p>

          <h1 className="heading-font text-4xl font-bold leading-tight md:text-7xl">
            Beauty &
            <span className="gold-text"> Creativity</span>
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 md:w-28" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            Explore our premium bridal beauty services,
            professional Aari work training, jewellery making,
            and beauty academy programs designed with elegance,
            creativity, and perfection.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_40px_rgba(255,79,163,0.12)] md:p-10"
              >

                {/* ICON */}
                <div className="mb-8 inline-flex rounded-2xl bg-pink-500/10 p-5 text-pink-400 transition duration-300 group-hover:scale-110">

                  <Icon size={40} />
                </div>

                {/* TITLE */}
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  {service.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-base leading-relaxed text-white/70 md:text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-transparent to-yellow-500/10 p-8 text-center shadow-[0_0_60px_rgba(255,79,163,0.08)] backdrop-blur-xl md:mt-28 md:p-14">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Luxury Beauty Experience
          </p>

          <h2 className="heading-font text-4xl font-bold leading-tight md:text-6xl">
            Ready To Transform
            <span className="gold-text"> Your Look?</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Book your appointment today and experience
            professional beauty artistry crafted with elegance,
            luxury, and perfection.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            {/* BOOK APPOINTMENT */}
            <Link
              href="/payment"
              className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,79,163,0.35)]"
            >
              Book Appointment
            </Link>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/917498645883"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-8 py-4 text-lg font-medium transition hover:bg-white/10"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}