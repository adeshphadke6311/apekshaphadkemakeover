"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppBooking = () => {
    const text = `
Hello Sajshringar,

I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}

Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/919021962467?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050816] pt-32 pb-24 text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Contact Us
          </p>

          <h1 className="heading-font text-5xl md:text-7xl font-bold">
            Book Your
            <span className="gold-text"> Appointment</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
            Connect with Sajshringar by Apeksha for bridal makeup,
            Aari work classes, jewellery making, and beauty training.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

              <div className="flex items-start gap-4">
                <Phone className="text-pink-400" size={28} />

                <div>
                  <h2 className="text-2xl font-semibold">
                    Call Us
                  </h2>

                  <p className="mt-2 text-white/70">
                    +91 9021962467n
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

              <div className="flex items-start gap-4">
                <MessageCircle className="text-pink-400" size={28} />

                <div>
                  <h2 className="text-2xl font-semibold">
                    WhatsApp
                  </h2>

                  <p className="mt-2 text-white/70">
                    Chat directly for quick booking and inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

              <div className="flex items-start gap-4">
                <MapPin className="text-pink-400" size={28} />

                <div>
                  <h2 className="text-2xl font-semibold">
                    Location
                  </h2>

                  <p className="mt-2 text-white/70">
                    A/P Hatwalan, Tal Daund, Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <h2 className="mb-8 text-4xl font-bold">
              Appointment Form
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-pink-400"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-pink-400"
              />

              <input
                type="text"
                name="service"
                placeholder="Required Service"
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-pink-400"
              />

              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-pink-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-pink-400"
              />

              <button
                onClick={handleWhatsAppBooking}
                className="w-full rounded-full bg-[#ff4fa3] px-8 py-4 text-lg font-medium transition hover:scale-[1.02]"
              >
                Book On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}