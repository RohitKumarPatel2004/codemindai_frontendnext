"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

const LiveContest = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  const [showTabWarning, setShowTabWarning] = useState(false);
  const router = useRouter();

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time
  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h > 0 ? `${h}:` : ""}${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  // Tab Switch Detection
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setShowTabWarning(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <>
      <Head>
        <title>Live Contest | CodeBettalX</title>
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center px-6 py-3 bg-white shadow">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold">
            CodeBettalX
          </span>
          <h1 className="font-semibold">DSA Quiz Contest #12</h1>
          <span className="ml-3 text-red-500 font-semibold">
            ⏱ {formatTime(timeLeft)}
          </span>
          <span className="ml-2 bg-gray-200 text-sm px-2 py-1 rounded">
            Q 3/10
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
            Proctoring Active
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded font-semibold">
            ₹1,250
          </span>
          <button
            onClick={() => router.push("/contests/result")}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Exit Contest
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-60px)]">
        {/* Problem Description */}
        <div className="w-1/2 border-r p-6 bg-white overflow-y-auto">
          <h2 className="text-lg font-semibold mb-3">Two Sum Problem</h2>
          <p className="mb-4 text-gray-700">
            Given an array of integers <code>nums</code> and an integer{" "}
            <code>target</code>, return indices of the two numbers such that they add
            up to target.
          </p>
          <p className="mb-4 text-gray-600">
            You may assume that each input would have exactly one solution, and you
            may not use the same element twice.
          </p>

          {/* Example 1 */}
          <div className="bg-gray-100 rounded p-3 mb-3 text-sm font-mono">
            <p>
              <b>Input:</b> nums = [2,7,11,15], target = 9
            </p>
            <p>
              <b>Output:</b> [0,1]
            </p>
            <p>
              <b>Explanation:</b> Because nums[0] + nums[1] == 9
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-gray-100 rounded p-3 mb-3 text-sm font-mono">
            <p>
              <b>Input:</b> nums = [3,2,4], target = 6
            </p>
            <p>
              <b>Output:</b> [1,2]
            </p>
          </div>

          {/* Constraints */}
          <div className="bg-gray-50 border-l-4 border-blue-500 p-3 text-sm">
            <p>• 2 ≤ nums.length ≤ 10⁴</p>
            <p>• -10⁹ ≤ nums[i] ≤ 10⁹</p>
            <p>• -10⁹ ≤ target ≤ 10⁹</p>
            <p>• Only one valid answer exists</p>
          </div>
        </div>

        {/* Code Editor Section */}
        <div className="w-1/2 p-6 bg-[#0f172a] text-white flex flex-col">
          {/* Editor Header */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-3">
              <select className="bg-gray-800 text-sm px-2 py-1 rounded">
                <option>Python 3</option>
                <option>Java</option>
                <option>C++</option>
              </select>
              <select className="bg-gray-800 text-sm px-2 py-1 rounded">
                <option>14px</option>
                <option>16px</option>
                <option>18px</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                Run
              </button>
              <button
                onClick={() => router.push("/contests/result")}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Fake Editor */}
          <div className="bg-gray-900 rounded-lg p-4 flex-1 font-mono text-sm overflow-y-auto">
{`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in hash_map:
                return [hash_map[complement], i]
            hash_map[num] = i
        return []`}
          </div>

          {/* Test Results */}
          <div className="mt-3 bg-gray-800 rounded p-3 text-sm">
            <p className="text-green-400">
              ✔ Test Case 1: Expected [0,1], Got [0,1]
            </p>
            <p className="text-green-400">
              ✔ Test Case 2: Expected [1,2], Got [1,2]
            </p>
          </div>
        </div>
      </div>

      {/* Tab Switch Warning */}
      {showTabWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center w-96">
            <h3 className="text-red-500 font-bold text-lg mb-3">
              ⚠️ Tab Switch Detected!
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Switching tabs during the contest is not allowed. This action has
              been logged.
            </p>
            <button
              onClick={() => setShowTabWarning(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveContest;
