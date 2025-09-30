import { FaDatabase, FaProjectDiagram, FaPuzzlePiece, FaRobot, FaSitemap, FaCogs } from "react-icons/fa";

const categories = [
  {
    icon: <FaSitemap className="text-blue-400 w-8 h-8" />,
    title: "Arrays",
    color: "text-yellow-400",
  },
  {
    icon: <FaPuzzlePiece className="text-green-400 w-8 h-8" />,
    title: "Strings",
    color: "text-green-400",
  },
  {
    icon: <FaRobot className="text-yellow-400 w-8 h-8" />,
    title: "Dynamic Programming",
    color: "text-yellow-400",
  },
  {
    icon: <FaProjectDiagram className="text-green-400 w-8 h-8" />,
    title: "Graphs",
    color: "text-green-400",
  },
  {
    icon: <FaDatabase className="text-yellow-400 w-8 h-8" />,
    title: "SQL",
    color: "text-yellow-400",
  },
  {
    icon: <FaCogs className="text-green-400 w-8 h-8" />,
    title: "System Design",
    color: "text-green-400",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Explore{" "}
          <span className="text-green-400">Problem Categories</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Master every aspect of programming with our comprehensive problem sets
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group animate-fadeInUp"
            >
              <div className="flex justify-center mb-3">
                {category.icon}
              </div>
              <h3 className={`text-lg font-semibold ${category.color}`}>
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
