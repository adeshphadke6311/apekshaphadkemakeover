import Link from "next/link";

import {
  GraduationCap,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

export default function LoginSelectionPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-4 pt-32 pb-20 text-white">

      <div className="mx-auto max-w-5xl">

        {/* HEADING */}
        <div className="mb-16 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
            Sajshringar Academy
          </p>

          <h1 className="heading-font text-4xl font-bold md:text-6xl">
            Choose Your
            <span className="gold-text">
              {" "}
              Login Portal
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/70 md:text-lg">
            Access student dashboard,
            training programs,
            attendance,
            certificates,
            and admin management panel.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* STUDENT LOGIN */}
          <Link
            href="/student/login"
            className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">

              <GraduationCap size={32} />
            </div>

            <h2 className="text-2xl font-bold">
              Student Login
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              Access attendance,
              videos,
              certificates,
              payment history,
              and student dashboard.
            </p>
          </Link>

          {/* REGISTER */}
          <Link
            href="/student/register"
            className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">

              <UserPlus size={32} />
            </div>

            <h2 className="text-2xl font-bold">
              Student Register
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              Register for makeup,
              Aari work,
              jewellery,
              and beauty academy courses.
            </p>
          </Link>

          {/* ADMIN */}
          <Link
            href="/admin/login"
            className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">

              <ShieldCheck size={32} />
            </div>

            <h2 className="text-2xl font-bold">
              Admin Login
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              Manage students,
              attendance,
              slots,
              certificates,
              content,
              and academy operations.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}