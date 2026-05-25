"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  addDoc,
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

import toast from "react-hot-toast";

import {
  CreditCard,
  CheckCircle,
  Clock3,
  Wallet,
  IndianRupee,
  BadgeCheck,
  AlertCircle,
} from "lucide-react";

type Payment = {
  id: string;
  amount: number;
  course: string;
  paymentType: string;
  status: string;
};

export default function StudentPaymentsPage() {

  const {
    user,
  } = useAuth();

  const [amount,
    setAmount] =
    useState("");

  const [course,
    setCourse] =
    useState("");

  const [paymentType,
    setPaymentType] =
    useState("");

  const [payments,
    setPayments] =
    useState<Payment[]>([]);

  const [loading,
    setLoading] =
    useState(false);

  // FETCH PAYMENTS
  const fetchPayments =
    async () => {

      if (!user) return;

      try {

        const q =
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

        const querySnapshot =
          await getDocs(q);

        const paymentData:
          Payment[] = [];

        querySnapshot.forEach(
          (doc) => {

            paymentData.push({
              id: doc.id,
              ...(doc.data() as Omit<
                Payment,
                "id"
              >),
            });
          }
        );

        setPayments(
          paymentData
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    fetchPayments();

  }, [user]);

  // TOTALS
  const totalPaid =
    payments
      .filter(
        (payment) =>
          payment.status ===
          "approved"
      )
      .reduce(
        (
          acc,
          curr
        ) =>
          acc + curr.amount,
        0
      );

  const totalPending =
    payments
      .filter(
        (payment) =>
          payment.status ===
          "pending"
      )
      .reduce(
        (
          acc,
          curr
        ) =>
          acc + curr.amount,
        0
      );

  // SUBMIT PAYMENT
  const handlePayment =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      if (!user) return;

      try {

        setLoading(true);

        await addDoc(
          collection(
            db,
            "payments"
          ),
          {
            studentId:
              user.uid,

            amount:
              Number(amount),

            course,

            paymentType,

            status:
              "pending",

            createdAt:
              new Date(),
          }
        );

        toast.success(
          "Payment Submitted Successfully"
        );

        setAmount("");
        setCourse("");
        setPaymentType("");

        fetchPayments();

      } catch (error) {

        console.log(error);

        toast.error(
          "Payment Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <main className="min-h-screen bg-[#050816] p-6 text-white md:p-10">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-12">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">
            Sajshringar Academy
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Student Payments
          </h1>
        </div>

        {/* STATS */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* TOTAL PAYMENTS */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-pink-500/10 p-4 text-pink-400">

                <Wallet size={32} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  {payments.length}
                </h2>

                <p className="text-white/60">
                  Total Payments
                </p>
              </div>
            </div>
          </div>

          {/* TOTAL PAID */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-green-500/10 p-4 text-green-400">

                <BadgeCheck size={32} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  ₹{totalPaid}
                </h2>

                <p className="text-white/60">
                  Approved Payments
                </p>
              </div>
            </div>
          </div>

          {/* PENDING */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-yellow-500/10 p-4 text-yellow-400">

                <AlertCircle size={32} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  ₹{totalPending}
                </h2>

                <p className="text-white/60">
                  Pending Payments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT FORM */}
        <form
          onSubmit={handlePayment}
          className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8"
        >

          <div className="mb-8 flex items-center gap-4">

            <div className="rounded-2xl bg-pink-500/10 p-4 text-pink-400">

              <CreditCard size={30} />
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Submit Payment
              </h2>

              <p className="text-white/60">
                Submit your course or booking payment
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* AMOUNT */}
            <div>

              <label className="mb-3 block text-sm text-white/70">
                Amount
              </label>

              <div className="relative">

                <IndianRupee className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

                <input
                  type="number"
                  placeholder="Enter Amount"
                  required
                  value={amount}
                  onChange={(e) =>
                    setAmount(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
                />
              </div>
            </div>

            {/* COURSE */}
            <div>

              <label className="mb-3 block text-sm text-white/70">
                Course
              </label>

              <input
                type="text"
                placeholder="Course Name"
                required
                value={course}
                onChange={(e) =>
                  setCourse(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-pink-500/40"
              />
            </div>

            {/* TYPE */}
            <div>

              <label className="mb-3 block text-sm text-white/70">
                Payment Type
              </label>

              <select
                required
                value={paymentType}
                onChange={(e) =>
                  setPaymentType(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-[#0b1020] px-5 py-4 outline-none transition focus:border-pink-500/40"
              >

                <option value="">
                  Select Payment Type
                </option>

                <option value="Course Fees">
                  Course Fees
                </option>

                <option value="Bridal Booking">
                  Bridal Booking
                </option>

                <option value="Workshop">
                  Workshop
                </option>

                <option value="Certification">
                  Certification
                </option>
              </select>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 font-semibold transition hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,79,163,0.35)]"
          >

            {loading
              ? "Submitting..."
              : "Submit Payment"}
          </button>
        </form>

        {/* PAYMENT HISTORY */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-6">

            <h2 className="text-2xl font-bold">
              Payment History
            </h2>

            <p className="text-sm text-white/50">
              {payments.length} payments found
            </p>
          </div>

          {payments.length ===
          0 ? (

            <div className="p-10 text-center text-white/60">

              No Payments Found
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px]">

                <thead>

                  <tr className="border-b border-white/10 text-left text-white/60">

                    <th className="p-6">
                      Amount
                    </th>

                    <th className="p-6">
                      Course
                    </th>

                    <th className="p-6">
                      Type
                    </th>

                    <th className="p-6">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {payments.map(
                    (
                      payment
                    ) => (
                      <tr
                        key={
                          payment.id
                        }
                        className="border-b border-white/5 transition hover:bg-white/[0.03]"
                      >

                        <td className="p-6 font-semibold text-pink-400">

                          ₹
                          {
                            payment.amount
                          }
                        </td>

                        <td className="p-6">
                          {
                            payment.course
                          }
                        </td>

                        <td className="p-6 text-white/70">
                          {
                            payment.paymentType
                          }
                        </td>

                        <td className="p-6">

                          <span
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm
                            ${
                              payment.status ===
                              "approved"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-yellow-500/10 text-yellow-400"
                            }`}
                          >

                            {payment.status ===
                            "approved" ? (
                              <CheckCircle
                                size={
                                  16
                                }
                              />
                            ) : (
                              <Clock3
                                size={
                                  16
                                }
                              />
                            )}

                            {
                              payment.status
                            }
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}