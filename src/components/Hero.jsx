import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

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

  const Chip = () => (
    <div className="w-14 h-10 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-600 
                  shadow-inner relative overflow-hidden">
      <div className="absolute inset-1 border-2 border-yellow-800 rounded-md"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-yellow-800 -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-yellow-800 -translate-y-1/2"></div>
      <div className="absolute top-2 left-2 right-2 h-[2px] bg-yellow-800"></div>
      <div className="absolute bottom-2 left-2 right-2 h-[2px] bg-yellow-800"></div>
    </div>
  );

  return (
    <section className="max-w-[1400px] mx-auto bg-white px-4 sm:px-10 py-16 sm:py-24 flex flex-col-reverse md:flex-row items-center justify-between pt-[120px]">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          {t("hero.title")} <br />
          <span className="text-green-600">{t("hero.subtitle")}</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
          {t("hero.desc")}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg text-sm sm:text-base">
            {t("hero.button")}
          </button>

          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-600 hover:text-white transition text-sm sm:text-base">
            {t("hero.button1")}
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT - CARDS */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[260px] group">

          {/* BACK CARD */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-[240px] sm:w-[320px] md:w-[380px] h-[160px] sm:h-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out group-hover:rotate-3">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200')",
              }}
            ></div>
            <div className="relative p-4 sm:p-6 flex justify-between items-start h-full">
              <h2 className="text-gray-700 font-semibold text-sm sm:text-lg">
                Yuksalish Bank
              </h2>
              <Chip />
            </div>
          </div>

          {/* FRONT CARD */}
          <div className="absolute w-[240px] sm:w-[320px] md:w-[380px] h-[160px] sm:h-[200px] md:h-[220px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group-hover:-rotate-3">
            <img
              src="/card.png"
              alt="Card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative p-4 sm:p-6 flex flex-col justify-between h-full text-white">
              <div className="flex justify-between items-start">
                <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
                  Yuksalish Bank
                </h2>
                <Chip />
              </div>
              <div>
                <p className="text-xs sm:text-sm opacity-80">CARD HOLDER</p>
                <p className="text-sm sm:text-lg tracking-widest">
                  0000 0000 0000 0000
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}