"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import {
  useAuth,
} from "@/contexts/AuthContext";

import {
  Award,
  Download,
  Search,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  FileBadge,
} from "lucide-react";

type Certificate = {
  id: string;
  studentName: string;
  course: string;
  certificateUrl?: string;
};

export default function StudentCertificatesPage() {

  const {
    user,
  } = useAuth();

  const [
    certificates,
    setCertificates,
  ] = useState<
    Certificate[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    search,
    setSearch,
  ] = useState("");

  // FETCH CERTIFICATES
  useEffect(() => {

    const fetchCertificates =
      async () => {

        if (!user?.email)
          return;

        try {

          const q =
            query(
              collection(
                db,
                "certificates"
              ),
              where(
                "studentEmail",
                "==",
                user.email
              )
            );

          const querySnapshot =
            await getDocs(q);

          const data:
            Certificate[] = [];

          querySnapshot.forEach(
            (
              docSnap
            ) => {

              data.push({
                id: docSnap.id,
                ...(docSnap.data() as Omit<
                  Certificate,
                  "id"
                >),
              });
            }
          );

          setCertificates(
            data
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchCertificates();

  }, [user]);

  // FILTER
  const filteredCertificates =
    useMemo(() => {

      return certificates.filter(
        (
          certificate
        ) =>
          certificate.course
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          certificate.studentName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [
      certificates,
      search,
    ]);

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-10 pt-32 text-white md:px-10 md:pt-36">

      <div className="mx-auto max-w-7xl">

        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-[#0f172a] to-yellow-500/10 p-8 shadow-[0_0_60px_rgba(255,79,163,0.08)]">

          {/* GLOW */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">

            {/* LEFT */}
            <div>

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-pink-500/10 text-pink-400">

                <Award size={40} />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">

                Sajshringar Academy
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">

                My Certificates
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">

                Download your verified academy certificates
                issued by Sajshringar Academy.
              </p>
            </div>

            {/* RIGHT STATS */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

                  <GraduationCap size={30} />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    {
                      certificates.length
                    }
                  </h2>

                  <p className="text-white/60">

                    Certificates Earned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mt-12">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full rounded-[1.7rem] border border-white/10 bg-white/5 py-5 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
          />
        </div>

        {/* LOADING */}
        {loading ? (

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center text-white/60">

            Loading Certificates...
          </div>

        ) : filteredCertificates.length ===
          0 ? (

          /* EMPTY */
          <div className="mt-14 rounded-[2.5rem] border border-white/10 bg-white/5 p-14 text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">

              <Award size={42} />
            </div>

            <h2 className="mt-6 text-3xl font-bold">

              No Certificates Yet
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-white/60">

              Your certificates will appear here once
              issued by the academy admin.
            </p>
          </div>

        ) : (

          /* CERTIFICATES GRID */
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredCertificates.map(
              (
                certificate
              ) => (

                <div
                  key={
                    certificate.id
                  }
                  className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-500/20 hover:shadow-[0_0_40px_rgba(255,79,163,0.12)]"
                >

                  {/* GLOW */}
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl transition duration-500 group-hover:bg-pink-500/20" />

                  {/* ICON */}
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br from-pink-500/10 to-yellow-500/10 text-pink-400">

                    <FileBadge size={38} />
                  </div>

                  {/* COURSE */}
                  <h2 className="relative z-10 text-2xl font-bold leading-snug">

                    {
                      certificate.course
                    }
                  </h2>

                  {/* STUDENT */}
                  <p className="relative z-10 mt-4 text-sm uppercase tracking-[0.25em] text-white/40">

                    Awarded To
                  </p>

                  <p className="relative z-10 mt-2 text-lg font-medium text-pink-400">

                    {
                      certificate.studentName
                    }
                  </p>

                  {/* VERIFIED */}
                  <div className="relative z-10 mt-6 flex flex-wrap gap-3">

                    <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">

                      <BadgeCheck size={16} />

                      Verified
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">

                      <ShieldCheck size={16} />

                      Academy Issued
                    </div>
                  </div>

                  {/* DOWNLOAD */}
                  {certificate.certificateUrl && (

                    <a
                      href={
                        certificate.certificateUrl
                      }
                      download
                      className="relative z-10 mt-8 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-4 font-semibold transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,79,163,0.35)]"
                    >

                      <Download size={20} />

                      Download Certificate
                    </a>
                  )}

                  {/* DECOR */}
                  <div className="absolute bottom-5 right-5 text-white/5">

                    <Sparkles size={80} />
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
}