"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#050816]

        py-10

        sm:py-14

        tablet:py-16

        laptop:py-16
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div
        className="
          relative z-10
          mx-auto
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* MAIN GRID */}
        <div
          className="
            grid items-center

            gap-10

            tablet:grid-cols-2
            tablet:gap-8

            laptop:gap-16
          "
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              flex flex-col
              items-center
            "
          >

            {/* IMAGE */}
            <div className="relative w-full flex justify-center">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-[2rem] bg-pink-500/10 blur-3xl" />

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  relative overflow-hidden

                  rounded-[2rem]
                  border border-white/10
                  bg-white/[0.03]

                  p-3
                  backdrop-blur-xl

                  shadow-[0_0_40px_rgba(255,79,163,0.08)]
                "
              >

                <Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  loop={true}
  className="
    rounded-[1.5rem]
    overflow-hidden
    shadow-[0_0_35px_rgba(255,79,163,0.25)]
  "
>
  <SwiperSlide>
    <img
      src="/sajshringar_about.png"
      alt="Bridal Makeup"
      className="
  h-[520px]
  w-full
  object-cover
  rounded-[1.5rem]
"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      src="/bridal_makeup.png"
      alt="Bridal Makeup"
      className="
  h-[520px]
  w-full
  object-cover
  rounded-[1.5rem]
"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="/aariwork.png"
      alt="Aari Work"
      className="
  h-[520px]
  w-full
  object-cover
  rounded-[1.5rem]
"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="/hairstyle.png"
      alt="Hairstyle"
      className="
  h-[520px]
  w-full
  object-cover
  rounded-[1.5rem]
"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="/academy.png"
      alt="Beauty Academy"
      className="
  h-[520px]
  w-full
  object-cover
  rounded-[1.5rem]
"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="/jwellary.png"
      alt="Jewellery"
      className="
  h-[520px]
  w-full
  object-cover
  rounded-[1.5rem]
"
    />
  </SwiperSlide>

</Swiper>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
              </motion.div>
            </div>

            {/* CARDS BELOW IMAGE */}
            <div
              className="
                mt-5

                grid w-full
                max-w-[420px]

                grid-cols-2
                gap-4
              "
            >

              {/* CARD 1 */}
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  rounded-[1.5rem]
                  border border-white/10
                  bg-white/[0.03]

                  p-4
                  sm:p-5

                  backdrop-blur-xl

                  transition duration-300
                  hover:border-pink-500/30
                  hover:bg-pink-500/5
                "
              >

                <h3
                  className="
                    text-lg
                    font-bold
                    gold-text

                    sm:text-xl
                    laptop:text-2xl
                  "
                >
                  Bridal
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-relaxed
                    text-white/70

                    sm:text-sm
                  "
                >
                  Luxury bridal makeup artistry crafted with elegance and perfection.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  rounded-[1.5rem]
                  border border-white/10
                  bg-white/[0.03]

                  p-4
                  sm:p-5

                  backdrop-blur-xl

                  transition duration-300
                  hover:border-pink-500/30
                  hover:bg-pink-500/5
                "
              >

                <h3
                  className="
                    text-lg
                    font-bold
                    gold-text

                    sm:text-xl
                    laptop:text-2xl
                  "
                >
                  Training
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-relaxed
                    text-white/70

                    sm:text-sm
                  "
                >
                  Professional beauty and fashion skill development academy.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              w-full
              max-w-[650px]

              text-center

              tablet:text-left
            "
          >

            {/* LABEL */}
            <p
              className="
                mb-4

                text-[10px]
                uppercase
                tracking-[0.35em]
                text-pink-400

                sm:text-xs
                tablet:text-sm
              "
            >
              About Sajshringar
            </p>

            {/* TITLE */}
            <h2
              className="
                heading-font
                font-bold
                leading-[1.02]

                text-[2rem]

                sm:text-[2.8rem]

                md:text-[3.3rem]

                laptop:text-[4rem]
              "
            >
              Transforming
              <br />

              Beauty{" "}

              <span className="gold-text">
                With
                <br />
                Elegance
              </span>
            </h2>

            {/* LINE */}
            <div
              className="
                mt-5
                h-[2px]
                w-24
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-yellow-400

                mx-auto

                tablet:mx-0
              "
            />

            {/* DESCRIPTION */}
            <div
              className="
                mt-7
                space-y-5

                text-sm
                leading-[1.9]
                text-white/70

                sm:text-base
                laptop:text-lg
              "
            >

              <p>
                Sajshringar by Apeksha is dedicated to enhancing beauty through
                professional bridal makeup artistry, Aari work, jewellery
                making, and beauty training.
              </p>

              <p>
                With a passion for creativity and elegance, we help every client
                feel confident, beautiful, and unforgettable on their special
                occasions.
              </p>
            </div>

            {/* EXTRA FEATURE BOX */}
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                mt-8

                rounded-[2rem]
                border border-white/10
                bg-white/[0.03]

                p-5
                sm:p-6

                backdrop-blur-xl

                transition duration-300
                hover:border-pink-500/30
                hover:bg-pink-500/5
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                  gold-text

                  sm:text-2xl
                "
              >
                Luxury Beauty Experience
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-white/70

                  sm:text-base
                "
              >
                Every bridal transformation is carefully designed with elegance,
                professionalism, and premium beauty artistry to create unforgettable memories.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}