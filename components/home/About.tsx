"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-24 md:py-32"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 md:grid-cols-2 md:gap-20 md:px-6 lg:px-8">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute h-72 w-72 rounded-full bg-pink-500/10 blur-3xl md:h-80 md:w-80" />

          {/* IMAGE CARD */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(255,79,163,0.08)] backdrop-blur-xl transition duration-500 hover:shadow-[0_0_70px_rgba(255,79,163,0.16)]">

            {/* TOP BADGE */}
            <div className="absolute left-5 top-5 z-20 rounded-full border border-pink-400/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-pink-300 backdrop-blur-xl">
              Luxury Beauty Studio
            </div>

            <Image
              src="/images/sajshringar-logo.jpeg"
              alt="About Sajshringar"
              width={500}
              height={600}
              priority
              className="h-auto w-full max-w-md object-cover transition duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />

            {/* BOTTOM BADGE */}
            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm text-white/80 backdrop-blur-xl">
              Bridal • Beauty • Training
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* LABEL */}
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            About Sajshringar
          </p>

          {/* TITLE */}
          <h2 className="heading-font mb-8 text-4xl font-bold leading-tight md:text-6xl">

            Transforming Beauty

            <span className="gold-text">
              {" "}
              With Elegance
            </span>
          </h2>

          {/* LINE */}
          <div className="mb-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          {/* DESCRIPTION */}
          <p className="mb-6 text-base leading-relaxed text-white/70 md:text-lg">
            Sajshringar by Apeksha is dedicated to enhancing beauty
            through professional bridal makeup artistry,
            Aari work, jewellery making,
            and beauty training.
          </p>

          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            With a passion for creativity and elegance,
            we help every client feel confident,
            beautiful, and unforgettable on their
            special occasions.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            {/* FEATURE 1 */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-pink-500/30 hover:shadow-[0_0_25px_rgba(255,79,163,0.12)]">

              <h3 className="text-2xl font-bold gold-text">
                Bridal
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Luxury bridal makeup artistry
                crafted with elegance and perfection.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-pink-500/30 hover:shadow-[0_0_25px_rgba(255,79,163,0.12)]">

              <h3 className="text-2xl font-bold gold-text">
                Training
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Professional beauty and fashion
                skill development academy.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}