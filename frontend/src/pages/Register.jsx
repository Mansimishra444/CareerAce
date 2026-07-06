import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import {
  User,
  Mail,
  Lock,
  GraduationCap,
  Building2,
  Star,
  BookOpen,
  Trophy,
  BarChart3,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    branch: "",
    cgpa: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", formData);

      alert("Registration Successful 🎉");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 flex">

      {/* LEFT SECTION */}

      <div className="hidden lg:flex w-2/5 text-white flex-col justify-between p-12 relative overflow-hidden">

        <div>
          <h1 className="text-4xl font-extrabold">
            Career<span className="text-yellow-300">Ace</span>
          </h1>

          <h2 className="text-6xl font-bold mt-24 leading-tight">
            Start Your
            <br />
            <span className="text-yellow-300">
              Success
            </span>{" "}
            Journey
          </h2>

          <p className="mt-8 text-lg text-indigo-100 leading-8">
            Join thousands of students preparing smarter,
            practicing better, and achieving more with CareerAce.
          </p>

          <div className="mt-14 space-y-8">

            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-full">
                <BookOpen size={28} />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  AI Study Planner
                </h3>

                <p className="text-indigo-100">
                  Personalized study plans tailored for your success.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-full">
                <BarChart3 size={28} />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Track Progress
                </h3>

                <p className="text-indigo-100">
                  Monitor DSA, Aptitude and Mock Tests.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-white/20 p-4 rounded-full">
                <Trophy size={28} />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Achieve Goals
                </h3>

                <p className="text-indigo-100">
                  Stay consistent and crack your dream company.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center text-indigo-100">
          © 2026 CareerAce
        </div>
      </div>

      {/* RIGHT SECTION */}

      <div className="flex-1 flex items-center justify-center p-10">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-10">

          <div className="flex justify-center">

            <div className="bg-indigo-100 p-5 rounded-2xl">

              <User
                className="text-indigo-600"
                size={40}
              />

            </div>

          </div>

          <h1 className="text-5xl font-bold text-center mt-6">
            Create Your Account
          </h1>

          <p className="text-center text-gray-500 mt-3 mb-10">
            Fill in the details below to get started
          </p>

          <form
            onSubmit={registerUser}
            className="space-y-6"
          >

            {/* NAME */}

            <div>

              <label className="font-semibold">
                Name
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <User
                  className="text-indigo-600"
                  size={20}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  className="w-full p-4 outline-none rounded-xl"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}

            <div>

              <label className="font-semibold">
                Email
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <Mail
                  className="text-indigo-600"
                  size={20}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  className="w-full p-4 outline-none rounded-xl"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="font-semibold">
                Password
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <Lock
                  className="text-indigo-600"
                  size={20}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  onChange={handleChange}
                  className="w-full p-4 outline-none rounded-xl"
                  required
                />

              </div>

            </div>
                        {/* COLLEGE */}

            <div>

              <label className="font-semibold">
                College
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <Building2
                  className="text-indigo-600"
                  size={20}
                />

                <input
                  type="text"
                  name="college"
                  placeholder="Enter your college name"
                  onChange={handleChange}
                  className="w-full p-4 outline-none rounded-xl"
                  required
                />

              </div>

            </div>

            {/* BRANCH */}

            <div>

              <label className="font-semibold">
                Branch
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <GraduationCap
                  className="text-indigo-600"
                  size={20}
                />

                <input
                  type="text"
                  name="branch"
                  placeholder="Enter your branch"
                  onChange={handleChange}
                  className="w-full p-4 outline-none rounded-xl"
                  required
                />

              </div>

            </div>

            {/* CGPA */}

            <div>

              <label className="font-semibold">
                CGPA
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4">

                <Star
                  className="text-indigo-600"
                  size={20}
                />

                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  name="cgpa"
                  placeholder="Enter your CGPA"
                  onChange={handleChange}
                  className="w-full p-4 outline-none rounded-xl"
                  required
                />

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Enter your current CGPA (Example: 8.5)
              </p>

            </div>

            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300"
            >
              🚀 Register Now
            </button>

            {/* Divider */}

            <div className="flex items-center my-6">
              <div className="flex-grow border-t"></div>
              <span className="mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t"></div>
            </div>

            {/* Login Link */}

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 font-semibold hover:text-purple-600 transition"
              >
                Login here
              </Link>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;