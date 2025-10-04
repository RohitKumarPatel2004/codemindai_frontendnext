// pages/problems.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FiltersSidebar, { Filters } from "../components/FiltersSidebar";
import ProblemsTable from "../components/ProblemsTable";

const Problems: NextPage = () => {
  const [problems, setProblems] = useState<any[]>([]);
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    difficulties: [],
    statuses: [],
    sortBy: "default",
  });

  // ✅ Generate data only on the client
  useEffect(() => {
    const demoProblems = Array.from({ length: 50 }).map((_, i) => {
      const titles = [
        "Two Sum",
        "Add Two Numbers",
        "Longest Substring Without Repeating Characters",
        "Median of Two Sorted Arrays",
        "Longest Palindromic Substring",
      ];
      const tags = ["Array", "String", "Math", "Dynamic Programming", "Tree", "Graph"];
      const diffs: Array<"Easy" | "Medium" | "Hard"> = ["Easy", "Medium", "Hard"];
      const statuses: Array<"Solved" | "Unsolved" | "Premium Only"> = [
        "Solved",
        "Unsolved",
        "Premium Only",
      ];

      return {
        id: i + 1,
        title: titles[i % titles.length],
        tags: [tags[i % tags.length], tags[(i + 2) % tags.length]],
        difficulty: diffs[i % diffs.length],
        acceptance: Math.random() * 90 + 10,
        status: statuses[i % statuses.length],
      };
    });
    setProblems(demoProblems);
  }, []);

  const uniqueCategories = Array.from(new Set(problems.flatMap((p) => p.tags)));
  const clearAll = () =>
    setFilters({ categories: [], difficulties: [], statuses: [], sortBy: "default" });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Problems - CodeBettalX</title>
      </Head>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-72 w-full">
            {problems.length > 0 && (
              <FiltersSidebar
                allCategories={uniqueCategories}
                filters={filters}
                setFilters={setFilters}
                clearAll={clearAll}
              />
            )}
          </div>

          <ProblemsTable data={problems} filters={filters} setFilters={setFilters} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Problems;
