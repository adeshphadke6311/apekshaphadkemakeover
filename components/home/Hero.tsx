
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HERO GRID */}
        <div
          className="
            grid items-center

            gap-10
            pt-28
            pb-14

            md:grid-cols-[1.05fr_0.95fr]
            md:gap-8
            md:pt-24
            md:pb-12

            tablet:grid-cols-[1.08fr_0.92fr]
            tablet:gap-8
            tablet:pt-20
            tablet:pb-10

            laptop:grid-cols-2
            laptop:gap-16
            laptop:pt-32
            laptop:pb-20
          "
        >

          {/* LEFT CONTENT */}
          <div className="max-w-[680px]">

            {/* TAG */}
            <p
              className="
                mb-5 uppercase tracking-[0.35em]
                text-pink-400

                text-[10px]
                sm:text-xs
                tablet:text-sm
              "
            >
              Bridal Makeup Artist & Training Academy
            </p>

            {/* HEADING */}
            <h1
              className="
                heading-font font-bold leading-[1.02]

                text-[clamp(2.8rem,5vw,5.8rem)]

                max-w-[14ch]
              "
            >
              Elevate Your Beauty With{" "}

              <span className="gold-text">
                Sajshringar
              </span>
            </h1>

            {/* LINE */}
            <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

            {/* DESCRIPTION */}
            <p
              className="
                mt-8 max-w-[620px]
                leading-relaxed text-white/75

                text-sm
                sm:text-base
                tablet:text-[17px]
              "
            >
              Professional bridal makeup, Aari work classes,
              Nath & jewellery making, and luxury beauty
              training academy crafted with elegance and
              perfection.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-10 flex flex-wrap items-center gap-4
              "
            >
              <Link
                href="/payment"
                className="
                  rounded-full bg-gradient-to-r
                  from-pink-500 to-pink-600

                  px-7 py-4
                  text-sm font-semibold text-white

                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(255,79,163,0.35)]
                "
              >
                Book Appointment
              </Link>

              <Link
                href="/gallery"
                className="
                  rounded-full border border-white/10
                  bg-white/5 backdrop-blur-xl

                  px-7 py-4
                  text-sm font-semibold text-white

                  transition-all duration-300
                  hover:border-pink-400/40
                  hover:bg-pink-500/10
                "
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex flex-col items-center justify-center

              md:items-end
            "
          >

            {/* IMAGE CARD */}
            <div className="relative">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-[2rem] bg-pink-500/20 blur-3xl" />

              {/* CARD */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[2rem]

                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl

                  p-4
                "
              >

                {/* TOP BADGE */}
                <div
                  className="
                    absolute left-4 top-4 z-20

                    rounded-full
                    border border-pink-500/20
                    bg-black/40

                    px-5 py-2
                    text-[10px]
                    uppercase tracking-[0.25em]
                    text-pink-200

                    backdrop-blur-xl
                  "
                >

                </div>

                <Image
                  src="/images/sajshringar-logo.jpeg"
                  alt="Sajshringar by Apeksha"
                  width={520}
                  height={520}
                  priority
                  className="
                    h-auto w-full object-contain

                    max-w-[200px]

                    sm:max-w-[240px]

                    md:max-w-[260px]

                    tablet:max-w-[300px]

                    laptop:max-w-[420px]
                  "
                />

                {/* BOTTOM BADGE */}
                <div
                  className="
                    absolute bottom-4 left-1/2
                    -translate-x-1/2

                    rounded-full
                    border border-white/10
                    bg-black/50

                    px-5 py-2
                    text-xs text-white/80

                    backdrop-blur-xl
                  "
                >

                </div>
              </div>
            </div>

            {/* STATS */}
            <div
              className="
                mt-4 tablet:mt-5 laptop:mt-6

                flex gap-4

                md:w-full
                md:max-w-[340px]
              "
            >

              {/* CARD 1 */}
              <div
                className="
                  flex-1 rounded-3xl
                  border border-white/10
                  bg-white/[0.03]

                  p-5 backdrop-blur-xl
                "
              >
                <h3 className="text-3xl font-bold gold-text">
                  100+
                </h3>

                <p className="mt-2 text-sm text-white/65">
                  Happy Clients
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="
                  flex-1 rounded-3xl
                  border border-white/10
                  bg-white/[0.03]

                  p-5 backdrop-blur-xl
                "
              >
                <h3 className="text-3xl font-bold gold-text">
                  4+
                </h3>

                <p className="mt-2 text-sm text-white/65">
                  Premium Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

