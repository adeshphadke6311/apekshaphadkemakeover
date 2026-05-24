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
      className="relative overflow-hidden bg-[#070b1a] py-16 md:py-16"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-14 text-center md:mb-20">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-pink-400 md:text-sm">
            Our Services
          </p>

          <h2 className="heading-font text-3xl font-bold leading-tight md:text-6xl">

            Beauty & Skill

            <span className="gold-text">
              {" "}
              Expertise
            </span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 md:mt-6 md:w-24" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:mt-8 md:text-lg">
            Explore luxury bridal artistry,
            embroidery craftsmanship,
            jewellery design,
            and professional beauty training.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-5 md:gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_45px_rgba(255,79,163,0.18)] md:rounded-[2rem] md:p-8"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-pink-500/5 to-yellow-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div className="relative z-10 mb-4 inline-flex rounded-xl bg-pink-500/10 p-3 text-pink-400 transition duration-300 group-hover:scale-110 group-hover:bg-pink-500/20 md:mb-6 md:rounded-2xl md:p-4">

                  <Icon size={26} className="md:h-8 md:w-8" />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mb-3 text-xl font-semibold md:mb-4 md:text-2xl">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-sm leading-relaxed text-white/70 md:text-base">
                  {service.description}
                </p>

                {/* TAGS */}
                <div className="relative z-10 mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">

                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-white/70 md:px-4 md:py-2 md:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                <Link
                  href="/services"
                  className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-medium text-pink-400 transition hover:gap-4 hover:text-pink-300 md:mt-8"
                >
                  Explore More
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* DIVIDER */}
        <div className="mx-auto my-14 h-px w-32 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent md:my-24 md:w-40" />

        {/* PROCESS SECTION */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <div>

            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-pink-400 md:text-sm">
              Our Process
            </p>

            <h3 className="heading-font text-3xl font-bold leading-tight md:text-5xl">

              Luxury Experience

              <span className="gold-text">
                {" "}
                Step By Step
              </span>
            </h3>

            <div className="mt-5 h-[2px] w-20 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 md:mt-6 md:w-24" />

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:mt-8 md:text-lg">
              Every beauty transformation is crafted
              with elegance, consultation, luxury artistry,
              and perfection to create unforgettable experiences.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 md:space-y-6">

            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:border-pink-500/30 md:gap-5 md:rounded-[1.8rem] md:p-6"
              >

                {/* NUMBER */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-sm font-bold text-white md:h-12 md:w-12 md:text-lg">

                  {index + 1}
                </div>

                <div>

                  <h4 className="text-base font-semibold md:text-xl">
                    {step}
                  </h4>

                  <div className="mt-2 flex items-center gap-2 text-xs text-white/60 md:mt-3 md:text-sm">

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