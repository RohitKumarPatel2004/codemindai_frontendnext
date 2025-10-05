"use client";
import React from "react";
import Image from "next/image";

const upcomingContests = [
  {
    id: 1,
    level: "Beginner",
    title: "Codemind Beginner Contest #12",
    date: "Sunday, December 17, 2023 • 10:00 AM UTC",
    duration: "1hr",
    registered: 1234,
    startsIn: "3d 8h 15m",
    frequency: "Weekly",
    participants: ["/images/avatar1.png", "/images/avatar2.png", "/images/avatar3.png"],
  },
  {
    id: 2,
    level: "Intermediate",
    title: "Algorithm Masters Challenge",
    date: "Tuesday, December 19, 2023 • 6:00 PM UTC",
    duration: "2hrs",
    registered: 892,
    startsIn: "5d 12h 45m",
    frequency: "Bi-weekly",
    participants: ["/images/avatar2.png", "/images/avatar4.png", "/images/avatar1.png"],
  },
  {
    id: 3,
    level: "Advanced",
    title: "December Grand Championship",
    date: "Saturday, December 23, 2023 • 3:00 PM UTC",
    duration: "3hrs",
    registered: 3456,
    startsIn: "9d 6h 20m",
    frequency: "Monthly",
    participants: ["/images/avatar3.png", "/images/avatar4.png", "/images/avatar2.png"],
  },
];

const UpcomingContests = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Contests</h2>
          <a
            href="/contests"
            className="text-indigo-600 font-medium hover:underline flex items-center gap-1"
          >
            View All →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingContests.map((contest) => (
            <div
              key={contest.id}
              className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    contest.level === "Beginner"
                      ? "bg-blue-100 text-blue-600"
                      : contest.level === "Intermediate"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {contest.level}
                </span>
                <span className="text-gray-500 text-xs">{contest.frequency}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {contest.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{contest.date}</p>

              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>🕒 {contest.duration}</span>

                {/* ✅ Avatars + registered count */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {contest.participants.slice(0, 3).map((avatar, i) => (
                      <Image
                        key={i}
                        src={avatar}
                        alt="participant"
                        width={24}
                        height={24}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    +{contest.registered} registered
                  </span>
                </div>
              </div>

              <div className="mt-3 border-t pt-3">
                <p className="text-sm text-gray-500">Starts in</p>
                <p className="font-semibold text-gray-800">{contest.startsIn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingContests;
