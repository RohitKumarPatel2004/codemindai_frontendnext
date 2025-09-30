"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const leaderboard = [
  {
    name: "Alex Chen",
    avatar: "/images/avatar1.png",
    points: 2847,
    medal: "🥇",
  },
  {
    name: "Sarah Kim",
    avatar: "/images/avatar2.png",
    points: 2634,
    medal: "🥈",
  },
  {
    name: "Mike Johnson",
    avatar: "/images/avatar3.png",
    points: 2521,
    medal: "🥉",
  },
];

const stats = [
  {
    title: "Total Submissions",
    value: 1247892,
    gradient: "from-yellow-400 to-green-400",
    textColor: "text-yellow-400",
    fill: 82, // screenshot ~82%
  },
  {
    title: "Daily Active Users",
    value: 12547,
    gradient: "from-green-400 to-yellow-400",
    textColor: "text-green-400",
    fill: 63, // screenshot ~63%
  },
  {
    title: "Problems Solved",
    value: 847293,
    gradient: "from-yellow-400 to-green-400",
    textColor: "text-yellow-400",
    fill: 74, // screenshot ~74%
  },
];

const LeaderboardSection = () => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const step = Math.ceil(end / (duration / 20));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setAnimatedValues((prev) => {
          const copy = [...prev];
          copy[i] = start;
          return copy;
        });
      }, 20);
    });
  }, []);

  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Top Coders */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 flex items-center gap-2 mb-6">
            🏆 Top Coders
          </h2>
          <div className="space-y-4">
            {leaderboard.map((user, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-xl ${
                  idx === 0
                    ? "bg-gradient-to-r from-green-600 to-green-400"
                    : "bg-[#1E293B]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{user.name}</h3>
                    <p className="text-gray-300 text-sm">{user.points} points</p>
                  </div>
                </div>
                <span className="text-2xl">{user.medal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Stats */}
        <div>
          <h2 className="text-xl font-bold text-green-400 flex items-center gap-2 mb-6">
            📊 Platform Stats
          </h2>
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#1E293B] p-5 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-between mb-2">
                  <p className="text-gray-300">{stat.title}</p>
                  <p className={`font-bold ${stat.textColor}`}>
                    {animatedValues[i].toLocaleString()}
                  </p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${stat.gradient} h-2 rounded-full transition-all duration-700`}
                    style={{
                      width: `${
                        (animatedValues[i] / stat.value) * stat.fill
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
