const AdminCard = ({
  title,
  count,
  color,
  textColor,
}: {
  title: string;
  count: number;
  color: string;
  textColor: string;
}) => {
  return (
    <div className={`${color} rounded-lg shadow p-6 flex flex-col items-center justify-center`}>
      <p className={`text-2xl font-bold ${textColor}`}>{count}</p>
      <p className="text-gray-700 mt-2">{title}</p>
    </div>
  );
};

export default AdminCard;
