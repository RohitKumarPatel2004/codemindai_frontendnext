"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Search, User, LogOut } from "lucide-react";

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
      className={`relative px-2 py-1 text-sm font-medium transition duration-300 group
        ${isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 w-full transform transition-transform duration-300 
          ${
            isActive
              ? "scale-x-100 bg-green-600"
              : "scale-x-0 bg-green-600 group-hover:scale-x-100"
          }`}
      />
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          {/* Logo */}
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
          <div className="hidden md:flex space-x-6 text-sm items-center">
            <NavItem href="/problems" label="Problems" />
            <NavItem href="/contests" label="Contests" />
            <NavItem href="/discuss" label="Discuss" />
            <NavItem href="/interview" label="Interview" />
            <NavItem href="/premium" label="Premium" />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex space-x-4 items-center relative">
            {isLoggedIn ? (
              <>
                {/* Wallet Section */}
                <div className="flex items-center gap-2 animate-fadeIn">
                  <div className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-md text-sm shadow-sm">
                    ₹2,450
                  </div>

                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                    <Link href="/add-cash" className="block">
                      Add Cash
                    </Link>
                  </button>
                </div>

                {/* Icons */}
                <Bell
                  className="text-gray-600 hover:text-green-600 transition cursor-pointer"
                  size={20}
                />
                <Search
                  className="text-gray-600 hover:text-green-600 transition cursor-pointer"
                  size={20}
                />

                {/* Avatar with Dropdown */}
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex items-center gap-1 cursor-pointer group"
                  >
                    <Image
                      src="/images/avatar1.png"
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="rounded-full border border-gray-300 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                        showMenu
                          ? "rotate-180 text-green-600"
                          : "group-hover:text-green-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg py-2 animate-fadeIn">
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition"
                      >
                        <User className="w-4 h-4 mr-2 text-gray-500" />
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition"
                      >
                        <LogOut className="w-4 h-4 mr-2 text-gray-500" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="flex flex-col space-y-2 px-4 py-3">
            <NavItem href="/problems" label="Problems" />
            <NavItem href="/contests" label="Contests" />
            <NavItem href="/discuss" label="Discuss" />
            <NavItem href="/interview" label="Interview" />
            <NavItem href="/premium" label="Premium" />
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-red-500 text-left py-2 hover:text-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="py-2 text-gray-700 hover:text-green-600 transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="py-2 text-green-600 font-medium transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
