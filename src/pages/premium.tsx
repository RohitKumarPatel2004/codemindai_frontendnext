import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PremiumCard from "../components/PremiumCard";

const premiumPlans = [
  {
    id: 1,
    title: "Monthly Plan",
    price: "₹499",
    features: [
      "Access to all problems",
      "Detailed solutions",
      "Premium contests",
      "Advanced analytics",
    ],
  },
  {
    id: 2,
    title: "Quarterly Plan",
    price: "₹1299",
    features: [
      "Access to all problems",
      "Detailed solutions",
      "Premium contests",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    id: 3,
    title: "Yearly Plan",
    price: "₹4999",
    features: [
      "Access to all problems",
      "Detailed solutions",
      "Premium contests",
      "Advanced analytics",
      "Priority support",
      "Exclusive webinars",
    ],
  },
];

const Premium: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Premium - CodemindAI</title>
        <meta name="description" content="Upgrade to premium for full access on CodemindAI" />
      </Head>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">Premium Plans</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {premiumPlans.map((plan) => (
            <PremiumCard key={plan.id} plan={plan} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Premium;
