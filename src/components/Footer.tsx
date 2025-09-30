import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-gray-300 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700">
        
        {/* About */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 text-black font-bold rounded-md px-2 py-1 text-sm">
              C
            </div>
            <h3 className="text-lg font-bold text-white">CodemindAI</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed hover:text-gray-200 transition duration-300">
            Empowering developers worldwide to excel in coding interviews and competitive programming through innovative practice platforms.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Careers", "Blog", "Privacy", "Terms"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-green-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#1E293B] p-3 rounded-lg hover:bg-green-500 hover:text-black transition transform hover:-translate-y-1"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-[#1E293B] p-3 rounded-lg hover:bg-green-500 hover:text-black transition transform hover:-translate-y-1"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-[#1E293B] p-3 rounded-lg hover:bg-green-500 hover:text-black transition transform hover:-translate-y-1"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} CodemindAI. All rights reserved.{" "}
        <span className="text-gray-400">Built for coders, by coders.</span>
      </div>
    </footer>
  );
};

export default Footer;
