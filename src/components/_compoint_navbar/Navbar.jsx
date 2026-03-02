import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../public/logo.png";
import LanguageDetector from "./en_uz";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { t } = useTranslation();

  // NAV ITEMS (4 tadan ko‘p bo‘lsa Eщё ichiga tushadi)
  const navItems = [
    "home",
    "services",
    "contact",
    "kredit",
    "aboutus",
    "dashboard",
    "card"
  ];

  const visibleItems = navItems.slice(0, 4);
  const hiddenItems = navItems.slice(4);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "h-[70px] bg-[#121212]/95 backdrop-blur-md shadow-2xl"
            : "h-[100px] bg-[#1a1a1a]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-full flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-500 brightness-0 invert ${
                scrolled ? "w-[100px] h-[45px]" : "w-[130px] h-[60px]"
              }`}
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center text-gray-300 font-medium uppercase text-[11px] tracking-[2px] relative">
            
            {visibleItems.map((item) => (
              <Link
                key={item}
                to={item === "home" ? "/" : `/${item}`}
                className="hover:text-white transition-colors duration-300 relative group"
              >
                {t(`navbar.${item}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* MORE DROPDOWN */}
            {hiddenItems.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="hover:text-white transition-colors duration-300"
                >
                  Eщё ▾
                </button>

                {moreOpen && (
                  <div className="absolute top-full right-0 mt-3 bg-[#1a1a1a] shadow-2xl rounded-lg py-3 w-[180px] animate-fadeIn">
                    {hiddenItems.map((item) => (
                      <Link
                        key={item}
                        to={`/${item}`}
                        className="block px-4 py-2 hover:bg-white/5 transition-colors"
                        onClick={() => setMoreOpen(false)}
                      >
                        {t(`navbar.${item}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <Link to="/register" className="hidden sm:block">
              <button
                className={`transition-all duration-500 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold ${
                  scrolled ? "px-4 py-1.5 text-xs" : "px-6 py-2.5 text-sm"
                }`}
              >
                {t("navbar.login")}
              </button>
            </Link>

            <div className="hidden md:block scale-90">
              <LanguageDetector />
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-white"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}