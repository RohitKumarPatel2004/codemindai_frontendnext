import { FaThList, FaSearch, FaBolt, FaProjectDiagram, FaDatabase, FaCogs } from "react-icons/fa";

const categories = [
  {
    icon: <FaThList className="text-blue-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Arrays",
    description: "Master array manipulation, searching, and sorting algorithms",
    problems: "250+ Problems",
    color: "text-blue-600",
  },
  {
    icon: <FaSearch className="text-green-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Strings",
    description: "String processing, pattern matching, and text algorithms",
    problems: "180+ Problems",
    color: "text-green-600",
  },
  {
    icon: <FaBolt className="text-purple-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Dynamic Programming",
    description: "Optimization problems and memoization techniques",
    problems: "120+ Problems",
    color: "text-purple-600",
  },
  {
    icon: <FaProjectDiagram className="text-red-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Graphs",
    description: "Graph traversal, shortest paths, and network algorithms",
    problems: "95+ Problems",
    color: "text-red-600",
  },
  {
    icon: <FaDatabase className="text-yellow-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "SQL",
    description: "Database queries, joins, and data manipulation",
    problems: "75+ Problems",
    color: "text-yellow-600",
  },
  {
    icon: <FaCogs className="text-indigo-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "System Design",
    description: "Scalable architecture and distributed systems concepts",
    problems: "40+ Problems",
    color: "text-indigo-600",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fadeInDown">
          Explore Problem Categories on <span className="text-blue-600">CodeBattelX</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto animate-fadeInUp">
          Master different algorithms and data structures with our organized problem sets
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gray-100 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className={`text-lg font-semibold mb-2 ${cat.color}`}>{cat.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{cat.description}</p>

              {/* Problems count */}
              <p className="text-sm font-semibold text-gray-800">{cat.problems}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
