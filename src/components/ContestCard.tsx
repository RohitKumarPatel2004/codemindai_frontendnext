"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ correct import

export type Contest = {
  id: number;
  title: string;
  prizePool: string;
  entryFee: string;
  time: string;
  participants: number;
  avatars: string[];
  prizeDistribution: { place: string; amount: string }[];
  status: "Upcoming" | "Ongoing" | "Completed";
};

type ContestCardProps = {
  contest: Contest;
};

const ContestCard = ({ contest }: ContestCardProps) => {
  const router = useRouter();

  if (contest.status === "Ongoing") {
    return (
      <div className="relative bg-white rounded-xl shadow-md border hover:shadow-lg transition p-5 flex flex-col gap-4">
        {/* Entry Fee Badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${
            contest.entryFee.toLowerCase() === "free"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {contest.entryFee}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{contest.title}</h2>

        {/* Info */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Prize Pool</span>
            <span className="text-green-600 font-bold">{contest.prizePool}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Starts in</span>
            <span className="text-red-500 font-bold animate-pulse">LIVE</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Participants</span>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {contest.avatars.slice(0, 3).map((avatar, idx) => (
                  <Image
                    key={idx}
                    src={avatar}
                    alt="participant"
                    width={28}
                    height={28}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">+{contest.participants}</span>
            </div>
          </div>
        </div>

        {/* Prize Distribution */}
        <div className="bg-gray-50 rounded-lg p-3 text-sm">
          <p className="font-semibold text-gray-700 mb-1">Prize Distribution</p>
          {contest.prizeDistribution.map((prize, idx) => (
            <p key={idx} className="flex justify-between">
              <span>{prize.place}</span>
              <span className="font-medium">{prize.amount}</span>
            </p>
          ))}
        </div>

        {/* Ongoing Button */}
        <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition">
          Contest Ongoing
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-xl shadow-md border hover:shadow-lg transition p-5 flex flex-col gap-4">
      {/* Entry Fee Badge */}
      <span
        className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${
          contest.entryFee.toLowerCase() === "free"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {contest.entryFee}
      </span>

      <h2 className="text-lg font-semibold text-gray-800">{contest.title}</h2>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Prize Pool</span>
          <span className="text-green-600 font-bold">{contest.prizePool}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Starts in</span>
          <span className="text-orange-500 font-semibold">{contest.time}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Participants</span>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {contest.avatars.slice(0, 3).map((avatar, idx) => (
                <Image
                  key={idx}
                  src={avatar}
                  alt="participant"
                  width={28}
                  height={28}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-gray-600 font-medium">+{contest.participants}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-3 text-sm">
        <p className="font-semibold text-gray-700 mb-1">Prize Distribution</p>
        {contest.prizeDistribution.map((prize, idx) => (
          <p key={idx} className="flex justify-between">
            <span>{prize.place}</span>
            <span className="font-medium">{prize.amount}</span>
          </p>
        ))}
      </div>

      <button
        onClick={() => router.push(`/contests/${contest.id}`)} // ✅ fixed
        className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Join Contest
      </button>
    </div>
  );
};

export default ContestCard;
