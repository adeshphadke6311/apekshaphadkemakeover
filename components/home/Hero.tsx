"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const heroImages = [
  "/images/sajshringar_hero1.png",
  "/images/sajshringar_hero2.png",
  "/images/sajshringar_hero3.png",
  "/images/sajshringar-logo.jpeg",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816]"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HERO GRID */}
        <div
          className="
            grid items-center

            gap-14

            pt-20
            pb-14

            sm:pt-24

            tablet:grid-cols-[1fr_0.9fr]
            tablet:gap-10
            tablet:pt-20

            laptop:grid-cols-[1.05fr_0.95fr]
            laptop:gap-16
            laptop:pt-24
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="max-w-[650px]"
          >

            {/* TAG */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                mb-5 uppercase tracking-[0.32em]
                text-pink-400

                text-[10px]
                sm:text-xs
                tablet:text-sm
              "
            >
              Bridal Makeup Artist & Training Academy
            </motion.p>

            {/* HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
                heading-font
                font-bold
                leading-[1.02]

                text-[clamp(2.8rem,5vw,5.8rem)]

                max-w-[13ch]
              "
            >
              Elevate Your Beauty With{" "}

              <span className="gold-text">
                Sajshringar
              </span>
            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 110,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="
                mt-6 h-[2px]
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-yellow-400
              "
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
              }}
              className="
                mt-8
                max-w-[620px]

                text-sm
                leading-relaxed
                text-white/75

                sm:text-base
                tablet:text-[17px]
              "
            >
              Professional bridal makeup, Aari work classes,
              Nath & jewellery making, and luxury beauty
              training academy crafted with elegance and
              perfection.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
              className="
                mt-10 flex flex-wrap items-center gap-4
              "
            >

              <Link
                href="/payment"
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-pink-600

                  px-7 py-4

                  text-sm
                  font-semibold
                  text-white

                  transition-all duration-300

                  hover:scale-105
                  hover:shadow-[0_0_28px_rgba(255,79,163,0.35)]
                "
              >
                Book Appointment
              </Link>

              <Link
                href="/portfolio"
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]

                  px-7 py-4

                  text-sm
                  font-semibold
                  text-white

                  backdrop-blur-xl
                  transition-all duration-300

                  hover:border-pink-500/40
                  hover:bg-pink-500/10
                "
              >
                View Gallery
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="
              flex flex-col items-center
            "
          >

            {/* IMAGE WRAPPER */}
            <div
              className="
                relative w-full

                max-w-[220px]

                sm:max-w-[280px]

                tablet:max-w-[320px]

                laptop:max-w-[420px]
              "
            >

              {/* GLOW */}
              <div className="absolute inset-0 rounded-[2rem] bg-pink-500/10 blur-3xl" />

              {/* CARD */}
              <div
                className="
                  relative overflow-hidden

                  rounded-[2rem]
                  border border-white/10

                  bg-white/[0.03]

                  p-3

                  shadow-[0_0_40px_rgba(255,79,163,0.08)]
                  backdrop-blur-xl
                "
              >

                {/* SWIPER */}
                <Swiper
                  modules={[
                    Autoplay,
                    Pagination,
                    EffectFade,
                  ]}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true,
                  }}
                  speed={1200}
                  loop={true}
                  autoplay={{
                    delay: 3200,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="heroSwiper"
                >

                  {heroImages.map((image, index) => (
                    <SwiperSlide key={index}>

                      {/* IMAGE CONTAINER */}
                      <div
                        className="
                          relative overflow-hidden

                          rounded-[1.5rem]

                          bg-[#0b1020]
                        "
                      >

                        <Image
                          src={image}
                          alt={`Hero ${index + 1}`}
                          width={700}
                          height={900}
                          priority
                          className="
                            aspect-[4/5]

                            h-full
                            w-full

                            rounded-[1.5rem]

                            object-cover
                            object-center
                          "
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* STATS BELOW IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="
                mt-6

                flex items-center justify-center
                gap-5

                rounded-2xl
                border border-white/10

                bg-[#0d1228]/95

                px-5 py-4

                shadow-[0_0_25px_rgba(255,79,163,0.1)]
                backdrop-blur-xl
              "
            >

              {/* CLIENTS */}
              <div className="text-center">

                <h3 className="text-2xl font-bold gold-text">
                  100+
                </h3>

                <p className="text-xs text-white/60">
                  Happy Clients
                </p>
              </div>

              {/* DIVIDER */}
              <div className="h-10 w-px bg-white/10" />

              {/* SERVICES */}
              <div className="text-center">

                <h3 className="text-2xl font-bold gold-text">
                  4+
                </h3>

                <p className="text-xs text-white/60">
                  Premium Services
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}