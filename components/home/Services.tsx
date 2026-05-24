"use client";

import {
  Brush,
  Sparkles,
  GraduationCap,
  Gem,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    title: "Makeup Artistry",
    description:
      "Professional bridal, HD, airbrush and party makeup services.",
    icon: Brush,
  },
  {
    title: "Aari Work Designs",
    description:
      "Beautiful handcrafted blouse and embroidery design training.",
    icon: Sparkles,
  },
  {
    title: "Jewellery Making",
    description:
      "Traditional nath and jewellery design making classes.",
    icon: Gem,
  },
  {
    title: "Training Academy",
    description:
      "Professional beauty and fashion skill development academy.",
    icon: GraduationCap,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand your bridal style, look, and beauty preferences.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Customized makeup, jewellery, and styling planning process.",
  },
  {
    number: "03",
    title: "Transformation",
    description:
      "Luxury beauty experience with premium artistry and perfection.",
  },
];

export default function Services() {
  return (
    <section
  id="services"
  className="
    relative overflow-hidden
    bg-[#070b1a]

    pt-10
    pb-12

    sm:pt-14
    sm:pb-16

    tablet:pt-12
    tablet:pb-14

    laptop:pt-15
    laptop:pb-15
  "
>
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mb-10 text-center
            sm:mb-12
            tablet:mb-10
            laptop:mb-16
          "
        >
          <p
            className="
              mb-4 uppercase tracking-[0.3em]
              text-pink-400

              text-[10px]
              sm:text-xs
              tablet:text-sm
            "
          >
            Our Services
          </p>

          <h2
            className="
              heading-font font-bold leading-tight

              text-3xl
              sm:text-4xl
              tablet:text-[2.8rem]
              laptop:text-5xl
            "
          >
            Beauty & Skill{" "}

            <span className="gold-text">
              Expertise
            </span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />
        </motion.div>

        {/* SERVICES GRID */}
        <div
          className="
            grid gap-5

            sm:grid-cols-2

            laptop:grid-cols-4
            laptop:gap-8
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group relative overflow-hidden

                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]

                  p-6
                  sm:p-7
                  laptop:p-8

                  backdrop-blur-xl

                  transition-all duration-500
                  hover:border-pink-500/30
                  hover:shadow-[0_0_30px_rgba(255,79,163,0.12)]
                "
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 transition-all duration-500 group-hover:from-pink-500/5 group-hover:to-transparent" />

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    mb-6 inline-flex
                    rounded-2xl
                    bg-pink-500/10

                    p-4 text-pink-400
                  "
                >
                  <Icon size={30} />
                </motion.div>

                {/* TITLE */}
                <h3
                  className="
                    mb-4 font-semibold text-white

                    text-xl
                    sm:text-2xl
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    leading-relaxed text-white/70

                    text-sm
                    sm:text-base
                  "
                >
                  {service.description}
                </p>

                {/* ARROW */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="mt-6 flex items-center gap-2 text-pink-400"
                >
                  <span className="text-sm font-medium">
                    Explore More
                  </span>

                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* PROCESS SECTION */}
        <div
          className="
            mmt-10
            sm:mt-12
            tablet:mt-10
            laptop:mt-14
          "
        >

          {/* PROCESS HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mb-10 text-center
              sm:mb-12
            "
          >
            <p
              className="
                mb-4 uppercase tracking-[0.3em]
                text-pink-400

                text-[10px]
                sm:text-xs
                tablet:text-sm
              "
            >
              Our Process
            </p>

            <h2
              className="
                heading-font font-bold leading-tight

                text-3xl
                sm:text-4xl
                tablet:text-[2.8rem]
                laptop:text-5xl
              "
            >
              Luxury Experience{" "}

              <span className="gold-text">
                Step By Step
              </span>
            </h2>

            <p
              className="
                mx-auto mt-5 max-w-2xl
                leading-relaxed text-white/65

                text-sm
                sm:text-base
              "
            >
              Every beauty transformation is crafted with
              precision, creativity, and luxury elegance.
            </p>
          </motion.div>

          {/* PROCESS GRID */}
          <div
            className="
              grid gap-5

              tablet:grid-cols-3
              laptop:gap-8
            "
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  relative overflow-hidden

                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]

                  p-7
                  backdrop-blur-xl

                  transition-all duration-500
                  hover:border-pink-500/30
                  hover:shadow-[0_0_30px_rgba(255,79,163,0.12)]
                "
              >

                {/* NUMBER */}
                <div
                  className="
                    mb-6 inline-flex h-14 w-14
                    items-center justify-center

                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500 to-pink-600

                    text-xl font-bold text-white
                  "
                >
                  {step.number}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mb-4 font-semibold text-white

                    text-xl
                    sm:text-2xl
                  "
                >
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    leading-relaxed text-white/70

                    text-sm
                    sm:text-base
                  "
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}