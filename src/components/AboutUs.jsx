import React from "react";
// import bankImage from "../../public/bank_building.jpg"; // bank rasmi, o'zingiz almashtiring

export default function AboutUs() {
  return (
    <section className="pt-[120px] bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-16">
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-10 mb-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Biz haqimizda
          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Yuksalish Bank – bu mijozlarimiz uchun ishonchli, innovatsion va samarali bank xizmatlarini taqdim etadigan yetakchi moliyaviy tashkilot. Bizning maqsadimiz – har bir mijozimizga shaxsiy yondashuv bilan eng yaxshi xizmatni ko‘rsatish.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            // src={bankImage}
            alt="Bank building"
            className="rounded-2xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-96"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">Bizning Missiyamiz</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Mijozlarimizga sifatli moliyaviy xizmatlar taqdim etish, ularning moliyaviy farovonligini oshirish va bank ishlarini samarali va ishonchli amalga oshirish.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">Bizning Vizyonimiz</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Innovatsion yechimlar orqali bank sohasida yetakchi o‘rinni egallash va mijozlarimiz uchun eng yaxshi raqamli bank xizmatlarini taqdim etish.
          </p>
        </div>
      </div>

      {/* History / Team */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center">
          Bizning Tariximiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 sm:p-6 text-center">
            <img
              src="/team1.jpg"
              alt="Founder"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-gray-900 mb-1">Jahon Bank</h3>
            <p className="text-gray-600 text-sm sm:text-base">Boshqaruvchi / Founder</p>
          </div>

          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 sm:p-6 text-center">
            <img
              src="/team2.jpg"
              alt="CEO"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-gray-900 mb-1">Olimbek X.</h3>
            <p className="text-gray-600 text-sm sm:text-base">CEO</p>
          </div>

          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 sm:p-6 text-center">
            <img
              src="/team3.jpg"
              alt="Manager"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-gray-900 mb-1">Dilshod R.</h3>
            <p className="text-gray-600 text-sm sm:text-base">Moliyaviy Menejer</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Biz bilan bog‘laning</h2>
        <p className="text-gray-700 mb-6">Agar sizda savollar bo‘lsa yoki qo‘shimcha ma’lumot kerak bo‘lsa, biz bilan bog‘laning.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md">
          Kontaktga o‘tish
        </button>
      </div>

    </section>
  );
}