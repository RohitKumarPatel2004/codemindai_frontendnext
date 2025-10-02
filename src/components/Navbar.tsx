"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 text-sm font-medium transition duration-300 
        ${isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}
    >
      {label}
      {/* Animated underline */}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 w-full transform transition-transform duration-300 
          ${isActive ? "scale-x-100 bg-green-600" : "scale-x-0 bg-green-600 group-hover:scale-x-100"}`}
      />
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/images/logo.png"
                  alt="CodeBattelX Logo"
                  fill
                  className="object-contain cursor-pointer"
                  priority
                />
              </div>
              <span className="hidden sm:block text-lg font-bold text-green-700">
                CodeBattelX
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm items-center group">
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
                  <button className="px-3 py-1 border border-gray-500 rounded text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105">
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
              className="text-gray-800 hover:text-green-600 transition-transform transform hover:scale-110"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-2 px-4 py-3">
            <NavItem href="/problems" label="Problems" />
            <NavItem href="/contests" label="Contests" />
            <NavItem href="/discuss" label="Discuss" />
            <NavItem href="/interview" label="Interview" />
            <NavItem href="/premium" label="Premium" />

            {!isLoggedIn ? (
              <>
                <Link href="/auth/signin" className="block py-2 text-gray-700 hover:text-green-600 transition">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="block py-2 text-green-600 font-medium transition">
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-red-500 text-left py-2 hover:text-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
