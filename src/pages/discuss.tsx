import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiscussionCard from "../components/DiscussionCard";

const discussions = [
  {
    id: 1,
    title: "How to optimize quicksort?",
    author: "Rohit Sharma",
    replies: 12,
    date: "2025-09-20",
  },
  {
    id: 2,
    title: "SQL JOIN vs Subquery",
    author: "Anjali Verma",
    replies: 8,
    date: "2025-09-18",
  },
  {
    id: 3,
    title: "Tips for competitive programming",
    author: "Siddharth Kumar",
    replies: 20,
    date: "2025-09-15",
  },
];

const Discuss: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Discuss - CodemindAI</title>
        <meta name="description" content="Join discussions on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Discussion Forum</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {discussions.map((discussion) => (
            <DiscussionCard key={discussion.id} discussion={discussion} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discuss;
