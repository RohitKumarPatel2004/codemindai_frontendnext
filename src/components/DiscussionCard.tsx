import Link from "next/link";

type Discussion = {
  id: number;
  title: string;
  author: string;
  replies: number;
  date: string;
};

const DiscussionCard = ({ discussion }: { discussion: Discussion }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{discussion.title}</h3>
        <p className="text-gray-600 text-sm mb-1">By: {discussion.author}</p>
        <p className="text-gray-600 text-sm mb-2">Replies: {discussion.replies}</p>
        <p className="text-gray-500 text-xs">{discussion.date}</p>
      </div>
      <Link
        href={`/discuss/${discussion.id}`}
        className="mt-4 text-indigo-600 font-medium hover:text-indigo-900"
      >
        View Discussion
      </Link>
    </div>
  );
};

export default DiscussionCard;
