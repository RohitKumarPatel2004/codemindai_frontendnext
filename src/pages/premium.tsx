"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PremiumCard from "../components/PremiumCard";
import { ChevronDown } from "lucide-react";

export default function Premium() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel your subscription anytime. You’ll keep access until the end of your billing period.",
    },
    {
      q: "Do you provide refunds?",
      a: "Refunds are provided for technical issues or accidental purchases within 7 days.",
    },
    {
      q: "What’s included in Premium?",
      a: "Exclusive problems, mock interviews, company prep, analytics, and priority support.",
    },
    {
      q: "Is there a student discount?",
      a: "Yes! Students get up to 40% off with valid verification.",
    },
    {
      q: "Can I upgrade anytime?",
      a: "Absolutely! Upgrade anytime and instantly unlock all premium features.",
    },
  ];

  const premiumPlans = [
    {
      id: 1,
      title: "Monthly",
      price: "₹999",
      features: [
        "All Premium Features",
        "Access to All Problems",
        "Priority Support",
        "Cancel Anytime",
      ],
    },
    {
      id: 2,
      title: "Yearly",
      price: "₹4,999",
      features: [
        "All Premium Features",
        "Access to All Problems",
        "Priority Support",
        "Save 30%",
        "Exclusive Contests",
      ],
    },
    {
      id: 3,
      title: "Lifetime",
      price: "₹19,999",
      features: [
        "All Premium Features",
        "Access to All Problems",
        "Priority Support",
        "One-Time Payment",
        "Free Future Updates",
      ],
    },
  ];

  const benefits = [
    {
      title: "Exclusive Problems",
      desc: "Access 2,000+ premium questions with company tags, hints, and detailed explanations.",
    },
    {
      title: "Company-specific Prep",
      desc: "Get ready for top product-based company interviews with targeted practice sets.",
    },
    {
      title: "Mock Interviews",
      desc: "Simulate real interviews with our mock platform and get AI feedback.",
    },
    {
      title: "In-depth Solutions",
      desc: "Understand every concept deeply with step-by-step explanations.",
    },
    {
      title: "Priority Support",
      desc: "Get faster responses from our support team for all premium users.",
    },
    {
      title: "Premium Analytics",
      desc: "Advanced progress tracking and personalized learning analytics.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-50">
      <Head>
        <title>CodemindAI Premium</title>
        <meta
          name="description"
          content="Unlock your full potential with CodemindAI Premium"
        />
      </Head>

      {/* 🔮 White & Black Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top white glow */}
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-white/90 via-white/60 to-transparent" />
        {/* Bottom black fade */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />
      </div>

      <Navbar />

      {/* 🌟 Hero Section */}
      <section className="relative text-center py-20 px-6 bg-gradient-to-b from-gray-100 via-white to-gray-50 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-3">
          Unlock Your Full Potential with{" "}
          <span className="text-indigo-600">CodemindAI Premium</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Access exclusive problems, company-wide questions, and advanced
          interview prep tools.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-md">
          Go Premium
        </button>
      </section>

      {/* 💎 Premium Benefits */}
      <section className="py-16 bg-white z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Premium Benefits
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
            >
              <div className="text-indigo-600 text-3xl mb-3">★</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {b.title}
              </h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 Choose Your Plan */}
      <section className="py-16 bg-gray-50 z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Choose Your Plan
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {premiumPlans.map((plan) => (
            <PremiumCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* 🆓 Free vs Premium */}
      <section className="py-16 bg-white z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Free vs Premium
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto px-4">
          <table className="w-full border border-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-center">Free</th>
                <th className="p-3 text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Problem Solutions", "❌", "✅"],
                ["Company Preparation", "❌", "✅"],
                ["Mock Interviews", "❌", "✅"],
                ["Analytics Dashboard", "❌", "✅"],
              ].map((row, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3">{row[0]}</td>
                  <td className="p-3 text-center">{row[1]}</td>
                  <td className="p-3 text-center text-green-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 🌟 Success Stories */}
      <section className="py-16 bg-gray-50 z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Success Stories
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              name: "Amit Verma",
              text: "CodemindAI Premium helped me crack my first product-based company interview!",
            },
            {
              name: "Priya Sharma",
              text: "Mock interviews and analytics are total game-changers!",
            },
            {
              name: "Ravi Patel",
              text: "Premium contests helped me improve so much. Highly recommend it!",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
            >
              <p className="text-gray-600 mb-4">“{s.text}”</p>
              <p className="font-semibold text-indigo-600">– {s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-16 bg-white z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-sm transition"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openFAQ === i && (
                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
