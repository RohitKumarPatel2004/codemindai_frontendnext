import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { signupUser } from "../../utils/api";

const SignUp = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await signupUser({ username, email, password });
      console.log(response.message); // "Signup successful"

      // Redirect to HOME page
      router.push("/");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A] text-white">
      <Head>
        <title>Sign Up - CodemindAI</title>
        <meta name="description" content="Sign up to CodemindAI" />
      </Head>

      <Navbar />

      {/* Main Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Form */}
          <div className="bg-[#1E293B] p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">
              Create your <span className="text-green-400">CodemindAI</span> account
            </h2>
            <p className="text-gray-400 mb-6">
              Sign up to start solving problems and competing in contests.
            </p>

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 bg-[#0F172A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white placeholder-gray-400"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-[#0F172A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white placeholder-gray-400"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-[#0F172A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white placeholder-gray-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-green-500 text-black rounded-lg font-medium hover:opacity-90 transition"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-700" />
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <hr className="flex-1 border-gray-700" />
            </div>

            {/* Social Signin */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition">
                <img src="/images/Google.png" className="w-6 h-6" alt="Google" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition">
                <img src="/images/GitHub.png" className="w-6 h-6" alt="GitHub" />
                Continue with GitHub
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition">
                <img src="/images/LinkedIn.png" className="w-6 h-6" alt="LinkedIn" />
                Continue with LinkedIn
              </button>
            </div>

            <p className="mt-6 text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <a href="/auth/signin" className="text-green-400 hover:underline">
                Sign In
              </a>
            </p>
          </div>

          {/* Right Side Info */}
          <div className="hidden md:flex flex-col items-center text-center space-y-6">
            <img
              src="/images/hero-illustration.png"
              alt="Coding"
              className="rounded-lg shadow-md max-w-sm"
            />
            <blockquote className="text-lg italic text-gray-300">
              "Level up your coding journey with CodemindAI."
            </blockquote>
            <p className="text-gray-400">
              Join thousands of developers improving their problem-solving abilities
            </p>

            {/* Stats with gradient bars */}
            <div className="w-full max-w-sm space-y-6">
              {[
                { title: "Problems Solved", value: "10K+", fill: "70%" },
                { title: "Users", value: "50K+", fill: "60%" },
                { title: "Contests", value: "100+", fill: "40%" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{stat.title}</span>
                    <span className="text-green-400 font-semibold">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full transition-all duration-700"
                      style={{ width: stat.fill }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;
