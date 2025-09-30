import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminCard from "../../components/AdminCard";

const adminStats = [
  { id: 1, title: "Total Users", count: 1200, color: "bg-indigo-100", textColor: "text-indigo-600" },
  { id: 2, title: "Total Problems", count: 350, color: "bg-green-100", textColor: "text-green-600" },
  { id: 3, title: "Total Contests", count: 45, color: "bg-yellow-100", textColor: "text-yellow-600" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Admin Dashboard - CodemindAI</title>
        <meta name="description" content="Admin dashboard overview" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {adminStats.map((stat) => (
            <AdminCard key={stat.id} title={stat.title} count={stat.count} color={stat.color} textColor={stat.textColor} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;

