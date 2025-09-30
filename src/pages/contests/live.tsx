import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const liveContestData = {
  title: "Monthly Coding Challenge - Live",
  durationMinutes: 90,
  problems: [
    { id: 1, title: "Two Sum Problem" },
    { id: 2, title: "Reverse Linked List" },
    { id: 3, title: "Dynamic Programming Challenge" },
  ],
};

const LiveContest = () => {
  const [timeLeft, setTimeLeft] = useState(liveContestData.durationMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{liveContestData.title} - CodemindAI</title>
        <meta name="description" content={`Live contest: ${liveContestData.title}`} />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">{liveContestData.title}</h1>

        {/* Timer */}
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-1">Time Remaining</p>
          <p className="text-4xl font-bold text-indigo-600">{formatTime(timeLeft)}</p>
        </div>

        {/* Problems */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Problems</h2>
          <ul className="space-y-3">
            {liveContestData.problems.map((problem) => (
              <li
                key={problem.id}
                className="p-4 border rounded-lg hover:shadow-md transition flex justify-between items-center"
              >
                <span>{problem.title}</span>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  Solve
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveContest;
