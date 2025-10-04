// components/FiltersSidebar.tsx
import { useState } from "react";

export type Filters = {
  categories: string[];
  difficulties: string[];
  statuses: string[];
  sortBy: string;
};

type Props = {
  allCategories: string[];
  filters: Filters;
  setFilters: (f: Filters) => void;
  clearAll: () => void;
};

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const FiltersSidebar = ({ allCategories, filters, setFilters, clearAll }: Props) => {
  const toggleIn = (arr: string[], value: string) =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  const onCategoryToggle = (cat: string) =>
    setFilters({ ...filters, categories: toggleIn(filters.categories, cat) });

  const onDiffToggle = (d: string) =>
    setFilters({ ...filters, difficulties: toggleIn(filters.difficulties, d) });

  const onStatusToggle = (s: string) =>
    setFilters({ ...filters, statuses: toggleIn(filters.statuses, s) });

  return (
    <aside className="w-full md:w-72">
      <div className="bg-white border rounded-lg p-5 space-y-6">
        <h3 className="font-medium text-gray-700">Filters</h3>

        <div>
          <div className="text-sm font-medium text-gray-600 mb-2">Categories</div>
          <div className="space-y-2">
            {allCategories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => onCategoryToggle(cat)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-gray-600 mb-2">Difficulty</div>
          <div className="flex flex-col gap-2">
            {["Easy", "Medium", "Hard"].map((d) => (
              <label key={d} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.difficulties.includes(d)}
                  onChange={() => onDiffToggle(d)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />
                <span
                  className={`inline-block px-2 py-0.5 text-xs rounded-full ${difficultyColors[d]}`}
                >
                  {d}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-gray-600 mb-2">Status</div>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Solved", "Unsolved", "Premium Only"].map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.statuses.includes(s)}
                  onChange={() => onStatusToggle(s)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={clearAll}
            className="w-full border rounded-md py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
