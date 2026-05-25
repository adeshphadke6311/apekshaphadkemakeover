"use client";

import {
  Star,
  Quote,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sayli Korhale",
    role: "Bridal Makeup Client",
    review:
      "Absolutely loved my bridal look. Makeup was elegant, long lasting, and looked beautiful in every photo.",
  },

  {
    name: "Monali Phadke",
    role: "Aari Work Student",
    review:
      "Teaching style is very easy to understand. I learned multiple elegant Aari work patterns professionally.",
  },

  {
    name: "Shejal Borkar",
    role: "Hairstyle Client",
    review:
      "Beautiful bridal hairstyle with perfect finishing. Hairstyle stayed perfectly throughout the event.",
  },

  {
    name: "Rutuja Dhumal",
    role: "Bridal Makeup Client",
    review:
      "Very professional service and soft glam makeup. I received so many compliments on my special day.",
  },

  {
    name: "Ashwini Phadke",
    role: "Aari Work Student",
    review:
      "Classes were practical and creative. Designs explained step by step in a very simple way.",
  },

  {
    name: "Sayli Phadke",
    role: "Hairstyle Client",
    review:
      "Loved the hairstyle and hair accessories combination. It looked elegant and suited my outfit perfectly.",
  },

  {
    name: "Aakansha Sawant",
    role: "Bridal Makeup Client",
    review:
      "माझा bridal makeup खूप सुंदर झाला होता. प्रत्येक detail खूप perfect आणि classy वाटली.",
  },

  {
    name: "Sakshi Pawar",
    role: "Aari Work Student",
    review:
      "Aari work training was amazing. Now I can confidently create beautiful embroidery designs on my own.",
  },

  {
    name: "Divya More",
    role: "Hairstyle Client",
    review:
      "Hairstyle was neat, stylish, and long lasting. Very happy with the final bridal look.",
  },

  {
    name: "Aakansha Parbhane",
    role: "Bridal Makeup Client",
    review:
      "The makeup looked natural and premium. Hairstyle and jewellery matching was also perfectly done.",
  },

  {
    name: "Monali Kate",
    role: "Aari Work Student",
    review:
      "खूप छान teaching आहे. प्रत्येक design खूप व्यवस्थित आणि patience ने शिकवले जाते.",
  },

  {
    name: "Harshada Shinde",
    role: "Bridal Makeup Client",
    review:
      "Excellent bridal service with neat finishing and beautiful look. Totally satisfied with the makeover.",
  },

  {
    name: "Sakshi Korhale",
    role: "Aari Work Student",
    review:
      "Professional guidance and friendly environment. I improved my embroidery skills very quickly.",
  },

  {
    name: "Aditi Shinde",
    role: "Aari Work Student",
    review:
      "Best place to learn creative Aari work. Training quality and support are really excellent.",
  },

  {
    name: "Vidya Dhamale",
    role: "Aari Work Student",
    review:
      "I learned beautiful traditional and modern embroidery patterns. Classes are very informative.",
  },

  {
    name: "Priyanka Divekar",
    role: "Aari Work Student",
    review:
      "Very supportive teaching and creative ideas. Every session helped me improve my work professionally.",
  },

  {
    name: "Monali Divekar",
    role: "Aari Work Student",
    review:
      "खूप सुंदर designs शिकायला मिळाले. Friendly atmosphere मुळे learning experience खूप चांगला होता.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative overflow-hidden
        bg-[#050816]

        py-12

        sm:py-10

        tablet:py-12

        laptop:py-16
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-yellow-500/10 blur-3xl" />

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
            Testimonials
          </p>

          <h2
            className="
              heading-font
              font-bold
              leading-tight

              text-[2rem]

              sm:text-[2.8rem]

              tablet:text-[3.6rem]

              laptop:text-[4.8rem]
            "
          >

            What Our

            <span className="gold-text">
              {" "}
              Clients Say
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
            Hear from our happy bridal clients,
            students, and beauty enthusiasts
            who experienced Sajshringar’s
            luxury artistry and professional training.
          </p>
        </motion.div>

        {/* TESTIMONIAL SLIDER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            modules={[
              Autoplay,
              Pagination,
            ]}
            loop={true}
            speed={1000}
            spaceBetween={24}
            autoplay={{
              delay: 3200,
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

              1200: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >

            {testimonials.map(
              (
                testimonial,
                index
              ) => (
                <SwiperSlide
                  key={
                    testimonial.name
                  }
                >

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

                      p-6

                      sm:p-7

                      backdrop-blur-xl

                      transition-all duration-500

                      hover:border-pink-400/40
                      hover:bg-pink-500/[0.03]
                      hover:shadow-[0_0_45px_rgba(255,79,163,0.16)]
                    "
                  >

                    {/* TOP GLOW */}
                    <div
                      className="
                        absolute right-0 top-0

                        h-32
                        w-32

                        rounded-full
                        bg-pink-500/10
                        blur-3xl

                        opacity-0

                        transition duration-500

                        group-hover:opacity-100
                      "
                    />

                    {/* QUOTE ICON */}
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative z-10

                        mb-5
                        inline-flex

                        rounded-2xl
                        bg-pink-500/10

                        p-4

                        text-pink-400
                      "
                    >

                      <Quote
                        size={28}
                      />
                    </motion.div>

                    {/* STARS */}
                    <div
                      className="
                        relative z-10

                        mb-5
                        flex gap-1

                        text-yellow-400
                      "
                    >

                      {[
                        ...Array(5),
                      ].map(
                        (
                          _,
                          starIndex
                        ) => (
                          <motion.div
                            key={
                              starIndex
                            }
                            initial={{
                              opacity: 0,
                              scale: 0,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            transition={{
                              delay:
                                starIndex *
                                0.08,
                            }}
                          >

                            <Star
                              size={18}
                              fill="currentColor"
                            />
                          </motion.div>
                        )
                      )}
                    </div>

                    {/* REVIEW */}
                    <p
                      className="
                        relative z-10

                        mb-7

                        text-sm
                        leading-relaxed
                        text-white/70

                        sm:text-base
                        laptop:text-lg
                      "
                    >
                      “
                      {
                        testimonial.review
                      }
                      ”
                    </p>

                    {/* BOTTOM */}
                    <div
                      className="
                        relative z-10

                        border-t
                        border-white/10

                        pt-5
                      "
                    >

                      {/* USER */}
                      <div className="flex items-center gap-4">

                        {/* AVATAR */}
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                          }}
                          className="
                            flex
                            h-14
                            w-14

                            items-center
                            justify-center

                            rounded-full

                            bg-gradient-to-r
                            from-pink-500
                            to-pink-600

                            text-lg
                            font-bold
                            text-white

                            shadow-[0_0_20px_rgba(255,79,163,0.35)]
                          "
                        >

                          {testimonial.name.charAt(
                            0
                          )}
                        </motion.div>

                        <div>

                          <h3
                            className="
                              text-lg
                              font-semibold

                              sm:text-xl
                            "
                          >
                            {
                              testimonial.name
                            }
                          </h3>

                          <p
                            className="
                              mt-1

                              text-xs
                              font-medium
                              text-pink-400

                              sm:text-sm
                            "
                          >
                            {
                              testimonial.role
                            }
                          </p>
                        </div>
                      </div>

                      {/* BADGE */}
                      <div
                        className="
                          mt-5
                          inline-flex

                          rounded-full
                          border
                          border-pink-500/20

                          bg-pink-500/10

                          px-4 py-2

                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.2em]

                          text-pink-300

                          sm:text-xs
                        "
                      >
                        Verified Client
                      </div>
                    </div>

                    {/* NUMBER */}
                    <div
                      className="
                        absolute bottom-5 right-6

                        text-5xl
                        font-bold
                        text-white/[0.03]
                      "
                    >

                      0
                      {index + 1}
                    </div>
                  </motion.div>
                </SwiperSlide>
              )
            )}
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