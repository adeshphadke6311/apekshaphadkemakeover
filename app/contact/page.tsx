"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
  Phone,
  MapPin,
  MessageCircle,
  CalendarDays,
  User,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleWhatsAppBooking = () => {

    const newErrors = {
      name: "",
      phone: "",
      service: "",
    };

    // VALIDATION
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[0-9]{10}$/.test(formData.phone)
    ) {
      newErrors.phone =
        "Enter valid 10-digit phone number";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Service is required";
    }

    setErrors(newErrors);

    if (
      Object.values(newErrors).some(
        (error) => error !== ""
      )
    ) {
      toast.error(
        "Please fill all required details"
      );

      return;
    }

    toast.success(
      "Redirecting to WhatsApp ✨"
    );

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

    const whatsappUrl = `https://wa.me/917498645883?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050816] pt-28 pb-24 text-white md:pt-32">

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-16 text-center md:mb-20">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Contact Us
          </p>

          <h1 className="heading-font text-[2.5rem] font-bold leading-tight md:text-7xl">
            Book Your
            <span className="gold-text">
              {" "}
              Appointment
            </span>
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 md:w-28" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Connect with Sajshringar by Apeksha for bridal makeup,
            Aari work classes, jewellery making, and beauty training.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-5 md:space-y-8">

            {/* CALL */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/[0.03] hover:shadow-[0_0_40px_rgba(255,79,163,0.08)] md:p-8">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10">
                  <Phone
                    className="text-pink-400"
                    size={28}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    Call Us
                  </h2>

                  <p className="mt-2 text-white/70">
                    +91 9021962467
                  </p>
                </div>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/[0.03] hover:shadow-[0_0_40px_rgba(255,79,163,0.08)] md:p-8">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10">
                  <MessageCircle
                    className="text-pink-400"
                    size={28}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    WhatsApp
                  </h2>

                  <p className="mt-2 leading-7 text-white/70">
                    Chat directly for quick booking,
                    beauty inquiries, and academy admission
                    details.
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/[0.03] hover:shadow-[0_0_40px_rgba(255,79,163,0.08)] md:p-8">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10">
                  <MapPin
                    className="text-pink-400"
                    size={28}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    Location
                  </h2>

                  <p className="mt-2 leading-7 text-white/70">
                    A/P Hatwalan, Tal Daund,
                    Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* EXTRA INFO */}
            <div className="rounded-[2rem] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-transparent p-5 md:p-8">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10">
                  <Sparkles
                    className="text-pink-400"
                    size={28}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    Luxury Beauty Experience
                  </h2>

                  <p className="mt-2 leading-7 text-white/70">
                    Bridal makeup, beauty academy,
                    jewellery making, and premium
                    beauty services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(255,79,163,0.08)] backdrop-blur-xl md:p-10">

            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Appointment Form
            </h2>

            <div className="space-y-6">

              {/* NAME */}
              <div className="relative">

                <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#1b1f35] py-4 pl-14 pr-5 text-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 md:text-base"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div className="relative">

                <Phone className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#1b1f35] py-4 pl-14 pr-5 text-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 md:text-base"
                />

                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* SERVICE */}
              <div className="relative">

                <Sparkles className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="text"
                  name="service"
                  placeholder="Required Service"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#1b1f35] py-4 pl-14 pr-5 text-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 md:text-base"
                />

                {errors.service && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* DATE */}
              <div className="relative">

                <CalendarDays className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="date"
                  name="date"
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#1b1f35] py-4 pl-14 pr-5 text-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 md:text-base"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-[#1b1f35] px-5 py-4 text-sm leading-7 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 md:text-base"
              />

              {/* BUTTON */}
              <button
                onClick={handleWhatsAppBooking}
                className="w-full rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 text-lg font-semibold transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,79,163,0.35)]"
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