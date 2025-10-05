"use client";
import { motion } from "framer-motion";

interface Stats {
  solved: number;
  contests: number;
  accuracy: number;
  streak: number;
  total: number;
}

export default function StatsGrid({ stats }: { stats: Stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
      {/* Problems Solved */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center"
      >
        <p className="text-3xl font-bold text-gray-900">{stats.solved}</p>
        <p className="text-gray-600 text-sm mb-2">Problems Solved</p>
        <div className="flex flex-col items-center gap-1 text-xs">
          <span className="bg-green-100 text-green-700 px-2 py-[1px] rounded-md">
            Easy: 180
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-[1px] rounded-md">
            Med: 250
          </span>
          <span className="bg-red-100 text-red-700 px-2 py-[1px] rounded-md">
            Hard: 94
          </span>
        </div>
      </motion.div>

      {/* Contest Rating */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center"
      >
        <p className="text-3xl font-bold text-purple-600">{stats.contests}</p>
        <p className="text-gray-600 text-sm">Contest Rating</p>
        <p className="text-gray-400 text-xs mt-1">Rank: 2,456</p>
      </motion.div>

      {/* Acceptance Rate */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center"
      >
        <p className="text-3xl font-bold text-green-600">{stats.accuracy}%</p>
        <p className="text-gray-600 text-sm">Acceptance Rate</p>
      </motion.div>

      {/* Current Streak */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center"
      >
        <p className="text-3xl font-bold text-orange-600">{stats.streak}</p>
        <p className="text-gray-600 text-sm">Current Streak</p>
        <p className="text-gray-400 text-xs mt-1">days</p>
      </motion.div>

      {/* Total Submissions */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center"
      >
        <p className="text-3xl font-bold text-gray-900">
          {stats.total.toLocaleString()}
        </p>
        <p className="text-gray-600 text-sm">Total Submissions</p>
      </motion.div>
    </div>
  );
}
