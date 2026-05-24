import Image from "next/image";

const galleryImages = [
  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Bridal Transformation",
    description: "Elegant professional makeup artistry",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Luxury Bridal Look",
    description: "Premium beauty styling experience",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Aari Work Design",
    description: "Creative embroidery craftsmanship",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Jewellery Creation",
    description: "Traditional handcrafted elegance",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Beauty Academy",
    description: "Professional beauty training sessions",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Fashion Makeup",
    description: "Modern luxury beauty transformation",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#070b1a] py-24 md:py-32"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-16 text-center md:mb-20">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Our Gallery
          </p>

          <h2 className="heading-font text-4xl font-bold leading-tight md:text-6xl">

            Beauty In

            <span className="gold-text">
              {" "}
              Every Detail
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Explore bridal transformations,
            luxury beauty artistry,
            handcrafted jewellery,
            and professional beauty work
            crafted with elegance and perfection.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_35px_rgba(255,79,163,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_0_55px_rgba(255,79,163,0.16)]"
            >

              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  priority
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110 md:h-[420px]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

                {/* TOP BADGE */}
                <div className="absolute left-5 top-5 rounded-full border border-pink-400/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-pink-300 backdrop-blur-xl">
                  Premium Work
                </div>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6">

                <div className="translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* CARD NUMBER */}
              <div className="absolute bottom-5 right-5 text-5xl font-bold text-white/[0.04]">

                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="mx-auto mt-24 h-px w-40 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      </div>
    </section>
  );
}