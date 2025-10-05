"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { month: "Jan", submissions: 12 },
  { month: "Feb", submissions: 18 },
  { month: "Mar", submissions: 15 },
  { month: "Apr", submissions: 25 },
  { month: "May", submissions: 22 },
  { month: "Jun", submissions: 30 },
  { month: "Jul", submissions: 28 },
  { month: "Aug", submissions: 35 },
  { month: "Sep", submissions: 33 },
  { month: "Oct", submissions: 40 },
  { month: "Nov", submissions: 38 },
  { month: "Dec", submissions: 45 },
];

export default function SubmissionChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h3 className="text-gray-800 font-semibold mb-3">Submission Activity</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          {/* ✅ Gradient background for shaded area */}
          <defs>
            <linearGradient id="colorSubmissions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              fontSize: "12px",
            }}
          />

          {/* ✅ Smooth shaded area */}
          <Area
            type="monotone"
            dataKey="submissions"
            stroke="none"
            fill="url(#colorSubmissions)"
          />

          {/* ✅ Main Line */}
          <Line
            type="monotone"
            dataKey="submissions"
            stroke="#6366F1"
            strokeWidth={3}
            dot={{ r: 3, stroke: "#6366F1", strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
