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

          {/* BACKGROUND GLOW */}

          <div className="absolute inset-0 overflow-hidden">

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"
            />

          </div>

          {/* FLOATING PARTICLES */}

          {[...Array(14)].map(
            (_, i) => (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [80, -600],
                  x: [
                    0,
                    Math.random() *
                      120 -
                      60,
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
                    i * 0.4,
                }}
                className="absolute bottom-0 text-pink-300/70"
                style={{
                  left: `${
                    Math.random() *
                    100
                  }%`,
                }}
              >

                {i % 2 === 0 ? (

                  <Sparkles className="h-5 w-5" />

                ) : (

                  <Heart className="h-4 w-4" />

                )}

              </motion.div>
            )
          )}

          {/* POPUP */}

          <motion.div
            initial={{
              opacity: 0,
              y: 500,
              scale: 0.75,
              rotateX: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -250,
              scale: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 14,
            }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2.7rem] border border-pink-300/20 bg-black shadow-[0_0_120px_rgba(255,105,180,0.35)]"
          >

            {/* SHIMMER EFFECT */}

            <motion.div
              animate={{
                x: [
                  "-120%",
                  "120%",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute inset-y-0 z-20 w-[25%] skew-x-[-20deg] bg-white/10 blur-2xl"
            />

            {/* CLOSE BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 90,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setOpen(false)
              }
              className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition duration-300 hover:bg-pink-500"
            >

              <X className="h-5 w-5" />

            </motion.button>

            {/* IMAGE */}

            <motion.img
              initial={{
                scale: 1.12,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              src="/birthday-image/birthday-collage.png"
              alt="Birthday"
              className="h-full max-h-[90vh] w-full object-cover"
            />

            {/* GOLDEN LIGHT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

            {/* SPARK LIGHTS */}

            {[...Array(12)].map(
              (_, i) => (

                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [
                      0.4,
                      1,
                      0.4,
                    ],
                  }}
                  transition={{
                    duration:
                      2 +
                      Math.random() *
                        2,
                    repeat:
                      Infinity,
                    delay:
                      i * 0.3,
                  }}
                  className="absolute rounded-full bg-white/70 blur-xl"
                  style={{
                    width:
                      8 +
                      Math.random() *
                        10,
                    height:
                      8 +
                      Math.random() *
                        10,
                    left: `${
                      Math.random() *
                      100
                    }%`,
                    top: `${
                      Math.random() *
                      100
                    }%`,
                  }}
                />
              )
            )}

            {/* OUTER BORDER */}

            <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] ring-1 ring-white/10" />

          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}