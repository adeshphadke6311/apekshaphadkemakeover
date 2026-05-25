"use client";

import {
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "@/lib/firebase";

import {
  useRouter,
} from "next/navigation";

import toast from "react-hot-toast";

import {
  UserPlus,
  Mail,
  Phone,
  BookOpen,
  Lock,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";

export default function AddStudentPage() {

  const router = useRouter();

  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    password: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  // HANDLE INPUT
  const handleChange =
    (
      e: React.ChangeEvent<
        HTMLInputElement |
        HTMLSelectElement
      >
    ) => {

      setFormData({
        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };

  // SUBMIT
  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      setLoading(true);

      try {

        // CREATE FIREBASE AUTH USER
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );

        const user =
          userCredential.user;

        // SAVE TO FIRESTORE
        await setDoc(
          doc(
            db,
            "students",
            user.uid
          ),
          {
            name:
              formData.name,

            email:
              formData.email,

            phone:
              formData.phone,

            course:
              formData.course,

            role:
              "student",

            status:
              "active",

            createdAt:
              new Date(),
          }
        );

        toast.success(
          "Student Added Successfully"
        );

        router.push(
          "/admin/dashboard"
        );

      } catch (error: any) {

        console.log(error);

        toast.error(
          error.message
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-10 pt-32 text-white md:px-10 md:pt-36">

      <div className="mx-auto max-w-4xl">

        {/* BACK BUTTON */}
        <Link
          href="/admin/dashboard"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 transition hover:border-pink-500/30 hover:text-pink-400"
        >

          <ArrowLeft size={18} />

          Back to Dashboard
        </Link>

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-[#0f172a] to-yellow-500/10 p-8 shadow-[0_0_60px_rgba(255,79,163,0.08)]">

          {/* GLOW */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative z-10">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-pink-500/10 text-pink-400">

              <UserPlus size={40} />
            </div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">

              Sajshringar Academy
            </p>

            <h1 className="text-4xl font-bold md:text-5xl">

              Add New Student
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">

              Register new students for academy
              courses, training programs,
              makeup classes, Aari work,
              jewellery training, and more.
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* NAME */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Student Name
              </label>

              <div className="relative">

                <Sparkles className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Email Address
              </label>

              <div className="relative">

                <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Phone Number
              </label>

              <div className="relative">

                <Phone className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                />
              </div>
            </div>

            {/* COURSE */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Select Course
              </label>

              <div className="relative">

                <BookOpen className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1020] py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                >

                  <option value="">
                    Select Course
                  </option>

                  <option value="Bridal Makeup">
                    Bridal Makeup
                  </option>

                  <option value="HD Makeup">
                    HD Makeup
                  </option>

                  <option value="Airbrush Makeup">
                    Airbrush Makeup
                  </option>

                  <option value="Aari Work">
                    Aari Work
                  </option>

                  <option value="Jewellery Making">
                    Jewellery Making
                  </option>

                  <option value="Nail Art">
                    Nail Art
                  </option>

                  <option value="Beauty Training">
                    Beauty Training
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mt-8">

            <label className="mb-3 block text-sm font-medium text-white/70">

              Password
            </label>

            <div className="relative">

              <Lock className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

              <input
                type="password"
                name="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter secure password"
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
              />
            </div>

            <p className="mt-3 text-sm text-white/40">

              Password should contain minimum 6 characters.
            </p>
          </div>

          {/* INFO CARD */}
          <div className="mt-8 rounded-[2rem] border border-pink-500/10 bg-pink-500/5 p-6">

            <div className="flex items-start gap-4">

              <div className="rounded-2xl bg-pink-500/10 p-3 text-pink-400">

                <ShieldCheck size={22} />
              </div>

              <div>

                <h3 className="text-lg font-semibold">

                  Student Account Access
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/60">

                  After adding the student,
                  they can login using their
                  email and password to access:
                  attendance, payments,
                  certificates, notes,
                  videos, and academy content.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-5 text-lg font-semibold transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(255,79,163,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
          >

            <UserPlus size={22} />

            {loading
              ? "Adding Student..."
              : "Add Student"}
          </button>
        </form>
      </div>
    </main>
  );
}