import {
  Brush,
  Sparkles,
  GraduationCap,
  Gem,
  ArrowRight,
  Check,
} from "lucide-react";

import Link from "next/link";

const services = [
  {
    title: "Makeup Artistry",
    description:
      "Professional bridal, HD, airbrush and party makeup services crafted with luxury elegance and perfection.",
    icon: Brush,
    tags: ["HD Makeup", "Airbrush", "Reception"],
  },

  {
    title: "Aari Work Designs",
    description:
      "Beautiful handcrafted blouse embroidery, stone work, mirror work and fashion embroidery training.",
    icon: Sparkles,
    tags: ["Stone Work", "Mirror Work", "Embroidery"],
  },

  {
    title: "Jewellery Making",
    description:
      "Traditional nath and jewellery design making classes with premium handcrafted techniques.",
    icon: Gem,
    tags: ["Traditional", "Handcrafted", "Creative"],
  },

  {
    title: "Training Academy",
    description:
      "Professional beauty and fashion skill development academy for aspiring artists.",
    icon: GraduationCap,
    tags: ["Certification", "Professional", "Practical"],
  },
];

const process = [
  "Consultation & Requirement Discussion",
  "Personalized Beauty Planning",
  "Luxury Service Experience",
  "Final Elegant Transformation",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#070b1a] py-24 md:py-32"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-16 text-center md:mb-20">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Our Services
          </p>

          <h2 className="heading-font text-4xl font-bold leading-tight md:text-6xl">

            Beauty & Skill

            <span className="gold-text">
              {" "}
              Expertise
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Explore luxury bridal artistry,
            embroidery craftsmanship,
            jewellery design,
            and professional beauty training.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_45px_rgba(255,79,163,0.18)]"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-pink-500/5 to-yellow-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div className="relative z-10 mb-6 inline-flex rounded-2xl bg-pink-500/10 p-4 text-pink-400 transition duration-300 group-hover:scale-110 group-hover:bg-pink-500/20">

                  <Icon size={32} />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 leading-relaxed text-white/70">
                  {service.description}
                </p>

                {/* TAGS */}
                <div className="relative z-10 mt-6 flex flex-wrap gap-3">

                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                <Link
                  href="/services"
                  className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink-400 transition hover:gap-4 hover:text-pink-300"
                >
                  Explore More
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-24 h-px w-40 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

        {/* PROCESS SECTION */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
              Our Process
            </p>

            <h3 className="heading-font text-4xl font-bold leading-tight md:text-5xl">

              Luxury Experience

              <span className="gold-text">
                {" "}
                Step By Step
              </span>
            </h3>

            <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400" />

            <p className="mt-8 max-w-xl leading-relaxed text-white/70 md:text-lg">
              Every beauty transformation is crafted
              with elegance, consultation, luxury artistry,
              and perfection to create unforgettable experiences.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-5 rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-pink-500/30"
              >

                {/* NUMBER */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-lg font-bold text-white">

                  {index + 1}
                </div>

                <div>

                  <h4 className="text-xl font-semibold">
                    {step}
                  </h4>

                  <div className="mt-3 flex items-center gap-2 text-sm text-white/60">

                    <Check className="h-4 w-4 text-pink-400" />

                    Premium Professional Experience
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}