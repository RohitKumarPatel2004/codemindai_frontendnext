"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MdPhoneIphone,
  MdCreditCard,
  MdAccountBalance,
  MdAccountBalanceWallet,
} from "react-icons/md";

const AddCash = () => {
  const [amount, setAmount] = useState<number>(500);
  const [method, setMethod] = useState<string>("UPI");

  const presetAmounts = [50, 100, 250, 500, 1000];

  const handleAddCash = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Proceed to Pay:", amount, "via", method);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Add Cash - CodemindAI</title>
        <meta
          name="description"
          content="Add cash to your CodemindAI wallet"
        />
      </Head>

      <Navbar />

      {/* Current Balance */}
      <div className="flex justify-end max-w-5xl w-full mx-auto mt-6 px-4">
        <div className="bg-blue-600 text-white rounded-lg px-4 py-2 shadow-md text-center sm:text-right">
          <p className="text-sm">💳 Current Balance</p>
          <p className="text-lg font-bold">₹1,250</p>
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-xl shadow-md">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
            Add Cash to Wallet
          </h2>
          <p className="text-gray-500 text-center mb-6 text-sm sm:text-base">
            Securely add money to participate in coding contests
          </p>

          <form onSubmit={handleAddCash} className="space-y-6">
            {/* Enter Amount */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                Enter Amount
              </label>

              {/* Input with ₹ prefix */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <input
                  type="number"
                  min={50}
                  max={10000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Enter amount (₹50 – ₹10,000)"
                  className="w-full pl-7 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Preset Amount Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {presetAmounts.map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`px-4 sm:px-6 py-2 rounded-md text-gray-800 font-medium border text-sm sm:text-base transition ${
                      amount === amt
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-gray-100 hover:bg-gray-200 border-gray-200"
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Payment Method */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                Choose Payment Method
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: "UPI",
                    label: "UPI",
                    desc: "Google Pay, PhonePe, PayTM",
                    icon: (
                      <MdPhoneIphone className="text-purple-600 text-2xl sm:text-3xl" />
                    ),
                  },
                  {
                    id: "Card",
                    label: "Debit / Credit Card",
                    desc: "Visa, Mastercard, RuPay",
                    icon: (
                      <MdCreditCard className="text-green-600 text-2xl sm:text-3xl" />
                    ),
                  },
                  {
                    id: "NetBanking",
                    label: "NetBanking",
                    desc: "All major banks supported",
                    icon: (
                      <MdAccountBalance className="text-blue-600 text-2xl sm:text-3xl" />
                    ),
                  },
                  {
                    id: "Wallets",
                    label: "Wallets / Pay Later",
                    desc: "Paytm, Amazon Pay, Simpl",
                    icon: (
                      <MdAccountBalanceWallet className="text-orange-500 text-2xl sm:text-3xl" />
                    ),
                  },
                ].map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`p-4 rounded-lg border flex items-center gap-3 cursor-pointer transition ${
                      method === m.id
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex-shrink-0">{m.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        {m.label}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white rounded-lg border shadow-sm p-4 space-y-2 text-sm sm:text-base">
              <p className="flex justify-between text-gray-700">
                <span>Amount</span> <span>₹{amount}</span>
              </p>
              <p className="flex justify-between text-gray-700">
                <span>Transaction Fee</span>{" "}
                <span className="text-green-500">FREE</span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold text-gray-800">
                <span>Total Amount</span> <span>₹{amount}</span>
              </p>
            </div>

            {/* Secure Info */}
            <div className="flex items-center gap-2 text-green-600 text-xs sm:text-sm font-medium bg-green-50 border border-green-200 p-2 rounded">
              ✅ 100% Secure Payment – Encrypted & Trusted
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              🔒 Proceed to Pay ₹{amount}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddCash;
