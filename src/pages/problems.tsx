import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FiltersSidebar from "../components/FiltersSidebar";
import ProblemsTable from "../components/ProblemsTable";
import { useState } from "react";

const Problems: NextPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Problems - CodeBettalX</title>
        <meta name="description" content="Practice coding problems on CodeBettalX" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col md:flex-row gap-6">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filters Sidebar */}
        <aside
          className={`${
            showFilters ? "block" : "hidden"
          } md:block md:w-1/4 w-full`}
        >
          <FiltersSidebar />
        </aside>

        {/* Problems Table */}
        <section className="md:w-3/4 w-full">
          <ProblemsTable />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Problems;
