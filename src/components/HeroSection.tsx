import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FBFF] to-[#EDF3FF] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Sharpen Your <br />
            Coding Skills with{" "}
            <span className="text-indigo-600">CodeBattelX</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl">
            Practice problems, compete in contests, and prepare for interviews — just like LeetCode.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/auth/signup">
              <button className="px-6 py-3 rounded-lg text-lg font-medium text-gray-400 border border-gray-300 bg-white shadow-sm hover:bg-gray-100 transition">
                Start Solving
              </button>
            </Link>
            <Link href="/problems">
              <button className="px-6 py-3 rounded-lg text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition">
                Explore Problems
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Code Card */}
        <div className="relative">
          <div className="bg-[#0D1117] text-gray-200 rounded-xl shadow-xl p-5 max-w-md mx-auto font-mono text-sm leading-relaxed relative">
            
            {/* Code Editor Top Bar */}
            <div className="flex space-x-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-auto text-xs text-gray-400">two-sum.js</span>
            </div>

            {/* Code Content */}
            <pre className="whitespace-pre-wrap">
              <code>
                <span className="text-blue-400">function</span>{" "}
                <span className="text-green-400">twoSum</span>(nums, target) {"{"}{"\n"}
                {"  "}const map = new Map();{"\n"}
                {"  "}
                <span className="text-blue-400">for</span> (let i = 0; i {"<"} nums.length; i++) {"{"}{"\n"}
                {"    "}const complement = target - nums[i];{"\n"}
                {"    "}
                <span className="text-blue-400">if</span> (map.has(complement)) {"{"}{"\n"}
                {"      "}
                <span className="text-pink-400">return</span> [map.get(complement), i];{"\n"}
                {"    "}{"}"}{"\n"}
                {"    "}map.set(nums[i], i);{"\n"}
                {"  "}{"}"}{"\n"}
                {"}"}{"\n"}
              </code>
            </pre>

            {/* Footer Tag */}
            <div className="mt-4 flex justify-between items-center text-xs">
              <span className="text-gray-400">Two Sum - Easy</span>
              <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">
                Solved ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
