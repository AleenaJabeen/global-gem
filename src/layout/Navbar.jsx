import React, { useState, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { host3 } from "../assets";

export default function Navbar(props) {
  // context of login
  const { isLoggedIn ,role} = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`font-[Mulish] w-full transition-all duration-300 ${props.navStyle}`}
    >
      <div className="w-full mx-auto flex justify-between items-center md:px-12 px-6 py-4">
        <div className="text-2xl font-bold tracking-wide font-[Nico_Moji]">
          Xperience
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex text-[15px] space-x-8 font-semibold">
          <li className="cursor-pointer hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link to="/destinations">Popular Destinations</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link to="/package">Our Packages</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">Help</li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          {role !== "host" && (
            <p
              className="cursor-pointer"
              onClick={() => navigate("/signup?redirect=host")}
            >
              Become a Host
            </p>
          )}

          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/login")}
              className={`hidden md:block cursor-pointer ${
                props.buttonBg ? props.buttonBg : "bg-white text-[#1F1F1F]"
              }   font-semibold px-5 py-2 rounded-full transition`}
            >
              Sign In
            </button>
          ) : (
            <img
              onClick={() => navigate("/profile")}
              src={host3}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden text-sm bg-black font-semibold text-white px-6 py-6 space-y-5">
          <p onClick={toggleMenu} className="cursor-pointer">
            <Link to="/">Home</Link>
          </p>
          <p onClick={toggleMenu} className="cursor-pointer">
            <Link to="/about">About Us</Link>
          </p>
          <p onClick={toggleMenu} className="cursor-pointer">
            <Link to="/destinations">Popular Destinations</Link>
          </p>
          <p onClick={toggleMenu} className="cursor-pointer">
            <Link to="/package">Our Packages</Link>
          </p>
          <p onClick={toggleMenu} className="cursor-pointer">
            <Link to="/">Help</Link>
          </p>
          {role !== "host" && (
            <p
              className="cursor-pointer"
              onClick={() => {
                navigate("/signup?redirect=host");
                toggleMenu();
              }}
            >
              Become a Host
            </p>
          )}

          {!isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/login");
                toggleMenu();
              }}
              className="w-full cursor-pointer bg-white text-black font-semibold py-2 rounded-full transition"
            >
              Sign In
            </button>
          ) : (
            <p onClick={() => navigate("/profile")} className="cursor-pointer">
              Profile
            </p>
          )}
        </div>
      )}
    </nav>
  );
}
