import { services } from "../data/homeData";
import React, { useState } from "react";
export default function Service() {
  
   
  const [income, setIncome] = useState(5000); 
  const [term, setTerm] = useState(12);     


  const total = income * term;

  return ( 
    <div className=" max-w-[1400px] mx-auto bg-[#071B2E] text-white">

      {/* HERO */}
           {/* HERO */}
      <div
        className="h-[450px] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-white px-16">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Moliya olamida <br />
            <span className="text-blue-500">
              yangi standartlar
            </span>
          </h1>
          <p className="text-gray-300 max-w-lg">
            Sizning ishonchli bankingiz va zamonaviy moliyaviy yechimlar markazi
          </p>
        </div>
      </div>

      {/* SERVICES */}
    <div className="  px-6   grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((item) => (
    <div
      key={item.id}
      className={`rounded-3xl overflow-hidden border transition duration-300 group
      ${
        item.active
          ? "border-blue-500 bg-[#0E2A47]"
          : "border-white/10 bg-white/5 hover:border-blue-500"
      }`}
    >
      {/* IMAGE */}
      <div className="h-48 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">
          {item.title}
        </h3>

        <p className="text-gray-400 mb-6">
          {item.desc}
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl text-sm transition">
          {item.btn}
        </button>
      </div>
    </div>
  ))}
</div>


      {/* FINANCIAL CALCULATOR */}
    <section className="max-w-[1400px] mx-auto px-6 pb-32">
      <div className="bg-gradient-to-r from-[#0E2A47] to-[#123B63] rounded-3xl p-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

        {/* Left side: Inputs */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Moliyaviy rejalashtiruvchi
          </h3>

          <div className="space-y-6">
            {/* Daromad */}
            <div>
              <label className="text-sm text-gray-400">
                Daromad: {income} $
              </label>
              <input
                type="range"
                min={0}
                max={10000}
                step={100}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full mt-2 accent-blue-500"
              />
            </div>

            {/* Muddat */}
            <div>
              <label className="text-sm text-gray-400">
                Muddat: {term} oy
              </label>
              <input
                type="range"
                min={1}
                max={60}
                step={1}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full mt-2 accent-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Right side: Natija */}
        <div className="flex flex-col justify-center items-start bg-white bg-opacity-10 p-6 rounded-2xl">
          <h4 className="text-xl font-semibold mb-4">Natija:</h4>
          <p className="text-lg">
            Jami mablag‘: <span className="font-bold">{total} $</span>
          </p>
        </div>

      </div>
    </section>

    </div>
  );
}
