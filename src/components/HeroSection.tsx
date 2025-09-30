import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0B1C3F] to-[#0F2C4F] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">
              Level Up
            </span>{" "}
            <br />
            Your Coding Skills <br />
            with{" "}
            <span className="text-[#32E875]">CodemindAI</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl">
            Practice problems, participate in contests, and prepare for interviews –
            all in one platform.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/auth/signup">
              <button className="px-6 py-3 rounded-lg text-lg font-medium text-black bg-gradient-to-r from-yellow-400 to-green-400 hover:opacity-90 transition">
                Start Solving
              </button>
            </Link>
            <Link href="/problems">
              <button className="px-6 py-3 rounded-lg text-lg font-medium text-white border border-green-400 hover:bg-green-500/20 transition">
                Explore Problems
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Code Block */}
        <div className="relative animate-float">
          <div className="bg-[#0D1117] text-gray-200 rounded-xl shadow-xl p-5 max-w-md mx-auto font-mono text-sm leading-relaxed relative">
            {/* Top Bar */}
            <div className="flex space-x-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-auto text-xs text-gray-400">solution.py</span>
            </div>

            <pre className="whitespace-pre-wrap">
              <code>
                <span className="text-blue-400">def</span>{" "}
                <span className="text-green-400">twoSum</span>(nums, target):{"\n"}
                {"    "}# Hash map approach{"\n"}
                {"    "}seen = {`{}` + "\n"}
                {"    "}
                <span className="text-blue-400">for</span> i, num{" "}
                <span className="text-blue-400">in</span>{" "}
                <span className="text-yellow-400">enumerate</span>(nums):{"\n"}
                {"        "}complement = target - num{"\n"}
                {"        "}
                <span className="text-blue-400">if</span> complement{" "}
                <span className="text-blue-400">in</span> seen:{"\n"}
                {"            "}
                <span className="text-pink-400">return</span> [seen[complement], i]{"\n"}
                {"        "}seen[num] = i
              </code>
            </pre>

            {/* Accepted Badge */}
            <span className="absolute bottom-2 left-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded animate-bounce-slow">
              Accepted ✓
            </span>

            {/* Time Complexity Tag */}
            <span className="absolute top-2 right-2 text-xs bg-green-500 text-black px-2 py-1 rounded animate-bounce-slow delay-300">
              O(n) time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
