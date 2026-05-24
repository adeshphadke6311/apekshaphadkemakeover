import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bridal Makeup Client",
    review:
      "Absolutely loved the bridal makeover. The look was elegant, flawless, and exactly what I dreamed of for my wedding.",
  },

  {
    name: "Sneha Patil",
    role: "Aari Work Student",
    review:
      "The teaching style is amazing and easy to understand. I learned beautiful Aari work designs professionally.",
  },

  {
    name: "Rutuja More",
    role: "Beauty Academy Student",
    review:
      "Professional guidance, friendly environment, and excellent practical training. Highly recommended academy.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050816] py-24 md:py-32"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-16 text-center md:mb-20">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Testimonials
          </p>

          <h2 className="heading-font text-4xl font-bold leading-tight md:text-6xl">

            What Our

            <span className="gold-text">
              {" "}
              Clients Say
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Hear from our happy bridal clients,
            students, and beauty enthusiasts
            who experienced Sajshringar’s
            luxury artistry and professional training.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_45px_rgba(255,79,163,0.16)]"
            >

              {/* TOP GLOW */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* QUOTE ICON */}
              <div className="relative z-10 mb-6 inline-flex rounded-2xl bg-pink-500/10 p-4 text-pink-400 transition duration-300 group-hover:scale-110">

                <Quote size={28} />
              </div>

              {/* STARS */}
              <div className="relative z-10 mb-6 flex gap-1 text-yellow-400">

                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="relative z-10 mb-8 text-base leading-relaxed text-white/70 md:text-lg">
                “{testimonial.review}”
              </p>

              {/* BOTTOM */}
              <div className="relative z-10 border-t border-white/10 pt-6">

                {/* USER */}
                <div className="flex items-center gap-4">

                  {/* AVATAR */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-lg font-bold text-white shadow-[0_0_20px_rgba(255,79,163,0.35)]">

                    {testimonial.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-pink-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* BADGE */}
                <div className="mt-5 inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-pink-300">

                  Verified Client
                </div>
              </div>

              {/* CARD NUMBER */}
              <div className="absolute bottom-5 right-6 text-5xl font-bold text-white/[0.03]">

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