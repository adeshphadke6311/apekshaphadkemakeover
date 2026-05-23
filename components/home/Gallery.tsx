import Image from "next/image";

const galleryImages = [
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
  "/images/sajshringar-logo.jpeg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-[#070b1a]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Our Gallery
          </p>

          <h2 className="heading-font text-4xl md:text-5xl font-bold">
            Beauty In
            <span className="gold-text"> Every Detail</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={800}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 translate-y-10 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold">
                  Bridal Transformation
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  Elegant professional makeup artistry
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}