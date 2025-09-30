import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const leaderboardData = [
  { rank: 1, name: "Rohit Sharma", score: 500 },
  { rank: 2, name: "Anjali Verma", score: 450 },
  { rank: 3, name: "Siddharth Kumar", score: 400 },
  { rank: 4, name: "Neha Singh", score: 350 },
  { rank: 5, name: "Amit Yadav", score: 300 },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Leaderboard - CodemindAI</title>
        <meta name="description" content="Contest leaderboard on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Leaderboard</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboardData.map((user) => (
                <tr key={user.rank} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{user.rank}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-indigo-600">{user.score}</td>
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

export default Leaderboard;
