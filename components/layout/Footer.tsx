"use client";

import Link from "next/link";

import {
  Phone,
  MapPin,
  Mail,
  BadgeCheck,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function Footer() {

  const [openLinks, setOpenLinks] = useState(false);

  return (
    <footer
      className="
        relative overflow-hidden

        border-t border-white/10
        bg-[#040611]

        pt-12
        pb-8

        sm:pt-14

        laptop:pt-16
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[240px] w-[240px] rounded-full bg-yellow-500/10 blur-3xl" />

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

        {/* DESKTOP / TABLET GRID */}
        <div
          className="
            hidden

            tablet:grid
            tablet:grid-cols-2
            tablet:gap-10

            laptop:grid-cols-4
            laptop:gap-12
          "
        >

          {/* BRAND */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >

            <h2 className="heading-font mb-5 text-3xl font-bold gold-text">
              Sajshringar
            </h2>

            <p className="leading-relaxed text-white/70">
              Professional bridal makeup artistry,
              Aari work,
              jewellery making,
              and beauty training academy crafted
              with elegance and creativity.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">

              {[
                "Home",
                "Services",
                "Portfolio",
                //"Gallery",
                "Contact",
              ].map((item) => (




                <motion.li
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >

                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase()}`
                    }
                    className="
                      transition-all duration-300

                      hover:text-pink-400
                    "
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
          >

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-white/70">

              <motion.a
                whileHover={{
                  x: 5,
                }}
                href="tel:+917498645883"
                className="
                  flex items-start gap-3

                  transition-all duration-300

                  hover:text-pink-400
                "
              >

                <Phone
                  size={18}
                  className="mt-1 text-pink-400"
                />

                <p>+91 7498645883</p>
              </motion.a>

              <motion.a
                whileHover={{
                  x: 5,
                }}
                href="mailto:shriyanshenterprises6311@gmail.com"
                className="
                  flex items-start gap-3

                  transition-all duration-300

                  hover:text-pink-400
                "
              >

                <Mail
                  size={18}
                  className="mt-1 text-pink-400"
                />

                <p>shriyanshenterprises6311@gmail.com</p>
              </motion.a>

              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="flex items-start gap-3"
              >

                <MapPin
                  size={18}
                  className="mt-1 text-pink-400"
                />

                <p>
                  A/P Hatwalan,
                  Tal Daund,
                  Pune,
                  Maharashtra
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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

            <h3 className="mb-5 text-xl font-semibold">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4">

              {/* INSTAGRAM */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://instagram.com/shriyansh_enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2

                  rounded-full
                  border border-white/10

                  px-5 py-3

                  text-sm

                  transition-all duration-300

                  hover:border-pink-400
                  hover:text-pink-400
                  hover:shadow-[0_0_25px_rgba(255,79,163,0.2)]
                "
              >

                <BadgeCheck size={16} />

                Instagram
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://wa.me/917498645883"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2

                  rounded-full
                  border border-white/10

                  px-5 py-3

                  text-sm

                  transition-all duration-300

                  hover:border-pink-400
                  hover:text-pink-400
                  hover:shadow-[0_0_25px_rgba(255,79,163,0.2)]
                "
              >

                <MessageCircle size={16} />

                WhatsApp
              </motion.a>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >

              <Link
                href="/payment"
                className="
                  mt-7 inline-block

                  rounded-full

                  bg-gradient-to-r
                  from-pink-500
                  to-pink-600

                  px-6 py-3

                  text-sm
                  font-medium
                  text-white

                  transition-all duration-300

                  hover:shadow-[0_0_25px_rgba(255,79,163,0.35)]
                "
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* MOBILE FOOTER */}
        <div className="tablet:hidden">

          {/* BRAND */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="text-center"
          >

            <h2 className="heading-font text-3xl font-bold gold-text">
              Sajshringar
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Luxury bridal makeup artistry,
              jewellery making,
              Aari work,
              and beauty academy.
            </p>
          </motion.div>

          {/* MOBILE GRID */}
          <div className="mt-10 grid grid-cols-2 gap-4">

            {/* CONTACT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-[1.5rem]
                border border-white/10
                bg-white/[0.03]

                p-4

                backdrop-blur-xl
              "
            >

              <h3 className="mb-4 text-base font-semibold">
                Contact
              </h3>

              <div className="space-y-4 text-xs text-white/70">

                <a
                  href="tel:+917498645883"
                  className="flex items-start gap-2"
                >

                  <Phone
                    size={15}
                    className="mt-0.5 text-pink-400"
                  />

                  <span>
                    +91 7498645883
                  </span>
                </a>

                <a
                  href="mailto:shriyanshenterprises6311@gmail.com"
                  className="flex items-start gap-2"
                >

                  <Mail
                    size={15}
                    className="mt-0.5 text-pink-400"
                  />

                  <span>
                    shriyanshenterprises6311@gmail.com
                  </span>
                </a>

                <div className="flex items-start gap-2">

                  <MapPin
                    size={15}
                    className="mt-0.5 text-pink-400"
                  />

                  <span>
                    Pune,
                    Maharashtra
                  </span>
                </div>
              </div>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                rounded-[1.5rem]
                border border-white/10
                bg-white/[0.03]

                p-4

                backdrop-blur-xl
              "
            >

              <button
                onClick={() =>
                  setOpenLinks(
                    !openLinks
                  )
                }
                className="
                  flex w-full items-center justify-between
                "
              >

                <h3 className="text-base font-semibold">
                  Quick Links
                </h3>

                <motion.div
                  animate={{
                    rotate:
                      openLinks
                        ? 180
                        : 0,
                  }}
                >

                  <ChevronDown
                    size={18}
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height:
                    openLinks
                      ? "auto"
                      : 0,
                  opacity:
                    openLinks
                      ? 1
                      : 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="overflow-hidden"
              >

                <ul className="mt-4 space-y-3 text-sm text-white/70">

                  {[
                    "Home",
                    "Services",
                    "Portfolio",
                    // "Gallery",
                    "Contact",
                  ].map((item) => (

                    <li key={item}>

                      <Link
                        href={
                          item === "Home"
                            ? "/"
                            : `/${item.toLowerCase()}`
                        }
                        className="
                          transition-all duration-300

                          hover:text-pink-400
                        "
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* SOCIAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
            className="
              mt-5

              rounded-[1.5rem]
              border border-white/10
              bg-white/[0.03]

              p-5

              text-center

              backdrop-blur-xl
            "
          >

            <h3 className="text-base font-semibold">
              Follow Us
            </h3>

            <div className="mt-5 flex justify-center gap-3">

              <motion.a
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2

                  rounded-full
                  border border-white/10

                  px-4 py-2

                  text-xs

                  transition-all duration-300

                  hover:border-pink-400
                  hover:text-pink-400
                "
              >

                <BadgeCheck size={14} />

                Instagram
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://wa.me/917498645883"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2

                  rounded-full
                  border border-white/10

                  px-4 py-2

                  text-xs

                  transition-all duration-300

                  hover:border-pink-400
                  hover:text-pink-400
                "
              >

                <MessageCircle size={14} />

                WhatsApp
              </motion.a>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >

              <Link
                href="/payment"
                className="
                  mt-6 inline-block

                  rounded-full

                  bg-gradient-to-r
                  from-pink-500
                  to-pink-600

                  px-6 py-3

                  text-sm
                  font-medium
                  text-white

                  transition-all duration-300

                  hover:shadow-[0_0_25px_rgba(255,79,163,0.35)]
                "
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-10

            border-t border-white/10

            pt-6

            text-center
            text-xs
            text-white/50

            sm:text-sm
          "
        >

          © 2026 Sajshringar by Apeksha.
          All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}