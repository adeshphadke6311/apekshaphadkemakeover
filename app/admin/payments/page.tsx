"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import toast from "react-hot-toast";

import {
  CheckCircle,
  Clock3,
  XCircle,
  IndianRupee,
  Search,
  TrendingUp,
  Wallet,
  BadgeCheck,
  AlertCircle,
  User,
  BookOpen,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

type Payment = {
  id: string;
  studentId: string;
  studentName?: string;
  studentEmail?: string;
  amount: number;
  course: string;
  paymentType: string;
  status: string;
  createdAt?: any;
};

export default function AdminPaymentsPage() {

  const [
    payments,
    setPayments,
  ] = useState<Payment[]>(
    []
  );

  const [
    filteredPayments,
    setFilteredPayments,
  ] = useState<Payment[]>(
    []
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    search,
    setSearch,
  ] = useState("");

  // FETCH PAYMENTS
  const fetchPayments =
    async () => {

      try {

        const paymentsQuery =
          query(
            collection(
              db,
              "payments"
            ),
            orderBy(
              "createdAt",
              "desc"
            )
          );

        const querySnapshot =
          await getDocs(
            paymentsQuery
          );

        const paymentData:
          Payment[] = [];

        querySnapshot.forEach(
          (docSnap) => {

            paymentData.push({
              id: docSnap.id,
              ...(docSnap.data() as Omit<
                Payment,
                "id"
              >),
            });
          }
        );

        setPayments(
          paymentData
        );

        setFilteredPayments(
          paymentData
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to load payments"
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchPayments();

  }, []);

  // SEARCH
  useEffect(() => {

    const filtered =
      payments.filter(
        (payment) =>
          payment.course
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          payment.paymentType
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          payment.studentName
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          payment.studentEmail
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    setFilteredPayments(
      filtered
    );

  }, [search, payments]);

  // UPDATE STATUS
  const updateStatus =
    async (
      id: string,
      status: string
    ) => {

      try {

        await updateDoc(
          doc(
            db,
            "payments",
            id
          ),
          {
            status,
          }
        );

        setPayments(
          (prev) =>
            prev.map(
              (payment) =>
                payment.id ===
                id
                  ? {
                      ...payment,
                      status,
                    }
                  : payment
            )
        );

        toast.success(
          `Payment ${status}`
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Update Failed"
        );
      }
    };

  // TOTALS
  const approvedPayments =
    useMemo(
      () =>
        payments.filter(
          (payment) =>
            payment.status ===
            "approved"
        ),
      [payments]
    );

  const pendingPayments =
    useMemo(
      () =>
        payments.filter(
          (payment) =>
            payment.status ===
            "pending"
        ),
      [payments]
    );

  const rejectedPayments =
    useMemo(
      () =>
        payments.filter(
          (payment) =>
            payment.status ===
            "rejected"
        ),
      [payments]
    );

  const totalRevenue =
    approvedPayments.reduce(
      (
        total,
        payment
      ) =>
        total +
        payment.amount,
      0
    );

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-10 pt-32 text-white md:px-10 md:pt-36">

      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-green-500/10 via-[#0f172a] to-pink-500/10 p-8 shadow-[0_0_60px_rgba(16,185,129,0.08)]">

          {/* GLOW */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">

            {/* LEFT */}
            <div>

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">

                Sajshringar Academy
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">

                Admin Payments
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">

                Manage academy fee payments,
                approve transactions,
                track revenue,
                and monitor student payment history.
              </p>
            </div>

            {/* BADGE */}
            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-4 text-green-400">

              <ShieldCheck size={22} />

              <span className="font-medium">
                Secure Payment Panel
              </span>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mt-12">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

          <input
            type="text"
            placeholder="Search payments..."
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
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* REVENUE */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-green-500/10 p-4 text-green-400">

                <IndianRupee size={30} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  ₹{totalRevenue}
                </h2>

                <p className="text-white/60">
                  Total Revenue
                </p>
              </div>
            </div>
          </div>

          {/* APPROVED */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-green-500/10 p-4 text-green-400">

                <CheckCircle size={30} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  {
                    approvedPayments.length
                  }
                </h2>

                <p className="text-white/60">
                  Approved
                </p>
              </div>
            </div>
          </div>

          {/* PENDING */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

                <Clock3 size={30} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  {
                    pendingPayments.length
                  }
                </h2>

                <p className="text-white/60">
                  Pending
                </p>
              </div>
            </div>
          </div>

          {/* REJECTED */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-red-500/10 p-4 text-red-400">

                <XCircle size={30} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  {
                    rejectedPayments.length
                  }
                </h2>

                <p className="text-white/60">
                  Rejected
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

                Payment Management
              </h2>

              <p className="mt-1 text-sm text-white/50">

                Review and manage all student payments
              </p>
            </div>

            <span className="rounded-full bg-white/5 px-5 py-2 text-sm text-white/60">

              {filteredPayments.length} payments
            </span>
          </div>

          {loading ? (

            <div className="p-12 text-center text-white/60">

              Loading Payments...
            </div>

          ) : filteredPayments.length ===
            0 ? (

            <div className="flex flex-col items-center justify-center py-20">

              <Wallet
                size={70}
                className="mb-5 text-white/20"
              />

              <h2 className="text-2xl font-bold">

                No Payments Found
              </h2>

              <p className="mt-3 text-white/50">

                Payment requests will appear here
              </p>
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[1300px]">

                <thead>

                  <tr className="border-b border-white/10 text-left text-white/50">

                    <th className="p-6">
                      Student
                    </th>

                    <th className="p-6">
                      Course
                    </th>

                    <th className="p-6">
                      Amount
                    </th>

                    <th className="p-6">
                      Type
                    </th>

                    <th className="p-6">
                      Status
                    </th>

                    <th className="p-6">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {filteredPayments.map(
                    (
                      payment
                    ) => (
                      <tr
                        key={
                          payment.id
                        }
                        className="border-b border-white/5 transition hover:bg-white/[0.03]"
                      >

                        {/* STUDENT */}
                        <td className="p-6">

                          <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">

                              <User size={20} />
                            </div>

                            <div>

                              <h3 className="font-semibold">

                                {payment.studentName ||
                                  "Student"}
                              </h3>

                              <p className="mt-1 text-sm text-white/50">

                                {payment.studentEmail ||
                                  payment.studentId}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* COURSE */}
                        <td className="p-6">

                          <div className="flex items-center gap-2 text-pink-400">

                            <BookOpen size={16} />

                            {
                              payment.course
                            }
                          </div>
                        </td>

                        {/* AMOUNT */}
                        <td className="p-6">

                          <div className="flex items-center gap-2 font-semibold text-green-400">

                            <IndianRupee size={16} />

                            {
                              payment.amount
                            }
                          </div>
                        </td>

                        {/* TYPE */}
                        <td className="p-6">

                          <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">

                            {
                              payment.paymentType
                            }
                          </span>
                        </td>

                        {/* STATUS */}
                        <td className="p-6">

                          {payment.status ===
                          "approved" ? (

                            <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">

                              <BadgeCheck
                                size={16}
                              />

                              Approved
                            </span>

                          ) : payment.status ===
                            "rejected" ? (

                            <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">

                              <XCircle
                                size={16}
                              />

                              Rejected
                            </span>

                          ) : (

                            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">

                              <AlertCircle
                                size={16}
                              />

                              Pending
                            </span>
                          )}
                        </td>

                        {/* ACTIONS */}
                        <td className="p-6">

                          <div className="flex flex-wrap gap-3">

                            <button
                              onClick={() =>
                                updateStatus(
                                  payment.id,
                                  "approved"
                                )
                              }
                              disabled={
                                payment.status ===
                                "approved"
                              }
                              className="rounded-full bg-green-500/10 px-5 py-2 text-sm text-green-400 transition hover:bg-green-500/20 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() =>
                                updateStatus(
                                  payment.id,
                                  "rejected"
                                )
                              }
                              disabled={
                                payment.status ===
                                "rejected"
                              }
                              className="rounded-full bg-red-500/10 px-5 py-2 text-sm text-red-400 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              Reject
                            </button>
                          </div>
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

              Smart Payment & Revenue Management System
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-green-500/10 px-5 py-3 text-sm text-green-400">

            <TrendingUp size={18} />

            Revenue Tracking Active
          </div>
        </div>
      </div>
    </main>
  );
}