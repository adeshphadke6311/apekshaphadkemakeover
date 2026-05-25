"use client";

import { useState } from "react";

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

import { useRouter } from "next/navigation";

export default function StudentRegisterPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      course: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

      const user =
        userCredential.user;

      await setDoc(
        doc(
          db,
          "students",
          user.uid
        ),
        {
          uid: user.uid,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          role: "student",
          createdAt:
            new Date(),
        }
      );

      alert(
        "Registration Successful"
      );

      router.push(
        "/student/dashboard"
      );

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-4 text-white">

      <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/5 p-8">

        <h1 className="text-3xl font-bold">
          Student Registration
        </h1>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 py-4 font-semibold"
          >

            {loading
              ? "Creating Account..."
              : "Register"}
          </button>
        </form>
      </div>
    </main>
  );
}