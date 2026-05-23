import Image from "next/image";

export const metadata = {
  title: "Gallery | Sajshringar by Apeksha",
  description:
    "Explore bridal makeup artistry, Aari work, jewellery designs, and beauty transformations by Sajshringar.",
};

const galleryImages = [
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-32 pb-24 text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Our Portfolio
          </p>

          <h1 className="heading-font text-5xl md:text-6xl font-bold leading-tight">
            Beauty In
            <span className="gold-text"> Every Frame</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
            Explore our bridal makeovers, Aari work designs,
            jewellery creations, and beauty artistry crafted
            with elegance and perfection.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={image}
                alt={`Sajshringar Gallery ${index + 1}`}
                width={800}
                height={1000}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 translate-y-10 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <h2 className="text-2xl font-semibold">
                  Bridal Elegance
                </h2>

                <p className="mt-2 text-sm text-white/70">
                  Luxury beauty transformation
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}