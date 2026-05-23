export const metadata = {
  title: "Payment | Sajshringar by Apeksha",
  description:
    "Secure appointment booking and advance payment for Sajshringar services.",
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-32 pb-24 text-white">

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Secure Booking
          </p>

          <h1 className="heading-font text-5xl md:text-7xl font-bold">
            Advance
            <span className="gold-text"> Payment</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
            Confirm your bridal makeup appointment,
            beauty services, or academy booking securely.
          </p>
        </div>

        {/* Payment Card */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Book Your Slot
          </h2>

          <p className="mx-auto max-w-2xl text-white/70 leading-relaxed">
            Pay the advance booking amount securely using Razorpay.
            Once payment is completed, connect with us on WhatsApp
            for appointment confirmation.
          </p>

          {/* Features */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-semibold">
                Secure Payment
              </h3>

              <p className="mt-3 text-sm text-white/70">
                100% safe Razorpay payment gateway.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-semibold">
                Instant Booking
              </h3>

              <p className="mt-3 text-sm text-white/70">
                Confirm your appointment quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-semibold">
                WhatsApp Support
              </h3>

              <p className="mt-3 text-sm text-white/70">
                Easy communication and support.
              </p>
            </div>
          </div>

          {/* Payment Button */}
          <a
            href="https://rzp.io/rzp/G8VwVNZ3"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-block rounded-full bg-[#ff4fa3] px-10 py-5 text-lg font-medium transition hover:scale-105"
          >
            Pay Advance Amount
          </a>

          {/* Note */}
          <p className="mt-8 text-sm text-white/50">
            After payment, please share payment confirmation on WhatsApp.
          </p>
        </div>
      </div>
    </main>
  );
}