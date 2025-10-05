"use client";
import { motion } from "framer-motion";
import { Trophy, Flame, Medal, Star, Crown, Rocket } from "lucide-react";

const badges = [
  {
    label: "100 Problems",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    bg: "bg-yellow-50 border border-yellow-100",
    text: "text-yellow-600",
  },
  {
    label: "30-Day Streak",
    icon: <Flame className="w-6 h-6 text-blue-500" />,
    bg: "bg-blue-50 border border-blue-100",
    text: "text-blue-600",
  },
  {
    label: "Contest Winner",
    icon: <Medal className="w-6 h-6 text-green-500" />,
    bg: "bg-green-50 border border-green-100",
    text: "text-green-600",
  },
  {
    label: "500 Problems",
    icon: <Star className="w-6 h-6 text-purple-500" />,
    bg: "bg-purple-50 border border-purple-100",
    text: "text-purple-600",
  },
  {
    label: "1000 Problems",
    icon: <Crown className="w-6 h-6 text-gray-400" />,
    bg: "bg-gray-50 border border-gray-100",
    text: "text-gray-400",
  },
  {
    label: "Speed Demon",
    icon: <Rocket className="w-6 h-6 text-gray-400" />,
    bg: "bg-gray-50 border border-gray-100",
    text: "text-gray-400",
  },
];

export default function Achievements() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h3 className="text-gray-900 font-semibold mb-4">Badges & Achievements</h3>

      <div className="flex flex-wrap gap-4">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`flex flex-col items-center justify-center w-32 h-32 rounded-xl cursor-pointer ${badge.bg}`}
          >
            <div className="mb-2">{badge.icon}</div>
            <p className={`text-sm font-medium ${badge.text}`}>{badge.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
