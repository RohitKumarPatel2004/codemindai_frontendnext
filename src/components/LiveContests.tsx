"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";



const liveContest = {
  id: 4,
  level: "Intermediate",
  title: "Codemind Weekly Contest #44",
  started: "Saturday, December 14, 2023 • 2:00 PM UTC",
  timeRemaining: "45m 23s",
  participants: 2156,
  participantAvatars: [
    "/images/avatar1.png",
    "/images/avatar2.png",
    "/images/avatar3.png",
  ],
};

const LiveContests = () => {
  return (
    <section className="py-20 bg-gray-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Live Contests</h2>

        {/* Card */}
        <div className="bg-white border rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                Live Now
              </span>
              <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
                {liveContest.level}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {liveContest.title}
            </h3>
            <p className="text-gray-500 text-sm mb-3">
              Started: {liveContest.started}
            </p>

            {/* ✅ Participants section with avatars */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {liveContest.participantAvatars.map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    alt="participant"
                    width={28}
                    height={28}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                +{liveContest.participants} participants
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center mt-6 md:mt-0">
            <p className="text-sm text-gray-500">Time Remaining</p>
            <p className="text-lg font-semibold text-red-600">
              {liveContest.timeRemaining}
            </p>
          <Link href="/contests/live">
    <button className="mt-3 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition">
      Join Contest
    </button>
  </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveContests;
