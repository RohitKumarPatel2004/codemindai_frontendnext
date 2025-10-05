import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/profile/ProfileHeader";
import StatsGrid from "@/components/profile/StatsGrid";
import SubmissionChart from "@/components/profile/SubmissionChart";
import ProblemCategories from "@/components/profile/ProblemCategories";
import Achievements from "@/components/profile/Achievements";
import ActivityList from "@/components/profile/ActivityList";
import Sidebar from "@/components/profile/Sidebar";
import {
  userProfile,
  problemCategories,
  friends,
  leaderboard,
  activities,
} from "@/data/profileData";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>Profile - CodemindAI</title>
      </Head>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ProfileHeader user={userProfile} />
          <StatsGrid stats={userProfile.stats} />

          <div className="grid md:grid-cols-2 gap-6">
            <SubmissionChart />
            <ProblemCategories categories={problemCategories} />
          </div>

          <Achievements />
          <ActivityList activities={activities} />
        </div>

        <Sidebar friends={friends} leaderboard={leaderboard} />
      </main>

      <Footer />
    </div>
  );
}
