import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CategoriesSection from "../components/CategoriesSection";
import LeaderboardSection from "../components/LeaderboardSection";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>CodemindAI - Coding Platform</title>
        <meta name="description" content="Practice coding and improve skills with CodemindAI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Features */}
        <FeaturesSection />

        {/* Categories */}
        <CategoriesSection />

        {/* Leaderboard */}
        <LeaderboardSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
