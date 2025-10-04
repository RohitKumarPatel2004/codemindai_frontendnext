"use client";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Leaderboard = () => {
  const leaderboard = [
    {
      rank: 1,
      name: "alex_coder",
      role: "Expert",
      score: 2450,
      time: "45:23",
      prize: "₹50,000",
      avatar: "/images/avatar1.png",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-300",
      icon: "👑",
    },
    {
      rank: 2,
      name: "sarah_dev",
      role: "Advanced",
      score: 2380,
      time: "47:15",
      prize: "₹25,000",
      avatar: "/images/avatar2.png",
      color: "bg-gradient-to-r from-gray-300 to-gray-200",
      icon: "🥈",
    },
    {
      rank: 3,
      name: "mike_algo",
      role: "Expert",
      score: 2320,
      time: "48:42",
      prize: "₹10,000",
      avatar: "/images/avatar3.png",
      color: "bg-gradient-to-r from-orange-400 to-red-400",
      icon: "🥉",
    },
    {
      rank: 4,
      name: "john_python",
      role: "Intermediate",
      score: 2280,
      time: "52:18",
      prize: "₹5,000",
      avatar: "/images/avatar4.png",
    },
    {
      rank: 5,
      name: "emma_js",
      role: "Advanced",
      score: 2240,
      time: "54:33",
      prize: "₹3,000",
      avatar: "/images/avatar5.png",
    },
  ];

  const prizeDistribution = [
    { place: "1st Place", prize: "₹50,000", icon: "👑", color: "bg-yellow-100 text-yellow-600" },
    { place: "2nd Place", prize: "₹25,000", icon: "🥈", color: "bg-gray-200 text-gray-700" },
    { place: "3rd Place", prize: "₹10,000", icon: "🥉", color: "bg-orange-100 text-orange-600" },
    { place: "4th-10th", prize: "₹5,000 each" },
    { place: "11th-25th", prize: "₹3,000 each" },
    { place: "26th-50th", prize: "₹1,000 each" },
  ];

  return (
    <>
      <Head>
        <title>Leaderboard | CodeBettalX</title>
      </Head>
      <Navbar />

      <main className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Contest Header */}
          <div className="bg-gradient-to-r from-[#4163E9] to-[#8A2BE2] text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">DSA Quiz Contest #12</h2>
              <p className="mt-2 text-lg">
                Prize Pool: <span className="text-yellow-300 font-semibold">₹1,00,000</span>{" "}
                <span className="ml-2 text-sm bg-white text-black px-2 py-1 rounded">Entry: ₹9</span>
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-center">
              <div className="bg-white text-purple-700 rounded-lg px-4 py-2 shadow-md">
                <p className="text-lg font-semibold">02:45:32</p>
                <p className="text-xs">Time Remaining</p>
                <p className="text-xs">1,247 participants</p>
              </div>
            </div>
          </div>

          {/* Leaderboard & Prize Distribution */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Leaderboard */}
            <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Live Leaderboard</h3>
              <p className="text-xs text-gray-500 mb-4">Updates every 30 seconds</p>
              <div className="divide-y">
                {leaderboard.map((player, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between py-3 px-2 rounded-md ${
                      player.color ? player.color + " text-black" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold w-6">{player.icon || player.rank}</span>
                      <Image
                        src={player.avatar}
                        alt={player.name}
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-xs text-gray-600">{player.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 text-right">
                      <p className="font-bold">{player.score}</p>
                      <p>{player.time}</p>
                      <p className="font-semibold">{player.prize}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 font-semibold hover:underline">
                Load More Results
              </button>
            </div>

            {/* Prize Distribution */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Prize Distribution</h3>
              <div className="space-y-3">
                {prizeDistribution.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center p-3 rounded-md ${
                      item.color || "bg-gray-100"
                    }`}
                  >
                    <span>
                      {item.icon} {item.place}
                    </span>
                    <span className="font-semibold">{item.prize}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 font-semibold">
                Total Prize Pool: ₹1,00,000
              </p>
            </div>
          </div>

          {/* User Position */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar1.png"
                alt="You"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">Your Position</p>
                <p className="text-sm text-gray-500">Rank #47 of 1,247</p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <p>
                <span className="font-bold">1,850</span> Score
              </p>
              <p>
                <span className="font-bold">₹500</span> Prize
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Leaderboard;
