"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Link from "next/link";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
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

import toast from "react-hot-toast";

import {
  Trash2,
  Users,
  CalendarCheck,
  LogOut,
  Video,
  Award,
  Search,
  UserPlus,
  CreditCard,
  BookOpen,
  FileText,
  Eye,
  Pencil,
  Clock3,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";

type Student = {
  uid: string;
  name: string;
  email: string;
  course: string;
};

export default function AdminDashboard() {

  const router = useRouter();

  const [
    students,
    setStudents,
  ] = useState<Student[]>(
    []
  );

  const [
    filteredStudents,
    setFilteredStudents,
  ] = useState<Student[]>(
    []
  );

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(true);

  // FETCH STUDENTS
  const fetchStudents =
    async () => {

      try {

        const querySnapshot =
          await getDocs(
            query(
              collection(
                db,
                "students"
              )
            )
          );

        const studentData:
          Student[] = [];

        querySnapshot.forEach(
          (docSnap) => {

            studentData.push({
              uid: docSnap.id,
              ...(docSnap.data() as Omit<
                Student,
                "uid"
              >),
            });
          }
        );

        setStudents(
          studentData
        );

        setFilteredStudents(
          studentData
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to load students"
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchStudents();

  }, []);

  // SEARCH
  useEffect(() => {

    const filtered =
      students.filter(
        (student) =>
          student.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          student.email
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          student.course
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    setFilteredStudents(
      filtered
    );

  }, [search, students]);

  // DELETE
  const handleDelete =
    async (
      id: string
    ) => {

      const confirmDelete =
        confirm(
          "Delete this student?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteDoc(
          doc(
            db,
            "students",
            id
          )
        );

        setStudents(
          (prev) =>
            prev.filter(
              (student) =>
                student.uid !==
                id
            )
        );

        setFilteredStudents(
          (prev) =>
            prev.filter(
              (student) =>
                student.uid !==
                id
            )
        );

        toast.success(
          "Student Deleted Successfully"
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Delete Failed"
        );
      }
    };

  // ATTENDANCE
  const markAttendance =
    async (
      student: Student,
      status: boolean
    ) => {

      try {

        const today =
          new Date()
            .toISOString()
            .split("T")[0];

        const attendanceId =
          `${student.uid}-${today}`;

        await setDoc(
          doc(
            db,
            "attendance",
            attendanceId
          ),
          {
            studentId:
              student.uid,

            studentName:
              student.name,

            date: today,

            present:
              status,
          }
        );

        toast.success(
          status
            ? `${student.name} marked Present`
            : `${student.name} marked Absent`
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Attendance update failed"
        );
      }
    };

  // LOGOUT
  const handleLogout =
    async () => {

      await signOut(auth);

      toast.success(
        "Logged out successfully"
      );

      router.push("/");
    };

  // STATS
  const totalStudents =
    students.length;

  const totalCourses =
    useMemo(() => {

      const unique =
        new Set(
          students.map(
            (student) =>
              student.course
          )
        );

      return unique.size;

    }, [students]);

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-10 pt-32 text-white md:px-10 md:pt-36">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-[#0f172a] to-yellow-500/10 p-8 shadow-[0_0_60px_rgba(255,79,163,0.08)]">

        {/* GLOW */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">

          {/* LEFT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">

              Sajshringar Academy
            </p>

            <h1 className="text-4xl font-bold md:text-5xl">

              Admin Dashboard
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">

              Manage students,
              attendance,
              academy content,
              certificates,
              payments,
              and training resources.
            </p>
          </div>

          {/* RIGHT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-7 py-4 font-medium transition hover:scale-105"
          >

            <LogOut size={18} />

            Logout
          </button>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <Link
          href="/admin/add-student"
          className="rounded-[2rem] border border-orange-500/20 bg-orange-500/10 p-6 transition hover:-translate-y-1 hover:bg-orange-500/15"
        >

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

            <UserPlus size={28} />
          </div>

          <h2 className="text-xl font-bold">
            Add Student
          </h2>

          <p className="mt-2 text-sm text-white/60">
            Register academy students
          </p>
        </Link>

        <Link
          href="/admin/content"
          className="rounded-[2rem] border border-purple-500/20 bg-purple-500/10 p-6 transition hover:-translate-y-1 hover:bg-purple-500/15"
        >

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">

            <FileText size={28} />
          </div>

          <h2 className="text-xl font-bold">
            Upload Content
          </h2>

          <p className="mt-2 text-sm text-white/60">
            Videos, notes & PDFs
          </p>
        </Link>

        <Link
          href="/admin/certificates"
          className="rounded-[2rem] border border-yellow-500/20 bg-yellow-500/10 p-6 transition hover:-translate-y-1 hover:bg-yellow-500/15"
        >

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">

            <Award size={28} />
          </div>

          <h2 className="text-xl font-bold">
            Certificates
          </h2>

          <p className="mt-2 text-sm text-white/60">
            Manage certificates
          </p>
        </Link>

        <Link
          href="/admin/payments"
          className="rounded-[2rem] border border-green-500/20 bg-green-500/10 p-6 transition hover:-translate-y-1 hover:bg-green-500/15"
        >

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">

            <CreditCard size={28} />
          </div>

          <h2 className="text-xl font-bold">
            Payments
          </h2>

          <p className="mt-2 text-sm text-white/60">
            Manage student fees
          </p>
        </Link>
      </div>

      {/* SEARCH */}
      <div className="relative mt-12">

        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="w-full rounded-[1.7rem] border border-white/10 bg-white/5 py-5 pl-14 pr-5 text-white outline-none transition focus:border-pink-500/40"
        />
      </div>

      {/* STATS */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-pink-500/10 p-4 text-pink-400">

              <Users size={30} />
            </div>

            <div>

              <h2 className="text-3xl font-bold">

                {totalStudents}
              </h2>

              <p className="text-white/60">
                Students
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

              <GraduationCap size={30} />
            </div>

            <div>

              <h2 className="text-3xl font-bold">

                {totalCourses}
              </h2>

              <p className="text-white/60">
                Courses
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-400">

              <CalendarCheck size={30} />
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Daily
              </h2>

              <p className="text-white/60">
                Attendance
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-purple-500/10 p-4 text-purple-400">

              <Video size={30} />
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Content
              </h2>

              <p className="text-white/60">
                Training Files
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-green-500/10 p-4 text-green-400">

              <TrendingUp size={30} />
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Revenue
              </h2>

              <p className="text-white/60">
                Track Fees
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">

        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-7">

          <div>

            <h2 className="text-2xl font-bold">

              Student Management
            </h2>

            <p className="mt-1 text-sm text-white/50">

              Manage all academy students
            </p>
          </div>

          <span className="rounded-full bg-white/5 px-5 py-2 text-sm text-white/60">

            {filteredStudents.length} students
          </span>
        </div>

        {loading ? (

          <div className="p-12 text-center text-white/60">

            Loading Students...
          </div>

        ) : filteredStudents.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-20">

            <Users
              size={70}
              className="mb-5 text-white/20"
            />

            <h2 className="text-2xl font-bold">

              No Students Found
            </h2>

            <p className="mt-3 text-white/50">

              Add students to manage academy data
            </p>
          </div>

        ) : (

          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-pink-500/20">

            <table className="w-full min-w-[1400px]">

              <thead>

                <tr className="border-b border-white/10 text-left text-white/50">

                  <th className="p-6">
                    Student
                  </th>

                  <th className="p-6">
                    Course
                  </th>

                  <th className="p-6">
                    Status
                  </th>

                  <th className="p-6">
                    Attendance
                  </th>

                  <th className="p-6">
                    Actions
                  </th>

                  <th className="p-6">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>

                {filteredStudents.map(
                  (student) => (
                    <tr
                      key={student.uid}
                      className="border-b border-white/5 transition hover:bg-pink-500/[0.03] hover:shadow-[0_0_20px_rgba(255,79,163,0.05)]"
                    >

                      {/* STUDENT */}
                      <td className="p-6">

                        <div className="flex items-center gap-4">

                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-lg font-bold text-white">

                            {student.name.charAt(0)}
                          </div>

                          <div>

                            <h3 className="font-semibold">

                              {student.name}
                            </h3>

                            <p className="mt-1 text-sm text-white/50">

                              {student.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* COURSE */}
                      <td className="p-6">

                        <span className="rounded-full bg-pink-500/10 px-4 py-2 text-sm text-pink-400">

                          {student.course}
                        </span>
                      </td>

                      {/* STATUS */}
                      <td className="p-6">

                        <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">

                          <UserCheck size={16} />

                          Active
                        </span>
                      </td>

                      {/* ATTENDANCE */}
                      <td className="p-6">

                        <div className="flex gap-3">

                          <button
                            onClick={() =>
                              markAttendance(
                                student,
                                true
                              )
                            }
                            className="rounded-full bg-green-500/10 px-5 py-2 text-sm text-green-400 transition hover:bg-green-500/20"
                          >

                            Present
                          </button>

                          <button
                            onClick={() =>
                              markAttendance(
                                student,
                                false
                              )
                            }
                            className="rounded-full bg-red-500/10 px-5 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
                          >

                            Absent
                          </button>
                        </div>
                      </td>

                      {/* ACTIONS */}
                      <td className="p-6">

                        <div className="flex flex-wrap gap-3">

                          <Link
                            href={`/admin/students/${student.uid}`}
                            className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400 transition hover:bg-blue-500/20"
                          >

                            <Eye size={16} />

                            View
                          </Link>

                          <Link
                            href={`/admin/edit-student/${student.uid}`}
                            className="flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400 transition hover:bg-yellow-500/20"
                          >

                            <Pencil size={16} />

                            Edit
                          </Link>

                          <Link
                            href={`/admin/history/${student.uid}`}
                            className="flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400 transition hover:bg-purple-500/20"
                          >

                            <Clock3 size={16} />

                            History
                          </Link>
                        </div>
                      </td>

                      {/* DELETE */}
                      <td className="p-6">

                        <button
                          onClick={() =>
                            handleDelete(
                              student.uid
                            )
                          }
                          className="flex items-center gap-2 rounded-full bg-red-500/10 px-5 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
                        >

                          <Trash2 size={16} />

                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6">

        <div>

          <h2 className="text-xl font-bold">

            Sajshringar Academy
          </h2>

          <p className="mt-2 text-sm text-white/60">

            Professional Beauty & Training Management System
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-full bg-pink-500/10 px-5 py-3 text-sm text-pink-400">

          <ShieldCheck size={18} />

          Admin Access Active
        </div>
      </div>
    </main>
  );
}