"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
  Crown,
  GraduationCap,
  Sparkles,
  Gem,
  Scissors,
  ArrowRight,
  User,
  CalendarDays,
  CreditCard,
  ShieldCheck,
  MessageCircle,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function PaymentPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    category: "",
    service: "",
    batch: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    service: "",
    batch: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  // BOOKED SLOTS
  const bookedSlots = ["10:00 AM"];

  const validateStep = () => {
    const newErrors = {
      category: "",
      service: "",
      batch: "",
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
    };

    // STEP 1
    if (step === 1) {
      if (!formData.category) {
        newErrors.category = "Please select a category";
      }

      if (!formData.service) {
        newErrors.service = "Please select a service";
      }

      if (
        formData.category === "Training" &&
        !formData.batch
      ) {
        newErrors.batch = "Please select a batch";
      }
    }

    // STEP 2
    if (step === 2) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^[0-9]{10}$/.test(formData.phone)) {
        newErrors.phone =
          "Enter valid 10-digit phone number";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }
    }

    // STEP 3
    if (step === 3) {
      if (!formData.date) {
        newErrors.date = "Please select date";
      }

      if (!formData.time) {
        newErrors.time = "Please select time slot";
      }
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(
      (error) => error !== ""
    );
  };

  const nextStep = () => {
    if (validateStep()) {

      toast.success("Step completed successfully ✨");

      setStep(step + 1);

    } else {

      toast.error(
        "Please complete all required fields"
      );
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const serviceCards = [
    {
      title: "Bridal Makeup",
      desc: "HD & Airbrush bridal makeup package",
      icon: Gem,
    },
    {
      title: "Party Makeup",
      desc: "Glam makeup for events & occasions",
      icon: Sparkles,
    },
    {
      title: "Hair Styling",
      desc: "Premium hairstyle & makeover styling",
      icon: Scissors,
    },
  ];

  const trainingCards = [
    "Bridal Makeup Training",
    "Self Makeup Course",
    "Aari Work Classes",
    "Jewellery Making",
    "Nath Making",
  ];

  return (
    <main className="min-h-screen bg-[#050816] pt-24 pb-24 text-white md:pt-32">

      <div className="mx-auto max-w-5xl px-4">

        {/* HEADING */}
        <div className="mb-14 text-center md:mb-16">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-pink-400 sm:text-sm">
            ✨ Luxury Booking ✨
          </p>

          <h1 className="heading-font text-4xl font-bold leading-tight md:text-7xl">
            Advance
            <span className="bg-gradient-to-r from-[#ff4fa3] to-[#ffd166] bg-clip-text text-transparent">
              {" "}
              Payment
            </span>
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 sm:w-28" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Secure your appointment or academy admission
            with our premium beauty and training services.
          </p>
        </div>

        {/* STEPPER */}
        <div className="mb-12 flex items-center justify-center gap-2 sm:gap-3 md:mb-14 md:gap-6">

          {[
            {
              number: 1,
              label: "Service",
              icon: Crown,
            },
            {
              number: 2,
              label: "Details",
              icon: User,
            },
            {
              number: 3,
              label: "Schedule",
              icon: CalendarDays,
            },
            {
              number: 4,
              label: "Payment",
              icon: CreditCard,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="flex flex-col items-center">

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 sm:h-14 sm:w-14
                    ${
                      step >= item.number
                        ? "border-pink-500 bg-pink-500/20 shadow-[0_0_25px_rgba(255,79,163,0.35)]"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <p
                    className={`mt-2 text-[11px] sm:mt-3 sm:text-sm
                    ${
                      step >= item.number
                        ? "text-pink-400"
                        : "text-white/40"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>

                {item.number !== 4 && (
                  <div className="hidden h-[2px] w-10 bg-gradient-to-r from-pink-500/40 to-transparent sm:w-16 md:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* MAIN CARD */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(255,79,163,0.08)] backdrop-blur-xl sm:p-8 md:rounded-[2.5rem] md:p-14">

          {/* STEP 1 */}
          {step === 1 && (
            <div>

              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Select Service
              </h2>

              <p className="mb-10 text-center text-sm text-white/60 md:text-base">
                Choose a category and service you want to book.
              </p>

              {/* CATEGORY */}
              <div className="mb-8 grid gap-5 md:grid-cols-2">

                <button
                  onClick={() => {
                    setFormData({
                      ...formData,
                      category: "Beauty Services",
                      service: "",
                    });

                    setErrors({
                      ...errors,
                      category: "",
                    });
                  }}
                  className={`rounded-3xl border p-6 text-left transition-all duration-300 md:p-7
                  ${
                    formData.category === "Beauty Services"
                      ? "border-pink-500 bg-pink-500/10 shadow-[0_0_30px_rgba(255,79,163,0.2)]"
                      : "border-white/10 bg-black/20"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/20 md:h-14 md:w-14">
                      <Crown className="h-6 w-6 text-pink-400 md:h-7 md:w-7" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold md:text-2xl">
                        Beauty Services
                      </h3>

                      <p className="mt-1 text-sm text-white/60 md:text-base">
                        Makeup & Styling
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setFormData({
                      ...formData,
                      category: "Training",
                      service: "",
                    });

                    setErrors({
                      ...errors,
                      category: "",
                    });
                  }}
                  className={`rounded-3xl border p-6 text-left transition-all duration-300 md:p-7
                  ${
                    formData.category === "Training"
                      ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_30px_rgba(250,204,21,0.15)]"
                      : "border-white/10 bg-black/20"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 md:h-14 md:w-14">
                      <GraduationCap className="h-6 w-6 text-yellow-300 md:h-7 md:w-7" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold md:text-2xl">
                        Training / Academy
                      </h3>

                      <p className="mt-1 text-sm text-white/60 md:text-base">
                        Courses & Classes
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* BEAUTY SERVICES */}
              {formData.category === "Beauty Services" && (
                <div className="grid gap-5">

                  {serviceCards.map((service) => {
                    const Icon = service.icon;

                    return (
                      <button
                        key={service.title}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            service: service.title,
                          });

                          setErrors({
                            ...errors,
                            service: "",
                          });
                        }}
                        className={`relative rounded-3xl border p-5 text-left transition-all duration-300 md:p-6
                        ${
                          formData.service === service.title
                            ? "border-pink-500 bg-pink-500/10"
                            : "border-white/10 bg-black/20"
                        }`}
                      >
                        {formData.service === service.title && (
                          <CheckCircle2 className="absolute right-5 top-5 h-6 w-6 text-pink-400" />
                        )}

                        <div className="flex items-center justify-between gap-4">

                          <div>
                            <h3 className="text-xl font-semibold md:text-2xl">
                              {service.title}
                            </h3>

                            <p className="mt-2 text-sm text-white/60 md:text-base">
                              {service.desc}
                            </p>
                          </div>

                          <Icon className="h-8 w-8 text-yellow-300 md:h-10 md:w-10" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* TRAINING */}
              {formData.category === "Training" && (
                <div className="grid gap-5">

                  {trainingCards.map((service) => (
                    <button
                      key={service}
                      onClick={() => {
                        setFormData({
                          ...formData,
                          service,
                        });

                        setErrors({
                          ...errors,
                          service: "",
                        });
                      }}
                      className={`relative min-h-[110px] rounded-3xl border px-5 py-5 text-left transition-all duration-300 md:min-h-[120px] md:px-6
                      ${
                        formData.service === service
                          ? "border-yellow-400 bg-yellow-400/10"
                          : "border-white/10 bg-black/20"
                      }`}
                    >
                      {formData.service === service && (
                        <CheckCircle2 className="absolute right-5 top-5 h-6 w-6 text-yellow-300" />
                      )}

                      <h3 className="text-xl font-semibold md:text-2xl">
                        {service}
                      </h3>

                      <p className="mt-2 text-sm text-white/60 md:text-base">
                        Certificate Included
                      </p>
                    </button>
                  ))}

                  {/* BATCH */}
                  <div className="relative">

                    <select
                      className="w-full appearance-none rounded-2xl bg-[#1b1f35] p-4 text-sm text-white outline-none md:text-base"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          batch: e.target.value,
                        });

                        setErrors({
                          ...errors,
                          batch: "",
                        });
                      }}
                    >
                      <option value="">
                        Select Batch
                      </option>

                      <option value="Morning Batch">
                        Morning Batch
                      </option>

                      <option value="Afternoon Batch">
                        Afternoon Batch
                      </option>

                      <option value="Weekend Batch">
                        Weekend Batch
                      </option>
                    </select>

                    <Clock3 className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                  </div>
                </div>
              )}

              {errors.service && (
                <p className="mt-4 text-sm text-red-400">
                  {errors.service}
                </p>
              )}

              {errors.batch && (
                <p className="mt-4 text-sm text-red-400">
                  {errors.batch}
                </p>
              )}

              <button
                onClick={nextStep}
                className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 py-4 text-base font-semibold transition hover:scale-[1.015] hover:shadow-[0_0_30px_rgba(255,79,163,0.35)] md:py-5 md:text-lg"
              >
                Continue
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>

              <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                Your Details
              </h2>

              <div className="grid gap-6">

                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl bg-[#1b1f35] p-4 text-sm outline-none md:text-base"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        name: "",
                      });
                    }}
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-2xl bg-[#1b1f35] p-4 text-sm outline-none md:text-base"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        phone: "",
                      });
                    }}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl bg-[#1b1f35] p-4 text-sm outline-none md:text-base"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        email: "",
                      });
                    }}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex gap-4">

                  <button
                    onClick={prevStep}
                    className="w-1/2 rounded-2xl border border-white/10 py-4 text-sm md:text-base"
                  >
                    Back
                  </button>

                  <button
                    onClick={nextStep}
                    className="w-1/2 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 py-4 text-sm md:text-base"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>

              <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                Date & Time
              </h2>

              <div className="grid gap-6">

                {/* DATE */}
                <div>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-2xl bg-[#1b1f35] p-4 text-sm outline-none md:text-base"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        date: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        date: "",
                      });
                    }}
                  />

                  {errors.date && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* TIME */}
                <div className="relative">

                  <select
                    className="w-full appearance-none rounded-2xl bg-[#1b1f35] p-4 text-sm text-white outline-none md:text-base"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        time: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        time: "",
                      });
                    }}
                  >
                    <option value="">
                      Select Time Slot
                    </option>

                    {[
                      "10:00 AM",
                      "12:00 PM",
                      "2:00 PM",
                      "4:00 PM",
                    ].map((slot) => (
                      <option
                        key={slot}
                        value={slot}
                      >
                        {slot}
                      </option>
                    ))}
                  </select>

                  <Clock3 className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                </div>

                {errors.time && (
                  <p className="text-sm text-red-400">
                    {errors.time}
                  </p>
                )}

                <div className="flex gap-4">

                  <button
                    onClick={prevStep}
                    className="w-1/2 rounded-2xl border border-white/10 py-4 text-sm md:text-base"
                  >
                    Back
                  </button>

                  <button
                    onClick={nextStep}
                    className="w-1/2 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 py-4 text-sm md:text-base"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>

              <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                Confirm & Pay
              </h2>

              <div className="space-y-5 rounded-3xl bg-black/20 p-6 md:p-8">

                <p>
                  <span className="font-semibold text-pink-400">
                    Category:
                  </span>{" "}
                  {formData.category}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">
                    Service:
                  </span>{" "}
                  {formData.service}
                </p>

                {formData.batch && (
                  <p>
                    <span className="font-semibold text-pink-400">
                      Batch:
                    </span>{" "}
                    {formData.batch}
                  </p>
                )}

                <p>
                  <span className="font-semibold text-pink-400">
                    Name:
                  </span>{" "}
                  {formData.name}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">
                    Phone:
                  </span>{" "}
                  {formData.phone}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">
                    Email:
                  </span>{" "}
                  {formData.email}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">
                    Date:
                  </span>{" "}
                  {formData.date}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">
                    Time:
                  </span>{" "}
                  {formData.time}
                </p>
              </div>

              {/* PAYMENT NOTICE */}
              <div className="mt-8 rounded-3xl border border-pink-500/20 bg-pink-500/5 p-6">

                <h3 className="text-lg font-semibold text-pink-400 md:text-xl">
                  Advance Payment Required
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                  Complete your advance payment securely using Razorpay.
                  After successful payment, WhatsApp will open automatically
                  with your booking details for confirmation.
                </p>
              </div>

              {/* STICKY BUTTONS */}
              <div className="sticky bottom-4 mt-10 flex gap-4 rounded-3xl bg-[#050816]/80 p-2 backdrop-blur-xl">

                <button
                  onClick={prevStep}
                  className="w-1/2 rounded-2xl border border-white/10 py-4 text-sm md:py-5 md:text-base"
                >
                  Back
                </button>

                <a
                  href={`https://rzp.io/rzp/G8VwVNZ3?redirect=true&callback_url=${encodeURIComponent(
                    `${window.location.origin}/payment-success`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {

                    toast.success(
                      "Redirecting to secure payment ✨"
                    );

                    const message = `Hi, I completed my booking payment.

Name: ${formData.name}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Phone: ${formData.phone}`;

                    setTimeout(() => {
                      window.open(
                        `https://wa.me/917498645883?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      );
                    }, 3000);
                  }}
                  className="flex w-1/2 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 py-4 text-sm font-semibold transition hover:scale-[1.015] hover:shadow-[0_0_30px_rgba(255,79,163,0.35)] md:py-5 md:text-base"
                >
                  Proceed To Payment
                </a>
              </div>

              <p className="mt-6 text-center text-xs text-white/50 md:text-sm">
                A booking confirmation email will be sent after successful payment.
              </p>
            </div>
          )}
        </div>

        {/* FOOTER FEATURES */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 md:mt-16">

          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/[0.04] md:p-7">

            <div className="flex items-start gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 md:h-14 md:w-14">
                <ShieldCheck className="h-6 w-6 text-pink-400 md:h-7 md:w-7" />
              </div>

              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  100% Secure
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Safe & trusted Razorpay payment protection.
                </p>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/[0.04] md:p-7">

            <div className="flex items-start gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 md:h-14 md:w-14">
                <Clock3 className="h-6 w-6 text-pink-400 md:h-7 md:w-7" />
              </div>

              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  Instant Booking
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Quick appointment confirmation & response.
                </p>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/[0.04] md:p-7">

            <div className="flex items-start gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 md:h-14 md:w-14">
                <MessageCircle className="h-6 w-6 text-pink-400 md:h-7 md:w-7" />
              </div>

              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  WhatsApp Support
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Fast support for bookings & training inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}