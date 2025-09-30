import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContestCard, { Contest } from "../components/ContestCard";

const contests: Contest[] = [
  {
    id: 1,
    title: "Monthly Coding Challenge",
    date: "2025-10-10",
    time: "18:00 IST",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Weekly Algorithm Contest",
    date: "2025-10-02",
    time: "20:00 IST",
    status: "Live",
  },
  {
    id: 3,
    title: "Data Structures Marathon",
    date: "2025-09-28",
    time: "17:00 IST",
    status: "Completed",
  },
];

const Contests: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contests - CodemindAI</title>
        <meta name="description" content="Participate in coding contests on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contests</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contests.map((contest) => (
            <ContestCard key={contest.id} contest={contest} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contests;
