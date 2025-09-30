import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WalletCard from "../components/WalletCard";

const transactions = [
  { id: 1, type: "Add Cash", amount: 500, date: "2025-09-20" },
  { id: 2, type: "Contest Entry", amount: -100, date: "2025-09-18" },
  { id: 3, type: "Add Cash", amount: 1000, date: "2025-09-15" },
];

const Wallet: NextPage = () => {
  const balance = 1400;

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Wallet - CodemindAI</title>
        <meta name="description" content="View your wallet and transactions on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Wallet</h1>
        <WalletCard balance={balance} transactions={transactions} />
      </main>

      <Footer />
    </div>
  );
};

export default Wallet;
