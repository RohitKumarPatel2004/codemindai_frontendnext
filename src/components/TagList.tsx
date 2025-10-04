"use client";
import React from "react";

const tagColors: Record<string, string> = {
  arrays: "bg-blue-100 text-blue-700",
  "dynamic-programming": "bg-green-100 text-green-700",
  "binary-tree": "bg-purple-100 text-purple-700",
  leetcode: "bg-yellow-100 text-yellow-700",
  graph: "bg-red-100 text-red-700",
  sorting: "bg-indigo-100 text-indigo-700",
  string: "bg-pink-100 text-pink-700",
  "hash-table": "bg-gray-100 text-gray-700",
};

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`px-2 py-1 text-xs font-medium rounded-full ${tagColors[tag] || "bg-gray-100 text-gray-600"}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
