import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const contestResult = {
  title: "Monthly Coding Challenge",
  rank: 12,
  score: 380,
  totalParticipants: 150,
  solvedProblems: [
    { id: 1, title: "Two Sum", status: "Correct" },
    { id: 2, title: "Reverse Linked List", status: "Correct" },
    { id: 3, title: "Dynamic Programming Challenge", status: "Incorrect" },
  ],
};

const ContestResult = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{contestResult.title} - Result | CodemindAI</title>
        <meta name="description" content={`Result for ${contestResult.title}`} />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{contestResult.title} - Result</h1>

        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <p className="text-gray-700">
            Your Rank: <span className="font-semibold">{contestResult.rank}</span> /{" "}
            {contestResult.totalParticipants}
          </p>
          <p className="text-gray-700">
            Total Score: <span className="font-semibold text-indigo-600">{contestResult.score}</span>
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Solved Problems</h2>
            <ul className="space-y-2">
              {contestResult.solvedProblems.map((problem) => (
                <li
                  key={problem.id}
                  className={`p-3 border rounded-lg flex justify-between items-center ${
                    problem.status === "Correct" ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <span>{problem.title}</span>
                  <span
                    className={`font-semibold ${
                      problem.status === "Correct" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {problem.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
            View Leaderboard
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContestResult;
