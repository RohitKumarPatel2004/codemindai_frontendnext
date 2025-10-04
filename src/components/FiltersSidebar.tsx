import { useState } from "react";

const difficulties = ["Easy", "Medium", "Hard"];
const categories = ["Algorithms", "Data Structures", "SQL", "AI/ML"];
const status = ["Solved", "Unsolved", "Attempted"];

const FiltersSidebar = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow space-y-6 w-full">
      {/* Difficulty Filter */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Difficulty</h3>
        <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2">
          {difficulties.map((level) => (
            <button
              key={level}
              className={`px-3 py-2 rounded text-sm sm:text-base transition w-full sm:w-auto
                ${selectedDifficulty === level 
                  ? "bg-indigo-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setSelectedDifficulty(selectedDifficulty === level ? null : level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Category</h3>
        <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-2 rounded text-sm sm:text-base transition w-full sm:w-auto
                ${selectedCategory === cat 
                  ? "bg-indigo-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
        <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2">
          {status.map((s) => (
            <button
              key={s}
              className={`px-3 py-2 rounded text-sm sm:text-base transition w-full sm:w-auto
                ${selectedStatus === s 
                  ? "bg-indigo-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setSelectedStatus(selectedStatus === s ? null : s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
