import Image from "next/image";
import Link from "next/link";

type User = {
  name: string;
  email: string;
  avatar: string;
  totalSolved: number;
  rank: number;
};

const ProfileCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
      <Image
        src={user.avatar}
        alt={user.name}
        width={120}
        height={120}
        className="rounded-full"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <div className="flex space-x-6 mt-4">
          <div>
            <p className="text-gray-700 font-semibold">{user.totalSolved}</p>
            <p className="text-gray-500 text-sm">Problems Solved</p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">{user.rank}</p>
            <p className="text-gray-500 text-sm">Global Rank</p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/edit-profile"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
