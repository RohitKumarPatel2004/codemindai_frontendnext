import { FaRegQuestionCircle } from "react-icons/fa";

// Renamed type to avoid conflict with page component
export type InterviewItem = {
  id: number;
  title: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

type InterviewCardProps = {
  interview: InterviewItem;
};

const InterviewCard = ({ interview }: InterviewCardProps) => {
  const getDifficultyColor = () => {
    switch (interview.difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition flex flex-col space-y-3">
      <h2 className="text-xl font-semibold text-gray-800">{interview.title}</h2>

      <div className="flex items-center space-x-2 text-gray-600">
        <FaRegQuestionCircle className="text-gray-500" />
        <span>{interview.category}</span>
      </div>

      <span
        className={`inline-block px-3 py-1 rounded-full font-semibold ${getDifficultyColor()}`}
      >
        {interview.difficulty}
      </span>

      <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        View Questions
      </button>
    </div>
  );
};

export default InterviewCard;
