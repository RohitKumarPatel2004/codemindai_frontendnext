"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContestCard, { Contest } from "../components/ContestCard";
import { useState } from "react";


const contests: Contest[] = [
  {
    id: 1,
    title: "DSA Quiz Contest #12",
    prizePool: "₹1,00,000",
    entryFee: "₹9",
    time: "2h 45m",
    participants: 847,
    avatars: ["/images/avatar1.png", "/images/avatar2.png", "/images/avatar3.png"],
    prizeDistribution: [
      { place: "1st Place", amount: "₹50,000" },
      { place: "2nd Place", amount: "₹25,000" },
      { place: "3rd Place", amount: "₹10,000" },
      { place: "4th-5th", amount: "₹2,500 each" },
      { place: "6th-100th", amount: "₹100 each" },
    ],
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Python Mastery Quiz",
    prizePool: "₹75,000",
    entryFee: "₹15",
    time: "5h 20m",
    participants: 623,
    avatars: ["/images/avatar4.png", "/images/avatar3.png", "/images/avatar1.png"],
    prizeDistribution: [
      { place: "1st Place", amount: "₹35,000" },
      { place: "2nd Place", amount: "₹20,000" },
      { place: "3rd Place", amount: "₹10,000" },
      { place: "4th-10th", amount: "₹1,000 each" },
      { place: "11th-50th", amount: "₹200 each" },
    ],
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Python Mastery Quiz",
    prizePool: "₹75,000",
    entryFee: "₹15",
    time: "LIVE",
    participants: 623,
    avatars: ["/images/avatar4.png", "/images/avatar3.png", "/images/avatar1.png"],
    prizeDistribution: [
      { place: "1st Place", amount: "₹35,000" },
      { place: "2nd Place", amount: "₹20,000" },
      { place: "3rd Place", amount: "₹10,000" },
      { place: "4th-10th", amount: "₹1,000 each" },
      { place: "11th-50th", amount: "₹200 each" },
    ],
    status: "Ongoing",
  },
  {
    id: 3,
    title: "JavaScript Challenge",
    prizePool: "₹25,000",
    entryFee: "Free",
    time: "LIVE",
    participants: 1234,
    avatars: ["/images/avatar2.png", "/images/avatar3.png"],
    prizeDistribution: [
      { place: "1st Place", amount: "₹15,000" },
      { place: "2nd Place", amount: "₹7,500" },
      { place: "3rd Place", amount: "₹2,500" },
    ],
    status: "Completed",
  },
];

const Contests: NextPage = () => {
  const [activeTab, setActiveTab] = useState<"Upcoming" | "Ongoing" | "Completed">("Upcoming");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
  <Head>
    <title>Contests - CodeBattelX</title>
    <meta name="description" content="Participate in coding contests on CodeBattelX" />
  </Head>

  <Navbar />

  {/* Main Content */}
  <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">Coding Contests</h1>
    <p className="text-gray-600 mb-6">
      Join exciting coding quizzes and win amazing prizes!
    </p>

    {/* Filter Box */}
   <div className="bg-white border rounded-lg p-4 mb-8">
  {/* Tabs */}
  <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
    {["Upcoming", "Ongoing", "Completed"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab as any)}
        className={`px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto ${
          activeTab === tab
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Filters */}
  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
    <select className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto">
      <option>Sort by Prize Pool</option>
      <option>High to Low</option>
      <option>Low to High</option>
    </select>

    <select className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto">
      <option>Entry Fee</option>
      <option>Free</option>
      <option>Paid</option>
    </select>

    <select className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto">
      <option>Start Time</option>
      <option>Earliest</option>
      <option>Latest</option>
    </select>
  </div>
</div>


    {/* Contest Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {contests
        .filter((contest) => contest.status === activeTab)
        .map((contest) => (
          <ContestCard key={contest.id} contest={contest} />
        ))}
    </div>
  </main>

  <Footer />
</div>

  );
};

export default Contests;
