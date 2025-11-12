import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [onWhiteHero, setOnWhiteHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect hero section color
      const hero = document.getElementById("hero-section");
      if (hero) {
        const heroHeight = hero.offsetHeight;
        // if we are within hero section range
        if (window.scrollY < heroHeight - 100) {
          // read hero background color (white or dark)
          const bgColor = window.getComputedStyle(hero).backgroundColor;
          // simple detection: if background is light, switch text to black
          const isLight =
            bgColor.includes("255, 255, 255") || bgColor.includes("240");
          setOnWhiteHero(isLight);
        } else {
          setOnWhiteHero(false);
        }
      }
    };

    handleScroll(); // initialize on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Determine navbar style
  const navStyle = onWhiteHero && !isScrolled
    ? "bg-white text-black"
    : isScrolled
    ? "bg-white text-black shadow-lg"
    : "bg-black text-white";

  return (
    <nav
      className={`font-[Mulish] w-full transition-all duration-300 ${navStyle}`}
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
          <p className="cursor-pointer hover:text-gray-400">Become a Host</p>
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-500 hover:text-black transition"
          >
            Sign In
          </button>
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
          <p className="cursor-pointer">Become a Host</p>
          <button
            onClick={() => {
              navigate("/login");
              toggleMenu();
            }}
            className="w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-[#03CDE5] hover:text-white transition"
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
