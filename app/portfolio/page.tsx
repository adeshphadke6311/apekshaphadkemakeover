"use client";

import { useMemo, useRef, useState } from "react";

import { Clock3 } from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                               PORTFOLIO DATA                               */
/* -------------------------------------------------------------------------- */

const portfolioItems = [
  /* ----------------------------- FEATURED TOP ----------------------------- */

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

  /* ----------------------------- RANDOM ITEMS ----------------------------- */

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
/*                              PORTFOLIO PAGE                                */
/* -------------------------------------------------------------------------- */

export default function PortfolioPage() {

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    activeVideo,
    setActiveVideo,
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

  const formatTime = (
    seconds: number
  ) => {

    if (
      !seconds ||
      isNaN(seconds)
    )
      return "";

    const mins =
      Math.floor(
        seconds / 60
      );

    const secs =
      Math.floor(
        seconds % 60
      );

    return `${mins}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

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
                      (
                        item
                      ) =>
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
                      formatTime={formatTime}
                      activeVideo={
                        activeVideo
                      }
                      setActiveVideo={
                        setActiveVideo
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
/*                               VIDEO CARD                                   */
/* -------------------------------------------------------------------------- */

function VideoCard({
  item,
  formatTime,
  activeVideo,
  setActiveVideo,
}: any) {

  const videoRef =
    useRef<HTMLVideoElement | null>(
      null
    );

  const [
    duration,
    setDuration,
  ] = useState("");

  const isPlaying =
    activeVideo === item.src;

  /* ---------------- TOGGLE VIDEO ---------------- */

  const toggleVideo =
    async () => {

      const currentVideo =
        videoRef.current;

      if (!currentVideo)
        return;

      /* ---- PAUSE OTHER VIDEOS ---- */

      document
        .querySelectorAll("video")
        .forEach((video) => {

          if (
            video !== currentVideo
          ) {

            video.pause();

            video.currentTime = 0;
          }
        });

      /* ---- TOGGLE CURRENT ---- */

      if (isPlaying) {

        currentVideo.pause();

        currentVideo.currentTime = 0;

        setActiveVideo(null);

      } else {

        try {

          currentVideo.muted =
            false;

          currentVideo.volume = 1;

          await currentVideo.play();

          setActiveVideo(
            item.src
          );

        } catch (error) {

          console.log(error);
        }
      }
    };

  /* ---------------- HOVER PREVIEW ---------------- */

  const handleHover =
    async () => {

      if (
        activeVideo &&
        activeVideo !==
          item.src
      )
        return;

      const video =
        videoRef.current;

      if (!video)
        return;

      try {

        video.muted = true;

        await video.play();

      } catch (error) {

        console.log(error);
      }
    };

  /* ---------------- HOVER LEAVE ---------------- */

  const handleLeave =
    () => {

      if (
        activeVideo ===
        item.src
      )
        return;

      const video =
        videoRef.current;

      if (!video)
        return;

      video.pause();

      video.currentTime = 0;
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
        preload="metadata"
        controls={false}
        className={`w-full cursor-pointer object-cover transition duration-500 group-hover:scale-[1.03]
        ${
          item.orientation ===
          "vertical"
            ? "h-[520px] sm:h-[560px]"
            : "h-[280px] sm:h-[340px]"
        }`}
        onLoadedMetadata={(e) => {

          const realDuration =
            e.currentTarget
              .duration;

          if (
            realDuration &&
            !isNaN(
              realDuration
            )
          ) {

            setDuration(
              formatTime(
                realDuration
              )
            );
          }
        }}
        onClick={toggleVideo}
      >

        <source
          src={item.src}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}

      <div className="pointer-events-none absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300" />

      {/* DURATION */}

      {duration && (

        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium backdrop-blur-md">

          <Clock3 className="h-4 w-4 text-pink-400" />

          {duration}
        </div>
      )}
    </div>
  );
}