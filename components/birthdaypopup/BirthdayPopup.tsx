"use client";

import { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
  Sparkles,
  Heart,
  Stars,
} from "lucide-react";

export default function BirthdayPopup() {

  const [open, setOpen] =
    useState(false);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setOpen(true);

      }, 700);

    return () =>
      clearTimeout(timer);

  }, []);

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/75 backdrop-blur-md p-4"
        >

          {/* FLOATING PARTICLES */}

          {[...Array(12)].map(
            (_, i) => (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [
                    50,
                    -500,
                  ],
                  x: [
                    0,
                    Math.random() *
                      100 -
                      50,
                  ],
                  rotate: [
                    0,
                    360,
                  ],
                }}
                transition={{
                  duration:
                    8 +
                    Math.random() *
                      5,
                  repeat:
                    Infinity,
                  delay:
                    i * 0.3,
                }}
                className="absolute bottom-0 text-pink-300/70"
                style={{
                  left: `${
                    Math.random() *
                    100
                  }%`,
                }}
              >

                {i % 3 === 0 ? (

                  <Sparkles className="h-5 w-5" />

                ) : i % 2 === 0 ? (

                  <Heart className="h-4 w-4" />

                ) : (

                  <Stars className="h-4 w-4" />

                )}

              </motion.div>
            )
          )}

          {/* MAIN POPUP */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              rotateX: 40,
              y: -250,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -120,
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
            }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-pink-300/20 bg-black shadow-[0_0_120px_rgba(255,105,180,0.35)]"
          >

            {/* SHIMMER ANIMATION */}

            <motion.div
              animate={{
                x: [
                  "-120%",
                  "120%",
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute inset-y-0 z-20 w-[25%] skew-x-[-20deg] bg-white/10 blur-2xl"
            />

            {/* CLOSE BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.12,
                rotate: 90,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setOpen(false)
              }
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition duration-300 hover:bg-pink-500"
            >

              <X className="h-5 w-5" />

            </motion.button>

            {/* IMAGE */}

            <motion.img
              initial={{
                scale: 1.15,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              src="/birthday-image/birthday-collage.png"
              alt="Birthday"
              className="h-full max-h-[85vh] w-full object-cover"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20" />

            {/* CONTENT */}

            <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-12 text-center">

              {/* TITLE */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
                className="mb-4 text-4xl font-bold tracking-wide text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)] md:text-6xl"
              >

                🎉 Happy Birthday 🎉

              </motion.h1>

              {/* SUBTITLE */}

              <motion.h2
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="mb-5 text-xl font-semibold text-pink-200 md:text-3xl"
              >

                To The Most Beautiful Soul 💖

              </motion.h2>

              {/* MESSAGE */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9,
                }}
                className="max-w-2xl text-sm leading-8 text-white/90 md:text-lg"
              >

                Wishing you endless happiness,
                success, laughter and magical memories ✨
                <br />
                May your smile always shine brighter
                than the stars and your dreams
                come true forever 🌸

              </motion.p>

              {/* GLOW LINE */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 220,
                  opacity: 1,
                }}
                transition={{
                  delay: 1.1,
                  duration: 1,
                }}
                className="mt-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-pink-300 to-transparent"
              />

              {/* BOTTOM FLOATING TEXT */}

              <motion.p
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="mt-5 text-xs tracking-[0.3em] text-pink-200/80 md:text-sm"
              >

                WITH LOVE 💕

              </motion.p>

            </div>

            {/* OUTER GLOW */}

            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10" />

          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}