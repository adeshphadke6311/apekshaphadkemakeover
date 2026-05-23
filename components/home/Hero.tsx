
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid gap-10 pt-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Bridal Makeup Artist & Training Academy
          </p>

          <h1 className="heading-font mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Elevate Your Beauty With
            <span className="gold-text"> Sajshringar</span>
          </h1>

          <p className="mb-8 max-w-xl text-white/70">
            Professional bridal makeup, Aari work classes,
            Nath & jewellery making, and beauty training academy.
          </p>

          <div className="flex gap-4">
            <button className="rounded-full bg-[#ff4fa3] px-6 py-3 font-medium transition hover:scale-105">
              Book Appointment
            </button>

            <button className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10">
              View Gallery
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>

          <Image
            src="/images/sajshringar-logo.jpeg"
            alt="Sajshringar by Apeksha"
            width={500}
            height={500}
            className="relative z-10 w-full max-w-md object-contain"
/>
        </div>
      </div>
    </section>
  );
}