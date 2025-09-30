import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

const initialContests = [
  { id: 1, title: "Monthly Coding Challenge", date: "2025-10-10", status: "Upcoming" },
  { id: 2, title: "Weekly Algorithm Contest", date: "2025-09-25", status: "Completed" },
  { id: 3, title: "Data Structures Marathon", date: "2025-10-05", status: "Upcoming" },
];

const AdminContests = () => {
  const [contests, setContests] = useState(initialContests);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this contest?")) {
      setContests(contests.filter((contest) => contest.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Admin - Contests Management | CodemindAI</title>
        <meta name="description" content="Admin Contests Management" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Contests Management</h1>

        <div className="flex justify-end mb-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
            Add Contest
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {contests.map((contest) => (
                <tr key={contest.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{contest.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contest.date}</td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap font-semibold ${
                      contest.status === "Upcoming"
                        ? "text-yellow-600"
                        : contest.status === "Completed"
                        ? "text-gray-600"
                        : "text-green-600"
                    }`}
                  >
                    {contest.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(contest.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminContests;
