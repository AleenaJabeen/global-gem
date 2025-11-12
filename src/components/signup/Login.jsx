import { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { mail } from "../../assets";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // ✅ Proceed with login logic here (e.g., API call)
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div
      id="hero-section"
      className="min-h-screen bg-white flex items-center justify-center px-4 mt-10"
    >
      <div className="w-full max-w-[420px] p-8 sm:p-10">
        <h2 className="font-[Inter] text-2xl sm:text-[33px] font-semibold text-[#1C1C1E] mb-8 text-left">
          Welcome Back!
        </h2>

        <form
          className="space-y-3 text-[#9999A7] font-[Inter] text-base"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 pl-10 bg-[#F2F2F7] rounded-lg focus:outline-none ${
                errors.email ? "border border-red-500" : ""
              }`}
            />
            <img
              src={mail}
              alt="Mail icon"
              className="absolute right-3 top-1/2 -translate-y-1/2"
            />
           
          </div>
           {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 pl-10 bg-[#F2F2F7] rounded-lg focus:outline-none ${
                errors.password ? "border border-red-500" : ""
              }`}
            />
            {showPassword ? (
              <AiOutlineEye
                onClick={() => setShowPassword(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9999A7] text-xl cursor-pointer"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(true)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9999A7] text-xl cursor-pointer"
              />
            )}
           
          </div>
           {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}

          <div className="flex justify-end">
            <a
              href="#"
              className="font-[Inter] text-xs text-[#1F1F1F] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F1F1F] text-white font-bold py-3 rounded-[15px] font-[Inter] text-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="font-[Inter] flex items-center my-6">
          <div className="flex-grow border-t border-[#EFEFF4]"></div>
          <span className="mx-2 text-[#C8C7CC] text-sm">OR</span>
          <div className="flex-grow border-t border-[#EFEFF4]"></div>
        </div>

        {/* Social Logins */}
        <div className="flex justify-center gap-6">
          <button className="p-3 bg-white rounded-full shadow-sm border border-[#C8C7CC] hover:bg-gray-100">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="p-3 bg-white rounded-full shadow-sm border border-[#C8C7CC] hover:bg-gray-100">
            <FaApple className="text-2xl text-[#2B2B2B]" />
          </button>
          <button className="p-3 bg-white rounded-full shadow-sm border border-[#C8C7CC] hover:bg-gray-100">
            <FaFacebookF className="text-2xl text-[#3059B2]" />
          </button>
        </div>

        {/* Footer */}
        <p className="font-[Inter] text-center text-[#9999A7] text-base mt-6">
          <span className="font-semibold">Don’t</span> have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#1C1C1E] text-base hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
