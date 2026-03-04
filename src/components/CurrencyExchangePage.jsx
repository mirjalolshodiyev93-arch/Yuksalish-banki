import React from "react";

const currencies = [
  { code: "USD", buy: "10,200", sell: "10,250" },
  { code: "EUR", buy: "11,500", sell: "11,550" },
  { code: "GBP", buy: "13,000", sell: "13,050" },
  { code: "RUB", buy: "120", sell: "125" },
];

export default function CurrencyExchangePage() {
  return (
    <section className="min-h-screen bg-green-50 py-16 px-4 sm:px-10">
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            24/7 Onlayn Valyuta Ayirboshlash
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Eng qulay kurslarda, istalgan vaqtda valyutangizni almashtiring.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Ayirboshlash
            </button>
            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition duration-300">
              Batafsil
            </button>
          </div>
        </div>

        {/* Image / Card */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] sm:w-[360px] h-[200px] rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Valyuta Kurslari</h2>
              <p className="text-sm opacity-80">24/7 onlayn xizmat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Currency Rates Table */}
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Eng so‘nggi kurslar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {currencies.map((c) => (
            <div key={c.code} className="bg-green-50 rounded-xl p-4 flex flex-col items-center shadow-sm hover:shadow-md transition">
              <span className="text-gray-800 font-semibold text-lg">{c.code}</span>
              <div className="mt-2 text-gray-600 text-sm">
                <p>Buy: <span className="font-medium">{c.buy}</span></p>
                <p>Sell: <span className="font-medium">{c.sell}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center text-gray-700">
        <p>
          Bizning xizmatlarimiz orqali siz valyutani istalgan vaqtda, eng qulay kurslarda
          onlayn tarzda almashtirishingiz mumkin. 24/7 xizmat va real vaqt kurslar!
        </p>
      </div>

    </section>
  );
}