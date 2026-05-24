import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#050816]"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pt-20 md:grid-cols-2 md:items-center md:px-6 md:pt-24 lg:px-8">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* LABEL */}
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-pink-400 sm:text-sm">
            Bridal Makeup Artist & Training Academy
          </p>

          {/* HEADING */}
          <h1 className="heading-font mb-6 text-[2.3rem] font-bold leading-tight sm:text-5xl md:text-7xl">

            Elevate Your Beauty With

            <span className="gold-text">
              {" "}
              Sajshringar
            </span>
          </h1>

          {/* LINE */}
          <div className="mb-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          {/* DESCRIPTION */}
          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Professional bridal makeup,
            Aari work classes,
            Nath & jewellery making,
            and luxury beauty training academy
            crafted with elegance and perfection.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row">

            {/* BOOK APPOINTMENT */}
            <Link
              href="/payment"
              className="w-full rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 text-center text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(255,79,163,0.35)] sm:w-auto md:text-lg"
            >
              Book Appointment
            </Link>

            {/* VIEW GALLERY */}
            <Link
              href="#gallery"
              className="w-full rounded-full border border-white/15 px-8 py-4 text-center text-base font-medium transition-all duration-300 hover:bg-white/10 hover:border-pink-400/40 sm:w-auto md:text-lg"
            >
              View Gallery
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-12 grid max-w-[340px] grid-cols-2 gap-5">

            {/* CLIENTS */}
            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_25px_rgba(255,79,163,0.12)]">

              <h3 className="text-3xl font-bold gold-text md:text-4xl">
                100+
              </h3>

              <p className="mt-2 text-sm text-white/70 md:text-base">
                Happy Clients
              </p>
            </div>

            {/* SERVICES */}
            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_25px_rgba(255,79,163,0.12)]">

              <h3 className="text-3xl font-bold gold-text md:text-4xl">
                4+
              </h3>

              <p className="mt-2 text-sm text-white/70 md:text-base">
                Premium Services
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-14 flex justify-center md:mt-0">

          {/* GLOW */}
          <div className="absolute h-72 w-72 rounded-full bg-pink-500/20 blur-3xl md:h-96 md:w-96" />

          {/* IMAGE CARD */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(255,79,163,0.08)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,79,163,0.18)]">

            {/* FLOATING BADGE */}
            <div className="absolute left-5 top-5 z-20 rounded-full border border-pink-400/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-pink-300 backdrop-blur-xl">
              Premium Beauty Studio
            </div>

            {/* IMAGE */}
            <Image
              src="/images/sajshringar-logo.jpeg"
              alt="Sajshringar by Apeksha"
              width={500}
              height={500}
              priority
              loading="eager"
              className="relative z-10 h-auto w-[320px] object-contain transition duration-700 group-hover:scale-105 sm:w-[420px] md:w-[500px]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* BOTTOM BADGE */}
            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm text-white/80 backdrop-blur-xl">
              Luxury Bridal & Beauty Expertise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}