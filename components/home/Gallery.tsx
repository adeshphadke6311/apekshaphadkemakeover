"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const galleryImages = [
  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Bridal Transformation",
    description: "Elegant professional makeup artistry",
  },

  {
    image: "/images/sajshringar_about.png",
    title: "Luxury Bridal Look",
    description: "Premium beauty styling experience",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Aari Work Design",
    description: "Creative embroidery craftsmanship",
  },

  {
    image: "/images/sajshringar_about.png",
    title: "Jewellery Creation",
    description: "Traditional handcrafted elegance",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
        relative overflow-hidden
        bg-[#070b1a]

        py-12

        sm:py-14

        tablet:py-12

        laptop:py-15
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-3xl" />

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

        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-10
            text-center

            sm:mb-12

            laptop:mb-16
          "
        >

          <p
            className="
              mb-3
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-pink-400

              sm:text-xs
              tablet:text-sm
            "
          >
            Our Gallery
          </p>

          <h2
            className="
              heading-font
              font-bold
              leading-tight

              text-[2rem]

              sm:text-[2.8rem]

              tablet:text-[3.5rem]

              laptop:text-[4.5rem]
            "
          >
            Beauty In

            <span className="gold-text">
              {" "}
              Every Detail
            </span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-sm
              leading-relaxed
              text-white/70

              sm:text-base
              laptop:text-lg
            "
          >
            Explore bridal transformations,
            luxury beauty artistry,
            handcrafted jewellery,
            and professional beauty work
            crafted with elegance and perfection.
          </p>
        </motion.div>

        {/* SLIDER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
        >

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              640: {
                slidesPerView: 1.2,
              },

              768: {
                slidesPerView: 2,
              },

              1100: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >

            {galleryImages.map((item, index) => (
              <SwiperSlide key={index}>

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    group relative overflow-hidden

                    rounded-[2rem]
                    border border-white/10
                    bg-white/[0.03]

                    shadow-[0_0_35px_rgba(255,79,163,0.06)]

                    backdrop-blur-xl

                    transition-all duration-500

                    hover:border-pink-500/30
                    hover:shadow-[0_0_55px_rgba(255,79,163,0.16)]
                  "
                >

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={800}
                      priority
                      className="
                        h-[260px]
                        w-full
                        object-cover

                        transition duration-700
                        group-hover:scale-110

                        sm:h-[320px]

                        tablet:h-[380px]

                        laptop:h-[430px]
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90" />

                    {/* BADGE */}
                    <div
                      className="
                        absolute left-4 top-4

                        rounded-full
                        border border-pink-400/20
                        bg-black/30

                        px-4 py-2

                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-pink-300

                        backdrop-blur-xl

                        sm:text-xs
                      "
                    >
      
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">

                    <div
                      className="
                        translate-y-6
                        opacity-0

                        transition-all duration-500

                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >

                      <h3
                        className="
                          text-xl
                          font-semibold
                          text-white

                          sm:text-2xl
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-relaxed
                          text-white/70
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* NUMBER */}
                  <div
                    className="
                      absolute bottom-4 right-5

                      text-5xl
                      font-bold
                      text-white/[0.04]
                    "
                  >
                    0{index + 1}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto

            mt-10

            h-px
            w-40

            bg-gradient-to-r
            from-transparent
            via-pink-500/40
            to-transparent
          "
        />
      </div>
    </section>
  );
}