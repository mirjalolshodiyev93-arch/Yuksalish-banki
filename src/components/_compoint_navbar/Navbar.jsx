import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../public/logo.png"; 
import LanguageDetector from "./en_uz";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menyu ochilganda skrolni to'xtatish
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${
          scrolled 
            ? "h-[70px] bg-[#121212]/95 backdrop-blur-md shadow-2xl" 
            : "h-[100px] bg-[#1a1a1a]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-full flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className={`transition-all duration-500 object-contain brightness-0 invert ${
                  scrolled ? "w-[100px] h-[45px]" : "w-[130px] h-[60px]"
                }`}
              />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center text-gray-300 font-medium uppercase text-[11px] tracking-[2px]">
            {["home", "services", "contact", "kredit"].map((item) => (
              <Link 
                key={item}
                className="hover:text-white transition-colors duration-300 relative group" 
                to={item === "home" ? "/" : `/${item}`}
              >
                {t(`navbar.${item}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link className="hover:text-white transition-colors duration-300 relative group" to="/dashboard">
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link className="hover:text-white transition-colors duration-300 relative group" to="/aboutus">
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <Link to="/register" className="hidden sm:block">
              <button className={`transition-all duration-500 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold ${
                scrolled ? "px-4 py-1.5 text-xs" : "px-6 py-2.5 text-sm"
              }`}>
                {t("navbar.login")}
              </button>
            </Link>

            <div className="hidden md:block scale-90">
              <LanguageDetector />
            </div>

            {/* MOBILE MENU BUTTON - Burger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR - Chap tomondan chiqadigan menyu */}
      <div 
        className={`fixed inset-0 z-[70] transition-visibility duration-300 md:hidden ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay - Orqa fonni qoraytirish */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar content */}
        <div 
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#1a1a1a] shadow-2xl transition-transform duration-500 ease-out p-6 flex flex-col ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-10">
            <img src={logo} alt="Logo" className="w-[100px] brightness-0 invert" />
            <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-2">
            {["home", "services", "contact", "kredit"].map((item) => (
              <Link 
                key={item}
                to={item === "home" ? "/" : `/${item}`} 
                className="text-gray-300 text-lg font-medium py-3 border-b border-white/5 hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t(`navbar.${item}`)}
              </Link>
            ))}
            <Link 
                to="/dashboard" 
                className="text-gray-300 text-lg font-medium py-3 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            
          </div>

          {/* Sidebar Footer */}
          <div className="mt-auto pt-6 flex flex-col gap-6">
            <LanguageDetector />
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20">
                {t("navbar.login")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}