import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContestCard from "../../components/ContestCard";

const contestDetails = {
  id: 1,
  title: "Monthly Coding Challenge",
  description:
    "Participate in our monthly coding challenge to improve your skills and compete with coders globally.",
  date: "2025-10-10",
  time: "18:00 IST",
  status: "Upcoming",
  problems: [
    { id: 1, title: "Two Sum Problem" },
    { id: 2, title: "Reverse Linked List" },
    { id: 3, title: "Dynamic Programming Challenge" },
  ],
};

const ContestDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // TODO: Fetch contest details by id from API
  const contest = contestDetails;

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{contest.title} - CodemindAI</title>
        <meta name="description" content={`Details for ${contest.title}`} />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{contest.title}</h1>
        <p className="text-gray-600">{contest.description}</p>
        <div className="flex space-x-6 mt-4">
          <p className="font-semibold text-gray-700">Date: {contest.date}</p>
          <p className="font-semibold text-gray-700">Time: {contest.time}</p>
          <p
            className={`px-2 py-1 rounded-full font-semibold ${
              contest.status === "Upcoming"
                ? "bg-yellow-100 text-yellow-700"
                : contest.status === "Live"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {contest.status}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Problems</h2>
          <ul className="space-y-3">
            {contest.problems.map((problem) => (
              <li key={problem.id} className="p-4 border rounded-lg hover:shadow-md transition">
                {problem.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
            Participate
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContestDetails;
