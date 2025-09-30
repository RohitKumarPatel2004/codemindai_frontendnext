import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

const Profile: NextPage = () => {
  const user = {
    name: "Rohit Sharma",
    email: "rohit@example.com",
    avatar: "/images/avatar1.png",
    totalSolved: 120,
    rank: 15,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Profile - CodemindAI</title>
        <meta name="description" content="Your profile on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Profile</h1>
        <ProfileCard user={user} />
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
