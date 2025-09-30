"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-2 py-1 text-sm font-medium transition duration-300 ${
        isActive
          ? "text-green-400"
          : "text-gray-300 hover:text-white hover:scale-105"
      }`}
    >
      {label}
      {/* Animated underline */}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 w-full transform transition-transform duration-300 ${
          isActive ? "scale-x-100 bg-green-400" : "scale-x-0 bg-green-400"
        } group-hover:scale-x-100`}
      />
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="bg-[#0D1117] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-[#A6FF00] text-black font-bold w-7 h-7 flex items-center justify-center rounded ">
              C
            </div>
            <Link href="/" className="text-lg font-semibold hover:text-green-400 transition">
              CodemindAI
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm items-center">
            <NavItem href="/problems" label="Problems" />
            <NavItem href="/contests" label="Contests" />
            <NavItem href="/discuss" label="Discuss" />
            <NavItem href="/interview" label="Interview" />
            <NavItem href="/premium" label="Premium" />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-3 items-center">
            {!isLoggedIn ? (
              <>
                <Link href="/auth/signin">
                  <button className="px-3 py-1 border border-gray-500 rounded text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    Sign In
                  </button>
                </Link>
                <Link href="/auth/signup">
                  <button className="px-3 py-1 rounded text-sm bg-gradient-to-r from-yellow-400 to-green-500 text-black font-medium hover:opacity-90 hover:scale-105 transition-all duration-300">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 hover:scale-105 transition-all duration-300"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 transition-transform transform hover:scale-110 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-[#0D1117] border-t border-gray-700 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 py-3">
          <NavItem href="/problems" label="Problems" onClick={() => setIsOpen(false)} />
          <NavItem href="/contests" label="Contests" onClick={() => setIsOpen(false)} />
          <NavItem href="/discuss" label="Discuss" onClick={() => setIsOpen(false)} />
          <NavItem href="/interview" label="Interview" onClick={() => setIsOpen(false)} />
          <NavItem href="/premium" label="Premium" onClick={() => setIsOpen(false)} />

          {!isLoggedIn ? (
            <>
              <Link
                href="/auth/signin"
                className="block px-4 py-2 rounded hover:bg-gray-800 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block px-4 py-2 rounded bg-gradient-to-r from-yellow-400 to-green-500 text-black font-medium text-center hover:opacity-90 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-800 rounded transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
