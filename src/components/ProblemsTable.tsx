import Link from "next/link";

type Problem = {
  id: number;
  name: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Solved" | "Unsolved" | "Attempted";
};

const problems: Problem[] = [
  { id: 1, name: "Two Sum", category: "Algorithms", difficulty: "Easy", status: "Solved" },
  { id: 2, name: "Binary Tree Traversal", category: "Data Structures", difficulty: "Medium", status: "Unsolved" },
  { id: 3, name: "SQL Joins", category: "SQL", difficulty: "Medium", status: "Attempted" },
  { id: 4, name: "AI Model Training", category: "AI/ML", difficulty: "Hard", status: "Unsolved" },
];

const difficultyColor = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const statusColor = {
  Solved: "bg-indigo-100 text-indigo-700",
  Unsolved: "bg-gray-100 text-gray-700",
  Attempted: "bg-purple-100 text-purple-700",
};

const ProblemsTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Difficulty
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {problems.map((problem) => (
            <tr key={problem.id} className="hover:bg-gray-50 transition">
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-800">{problem.name}</td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-800">{problem.category}</td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full ${difficultyColor[problem.difficulty]}`}
                >
                  {problem.difficulty}
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 inline-flex text-xs sm:text-sm leading-5 font-semibold rounded-full ${statusColor[problem.status]}`}
                >
                  {problem.status}
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                <Link
                  href={`/problems/${problem.id}`}
                  className="text-indigo-600 hover:text-indigo-900 text-sm sm:text-base"
                >
                  Solve
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemsTable;
