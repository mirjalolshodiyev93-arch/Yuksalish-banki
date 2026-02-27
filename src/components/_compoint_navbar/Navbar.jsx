import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../public/logo.png";
import LanguageDetector from "./en_uz";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div
      className={`mb-[100px] max-w-[1400px] mx-auto px-4 sm:px-8 h-[100px] flex justify-between items-center fixed top-0 left-0 right-0 z-20 transition-all duration-300  ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[120px] sm:w-[150px] h-[60px] sm:h-[80px] object-contain"
        />
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center text-gray-800 font-medium">
        <Link className="hover:text-blue-600 transition" to="/">
          {t("navbar.home")}
        </Link>
        <Link className="hover:text-blue-600 transition" to="/services">
          {t("navbar.services")}
        </Link>
        <Link className="hover:text-blue-600 transition" to="/contact">
          {t("navbar.contact")}
        </Link>
        <Link className="hover:text-blue-600 transition" to="/kredit">
          {t("navbar.kredit")}
        </Link>
        <Link className="hover:text-blue-600 transition" to="/dashboard">
          Dashboard
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <article className="flex items-center gap-2 md:gap-4">
        <Link to="/register">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 sm:px-5 py-2 rounded-xl shadow-md text-sm sm:text-base">
            {t("navbar.login")}
          </button>
        </Link>

        <div className="hidden md:block">
          <LanguageDetector />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-2 p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </article>

      {/* MOBILE LINKS */}
      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg flex flex-col md:hidden p-4 gap-4">
          <Link
            className="hover:text-blue-600 transition"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.home")}
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.services")}
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.contact")}
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/kredit"
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.kredit")}
          </Link>
       
          <Link
            className="hover:text-blue-600 transition"
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
          >
           dashboard
          </Link>
      

          <div className="flex justify-between items-center mt-2">
            <Link to="/register">
             
            </Link>
            <LanguageDetector />
          </div>
        </div>
      )}
    </div>
  );
}