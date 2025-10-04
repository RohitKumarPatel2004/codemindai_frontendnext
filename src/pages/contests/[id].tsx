"use client";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";


const contests = [
  {
    id: 1,
    title: "DSA Quiz Contest #12",
    entryFee: "₹9",
    prizePool: "₹1,00,000",
    time: "2h 45m 30s",
    participants: 1250,
    maxParticipants: 2000,
    avatars: [
      "/images/avatar1.png",
      "/images/avatar2.png",
      "/images/avatar3.png",
      "/images/avatar4.png",
      "/images/avatar5.png",
    ],
    stats: {
      difficulty: "Medium",
      topics: ["DSA", "Arrays", "Trees"],
      languages: ["C++", "Java", "Python"],
      createdBy: "CodemindAI",
    },
    rules: {
      duration: "60 minutes",
      questions: "10 challenges",
    },
    scoring: {
      correct: "+4",
      wrong: "-1",
      skipped: "0",
    },
    prizeDistribution: [
      { place: "1st Place", amount: "₹50,000", color: "bg-yellow-400" },
      { place: "2nd Place", amount: "₹25,000", color: "bg-gray-400" },
      { place: "3rd Place", amount: "₹10,000", color: "bg-orange-400" },
      { place: "4th Place", amount: "₹5,000", color: "bg-blue-400" },
      { place: "5th Place", amount: "₹2,500", color: "bg-purple-500" },
      { place: "6th - 100th Place", amount: "₹100 each", color: "bg-green-500" },
    ],
  },
];

export default function ContestDetail() {
  const router = useRouter();
  const { id } = router.query;

  const contest = contests.find((c) => c.id === Number(id));
  if (!contest) return <p className="text-center mt-10">Contest not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* ✅ Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{contest.title}</h1>

        <p className="mt-4 inline-flex items-center gap-2 bg-red-500 px-4 py-1 rounded-lg text-sm md:text-base font-medium">
          <span>⏱️</span> Starts in: {contest.time}
        </p>

        {/* Entry Fee & Prize Pool */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 w-full max-w-4xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-white/20 backdrop-blur-lg py-3 rounded-xl shadow text-center hover:bg-white/30 transition"
          >
            <p className="text-base md:text-lg">Entry Fee</p>
            <p className="text-xl md:text-2xl font-bold text-yellow-300">
              {contest.entryFee}
            </p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-white/20 backdrop-blur-lg py-3 rounded-xl shadow text-center hover:bg-white/30 transition"
          >
            <p className="text-base md:text-lg">Total Prize Pool</p>
            <p className="text-xl md:text-2xl font-bold text-yellow-300">
              {contest.prizePool}
            </p>
          </motion.button>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contests/live")}
          className="mt-10 bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-lg font-semibold shadow-md flex items-center mx-auto gap-2"
        >
          <span>🏆</span> Join Contest
        </motion.button>
      </div>

      {/* ✅ Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Prize Pool Breakdown */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow p-6 transition"
          >
            <h2 className="text-lg font-bold mb-4">🏆 Prize Pool Breakdown</h2>
            <div className="grid grid-cols-2 font-semibold text-gray-500 mb-2">
              <span>Rank</span>
              <span className="text-right">Prize</span>
            </div>
            <ul className="space-y-3">
              {contest.prizeDistribution.map((prize, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b pb-2 text-gray-700 hover:bg-gray-50 transition rounded px-2"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 flex items-center justify-center rounded-full text-white text-sm font-bold ${prize.color}`}
                    >
                      {idx + 1}
                    </span>
                    <span>{prize.place}</span>
                  </div>
                  <span className="font-medium text-orange-500">
                    {prize.amount}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contest Rules */}
  {/* Contest Rules - Styled like screenshot */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white rounded-lg shadow p-6 transition"
>
  <h2 className="text-lg font-bold mb-4">📜 Contest Rules</h2>

  {/* Duration & Questions */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
      <p className="text-gray-600">⏳ Duration</p>
      <p className="text-blue-600 font-semibold text-lg">
        {contest.rules.duration}
      </p>
    </div>
    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
      <p className="text-gray-600">❓ Questions</p>
      <p className="text-green-600 font-semibold text-lg">
        {contest.rules.questions}
      </p>
    </div>
  </div>

  {/* Scoring System */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">Scoring System</h3>
    <div className="flex flex-wrap gap-3">
      <span className="px-4 py-2 rounded-md bg-green-50 text-green-600 font-medium shadow-sm">
        +{contest.scoring.correct} Correct Answer
      </span>
      <span className="px-4 py-2 rounded-md bg-red-50 text-red-600 font-medium shadow-sm">
        {contest.scoring.wrong} Wrong Answer
      </span>
      <span className="px-4 py-2 rounded-md bg-gray-50 text-gray-600 font-medium shadow-sm">
        {contest.scoring.skipped} Skipped
      </span>
    </div>
  </div>

  {/* Anti-Cheating Rules */}
  <div>
    <h3 className="font-semibold mb-2">Anti-Cheating Rules</h3>
    <ul className="space-y-2 text-sm text-gray-700">
      <li className="flex items-center gap-2">
        <span className="text-red-500">❤️</span>
        No tab switching allowed during the contest
      </li>
      <li className="flex items-center gap-2">
        <span className="text-red-500">📷</span>
        Camera proctoring may be enabled (optional)
      </li>
      <li className="flex items-center gap-2">
        <span className="text-red-500">🚫</span>
        Multiple accounts participation is prohibited
      </li>
      <li className="flex items-center gap-2">
        <span className="text-red-500">⚠️</span>
        Violation may result in disqualification
      </li>
    </ul>
  </div>
</motion.div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Participants */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow p-6 transition"
          >
            <h2 className="text-lg font-bold mb-4">👥 Participants</h2>
            <p className="text-purple-600 font-semibold mb-3">
              {contest.participants.toLocaleString()} joined /{" "}
              {contest.maxParticipants.toLocaleString()} max
            </p>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-purple-500 h-2 rounded-full"
                style={{
                  width: `${
                    (contest.participants / contest.maxParticipants) * 100
                  }%`,
                }}
              ></div>
            </div>
            <div className="flex -space-x-3">
              {contest.avatars.map((avatar, idx) => (
                <Image
                  key={idx}
                  src={avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white hover:scale-110 transition"
                />
              ))}
              <span className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full border">
                +1.2k
              </span>
            </div>
          </motion.div>

          {/* Contest Stats */}
         {/* Contest Stats */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white rounded-lg shadow p-6 transition"
>
  <h2 className="text-lg font-bold mb-4">📊 Contest Stats</h2>
  
  <div className="space-y-3 text-sm">
    {/* Difficulty */}
    <div className="flex justify-between">
      <span className="text-gray-600">Difficulty</span>
      <span className="font-medium text-orange-500">
        {contest.stats.difficulty}
      </span>
    </div>

    {/* Topics */}
    <div className="flex justify-between">
      <span className="text-gray-600">Topics</span>
      <span className="font-medium text-gray-800">
        {contest.stats.topics.join(", ")}
      </span>
    </div>

    {/* Languages */}
    <div className="flex justify-between">
      <span className="text-gray-600">Languages</span>
      <span className="font-medium text-gray-800">
        {contest.stats.languages.join(", ")}
      </span>
    </div>

    {/* Created By */}
    <div className="flex justify-between">
      <span className="text-gray-600">Created by</span>
      <span className="font-medium text-blue-600">
        {contest.stats.createdBy}
      </span>
    </div>
  </div>
</motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
