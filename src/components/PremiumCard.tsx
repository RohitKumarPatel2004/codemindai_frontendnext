type PremiumPlan = {
  id: number;
  title: string;
  price: string;
  features: string[];
};

const PremiumCard = ({ plan }: { plan: PremiumPlan }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
        <p className="text-indigo-600 font-bold text-2xl mb-4">{plan.price}</p>
        <ul className="mb-4 space-y-2">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="text-gray-600 flex items-center">
              <span className="mr-2 text-indigo-600">✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
        Subscribe
      </button>
    </div>
  );
};

export default PremiumCard;
