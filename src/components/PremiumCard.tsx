"use client";
type PremiumPlan = {
  id: number;
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const PremiumCard = ({ plan }: { plan: PremiumPlan }) => {
  return (
    <div
      className={`relative bg-white border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center ${
        plan.highlight ? "border-indigo-500 scale-105" : "border-gray-200"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
          {plan.badge}
        </span>
      )}

      <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
      <p className="text-4xl font-bold text-indigo-600 mb-4">{plan.price}</p>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center justify-center text-gray-700">
            <span className="text-green-500 mr-2">✔</span> {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition ${
          plan.highlight
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        {plan.highlight ? "Subscribe Now" : "Get Started"}
      </button>
    </div>
  );
};

export default PremiumCard;
