"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import jsPDF from "jspdf";

import toast from "react-hot-toast";

import {
  Award,
  Download,
  Sparkles,
  Search,
  BadgeCheck,
  ShieldCheck,
  FileBadge,
  Crown,
  CalendarDays,
  User,
  Mail,
  GraduationCap,
} from "lucide-react";

type Certificate = {
  id: string;
  studentName?: string;
  studentEmail?: string;
  course?: string;
  certificateUrl?: string;
  createdAt?: number;
};

export default function CertificatesPage() {

  const [
    studentName,
    setStudentName,
  ] = useState("");

  const [
    studentEmail,
    setStudentEmail,
  ] = useState("");

  const [
    course,
    setCourse,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    certificates,
    setCertificates,
  ] = useState<
    Certificate[]
  >([]);

  const [
    search,
    setSearch,
  ] = useState("");

  // FETCH CERTIFICATES
  const fetchCertificates =
    async () => {

      try {

        const querySnapshot =
          await getDocs(
            collection(
              db,
              "certificates"
            )
          );

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
  [...data].reverse()
);

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to fetch certificates"
        );
      }
    };

  useEffect(() => {

    fetchCertificates();

  }, []);

  // GENERATE CERTIFICATE
  const generateCertificate =
    async (
      e:
        React.FormEvent
    ) => {

      e.preventDefault();

      if (
        !studentName.trim() ||
        !studentEmail.trim() ||
        !course.trim()
      ) {

        toast.error(
          "Please fill all fields"
        );

        return;
      }

      try {

        setLoading(true);

        // PDF
        const pdf =
          new jsPDF(
            "landscape",
            "mm",
            "a4"
          );

        const pageWidth =
          297;

        const pageHeight =
          210;

        // BACKGROUND
        pdf.setFillColor(
          255,
          255,
          255
        );

        pdf.rect(
          0,
          0,
          pageWidth,
          pageHeight,
          "F"
        );

        // GOLD BORDER
        pdf.setDrawColor(
          212,
          175,
          55
        );

        pdf.setLineWidth(
          2
        );

        pdf.rect(
          6,
          6,
          285,
          198
        );

        // INNER BORDER
        pdf.setLineWidth(
          0.6
        );

        pdf.rect(
          10,
          10,
          277,
          190
        );

        // CORNER DESIGNS
        pdf.setFillColor(
          212,
          175,
          55
        );

        pdf.circle(
          20,
          20,
          3,
          "F"
        );

        pdf.circle(
          277,
          20,
          3,
          "F"
        );

        pdf.circle(
          20,
          190,
          3,
          "F"
        );

        pdf.circle(
          277,
          190,
          3,
          "F"
        );

        // TITLE
        pdf.setFont(
          "times",
          "bold"
        );

        pdf.setTextColor(
          30,
          30,
          30
        );

        pdf.setFontSize(
          30
        );

        pdf.text(
          "Certificate of Completion",
          pageWidth / 2,
          42,
          {
            align:
              "center",
          }
        );

        // SUBTITLE
        pdf.setFont(
          "times",
          "normal"
        );

        pdf.setFontSize(
          14
        );

        pdf.text(
          "THIS CERTIFIES THAT",
          pageWidth / 2,
          62,
          {
            align:
              "center",
          }
        );

        // STUDENT NAME
        pdf.setFont(
          "courier",
          "italic"
        );

        pdf.setFontSize(
          34
        );

        pdf.setTextColor(
          70,
          70,
          70
        );

        pdf.text(
          studentName,
          pageWidth / 2,
          88,
          {
            align:
              "center",
          }
        );

        // COURSE LABEL
        pdf.setFont(
          "times",
          "normal"
        );

        pdf.setFontSize(
          14
        );

        pdf.setTextColor(
          50,
          50,
          50
        );

        pdf.text(
          "HAS SUCCESSFULLY COMPLETED THE COURSE OF",
          pageWidth / 2,
          110,
          {
            align:
              "center",
          }
        );

        // COURSE NAME
        pdf.setFont(
          "times",
          "bold"
        );

        pdf.setFontSize(
          24
        );

        pdf.setTextColor(
          212,
          175,
          55
        );

        pdf.text(
          course,
          pageWidth / 2,
          132,
          {
            align:
              "center",
          }
        );

        // DESCRIPTION
        pdf.setFont(
          "times",
          "normal"
        );

        pdf.setFontSize(
          11
        );

        pdf.setTextColor(
          90,
          90,
          90
        );

        const description =
          "THROUGH DEDICATION, HARD WORK, AND COMMITMENT TO EXCELLENCE,\nTHE STUDENT HAS SUCCESSFULLY COMPLETED ALL REQUIREMENTS\nOF THE TRAINING PROGRAM AT SAJSHRINGAR ACADEMY.";

        pdf.text(
          description,
          pageWidth / 2,
          150,
          {
            align:
              "center",
          }
        );

        // DATE
        const today =
          new Date().toLocaleDateString();

        pdf.line(
          40,
          182,
          90,
          182
        );

        pdf.setFontSize(
          11
        );

        pdf.setTextColor(
          80,
          80,
          80
        );

        pdf.text(
          today,
          65,
          177,
          {
            align:
              "center",
          }
        );

        pdf.text(
          "DATE",
          65,
          190,
          {
            align:
              "center",
          }
        );

        // SIGNATURE
        pdf.line(
          205,
          182,
          255,
          182
        );

        pdf.text(
          "SIGNATURE",
          230,
          190,
          {
            align:
              "center",
          }
        );

        // FOOTER
        pdf.setFont(
          "times",
          "bold"
        );

        pdf.setFontSize(
          16
        );

        pdf.setTextColor(
          212,
          175,
          55
        );

        pdf.text(
          "Sajshringar Academy",
          pageWidth / 2,
          185,
          {
            align:
              "center",
          }
        );

        // PDF URL
        const pdfBlob =
          pdf.output(
            "blob"
          );

        const pdfUrl =
          URL.createObjectURL(
            pdfBlob
          );

        // SAVE FIRESTORE
        await addDoc(
  collection(
    db,
    "certificates"
  ),
  {
    studentName,
    studentEmail,
    course,
    certificateUrl: "",
    createdAt:
      Date.now(),
  }
);

        // DOWNLOAD
        const link =
          document.createElement(
            "a"
          );

        link.href =
          pdfUrl;

        link.download =
          `${studentName}-certificate.pdf`;

        link.click();

        toast.success(
          "Certificate Generated Successfully"
        );

        // RESET
        setStudentName("");
        setStudentEmail("");
        setCourse("");

        fetchCertificates();

      } catch (error) {

        console.log(error);

        toast.error(
          "Certificate Generation Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  // FILTERED CERTIFICATES
  const filteredCertificates =
    useMemo(() => {

      return certificates.filter(
        (
          certificate
        ) =>
          (
            certificate.studentName ||
            ""
          )
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          (
            certificate.studentEmail ||
            ""
          )
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          (
            certificate.course ||
            ""
          )
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

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-[#0f172a] to-yellow-500/10 p-8 shadow-[0_0_60px_rgba(255,79,163,0.08)]">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">

            <div>

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-pink-500/10 text-pink-400">

                <Award size={40} />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">

                Sajshringar Academy
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">

                Certificate Management
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">

                Generate luxury academy certificates with premium styling and instant student access.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

                  <Crown size={30} />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    {
                      certificates.length
                    }
                  </h2>

                  <p className="text-white/60">

                    Total Certificates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={
            generateCertificate
          }
          className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-8"
        >

          <div className="grid gap-6 md:grid-cols-3">

            {/* NAME */}
            <div>

              <label className="mb-3 block text-sm text-white/70">

                Student Name
              </label>

              <div className="relative">

                <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

                <input
                  type="text"
                  required
                  value={
                    studentName
                  }
                  onChange={(e) =>
                    setStudentName(
                      e.target.value
                    )
                  }
                  placeholder="Enter student name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>

              <label className="mb-3 block text-sm text-white/70">

                Student Email
              </label>

              <div className="relative">

                <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

                <input
                  type="email"
                  required
                  value={
                    studentEmail
                  }
                  onChange={(e) =>
                    setStudentEmail(
                      e.target.value
                    )
                  }
                  placeholder="Enter email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                />
              </div>
            </div>

            {/* COURSE */}
            <div>

              <label className="mb-3 block text-sm text-white/70">

                Course Name
              </label>

              <div className="relative">

                <GraduationCap className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />

                <input
                  type="text"
                  required
                  value={course}
                  onChange={(e) =>
                    setCourse(
                      e.target.value
                    )
                  }
                  placeholder="Enter course name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                />
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-5 text-lg font-semibold transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(255,79,163,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
          >

            <FileBadge size={22} />

            {loading
              ? "Generating Certificate..."
              : "Generate Premium Certificate"}
          </button>
        </form>

        {/* SEARCH */}
        <div className="relative mt-14">

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

        {/* CERTIFICATES */}
        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-7">

            <div>

              <h2 className="text-2xl font-bold">

                Issued Certificates
              </h2>

              <p className="mt-1 text-sm text-white/50">

                Automatically visible in student dashboard
              </p>
            </div>

            <span className="rounded-full bg-white/5 px-5 py-2 text-sm text-white/60">

              {
                filteredCertificates.length
              } Certificates
            </span>
          </div>

          {filteredCertificates.length === 0 ? (

            <div className="p-14 text-center text-white/60">

              No Certificates Found
            </div>

          ) : (

            <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-3">

              {filteredCertificates.map(
                (
                  certificate
                ) => (

                  <div
                    key={
                      certificate.id
                    }
                    className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-500/20"
                  >

                    {/* ICON */}
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">

                      <Award size={30} />
                    </div>

                    {/* NAME */}
                    <h3 className="text-xl font-bold">

                      {
                        certificate.studentName ||
                        "Unknown Student"
                      }
                    </h3>

                    {/* EMAIL */}
                    <p className="mt-2 text-sm text-white/50">

                      {
                        certificate.studentEmail ||
                        "No Email"
                      }
                    </p>

                    {/* COURSE */}
                    <p className="mt-4 text-pink-400 font-medium">

                      {
                        certificate.course ||
                        "No Course"
                      }
                    </p>

                    {/* DATE */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-white/50">

                      <CalendarDays size={16} />

                      Certificate Issued
                    </div>

                    {/* BADGES */}
                    <div className="mt-5 flex flex-wrap gap-3">

                      <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">

                        <BadgeCheck size={16} />

                        Verified
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">

                        <ShieldCheck size={16} />

                        Academy
                      </div>
                    </div>

                    {/* DOWNLOAD */}
                    {certificate.certificateUrl && (

                      <a
                        href={
                          certificate.certificateUrl
                        }
                        download
                        className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-3 font-medium transition hover:scale-[1.02]"
                      >

                        <Download size={18} />

                        Download Certificate
                      </a>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}