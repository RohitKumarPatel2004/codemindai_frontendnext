import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InterviewCard, { InterviewItem } from "../components/InterviewCard";

// Page component renamed to avoid conflict with type
const InterviewPage: NextPage = () => {
  const interviews: InterviewItem[] = [
    { id: 1, title: "Top 50 Data Structures Questions", category: "Data Structures", difficulty: "Medium" },
    { id: 2, title: "System Design Basics", category: "System Design", difficulty: "Hard" },
    { id: 3, title: "Common SQL Queries", category: "SQL", difficulty: "Easy" },
    { id: 4, title: "Dynamic Programming Patterns", category: "Algorithms", difficulty: "Hard" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Interview Prep - CodemindAI</title>
        <meta name="description" content="Prepare for technical interviews on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Interview Preparation
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interviews.map((item) => (
            <InterviewCard key={item.id} interview={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InterviewPage;
