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
      setScrolled(window.scrollY > 50);
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
      className={`mb-[100px] max-w-[1400px] m-auto text-white px-8 h-[100px] flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/10 backdrop-blur-lg shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[150px] h-[100px] rounded-lg object-cover"
        />
      </div>

      <div className="flex gap-6 items-center">
        <Link to="/">{t("navbar.home")}</Link>
        <Link to="/services">{t("navbar.services")}</Link>
        <Link to="/contact">{t("navbar.contact")}</Link>
        <Link to="/kredit">{t("navbar.kredit")}</Link>
      </div>

  <article className=" flex items-center gap-4">
 
  <Link to="/register">
    <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-lg shadow-md">
      {t("navbar.login")}
    </button>
  </Link>


  <LanguageDetector/>
</article>
    </div>
  );
}