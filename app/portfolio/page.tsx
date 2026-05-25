"use client";

import { useMemo, useRef, useState } from "react";

import {
  Play,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                               PORTFOLIO DATA                               */
/* -------------------------------------------------------------------------- */

const portfolioItems = [
  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal1.jpg",
    orientation: "vertical",
  },

  {
    type: "video",
    category: "Bridal",
    src: "/videos/bridal.mp4",
    orientation: "horizontal",
  },

  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal2.jpg",
    orientation: "horizontal",
  },

  {
    type: "video",
    category: "Bridal",
    src: "/videos/bridal2.mp4",
    orientation: "vertical",
  },

  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal8.jpg",
    orientation: "vertical",
  },

  {
    type: "video",
    category: "Bridal",
    src: "/videos/bridal3.mp4",
    orientation: "horizontal",
  },

  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal3.jpg",
    orientation: "horizontal",
  },

  {
    type: "image",
    category: "Hairstyle",
    src: "/gallery/hairstyle1.jpg",
    orientation: "vertical",
  },

  {
    type: "video",
    category: "Training",
    src: "/videos/training1.mp4",
    orientation: "horizontal",
  },

  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal4.jpg",
    orientation: "vertical",
  },

  {
    type: "video",
    category: "Aari Work",
    src: "/videos/aari work1.mp4",
    orientation: "vertical",
  },

  {
    type: "image",
    category: "Hairstyle",
    src: "/gallery/hairstyle2.jpg",
    orientation: "horizontal",
  },

  {
    type: "video",
    category: "Training",
    src: "/videos/training2.mp4",
    orientation: "vertical",
  },

  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal5.jpg",
    orientation: "horizontal",
  },

  {
    type: "video",
    category: "Aari Work",
    src: "/videos/aari work2.mp4",
    orientation: "horizontal",
  },

  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal6.jpg",
    orientation: "vertical",
  },

  {
    type: "video",
    category: "Training",
    src: "/videos/training3.mp4",
    orientation: "vertical",
  },

  {
    type: "image",
    category: "Hairstyle",
    src: "/gallery/hairstyle3.jpg",
    orientation: "horizontal",
  },

  {
    type: "video",
    category: "Aari Work",
    src: "/videos/aari work3.mp4",
    orientation: "horizontal",
  },

  {
    type: "image",
    category: "Bridal",
    src: "/gallery/bridal7.jpg",
    orientation: "horizontal",
  },

  {
    type: "video",
    category: "Training",
    src: "/videos/training4.mp4",
    orientation: "horizontal",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  CATEGORY                                  */
/* -------------------------------------------------------------------------- */

const categories = [
  "All",
  "Bridal",
  "Training",
  "Aari Work",
  "Hairstyle",
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function PortfolioPage() {

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    pausedVideo,
    setPausedVideo,
  ] = useState<string | null>(
    null
  );

  const filteredItems =
    useMemo(() => {

      return activeCategory ===
        "All"
        ? portfolioItems
        : portfolioItems.filter(
            (item) =>
              item.category ===
              activeCategory
          );

    }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#030312] pb-24 pt-28 text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CATEGORY FILTER */}

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">

          {categories.map(
            (category) => {

              const count =
                category === "All"
                  ? portfolioItems.length
                  : portfolioItems.filter(
                      (item) =>
                        item.category ===
                        category
                    ).length;

              return (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                  className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 md:px-7
                  ${
                    activeCategory ===
                    category
                      ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-[0_0_30px_rgba(255,79,163,0.35)]"
                      : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {category} (
                  {count})
                </button>
              );
            }
          )}
        </div>

        {/* GRID */}

        <motion.div
          layout
          className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3"
        >

          <AnimatePresence>

            {filteredItems.map(
              (
                item,
                index
              ) => (

                <motion.div
                  key={index}
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      index * 0.03,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_0_30px_rgba(255,79,163,0.06)] break-inside-avoid"
                >

                  {/* IMAGE */}

                  {item.type ===
                    "image" && (

                    <img
                      src={item.src}
                      alt="portfolio"
                      className={`w-full object-cover transition duration-500 group-hover:scale-[1.03]
                      ${
                        item.orientation ===
                        "vertical"
                          ? "h-[520px] sm:h-[560px]"
                          : "h-[280px] sm:h-[340px]"
                      }`}
                    />
                  )}

                  {/* VIDEO */}

                  {item.type ===
                    "video" && (

                    <VideoCard
                      item={item}
                      pausedVideo={
                        pausedVideo
                      }
                      setPausedVideo={
                        setPausedVideo
                      }
                    />
                  )}
                </motion.div>
              )
            )}

          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                VIDEO CARD                                  */
/* -------------------------------------------------------------------------- */

function VideoCard({
  item,
  pausedVideo,
  setPausedVideo,
}: any) {

  const videoRef =
    useRef<HTMLVideoElement | null>(
      null
    );

  const isPaused =
    pausedVideo === item.src;

  /* ---------------------------- HOVER PLAY ---------------------------- */

  const handleHover =
    async () => {

      if (isPaused) return;

      const video =
        videoRef.current;

      if (!video) return;

      try {

        document
          .querySelectorAll("video")
          .forEach((v) => {

            if (
              v !== video
            ) {

              v.pause();

              v.currentTime = 0;
            }
          });

        video.muted =
          false;

        video.volume = 1;

        await video.play();

      } catch (err) {

        console.log(err);
      }
    };

  /* ---------------------------- HOVER LEAVE ---------------------------- */

  const handleLeave =
    () => {

      if (isPaused) return;

      const video =
        videoRef.current;

      if (!video) return;

      video.pause();

      video.currentTime = 0;
    };

  /* ----------------------------- CLICK TOGGLE ----------------------------- */

  const handleClick =
    async () => {

      const video =
        videoRef.current;

      if (!video) return;

      if (!video.paused) {

        video.pause();

        setPausedVideo(
          item.src
        );

      } else {

        document
          .querySelectorAll("video")
          .forEach((v) => {

            if (
              v !== video
            ) {

              v.pause();

              v.currentTime = 0;
            }
          });

        try {

          video.muted =
            false;

          video.volume = 1;

          await video.play();

          setPausedVideo(
            null
          );

        } catch (err) {

          console.log(err);
        }
      }
    };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={
        handleHover
      }
      onMouseLeave={
        handleLeave
      }
    >

      {/* VIDEO */}

      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        controls={false}
        onClick={handleClick}
        className={`w-full cursor-pointer object-cover transition duration-500 group-hover:scale-[1.03]
        ${
          item.orientation ===
          "vertical"
            ? "h-[520px] sm:h-[560px]"
            : "h-[280px] sm:h-[340px]"
        }`}
      >

        <source
          src={item.src}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}

      <div className="pointer-events-none absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/20" />

      {/* SMALL MINIMAL VIDEO ICON */}

      <div className="pointer-events-none absolute right-4 top-4 z-20">

        <Play
          className="h-4 w-4 text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
          fill="white"
        />
      </div>
    </div>
  );
}