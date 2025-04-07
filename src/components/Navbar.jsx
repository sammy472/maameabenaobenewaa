import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaProjectDiagram,
  FaUsers,
  FaRegNewspaper,
  FaPenFancy,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state

  return (
    <nav className="bg-black text-yellow-400 py-4 px-6 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">ADESUA SESA</h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-yellow-400 focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-lg md:text-sm p-6 md:p-0 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li>
            <Link to="/" className="flex items-center gap-2 hover:text-white transition">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 hover:text-white transition">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/events" className="flex items-center gap-2 hover:text-white transition">
              <FaProjectDiagram /> Events/Our Work
            </Link>
          </li>
          <li>
            <Link to="/partnerships" className="flex items-center gap-2 hover:text-white transition">
              <FaUsers /> Get Involved
            </Link>
          </li>
          <li>
            <Link to="/impact-stories" className="flex items-center gap-2 hover:text-white transition">
              <FaRegNewspaper /> Impact Stories
            </Link>
          </li>
          <li>
            <Link to="/blog" className="flex items-center gap-2 hover:text-white transition">
              <FaPenFancy /> Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-2 hover:text-white transition">
              <FaEnvelope /> Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center gap-2 hover:text-white transition">
              {isLoggedIn ? <FaSignOutAlt /> : <FaSignInAlt />}{" "}
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
