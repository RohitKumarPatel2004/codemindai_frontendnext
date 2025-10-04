// pages/wallet.tsx
"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WalletCard from "../components/WalletCard";

const transactions = [
  { id: 1, date: "16 Jan 2024", type: "Deposit", description: "UPI Payment", amount: 500, status: "Success" },
  { id: 2, date: "15 Jan 2024", type: "Withdraw", description: "Bank Transfer", amount: -200, status: "Processing" },
  { id: 3, date: "14 Jan 2024", type: "Prize", description: "Weekly Coding Challenge", amount: 150, status: "Success" },
  { id: 4, date: "13 Jan 2024", type: "Entry Fee", description: "Algorithm Sprint Contest", amount: -50, status: "Success" },
  { id: 5, date: "12 Jan 2024", type: "Bonus", description: "Welcome Bonus", amount: 100, status: "Success" },
];

const Wallet: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Wallet - CodeBattelX</title>
      </Head>
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <WalletCard transactions={transactions} />
      </main>
      <Footer />
    </div>
  );
};

export default Wallet;
