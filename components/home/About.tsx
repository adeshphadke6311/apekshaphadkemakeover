"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const aboutImages = [
  {
    image: "/about/bridal_makeup.png",
    title: "Bridal Makeup",
  },
  {
    image: "/about/aariwork.png",
    title: "Aari Work",
  },
  {
    image: "/about/hairstyle.png",
    title: "Hairstyle",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#050816]
        py-10
        sm:py-14
        laptop:py-16
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />

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

            laptop:gap-14
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
            {/* SWIPER IMAGE SECTION */}
            <div
              className="
                relative
                w-full

                max-w-[320px]

                sm:max-w-[420px]

                md:max-w-[480px]

                laptop:max-w-[540px]
              "
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-[2rem] bg-pink-500/10 blur-3xl" />

              <div
                className="
                  relative overflow-hidden

                  rounded-[2rem]
                  border border-white/10
                  bg-white/[0.03]

                  p-2.5

                  backdrop-blur-xl

                  shadow-[0_0_35px_rgba(255,79,163,0.08)]
                "
              >
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  loop={true}
                  speed={900}
                  autoplay={{
                    delay: 3200,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="aboutSwiper rounded-[1.5rem]"
                >
                  {aboutImages.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="
                          relative

                          aspect-[16/10]

                          w-full

                          overflow-hidden
                          rounded-[1.5rem]

                          bg-[#0b1020]

                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          priority
                          className="
                            object-contain

                            transition duration-700
                            hover:scale-[1.02]
                          "
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* CARDS */}
            <div
              className="
                mt-5

                grid w-full
                max-w-[540px]

                grid-cols-2
                gap-4
              "
            >
              {/* CARD 1 */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  rounded-[1.4rem]
                  border border-white/10
                  bg-white/[0.03]

                  p-4

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
                  Elegant bridal artistry crafted with perfection and beauty.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  rounded-[1.4rem]
                  border border-white/10
                  bg-white/[0.03]

                  p-4

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
                  Professional beauty training with creative skill development.
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
              max-w-[620px]

              text-center
              tablet:text-left
            "
          >
            {/* LABEL */}
            <p
              className="
                mb-3

                text-[10px]
                uppercase
                tracking-[0.35em]
                text-pink-400

                sm:text-xs
              "
            >
              About Sajshringar
            </p>

            {/* TITLE */}
            <h2
              className="
                heading-font
                font-bold
                leading-[1.05]

                text-[2rem]

                sm:text-[2.7rem]

                md:text-[3.2rem]

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
                mt-4
                h-[2px]
                w-20
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
                mt-6
                space-y-4

                text-sm
                leading-[1.8]
                text-white/70

                sm:text-[15px]
                laptop:text-base
              "
            >
              <p>
                Sajshringar by Apeksha is dedicated to enhancing beauty
                through bridal makeup artistry, Aari work, jewellery making,
                and beauty training.
              </p>

              <p>
                With creativity, elegance, and professionalism, we help every
                client feel confident, beautiful, and unforgettable on their
                special occasions.
              </p>
            </div>

            {/* FEATURE BOX */}
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                mt-7

                rounded-[1.8rem]
                border border-white/10
                bg-white/[0.03]

                p-5

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
                "
              >
                Every bridal transformation is designed with elegance,
                premium artistry, and professionalism to create unforgettable
                memories.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}