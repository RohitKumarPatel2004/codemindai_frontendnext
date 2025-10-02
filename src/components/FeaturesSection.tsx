import { FaCode, FaTrophy, FaUserGraduate, FaComments } from "react-icons/fa";

const features = [
  {
    icon: <FaCode className="text-blue-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Practice Problems",
    color: "text-blue-600",
    description: "Thousands of challenges across all difficulty levels to sharpen your skills.",
  },
  {
    icon: <FaTrophy className="text-green-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Contests & Leaderboard",
    color: "text-green-600",
    description: "Compete globally with real-time rankings and climb the leaderboard.",
  },
  {
    icon: <FaUserGraduate className="text-purple-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Interview Prep",
    color: "text-purple-600",
    description: "Company-specific curated problems to ace your technical interviews.",
  },
  {
    icon: <FaComments className="text-pink-500 w-8 h-8 group-hover:animate-bounce" />,
    title: "Discussion Forum",
    color: "text-pink-600",
    description: "Collaborate with peers and share insights on problem-solving approaches.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fadeInDown">
          Why Choose <span className="text-blue-600">CodeBattelX</span>?
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto animate-fadeInUp">
          Everything you need to excel in coding interviews and competitive programming
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out group animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Icon wrapper */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gray-100 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className={`text-lg font-semibold mb-2 ${feature.color}`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
