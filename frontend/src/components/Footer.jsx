import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -top-20 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">

                <GraduationCap className="text-white" size={28} />

              </div>

              <h2 className="text-3xl font-bold text-white">
                Career<span className="text-indigo-400">Ace</span>
              </h2>

            </div>

            <p className="mt-6 leading-8 text-gray-400">

              CareerAce is an AI-powered Placement Preparation Portal
              helping students crack coding interviews through
              personalized learning, analytics and mock interviews.

            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 transition flex items-center justify-center"
              >
               <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
              >
                <FaTwitter size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-indigo-400 transition">
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="hover:text-indigo-400 transition"
                >
                  Register
                </Link>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Dashboard
                </a>
              </li>

            </ul>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Features
            </h3>

            <ul className="space-y-4">

              <li className="hover:text-indigo-400 transition">
                AI Study Planner
              </li>

              <li className="hover:text-indigo-400 transition">
                DSA Practice
              </li>

              <li className="hover:text-indigo-400 transition">
                Mock Interviews
              </li>

              <li className="hover:text-indigo-400 transition">
                Resume Builder
              </li>

              <li className="hover:text-indigo-400 transition">
                Performance Analytics
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <Mail className="text-indigo-400 mt-1" />

                <span>support@careerace.com</span>

              </div>

              <div className="flex gap-4">

                <Phone className="text-indigo-400 mt-1" />

                <span>+91 9876543210</span>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-indigo-400 mt-1" />

                <span>India</span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center">

            © {new Date().getFullYear()} CareerAce. All Rights Reserved.

          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-110 transition flex items-center justify-center shadow-lg"
          >
            <ArrowUp className="text-white" />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;