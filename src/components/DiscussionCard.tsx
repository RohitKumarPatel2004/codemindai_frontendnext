"use client";
import React from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

type Discussion = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  replies: number;
  views: number;
  lastActivity: string;
  author: string;
};

const tagColors: Record<string, string> = {
  arrays: "bg-blue-100 text-blue-700",
  "dynamic-programming": "bg-green-100 text-green-700",
  "binary-tree": "bg-purple-100 text-purple-700",
  leetcode: "bg-yellow-100 text-yellow-700",
  graph: "bg-red-100 text-red-700",
  sorting: "bg-indigo-100 text-indigo-700",
  string: "bg-pink-100 text-pink-700",
  "hash-table": "bg-gray-100 text-gray-700",
  recursion: "bg-teal-100 text-teal-700",
  "system-design": "bg-orange-100 text-orange-700",
  interview: "bg-fuchsia-100 text-fuchsia-700",
  faang: "bg-rose-100 text-rose-700",
  database: "bg-lime-100 text-lime-700",
  optimization: "bg-amber-100 text-amber-700",
  "binary-search": "bg-sky-100 text-sky-700",
  dfs: "bg-violet-100 text-violet-700",
  bfs: "bg-cyan-100 text-cyan-700",
};

const DiscussionCard: React.FC<{ discussion: Discussion }> = ({ discussion }) => {
  const avatarIndex = Math.floor(Math.random() * 10) + 1;
  const avatarUrl = `https://i.pravatar.cc/40?img=${avatarIndex}`;

  return (
    <div className="p-5 hover:bg-gray-50 border-b transition">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-start">
        {/* Discussion Info */}
        <div className="md:col-span-2">
          <h3 className="font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer text-base leading-snug">
            {discussion.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{discussion.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {discussion.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                  tagColors[tag] || "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center justify-start md:justify-center">
          <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2.5 py-1 rounded-md">
            {discussion.category}
          </span>
        </div>

        {/* Replies & Views */}
        <div className="text-sm text-gray-600 space-y-1">
          <span className="flex items-center gap-1">
            <ChatBubbleLeftEllipsisIcon className="h-4 w-4 text-gray-400" />
            {discussion.replies} replies
          </span>
          <span className="flex items-center gap-1">
            <EyeIcon className="h-4 w-4 text-gray-400" />
            {discussion.views} views
          </span>
        </div>

        {/* Last Activity with Avatar */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <img
            src={avatarUrl}
            alt={discussion.author}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-gray-800 font-medium text-[13px]">
              {discussion.author}
            </span>
            <span className="text-gray-500 text-xs">
              {discussion.lastActivity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
