import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddCash = () => {
  const [amount, setAmount] = useState<number | "">("");

  const handleAddCash = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate payment gateway / API
    console.log("Add Cash Amount:", amount);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Add Cash - CodemindAI</title>
        <meta name="description" content="Add cash to your CodemindAI wallet" />
      </Head>

      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add Cash</h2>
          <form onSubmit={handleAddCash} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Amount (₹)</label>
              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter amount"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
            >
              Add Cash
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddCash;
