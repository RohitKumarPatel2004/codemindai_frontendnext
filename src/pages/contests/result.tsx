"use client";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Trophy } from "lucide-react";
import { List, Calendar } from "lucide-react";
import Link from "next/link";

const ContestResult = () => {
  const accuracyData = [
    { name: "Correct Answers", value: 8 },
    { name: "Wrong Answers", value: 2 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <>
      <Head>
        <title>Contest Result | CodeBattelX</title>
      </Head>
      <Navbar />

      <main className="bg-gray-50 min-h-screen py-6 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Contest Summary Card */}
          <div className="bg-gradient-to-r from-[#4163E9] to-[#8A2BE2] rounded-xl shadow-md text-white p-5 sm:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              {/* Left Section */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  DSA Quiz Contest #12
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Contest Completed
                  </span>
                  <span className="text-sm">📅 28 Sept, 7:00 PM – 8:00 PM</span>
                </div>
              </div>

              {/* Right Section */}
              <div className="mt-2 md:mt-0">
                <span className="flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  🏆 You Won!
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 text-center">
              <div>
                <p className="text-lg sm:text-2xl font-bold">#24</p>
                <p className="text-xs sm:text-sm text-gray-100">
                  Your Rank<br />out of 1,200
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold">78</p>
                <p className="text-xs sm:text-sm text-gray-100">
                  Points<br />Total Score
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold">52:10</p>
                <p className="text-xs sm:text-sm text-gray-100">
                  Time Taken<br />mm:ss
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold text-yellow-300">
                  ₹100
                </p>
                <p className="text-xs sm:text-sm text-gray-100">
                  Prize Earned<br />Congratulations!
                </p>
              </div>
            </div>
          </div>

          {/* Claim Prize Section */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow">
            <h3 className="text-center text-base sm:text-lg font-semibold mb-3">
              Claim Your Prize
            </h3>
            <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
              Congratulations! You&apos;ve earned ₹100 in this contest.
            </p>

            {/* Prize Box */}
            <div className="bg-green-50 rounded-lg p-5 sm:p-6 text-center border border-green-200">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-3">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  ₹100
                </p>
                <p className="text-sm text-gray-600 mt-1">Prize Amount</p>
              </div>

              <button className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition">
                + Add to Wallet
              </button>

              <div className="mt-3 text-xs text-gray-500">
                <p>Current Wallet Balance: ₹1,250</p>
                <p>After adding: ₹1,350</p>
              </div>
            </div>
          </div>

          {/* Performance & Accuracy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Performance Breakdown */}
            <div className="bg-white rounded-xl shadow p-5">
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Performance Breakdown
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-lg">
                  <span>Questions Attempted</span>
                  <span className="font-medium text-blue-600">10 / 10</span>
                </div>
                <div className="flex justify-between items-center bg-green-50 px-3 py-2 rounded-lg">
                  <span>Correct Answers</span>
                  <span className="font-medium text-green-600">8</span>
                </div>
                <div className="flex justify-between items-center bg-red-50 px-3 py-2 rounded-lg">
                  <span>Wrong Answers</span>
                  <span className="font-medium text-red-500">2</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-lg">
                  <span>Accuracy</span>
                  <span className="font-medium text-blue-600">80%</span>
                </div>
              </div>
            </div>

            {/* Accuracy Breakdown */}
            <div className="bg-white rounded-xl shadow p-5">
              <h4 className="text-base sm:text-lg font-semibold mb-4">
                Accuracy Breakdown
              </h4>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={accuracyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {accuracyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="flex justify-center gap-6 text-xs sm:text-sm mt-4">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  Correct Answers
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  Wrong Answers
                </span>
              </div>
            </div>
          </div>

          {/* Leaderboard Button */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow text-center">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
              Want to see how others performed?
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Check out the complete leaderboard to see rankings and scores of
              all participants.
            </p>
              <Link href="/contests/leaderboard">
                          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow transition">
              <List className="w-4 h-4" />
              View Full Leaderboard
            </button>
              </Link>
            
          </div>

          {/* Next Challenge */}
          <div className="bg-gradient-to-r from-[#8A2BE2] to-[#4163E9] rounded-xl shadow p-6 sm:p-8 text-center text-white">
            <h4 className="text-base sm:text-lg font-bold mb-2">
              Ready for the Next Challenge?
            </h4>
            <p className="text-xs sm:text-sm mb-6 text-gray-100">
              Join upcoming contests and compete with thousands of developers worldwide.
            </p>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 bg-white text-purple-700 font-semibold rounded-md shadow hover:bg-gray-100 transition">
              <Calendar className="w-4 h-4 text-purple-600" />
              View Upcoming Contests
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContestResult;
