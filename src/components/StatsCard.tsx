import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  color = "bg-indigo-100",
  textColor = "text-indigo-600",
}: {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: string;
  textColor?: string;
}) => {
  return (
    <div className={`rounded-lg shadow p-6 flex items-center space-x-4 ${color}`}>
      {icon && <div className="text-3xl">{icon}</div>}
      <div>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        <p className="text-gray-700">{title}</p>
      </div>
    </div>
  );
};

export default StatsCard;
