import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../public/logo.png";
import LanguageDetector from "./en_uz";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
      className={`mb-[100px] max-w-[1400px] mx-auto px-8 h-[100px] flex justify-between items-center fixed top-0 left-0 right-0 z-10 transition-all duration-300  ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[150px] h-[80px] object-contain"
        />
      </div>

      {/* LINKS */}
      <div className="flex gap-8 items-center text-gray-800 font-medium">
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
      <article className="flex items-center gap-4">
        <Link to="/register">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl shadow-md">
            {t("navbar.login")}
          </button>
        </Link>

        <LanguageDetector />
      </article>
    </div>
  );
}