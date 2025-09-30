import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

const initialProblems = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Reverse Linked List", difficulty: "Medium" },
  { id: 3, title: "Dynamic Programming Challenge", difficulty: "Hard" },
];

const AdminProblems = () => {
  const [problems, setProblems] = useState(initialProblems);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this problem?")) {
      setProblems(problems.filter((problem) => problem.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Admin - Problems Management | CodemindAI</title>
        <meta name="description" content="Admin Problems Management" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Problems Management</h1>

        <div className="flex justify-end mb-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
            Add Problem
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
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {problems.map((problem) => (
                <tr key={problem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{problem.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{problem.difficulty}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(problem.id)}
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

export default AdminProblems;
