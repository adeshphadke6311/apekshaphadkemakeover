"use client";

import { useMemo, useState } from "react";

import {
  Play,
  Sparkles,
  GraduationCap,
  Gem,
  Brush,
  X,
  Clock3,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    title: "Luxury Bridal Makeup",
    category: "Bridal",
    src: "/videos/bridal.mp4",
    poster: "/images/sajshringar-logo.jpeg",
    duration: "2:15",
    featured: true,
    icon: Brush,
  },

  {
    title: "Professional Makeup Training",
    category: "Training",
    src: "/videos/training.mp4",
    poster: "/images/sajshringar-logo.jpeg",
    duration: "4:20",
    featured: false,
    icon: GraduationCap,
  },

  {
    title: "Aari Work Embroidery",
    category: "Aari Work",
    src: "/videos/aari.mp4",
    poster: "/images/sajshringar-logo.jpeg",
    duration: "3:10",
    featured: false,
    icon: Sparkles,
  },

  {
    title: "Jewellery Making Workshop",
    category: "Jewellery",
    src: "/videos/jewellery.mp4",
    poster: "/images/sajshringar-logo.jpeg",
    duration: "2:45",
    featured: false,
    icon: Gem,
  },
];

const categories = [
  "All",
  "Bridal",
  "Training",
  "Aari Work",
  "Jewellery",
];

export default function PortfolioPage() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedVideo, setSelectedVideo] =
    useState<null | {
      title: string;
      src: string;
    }>(null);

  const filteredVideos = useMemo(() => {

    return activeCategory === "All"
      ? videos
      : videos.filter(
          (video) =>
            video.category === activeCategory
        );
  }, [activeCategory]);

  const featuredVideo = videos.find(
    (video) => video.featured
  );

  return (
    <main className="min-h-screen bg-[#050816] pt-28 pb-24 text-white md:pt-32">

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-pink-400">
            Our Portfolio
          </p>

          <h1 className="heading-font text-4xl font-bold leading-tight md:text-7xl">

            Creative

            <span className="gold-text">
              {" "}
              Beauty Work
            </span>
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            Explore our luxury bridal makeovers,
            professional beauty training,
            Aari work embroidery,
            and handcrafted jewellery artistry videos.
          </p>
        </motion.div>

        {/* FEATURED VIDEO */}
        {featuredVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(255,79,163,0.08)] md:mb-20"
          >

            <div className="relative">

              <video
                poster={featuredVideo.poster}
                muted
                loop
                autoPlay
                playsInline
                className="h-[220px] w-full object-cover md:h-[420px]"
              >
                <source
                  src={featuredVideo.src}
                  type="video/mp4"
                />
              </video>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-10">

                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-pink-400 md:text-sm">
                  Featured Work
                </p>

                <h2 className="heading-font text-2xl font-bold leading-tight md:text-5xl">
                  {featuredVideo.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-lg">
                  Luxury bridal artistry crafted
                  with elegance, glamour,
                  and professional beauty styling.
                </p>

                <button
                  onClick={() =>
                    setSelectedVideo({
                      title: featuredVideo.title,
                      src: featuredVideo.src,
                    })
                  }
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-base font-semibold transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,79,163,0.35)] md:px-8 md:py-4 md:text-lg"
                >

                  <Play className="h-5 w-5" />

                  Watch Video
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* CATEGORY BUTTONS */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">

          {categories.map((category) => {

            const count =
              category === "All"
                ? videos.length
                : videos.filter(
                    (video) =>
                      video.category === category
                  ).length;

            return (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 md:text-base
                ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-[0_0_25px_rgba(255,79,163,0.35)]"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        {/* VIDEO GRID */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2"
        >

          <AnimatePresence>

            {filteredVideos.map((video, index) => {

              const Icon = video.icon;

              return (
                <motion.div
                  layout
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 30,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  key={video.title}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(255,79,163,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30"
                >

                  {/* VIDEO */}
                  <div className="relative overflow-hidden">

                    <video
                      poster={video.poster}
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) =>
                        e.currentTarget.play()
                      }
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[320px]"
                    >
                      <source
                        src={video.src}
                        type="video/mp4"
                      />
                    </video>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* PLAY BUTTON */}
                    <button
                      onClick={() =>
                        setSelectedVideo({
                          title: video.title,
                          src: video.src,
                        })
                      }
                      className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-500/20 backdrop-blur-xl transition hover:scale-110"
                    >

                      <Play className="h-7 w-7 text-pink-400" />
                    </button>

                    {/* DURATION */}
                    <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm backdrop-blur-xl">

                      <Clock3 className="h-4 w-4 text-pink-400" />

                      {video.duration}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">

                    <div className="mb-5 inline-flex rounded-2xl bg-pink-500/10 p-4 text-pink-400">

                      <Icon size={28} />
                    </div>

                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-pink-400">
                      {video.category}
                    </p>

                    <h2 className="text-2xl font-bold md:text-3xl">
                      {video.title}
                    </h2>

                    <p className="mt-4 leading-relaxed text-white/70">
                      Professional beauty artistry and
                      luxury creative work by Sajshringar
                      by Apeksha.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ENDING */}
        <div className="mt-24 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
            Sajshringar By Apeksha
          </p>

          <h3 className="heading-font mt-5 text-3xl font-bold leading-tight md:text-5xl">

            Crafting Beauty With

            <span className="gold-text">
              {" "}
              Elegance
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/70 md:text-lg">
            Premium bridal artistry,
            beauty transformation,
            and luxury training experiences.
          </p>
        </div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>

        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black"
            >

              {/* CLOSE */}
              <button
                onClick={() =>
                  setSelectedVideo(null)
                }
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-xl"
              >

                <X className="h-5 w-5 text-white" />
              </button>

              <video
                controls
                autoPlay
                className="max-h-[85vh] w-full"
              >
                <source
                  src={selectedVideo.src}
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}