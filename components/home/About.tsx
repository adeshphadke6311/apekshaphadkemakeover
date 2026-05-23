import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid gap-16 md:grid-cols-2 items-center">

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-pink-500/10 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/sajshringar-logo.jpeg"
              alt="About Sajshringar"
              width={500}
              height={600}
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            About Sajshringar
          </p>

          <h2 className="heading-font mb-8 text-4xl md:text-5xl font-bold leading-tight">
            Transforming Beauty
            <span className="gold-text"> With Elegance</span>
          </h2>

          <p className="mb-6 text-white/70 leading-relaxed">
            Sajshringar by Apeksha is dedicated to enhancing beauty
            through professional bridal makeup artistry, Aari work,
            jewellery making, and beauty training.
          </p>

          <p className="mb-8 text-white/70 leading-relaxed">
            With a passion for creativity and elegance, we help every
            client feel confident, beautiful, and unforgettable on
            their special occasions.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold gold-text">
                100+
              </h3>

              <p className="mt-2 text-white/70">
                Happy Clients
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold gold-text">
                4+
              </h3>

              <p className="mt-2 text-white/70">
                Professional Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}