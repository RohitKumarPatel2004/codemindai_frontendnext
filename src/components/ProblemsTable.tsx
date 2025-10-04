// components/ProblemsTable.tsx
import Link from "next/link";
import { useMemo, useState } from "react";
import { Filters } from "./FiltersSidebar";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

type Problem = {
  id: number;
  title: string;
  tags: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  acceptance: number;
  status: "Solved" | "Unsolved" | "Premium Only";
};

type Props = {
  data: Problem[];
  filters: Filters;
  setFilters: (f: Filters) => void;
};

const difficultyBadge = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const ProblemsTable = ({ data, filters }: Props) => {
  const [sortBy, setSortBy] = useState<string>("default");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = useMemo(() => {
    let out = data.slice();

    if (filters.categories.length > 0) {
      out = out.filter((p) => p.tags.some((t) => filters.categories.includes(t)));
    }
    if (filters.difficulties.length > 0) {
      out = out.filter((p) => filters.difficulties.includes(p.difficulty));
    }
    if (filters.statuses.length > 0) {
      out = out.filter((p) => filters.statuses.includes(p.status));
    }

    if (sortBy === "acceptance-asc") out.sort((a, b) => a.acceptance - b.acceptance);
    else if (sortBy === "acceptance-desc") out.sort((a, b) => b.acceptance - a.acceptance);
    else if (sortBy === "difficulty-asc")
      out.sort((a, b) => a.difficulty.localeCompare(b.difficulty));
    else if (sortBy === "difficulty-desc")
      out.sort((a, b) => b.difficulty.localeCompare(a.difficulty));

    return out;
  }, [data, filters, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="flex-1">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="default">Sort by: Default</option>
            <option value="acceptance-desc">Acceptance ↓</option>
            <option value="acceptance-asc">Acceptance ↑</option>
            <option value="difficulty-asc">Difficulty A→Z</option>
            <option value="difficulty-desc">Difficulty Z→A</option>
          </select>

          <div className="text-sm text-gray-500">
            Showing {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1}–{Math.min(filtered.length, page * pageSize)} of {filtered.length}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead>
              <tr className="text-left text-xs text-gray-400">
                <th className="py-3 w-12">#</th>
                <th className="py-3">Title</th>
                <th className="py-3 w-36">Difficulty</th>
                <th className="py-3 w-24">Acceptance</th>
                <th className="py-3 w-20 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {pageData.map((p, idx) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="py-4 text-sm text-gray-500">{(page - 1) * pageSize + idx + 1}</td>
                  <td className="py-4">
                    <Link
                      href={`/problems/${p.id}`}
                      className="font-medium text-gray-800 hover:underline"
                    >
                      {p.title}
                    </Link>
                    <div className="text-xs text-gray-400 mt-1">{p.tags.join(", ")}</div>
                  </td>
                  <td className="py-4">
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${difficultyBadge[p.difficulty]}`}>
                      {p.difficulty}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-600">{p.acceptance.toFixed(1)}%</td>
                  <td className="py-4 text-center">
                    {p.status === "Solved" ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block" />
                    ) : p.status === "Premium Only" ? (
                      <XCircleIcon className="h-6 w-6 text-pink-500 inline-block" />
                    ) : (
                      <XCircleIcon className="h-6 w-6 text-red-400 inline-block" />
                    )}
                  </td>
                </tr>
              ))}

              {pageData.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-sm text-gray-500">
                    No problems match the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsTable;
