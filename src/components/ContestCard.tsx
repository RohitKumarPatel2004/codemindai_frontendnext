import { FaRegCalendarAlt, FaClock, FaInfoCircle } from "react-icons/fa";

export type Contest = {
  id: number;
  title: string;
  date: string;
  time: string;
  status: "Upcoming" | "Live" | "Completed";
};

type ContestCardProps = {
  contest: Contest;
};

const ContestCard = ({ contest }: ContestCardProps) => {
  const getStatusColor = () => {
    switch (contest.status) {
      case "Upcoming":
        return "bg-yellow-100 text-yellow-700";
      case "Live":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition flex flex-col space-y-3">
      <h2 className="text-xl font-semibold text-gray-800">{contest.title}</h2>

      <div className="flex items-center space-x-4 text-gray-600">
        <FaRegCalendarAlt className="text-gray-500" />
        <span>{contest.date}</span>
      </div>

      <div className="flex items-center space-x-4 text-gray-600">
        <FaClock className="text-gray-500" />
        <span>{contest.time}</span>
      </div>

      <span
        className={`inline-block px-3 py-1 rounded-full font-semibold ${getStatusColor()}`}
      >
        {contest.status}
      </span>

      <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center space-x-2 justify-center">
        <FaInfoCircle />
        <span>View Details</span>
      </button>
    </div>
  );
};

export default ContestCard;
