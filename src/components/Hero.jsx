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

      {/* Chip ichki chiziqlar */}
      <div className="absolute inset-1 border-2 border-yellow-800 rounded-md"></div>

      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-yellow-800 -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-yellow-800 -translate-y-1/2"></div>

      <div className="absolute top-2 left-2 right-2 h-[2px] bg-yellow-800"></div>
      <div className="absolute bottom-2 left-2 right-2 h-[2px] bg-yellow-800"></div>
    </div>
  );


  return (
    <section className="max-w-[1400px] mx-auto bg-white px-10 py-24 flex items-center justify-between pt-[120px]">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          {t("hero.title")} <br />
          <span className="text-green-600">
            {t("hero.subtitle")}
          </span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
          {t("hero.desc")}
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg">
            {t("hero.button")}
          </button>

          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-600 hover:text-white transition">
            {t("hero.button1")}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-[420px] h-[260px] group">

          {/* Orqa karta */}
          <div className="absolute top-6 left-6 w-[380px] h-[220px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out group-hover:rotate-3">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200')",
              }}
            ></div>

            <div className="relative p-6 flex justify-between items-start h-full">
              <h2 className="text-gray-700 font-semibold text-lg">
                Yuksalish Bank
              </h2>
              <Chip />
            </div>
          </div>

          {/* Old karta */}
          {/* Old karta */}
          <div className="absolute w-[380px] h-[220px] rounded-2xl overflow-hidden  cursor-pointer transition-all duration-500 ease-in-out group-hover:-rotate-3">

            {/* RASM */}
            <img
              src="/card.png"
              alt="Card background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Agar qoraytirish kerak bo‘lsa qoldirasan, kerak bo‘lmasa o‘chir */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative p-6 flex flex-col justify-between h-full text-white">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold tracking-wide">
                  Yuksalish Bank
                </h2>
                <Chip />
              </div>

              <div>
                <p className="text-sm opacity-80">CARD HOLDER</p>
                <p className="text-lg tracking-widest">
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