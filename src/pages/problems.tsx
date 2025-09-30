import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FiltersSidebar from "../components/FiltersSidebar";
import ProblemsTable from "../components/ProblemsTable";

const Problems: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Problems - CodemindAI</title>
        <meta name="description" content="Practice coding problems on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="md:w-1/4">
          <FiltersSidebar />
        </aside>

        {/* Problems Table */}
        <section className="md:w-3/4">
          <ProblemsTable />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Problems;
