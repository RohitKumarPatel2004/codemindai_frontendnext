"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const leaderboard = [
  {
    name: "Alex Chen",
    avatar: "/images/avatar1.png",
    points: 2847,
    medal: "🥇",
    bg: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    name: "Sarah Kim",
    avatar: "/images/avatar2.png",
    points: 2634,
    medal: "🥈",
    bg: "bg-blue-50 hover:bg-blue-100",
  },
  {
    name: "Mike Johnson",
    avatar: "/images/avatar3.png",
    points: 2521,
    medal: "🥉",
    bg: "bg-emerald-50 hover:bg-emerald-100",
  },
  {
    name: "Emma Davis",
    avatar: "/images/avatar4.png",
    points: 2198,
    medal: "⭐",
    bg: "bg-pink-50 hover:bg-pink-100",
  },
];

const stats = [
  {
    title: "Code Submissions",
    value: 1000000,
    gradient: "from-purple-500 to-pink-500",
    textColor: "text-purple-600",
    fill: 90,
  },
  {
    title: "Daily Active Users",
    value: 500,
    gradient: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600",
    fill: 70,
  },
  {
    title: "Registered Users",
    value: 50000,
    gradient: "from-green-500 to-emerald-500",
    textColor: "text-green-600",
    fill: 75,
  },
  {
    title: "Problems Solved",
    value: 1000,
    gradient: "from-pink-500 to-purple-500",
    textColor: "text-pink-600",
    fill: 85,
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
    <section className="py-20 bg-gray-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left - Community Stats */}
        <div className="animate-fadeInLeft">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Growing <span className="text-blue-600">CodeBattelX</span> Community
          </h2>
          <p className="text-gray-600 mb-8">
            Thousands of developers are already improving their skills with CodeBattelX 🚀
          </p>

          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                <div className="flex justify-between mb-2">
                  <p className="text-gray-600">{stat.title}</p>
                  <p className={`font-bold ${stat.textColor}`}>
                    {animatedValues[i].toLocaleString()}+
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${stat.gradient} h-2 rounded-full transition-all duration-700`}
                    style={{
                      width: `${(animatedValues[i] / stat.value) * stat.fill}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Leaderboard */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border animate-fadeInRight">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            🏆 Top Coders This Week
          </h3>
          <ul className="space-y-4">
            {leaderboard.map((coder, idx) => (
              <li
                key={idx}
                className={`flex items-center justify-between p-3 rounded-lg transition group ${coder.bg}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full font-bold bg-white shadow-sm text-gray-800 group-hover:bg-blue-600 group-hover:text-white transition">
                    {idx + 1}
                  </span>
                  <Image
                    src={coder.avatar}
                    alt={coder.name}
                    width={40}
                    height={40}
                    className="rounded-full border"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {coder.name}
                    </p>
                    <p className="text-sm text-gray-500">{coder.points} pts</p>
                  </div>
                </div>
                <span className="text-xl">{coder.medal}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View Full Leaderboard →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
