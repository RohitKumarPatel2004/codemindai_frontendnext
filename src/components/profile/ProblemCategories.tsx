"use client";

interface Category {
  label: string;
  value: number;
  total: number;
  color: string;
}

export default function ProblemCategories({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h3 className="text-gray-900 font-semibold mb-4">Problem Categories</h3>

      <div className="space-y-5">
        {categories.map((cat, i) => (
          <div key={i}>
            {/* Label + Count Row */}
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                {/* Colored dot */}
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                ></span>

                <span className="text-sm text-gray-800">{cat.label}</span>
              </div>

              <span className="text-sm text-gray-500">
                {cat.value}/{cat.total}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: `${(cat.value / cat.total) * 100}%`,
                  backgroundColor: cat.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
