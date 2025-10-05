"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sidebar({ friends, leaderboard }: any) {
  return (
    <div className="space-y-6">
      {/* 🧑 Friends Section */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-4">Friends</h3>
        <ul className="space-y-3">
          {friends.map((friend: any, i: number) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <Image
                src={friend.avatar}
                alt={friend.name}
                width={38}
                height={38}
                className="rounded-full border border-gray-200"
              />
              <div>
                <p className="font-medium text-gray-800 text-sm">{friend.name}</p>
                <p className="text-xs text-gray-500">Rating: {1650 + i * 70}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* 🏆 Leaderboard Section */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-4">Leaderboard</h3>
        <ul className="space-y-3">
          {leaderboard.map((lb: any, i: number) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-between items-center text-gray-800 text-sm p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-semibold
                    ${
                      i === 0
                        ? "bg-yellow-400"
                        : i === 1
                        ? "bg-gray-400"
                        : i === 2
                        ? "bg-orange-400"
                        : "bg-gray-300"
                    }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`font-medium ${
                    lb.name.includes("Alex Chen")
                      ? "text-indigo-600"
                      : "text-gray-800"
                  }`}
                >
                  {lb.name.includes("Alex Chen") ? `${lb.name} (You)` : lb.name}
                </span>
              </div>
              <span className="font-semibold text-gray-700">{lb.points}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
