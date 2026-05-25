"use client";

import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "@/lib/firebase";

import { useRouter } from "next/navigation";

export default function StudentLoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
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

      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8">

        <h1 className="text-3xl font-bold">
          Student Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 py-4 font-semibold"
          >

            {loading
              ? "Logging In..."
              : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}