import { Star } from "lucide-react";

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
      className="py-24 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Testimonials
          </p>

          <h2 className="heading-font text-4xl md:text-5xl font-bold">
            What Our
            <span className="gold-text"> Clients Say</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-pink-400/40"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-8 leading-relaxed text-white/70">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div>
                <h3 className="text-xl font-semibold">
                  {testimonial.name}
                </h3>

                <p className="mt-2 text-sm text-pink-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}