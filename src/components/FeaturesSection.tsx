import { FaCode, FaTrophy, FaUserGraduate, FaComments } from "react-icons/fa";

const features = [
  {
    icon: <FaCode className="text-yellow-400 w-8 h-8" />,
    title: "Practice Problems",
    color: "text-yellow-400",
    description: "Thousands of challenges across all difficulty levels to sharpen your skills.",
  },
  {
    icon: <FaTrophy className="text-green-400 w-8 h-8" />,
    title: "Contests & Leaderboard",
    color: "text-green-400",
    description: "Compete globally with real-time rankings and climb the leaderboard.",
  },
  {
    icon: <FaUserGraduate className="text-yellow-400 w-8 h-8" />,
    title: "Interview Prep",
    color: "text-yellow-400",
    description: "Company-specific curated problems to ace your technical interviews.",
  },
  {
    icon: <FaComments className="text-green-400 w-8 h-8" />,
    title: "Discussion Forum",
    color: "text-green-400",
    description: "Collaborate with peers and share insights on problem-solving approaches.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Why Choose{" "}
          <span className="text-yellow-400">CodemindAI</span>?
        </h2>
        <p className="text-gray-400 mb-16">
          Everything you need to excel in coding interviews and competitive programming
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#1E293B] p-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group animate-fadeInUp"
            >
              {/* Icon wrapper */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400/20 to-green-400/20 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className={`text-lg font-semibold mb-2 ${feature.color}`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
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
