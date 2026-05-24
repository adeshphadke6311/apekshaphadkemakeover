import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Sajshringar by Apeksha",
  description:
    "Explore bridal makeup artistry, Aari work, jewellery designs, and beauty transformations by Sajshringar.",
};

const galleryImages = [
  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Bridal Elegance",
    category: "Bridal Makeup",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Luxury Reception Look",
    category: "HD Makeup",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Traditional Beauty",
    category: "Bridal Styling",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Aari Work Design",
    category: "Aari Classes",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Jewellery Creation",
    category: "Jewellery Making",
  },

  {
    image: "/images/sajshringar-logo.jpeg",
    title: "Beauty Academy",
    category: "Training",
  },
];

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] pt-28 pb-24 text-white md:pt-32">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-16 text-center md:mb-20">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Our Portfolio
          </p>

          <h1 className="heading-font text-4xl font-bold leading-tight md:text-6xl">

            Beauty In

            <span className="gold-text">
              {" "}
              Every Frame
            </span>
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Explore our bridal makeovers,
            Aari work designs,
            jewellery creations,
            and beauty artistry crafted
            with elegance and perfection.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(255,79,163,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_0_60px_rgba(255,79,163,0.16)]"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={1000}
                  priority={index === 0}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[420px]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                {/* TOP BADGE */}
                <div className="absolute left-5 top-5 rounded-full border border-pink-400/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-pink-300 backdrop-blur-xl">
                  Premium Work
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <div className="translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                    <span className="inline-block rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-pink-300 backdrop-blur-xl">
                      {item.category}
                    </span>

                    <h2 className="mt-4 text-2xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      Luxury beauty transformation crafted
                      with elegance and perfection.
                    </p>
                  </div>
                </div>

                {/* CARD NUMBER */}
                <div className="absolute bottom-5 right-5 text-5xl font-bold text-white/[0.05]">

                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-24 h-px w-40 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

        {/* CTA SECTION */}
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-transparent to-yellow-500/10 p-8 text-center shadow-[0_0_60px_rgba(255,79,163,0.08)] backdrop-blur-xl md:p-14">

          {/* LABEL */}
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Luxury Beauty Experience
          </p>

          {/* TITLE */}
          <h2 className="heading-font text-3xl font-bold leading-tight md:text-6xl">

            Ready For Your

            <span className="gold-text">
              {" "}
              Transformation?
            </span>
          </h2>

          {/* LINE */}
          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          {/* TEXT */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Book your appointment today and
            experience premium bridal beauty artistry
            with Sajshringar.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* BOOK APPOINTMENT */}
            <Link
              href="/payment"
              className="w-full rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,79,163,0.35)] sm:w-auto"
            >
              Book Appointment
            </Link>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919021962467"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-lg font-medium transition-all duration-300 hover:border-pink-400/40 hover:bg-white/10 sm:w-auto"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}