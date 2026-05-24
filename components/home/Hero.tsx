"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HERO GRID */}
        <div
          className="
            grid items-center

            gap-10
            pt-28
            pb-8

            tablet:grid-cols-[1.05fr_0.95fr]
            tablet:gap-8
            tablet:pt-20
            tablet:pb-6

            laptop:grid-cols-2
            laptop:gap-16
            laptop:pt-32
            laptop:pb-10
          "
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="max-w-[680px]"
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
                duration: 0.6,
              }}
              className="
                mb-5 uppercase tracking-[0.35em]
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
                y: 30,
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
                heading-font font-bold leading-[1.02]

                text-[clamp(2.8rem,5vw,5.8rem)]

                max-w-[14ch]
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
                opacity: 0,
              }}
              animate={{
                width: 96,
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
              className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-pink-500 to-yellow-400"
            />

            {/* DESCRIPTION */}
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
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                mt-8 max-w-[620px]
                leading-relaxed text-white/75

                text-sm
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
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                mt-10 flex flex-wrap items-center gap-4
              "
            >
              <Link
                href="/payment"
                className="
                  rounded-full bg-gradient-to-r
                  from-pink-500 to-pink-600

                  px-7 py-4
                  text-sm font-semibold text-white

                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(255,79,163,0.35)]
                "
              >
                Book Appointment
              </Link>

              <Link
                href="/gallery"
                className="
                  rounded-full border border-white/10
                  bg-white/5 backdrop-blur-xl

                  px-7 py-4
                  text-sm font-semibold text-white

                  transition-all duration-300
                  hover:border-pink-400/40
                  hover:bg-pink-500/10
                "
              >
                View Gallery
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              flex flex-col items-center

              tablet:items-center
            "
          >

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 rounded-[2rem] bg-pink-500/20 blur-3xl" />

              {/* CARD */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[2rem]

                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl

                  p-4
                "
              >

                {/* TOP BADGE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                  }}
                  className="
                    absolute left-4 top-4 z-20

                    rounded-full
                    border border-pink-500/20
                    bg-black/40

                    px-5 py-2
                    text-[10px]
                    uppercase tracking-[0.25em]
                    text-pink-200

                    backdrop-blur-xl
                  "
                >
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/sajshringar-logo.jpeg"
                    alt="Sajshringar by Apeksha"
                    width={520}
                    height={520}
                    priority
                    className="
                      h-auto w-full object-contain

                      max-w-[200px]

                      sm:max-w-[240px]

                      tablet:max-w-[300px]

                      laptop:max-w-[420px]
                    "
                  />
                </motion.div>

                {/* BOTTOM BADGE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 0.5,
                  }}
                  className="
                    absolute bottom-4 left-1/2
                    -translate-x-1/2

                    rounded-full
                    border border-white/10
                    bg-black/50

                    px-5 py-2
                    text-xs text-white/80

                    backdrop-blur-xl
                  "
                >
  
                </motion.div>
              </div>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className="
                mt-5

                flex w-full
                max-w-[320px]
                items-center
                justify-center
                gap-4
              "
            >

              {/* CARD 1 */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex-1 rounded-3xl
                  border border-white/10
                  bg-white/[0.03]

                  p-5 backdrop-blur-xl
                "
              >
                <h3 className="text-3xl font-bold gold-text">
                  100+
                </h3>

                <p className="mt-2 text-sm text-white/65">
                  Happy Clients
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex-1 rounded-3xl
                  border border-white/10
                  bg-white/[0.03]

                  p-5 backdrop-blur-xl
                "
              >
                <h3 className="text-3xl font-bold gold-text">
                  4+
                </h3>

                <p className="mt-2 text-sm text-white/65">
                  Premium Services
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}