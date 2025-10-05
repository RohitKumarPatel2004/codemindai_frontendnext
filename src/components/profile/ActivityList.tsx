"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Activity {
  title: string;
  category: string;
  status: string;
  time: string;
  difficulty?: "Easy" | "Medium" | "Hard";
}

export default function ActivityList({ activities }: { activities: Activity[] }) {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Problems", "Contests"];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-semibold">Recent Activity</h3>
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveTab(tab)}
              className={`text-sm px-3 py-1.5 rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01, backgroundColor: "#F9FAFB" }}
            transition={{ duration: 0.2 }}
            className="flex justify-between items-center py-3 px-2 rounded-lg cursor-pointer"
          >
            <div className="flex items-start gap-3">
              {/* Difficulty Dot */}
              <span
                className={`mt-1 h-2.5 w-2.5 rounded-full ${
                  act.difficulty === "Easy"
                    ? "bg-green-500"
                    : act.difficulty === "Medium"
                    ? "bg-orange-500"
                    : act.difficulty === "Hard"
                    ? "bg-red-500"
                    : "bg-gray-400"
                }`}
              ></span>

              {/* Title + Category */}
              <div>
                <p className="font-medium text-gray-800">{act.title}</p>
                <p className="text-sm text-gray-500">
                  {act.difficulty && (
                    <span className="font-medium text-gray-600">{act.difficulty}</span>
                  )}
                  {act.difficulty && " • "}
                  {act.category}
                </p>
              </div>
            </div>

            {/* Status + Time */}
            <div className="text-right">
              <p
                className={`text-sm font-semibold ${
                  act.status === "Accepted"
                    ? "text-green-600"
                    : act.status === "Wrong Answer"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {act.status}
              </p>
              <p className="text-xs text-gray-400">{act.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
