"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiscussionCard from "../components/DiscussionCard";
import { discussions, categories, tags, topContributors } from "../data/discussData";

export default function Discuss() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredDiscussions =
    selectedCategory === "All"
      ? discussions
      : discussions.filter((d) => d.category === selectedCategory);

  // ✅ Tag color map
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

  return (
    <>
      <Head>
        <title>Discuss – Learn & Share</title>
      </Head>

      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-6">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg">
            + New Post
          </button>

          {/* Categories */}
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li
                onClick={() => setSelectedCategory("All")}
                className={`cursor-pointer flex justify-between ${
                  selectedCategory === "All"
                    ? "text-indigo-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                <span>All</span>
                <span>{discussions.length}</span>
              </li>
              {categories.map((cat) => (
                <li
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`cursor-pointer flex justify-between ${
                    selectedCategory === cat.name
                      ? "text-indigo-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span>{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Popular Tags (color-coded) */}
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-2.5 py-1 rounded-md cursor-pointer transition
                    ${tagColors[tag] || "bg-gray-100 text-gray-700"}
                    hover:opacity-90`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Top Contributors</h3>
            <ul className="space-y-3 text-sm">
              {topContributors.map((u) => (
                <li key={u.name} className="flex items-center gap-3">
                  <img
                    src={u.avatar}
                    className="w-8 h-8 rounded-full"
                    alt={u.name}
                  />
                  <div>
                    <p className="font-medium text-gray-800">{u.name}</p>
                    <p className="text-gray-500 text-xs">{u.points} points</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          <h1 className="text-2xl font-semibold mb-1">
            Discuss – Learn & Share with the Community
          </h1>
          <p className="text-gray-500 mb-6">
            Ask questions, share solutions, and explore coding insights with peers.
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full md:w-1/2 border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex gap-3 w-full md:w-auto">
              <select className="border rounded-lg px-3 py-2 text-sm text-gray-700">
                <option>All Categories</option>
                {categories.map((c) => (
                  <option key={c.name}>{c.name}</option>
                ))}
              </select>
              <select className="border rounded-lg px-3 py-2 text-sm text-gray-700">
                <option>Newest</option>
                <option>Most Replies</option>
              </select>
            </div>
          </div>

          {/* Header */}
          <div className="hidden md:grid grid-cols-5 px-4 py-2 text-xs font-medium text-gray-500 border-b">
            <div className="col-span-2">Discussion</div>
            <div>Category</div>
            <div>Replies</div>
            <div>Last Activity</div>
          </div>

          {/* Discussion List */}
          <div className="bg-white rounded-lg border divide-y">
            {filteredDiscussions.map((d) => (
              <DiscussionCard key={d.id} discussion={d} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
