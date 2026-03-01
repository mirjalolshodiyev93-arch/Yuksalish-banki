import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, PhoneCall, ArrowRight } from "lucide-react";
import bankImage from "../assets/biz haqimizda.png";

const stats = [
  { label: "Mijozlarimiz", value: "50K+" },
  { label: "Tajriba", value: "10+ yil" },
  { label: "Filiallar", value: "25+" },
];

export default function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="overflow-hidden bg-white text-gray-900">
      {/* HERO SECTION */}
      <div className="relative pt-24 pb-16 px-4 sm:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* TEXT CONTENT */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
              Kelejak Banki
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Yuksalish Bank
              </span> <br /> BILAN YANGI DAVR
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Biz faqat bank emasmiz, biz sizning moliyaviy muvaffaqiyatingiz yo'lidagi ishonchli hamkoringizmiz. Innovatsion yechimlar va xavfsizlik — bizning bosh tamoyilimiz.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
                Batafsil <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* IMAGE CONTENT */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
              <img
                src={bankImage}
                alt="Bank Office"
                className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
              <div className="flex gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="bg-gray-50 py-24 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeIn} className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Bizning Missiyamiz</h2>
            <p className="text-gray-600 text-lg">
              Har bir mijoz uchun individual yondashuv orqali eng qulay va zamonaviy moliyaviy ekotizimni yaratish.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              <Rocket size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Bizning Vizyonimiz</h2>
            <p className="text-gray-600 text-lg">
              Markaziy Osiyoda raqamli bank xizmatlari bo'yicha eng innovatsion va ishonchli brendga aylanish.
            </p>
          </motion.div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="py-24 px-4 sm:px-10 lg:px-20 max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Rahbariyat Jamoasi</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Jahon Bank", role: "Asoschi & Rais", img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Olimbek X.", role: "Bosh Direktor (CEO)", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Dilshod R.", role: "Moliya Direktori (CFO)", img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" },
          ].map((member, index) => (
            <motion.div 
              key={index}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white rounded-[2rem] p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all group text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 -z-10 opacity-10"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium tracking-wide">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="px-4 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto relative overflow-hidden bg-blue-600 rounded-[3rem] p-10 md:p-20 text-center text-white"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Savollaringiz bormi?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Mutaxassislarimiz sizga yordam berishga tayyor. Hoziroq bog'laning va xizmatlarimizdan foydalaning.
            </p>
            <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
              <PhoneCall size={22} />
              Bog'lanish
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}