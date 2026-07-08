import { Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-xl shadow-lg">
              <GraduationCap
                size={28}
                className="text-white"
              />
            </div>

            <h1 className="text-3xl font-extrabold">
              <span className="text-slate-900 dark:text-white">
                Career
              </span>

              <span className="text-indigo-600">
                Ace
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <a
              href="/"
              className="font-semibold hover:text-indigo-600 transition"
            >
              Home
            </a>

            <a
              href="#features"
              className="font-semibold hover:text-indigo-600 transition"
            >
              Features
            </a>

            <a
              href="#about"
              className="font-semibold hover:text-indigo-600 transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="font-semibold hover:text-indigo-600 transition"
            >
              Contact
            </a>

          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <ThemeToggle />

            <Link
              to="/login"
              className="px-6 py-2 rounded-xl border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition shadow-lg"
            >
              Register
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X
                size={30}
                className="dark:text-white"
              />
            ) : (
              <Menu
                size={30}
                className="dark:text-white"
              />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-white dark:bg-slate-900 shadow-xl">

          <div className="flex flex-col p-6 gap-5">

            <a href="/">Home</a>

            <a href="#features">Features</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

            <div className="py-2">
              <ThemeToggle />
            </div>

            <Link
              to="/login"
              className="border rounded-xl py-3 text-center hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl py-3 text-white text-center"
            >
              Register
            </Link>

          </div>

        </div>

      )}
    </header>
  );
}

export default Navbar;