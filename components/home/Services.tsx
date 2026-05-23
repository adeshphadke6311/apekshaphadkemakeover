import {
  Brush,
  Sparkles,
  GraduationCap,
  Gem,
} from "lucide-react";

const services = [
  {
    title: "Makeup Artistry",
    description:
      "Professional bridal, HD, airbrush and party makeup services.",
    icon: Brush,
  },
  {
    title: "Aari Work Designs",
    description:
      "Beautiful handcrafted blouse and embroidery design training.",
    icon: Sparkles,
  },
  {
    title: "Jewellery Making",
    description:
      "Traditional nath and jewellery design making classes.",
    icon: Gem,
  },
  {
    title: "Training Academy",
    description:
      "Professional beauty and fashion skill development academy.",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#070b1a]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-pink-400 uppercase tracking-[0.3em] text-sm mb-4">
            Our Services
          </p>

          <h2 className="heading-font text-4xl md:text-5xl font-bold">
            Beauty & Skill
            <span className="gold-text"> Expertise</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-pink-400/40"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-pink-500/10 p-4 text-pink-400">
                  <Icon size={32} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}