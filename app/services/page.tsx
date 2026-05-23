import {
  Brush,
  Sparkles,
  GraduationCap,
  Gem,
} from "lucide-react";

export const metadata = {
  title: "Services | Sajshringar by Apeksha",
  description:
    "Professional bridal makeup, Aari work classes, jewellery making, and beauty academy services.",
};

const services = [
  {
    title: "Bridal Makeup",
    description:
      "Luxury bridal makeup services including HD makeup, Airbrush makeup, engagement looks, reception makeup, and complete bridal transformation.",
    icon: Brush,
  },
  {
    title: "Aari Work Classes",
    description:
      "Professional Aari embroidery classes including stone work, thread work, blouse designs, mirror work, and fashion embroidery training.",
    icon: Sparkles,
  },
  {
    title: "Jewellery Making",
    description:
      "Creative jewellery and traditional nath making workshops with elegant handcrafted design techniques.",
    icon: Gem,
  },
  {
    title: "Beauty Training Academy",
    description:
      "Professional beauty skill development academy for aspiring makeup artists and beauty professionals.",
    icon: GraduationCap,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-32 pb-24 text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-24 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Our Professional Services
          </p>

          <h1 className="heading-font text-5xl md:text-7xl font-bold leading-tight">
            Beauty &
            <span className="gold-text"> Creativity</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
            Explore our premium bridal beauty services,
            professional Aari work training, jewellery making,
            and beauty academy programs designed with elegance,
            creativity, and perfection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-10 transition duration-300 hover:-translate-y-2 hover:border-pink-400/40"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-pink-500/10 p-5 text-pink-400">
                  <Icon size={40} />
                </div>

                <h2 className="mb-6 text-4xl font-bold">
                  {service.title}
                </h2>

                <p className="text-lg leading-relaxed text-white/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-28 rounded-[2rem] border border-white/10 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 p-12 text-center">

          <h2 className="heading-font text-4xl md:text-5xl font-bold">
            Ready To Transform
            <span className="gold-text"> Your Look?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
            Book your appointment today and experience
            professional beauty artistry crafted with elegance.
          </p>

          <a
            href="https://wa.me/917498645883"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#ff4fa3] px-8 py-4 text-lg font-medium transition hover:scale-105"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </main>
  );
}