"use client";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaPinterest, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section: Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="CodeBattelX Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white">CodeBattelX</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering developers worldwide to master coding skills through
            practice, competition, and community learning.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition duration-300"
            >
              <FaPinterest size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transform hover:scale-110 transition duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section: Company */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Legal */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                DMCA
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CodeBattelX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
