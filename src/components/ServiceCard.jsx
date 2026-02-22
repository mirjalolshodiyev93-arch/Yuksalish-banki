
import { CreditCard, Landmark, PiggyBank, RefreshCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

import React, { useEffect, useState } from 'react';

export default function ServicesData() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const services = [
    {
      icon: <CreditCard size={28} />,
      title: t("services1.plasticCards.title"),
      desc: t("services1.plasticCards.desc"),
    },
    {
      icon: <Landmark size={28} />,
      title: t("services1.loans.title"),
      desc: t("services1.loans.desc"),
      active: true,
    },
    {
      icon: <PiggyBank size={28} />,
      title: t("services1.deposits.title"),
      desc: t("services1.deposits.desc"),
    },
    {
      icon: <RefreshCcw size={28} />,
      title: t("services1.currency.title"),
      desc: t("services1.currency.desc"),
    },
  ];

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
    <section className="bg-[#0B1F3B] py-20 text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">{t("salom.home")}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl ${
                item.active
                  ? "bg-[#102A4C] border-blue-500 shadow-lg"
                  : "bg-[#0F2746] border-white/10 hover:border-blue-400"
              }`}
            >
              <div  onClick={() => navigate('/credits')}
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 ${
                  item.active
                    ? "bg-green-600/20 text-green-400"
                    : "bg-blue-600/20 text-blue-400"
                }`}
              >
                {item.icon}
              </div>

              <h3 className=" text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className= " max-w-md break-words line-clamp-2 text-gray-400 mb-6 leading-relaxed">
                {item.desc}
              </p>

              <button className="text-blue-400 flex items-center gap-2 hover:gap-3 transition-all">
                {t("buttons.moreDetails")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
