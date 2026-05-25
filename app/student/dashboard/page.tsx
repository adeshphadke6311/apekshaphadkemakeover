"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Link from "next/link";

import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import {
  signOut,
} from "firebase/auth";

import {
  auth,
  db,
} from "@/lib/firebase";

import {
  useRouter,
} from "next/navigation";

import {
  useAuth,
} from "@/contexts/AuthContext";

import {
  User,
  CalendarCheck,
  LogOut,
  Percent,
  Award,
  CreditCard,
  FileText,
  BadgeCheck,
  Clock3,
  Wallet,
  Sparkles,
  GraduationCap,
  TrendingUp,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

type StudentData = {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
};

type Attendance = {
  date?: string;
  present?: boolean;
};

type Payment = {
  amount?: number;
  status?: string;
};

type Certificate = {
  id: string;
  course?: string;
};

type Content = {
  id: string;
  type?: string;
};

export default function StudentDashboard() {

  const {
    user,
    loading,
  } = useAuth();

  const router =
    useRouter();

  const [
    student,
    setStudent,
  ] = useState<StudentData | null>(
    null
  );

  const [
    attendance,
    setAttendance,
  ] = useState<
    Attendance[]
  >([]);

  const [
    payments,
    setPayments,
  ] = useState<
    Payment[]
  >([]);

  const [
    certificates,
    setCertificates,
  ] = useState<
    Certificate[]
  >([]);

  const [
    content,
    setContent,
  ] = useState<
    Content[]
  >([]);

  const [
    attendancePercentage,
    setAttendancePercentage,
  ] = useState(0);

  // PROTECT ROUTE
  useEffect(() => {

    if (
      !loading &&
      !user
    ) {

      router.push(
        "/student/login"
      );
    }

  }, [
    user,
    loading,
    router,
  ]);

  // FETCH DATA
  useEffect(() => {

    const fetchData =
      async () => {

        if (!user)
          return;

        try {

          // STUDENT
          const studentRef =
            doc(
              db,
              "students",
              user.uid
            );

          const studentSnap =
            await getDoc(
              studentRef
            );

          if (
            studentSnap.exists()
          ) {

            setStudent(
              studentSnap.data() as StudentData
            );
          }

          // ATTENDANCE
          const attendanceQuery =
            query(
              collection(
                db,
                "attendance"
              ),

              where(
                "studentId",
                "==",
                user.uid
              )
            );

          const attendanceSnap =
            await getDocs(
              attendanceQuery
            );

          const attendanceData:
            Attendance[] = [];

          attendanceSnap.forEach(
            (
              docSnap
            ) => {

              attendanceData.push(
                docSnap.data() as Attendance
              );
            }
          );

          setAttendance(
            attendanceData
          );

          // PERCENTAGE
          const total =
            attendanceData.length;

          const present =
            attendanceData.filter(
              (
                item
              ) =>
                item.present
            ).length;

          const percentage =
            total > 0
              ? Math.round(
                  (present /
                    total) *
                    100
                )
              : 0;

          setAttendancePercentage(
            percentage
          );

          // PAYMENTS
          const paymentQuery =
            query(
              collection(
                db,
                "payments"
              ),

              where(
                "studentId",
                "==",
                user.uid
              )
            );

          const paymentSnap =
            await getDocs(
              paymentQuery
            );

          const paymentData:
            Payment[] = [];

          paymentSnap.forEach(
            (
              docSnap
            ) => {

              paymentData.push(
                docSnap.data() as Payment
              );
            }
          );

          setPayments(
            paymentData
          );

          // CERTIFICATES
          const certificateQuery =
            query(
              collection(
                db,
                "certificates"
              )
            );

          const certificateSnap =
            await getDocs(
              certificateQuery
            );

          const certificateData:
            Certificate[] = [];

          certificateSnap.forEach(
            (
              docSnap
            ) => {

              const data =
                docSnap.data();

              if (
                data.studentName ===
                  studentSnap.data()
                    ?.name ||
                data.studentEmail ===
                  user.email
              ) {

                certificateData.push({
                  id: docSnap.id,
                  ...data,
                });
              }
            }
          );

          setCertificates(
            certificateData
          );

          // CONTENT
          const contentQuery =
            query(
              collection(
                db,
                "content"
              ),

              orderBy(
                "createdAt",
                "desc"
              )
            );

          const contentSnap =
            await getDocs(
              contentQuery
            );

          const contentData:
            Content[] = [];

          contentSnap.forEach(
            (
              docSnap
            ) => {

              contentData.push({
                id: docSnap.id,
                ...docSnap.data(),
              });
            }
          );

          setContent(
            contentData
          );

        } catch (error) {

          console.log(
            error
          );
        }
      };

    fetchData();

  }, [user]);

  // TOTAL PAID
  const totalPaid =
    useMemo(() => {

      return payments
        .filter(
          (
            payment
          ) =>
            payment.status ===
            "approved"
        )
        .reduce(
          (
            total,
            payment
          ) =>
            total +
            Number(
              payment.amount ||
                0
            ),
          0
        );

    }, [payments]);

  // CONTENT COUNT
  const totalStudyMaterial =
    content.filter(
      (
        item
      ) =>
        item.type !==
        "videos"
    ).length;

  // LOGOUT
  const handleLogout =
    async () => {

      await signOut(
        auth
      );

      router.push(
        "/"
      );
    };

  // LOADING
  if (
    loading ||
    !student
  ) {

    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">

        <div className="flex flex-col items-center gap-5">

          <div className="h-14 w-14 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />

          <p className="text-lg text-white/70">

            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-10 pt-32 text-white md:px-10 md:pt-36">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-[#0f172a] to-yellow-500/10 p-8 shadow-[0_0_60px_rgba(255,79,163,0.08)]">

        {/* GLOW */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">

          {/* LEFT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-pink-400">

              Sajshringar Academy
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">

              Welcome,
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">

                {" "}
                {student.name ||
                  "Student"}
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-xl">

              Continue your professional beauty learning journey with premium academy training, study material, attendance tracking, payments, and certificates.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-5 py-3 text-sm text-green-400">

                <CheckCircle2
                  size={18}
                />

                Active Student
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-5 py-3 text-sm text-pink-400">

                <ShieldCheck
                  size={18}
                />

                Verified Account
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={
              handleLogout
            }
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 font-semibold transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,79,163,0.35)]"
          >

            <LogOut
              size={20}
            />

            Logout
          </button>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* CONTENT */}
        <Link
          href="/student/content"
          className="group rounded-[2.2rem] border border-blue-500/20 bg-blue-500/10 p-7 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/15"
        >

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">

            <FileText
              size={30}
            />
          </div>

          <h2 className="text-2xl font-bold">

            Study Material
          </h2>

          <p className="mt-3 text-white/60">

            Access PDFs, notes & learning resources
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-blue-400">

            Explore Content

            <ArrowRight
              size={16}
            />
          </div>
        </Link>

        {/* PAYMENTS */}
        <Link
          href="/student/payments"
          className="group rounded-[2.2rem] border border-green-500/20 bg-green-500/10 p-7 transition hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/15"
        >

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">

            <CreditCard
              size={30}
            />
          </div>

          <h2 className="text-2xl font-bold">

            Payments
          </h2>

          <p className="mt-3 text-white/60">

            View payment history & fees
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-green-400">

            View Payments

            <ArrowRight
              size={16}
            />
          </div>
        </Link>

        {/* CERTIFICATES */}
        <Link
          href="/student/certificates"
          className="group rounded-[2.2rem] border border-yellow-500/20 bg-yellow-500/10 p-7 transition hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-yellow-500/15"
        >

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">

            <Award
              size={30}
            />
          </div>

          <h2 className="text-2xl font-bold">

            Certificates
          </h2>

          <p className="mt-3 text-white/60">

            Download issued certificates
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-yellow-400">

            Open Certificates

            <ArrowRight
              size={16}
            />
          </div>
        </Link>

        {/* PROFILE */}
        <div className="rounded-[2.2rem] border border-purple-500/20 bg-purple-500/10 p-7">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">

            <User
              size={30}
            />
          </div>

          <h2 className="text-2xl font-bold">

            {student.course ||
              "No Course"}
          </h2>

          <p className="mt-3 text-white/60">

            Current enrolled course
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400">

            <GraduationCap
              size={16}
            />

            Active Training
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* ATTENDANCE */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-pink-500/10 p-4 text-pink-400">

              <CalendarCheck
                size={32}
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold">

                {
                  attendance.length
                }
              </h2>

              <p className="mt-1 text-white/60">

                Attendance Records
              </p>
            </div>
          </div>
        </div>

        {/* ATTENDANCE % */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-green-500/10 p-4 text-green-400">

              <Percent
                size={32}
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold">

                {
                  attendancePercentage
                }
                %
              </h2>

              <p className="mt-1 text-white/60">

                Attendance Percentage
              </p>
            </div>
          </div>
        </div>

        {/* TOTAL FEES */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-400">

              <Wallet
                size={32}
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold">

                ₹
                {totalPaid.toLocaleString(
                  "en-IN"
                )}
              </h2>

              <p className="mt-1 text-white/60">

                Total Fees Paid
              </p>
            </div>
          </div>
        </div>

        {/* CERTIFICATES */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

              <Award
                size={32}
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold">

                {
                  certificates.length
                }
              </h2>

              <p className="mt-1 text-white/60">

                Certificates Earned
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PROFILE */}
      <div className="mt-14 rounded-[2.5rem] border border-white/10 bg-white/5 p-8">

        <div className="flex flex-wrap items-center gap-8">

          {/* AVATAR */}
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-yellow-500/20 text-pink-400">

            <Sparkles
              size={46}
            />
          </div>

          {/* INFO */}
          <div className="flex-1">

            <h2 className="text-4xl font-bold">

              {student.name}
            </h2>

            <p className="mt-3 text-lg text-white/60">

              {
                student.email
              }
            </p>

            <p className="mt-2 text-white/60">

              {
                student.phone
              }
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-5 py-3 text-sm text-pink-400">

              <BookOpen
                size={16}
              />

              {
                student.course
              }
            </div>
          </div>
        </div>
      </div>

      {/* ATTENDANCE HISTORY */}
      <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">

        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-7">

          <div>

            <h2 className="text-3xl font-bold">

              Attendance History
            </h2>

            <p className="mt-2 text-white/50">

              View your attendance records
            </p>
          </div>

          <div className="rounded-full bg-white/5 px-5 py-3 text-sm text-white/60">

            {
              attendance.length
            }{" "}
            Records
          </div>
        </div>

        {attendance.length ===
        0 ? (

          <div className="p-14 text-center text-white/60">

            No Attendance Records Found
          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead>

                <tr className="border-b border-white/10 text-left text-white/50">

                  <th className="p-6">
                    Date
                  </th>

                  <th className="p-6">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                {attendance.map(
                  (
                    item,
                    index
                  ) => (
                    <tr
                      key={
                        index
                      }
                      className="border-b border-white/5 transition hover:bg-white/[0.03]"
                    >

                      <td className="p-6 font-medium">

                        {
                          item.date
                        }
                      </td>

                      <td className="p-6">

                        {item.present ? (

                          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-5 py-2 text-sm text-green-400">

                            <BadgeCheck
                              size={16}
                            />

                            Present
                          </span>

                        ) : (

                          <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-5 py-2 text-sm text-red-400">

                            <Clock3
                              size={16}
                            />

                            Absent
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}