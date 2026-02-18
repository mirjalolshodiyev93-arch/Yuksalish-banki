import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`max-w-[1400px] m-auto text-white px-8 h-[100px] flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center h-10 rounded-xl shadow-md pr-3 pl-3">
        <img
          src={logo}
          alt="Logo"
          className="w-[150px] h-[100px] rounded-lg object-cover"
        />
      </div>

      <div className="flex gap-6">
        <Link to="/">Bosh sahifa</Link>
        <Link to="/services">Xizmatlar</Link>
        <Link to="/contact">Aloqa</Link>
      </div>

      <Link to="/register">
        <button className="bg-blue-600 px-4 py-2 rounded-lg">
          Kirish
        </button>
      </Link>
    </div>
  );
}

