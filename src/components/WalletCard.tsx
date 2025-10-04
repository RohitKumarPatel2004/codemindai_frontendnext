// components/WalletCard.tsx
import { useState } from "react";
import { Banknote, Trophy, Gift, Shield } from "lucide-react";
import Link from "next/link";
type Transaction = {
  id: number;
  date: string;
  type: string;
  description: string;
  amount: number;
  status: string;
};

const WalletCard = ({ transactions }: { transactions: Transaction[] }) => {
  const [filter, setFilter] = useState("All Transactions");

  return (
    <div className="space-y-6">
      {/* ⚠️ KYC Banner */}
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span>⚠️ Complete your KYC verification to withdraw winnings.</span>
        <button className="text-indigo-600 font-semibold">Verify Now</button>
      </div>

      {/* 💳 Wallet Main Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 shadow">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="w-5 h-5" /> My Wallet
          </h2>
          <p className="text-sm opacity-80">100% Secure & RBI Compliant</p>
          <p className="text-3xl sm:text-4xl font-bold mt-2">₹1,250</p>
          <p className="text-sm opacity-90">Total Balance</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">

          <Link href="/add-cash">
          <button className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium">
            + Add Cash
          </button>
          </Link>
          <button className="flex-1 sm:flex-none bg-white hover:bg-gray-100 text-indigo-600 font-semibold px-5 py-2 rounded-lg">
            Withdraw
          </button>
        </div>
      </div>

      {/* 📊 Balance Breakdown with Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Deposits */}
        <div className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Deposits Balance</p>
            <p className="text-xl font-bold text-gray-800">₹800</p>
            <p className="text-xs text-gray-500">Available for contests</p>
          </div>
          <Banknote className="w-5 h-5 text-indigo-500" />
        </div>

        {/* Winnings */}
        <div className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Winnings Balance</p>
            <p className="text-xl font-bold text-green-600">₹350</p>
            <p className="text-xs text-gray-500">Withdrawable amount</p>
          </div>
          <Trophy className="w-5 h-5 text-green-500" />
        </div>

        {/* Bonus */}
        <div className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Bonus Balance</p>
            <p className="text-xl font-bold text-purple-600">₹100</p>
            <p className="text-xs text-gray-500">Contest entry only</p>
          </div>
          <Gift className="w-5 h-5 text-purple-500" />
        </div>
      </div>

      {/* 🔄 Withdrawal in Progress */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-blue-700 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>Withdrawal in Progress: ₹200 withdrawal initiated on 15 Jan 2024</span>
        <button className="text-indigo-600 font-semibold">Track Status</button>
      </div>

      {/* 📜 Transaction History */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 w-full">
        {/* Header with Filter + Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
          <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <select
              className="border rounded px-3 py-2 text-gray-600 text-sm w-full sm:w-auto"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All Transactions</option>
              <option>Deposits</option>
              <option>Withdrawals</option>
              <option>Prizes</option>
              <option>Entry Fees</option>
              <option>Bonuses</option>
            </select>
            <input
              type="text"
              placeholder="Search transactions..."
              className="border rounded px-3 py-2 text-sm text-gray-600 w-full sm:w-52"
            />
          </div>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase text-xs">Date</th>
                <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase text-xs">Type</th>
                <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase text-xs">Description</th>
                <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase text-xs">Amount</th>
                <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase text-xs">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 text-gray-700">{tx.date}</td>
                  <td className="px-4 sm:px-6 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${
                          tx.type === "Deposit"
                            ? "bg-green-100 text-green-700"
                            : tx.type === "Withdraw"
                            ? "bg-blue-100 text-blue-700"
                            : tx.type === "Prize"
                            ? "bg-purple-100 text-purple-700"
                            : tx.type === "Entry Fee"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                    >
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-gray-600">{tx.description}</td>
                  <td
                    className={`px-4 sm:px-6 py-3 font-semibold ${
                      tx.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {tx.amount > 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
                  </td>
                  <td className="px-4 sm:px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          tx.status === "Success"
                            ? "bg-green-100 text-green-700"
                            : tx.status === "Processing"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More */}
        <button className="mt-4 text-indigo-600 font-semibold text-sm hover:underline">
          Load More Transactions
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
