import { services } from "../data/homeData";
import React, { useState, useEffect } from "react";

export default function Service() {
  const [income, setIncome] = useState(2000);
  const [term, setTerm] = useState(6);
  const [rate, setRate] = useState(7.5);
  const [total, setTotal] = useState(income * (1 + rate / 100));

  useEffect(() => {
    setTotal(income + (income * rate) / 100);
  }, [income, rate]);

  const plans = [
    { value: 7.5, label: "Invest 7.5" },
    { value: 10, label: "Invest 10" },
    { value: 15, label: "Premium 15" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto bg-white text-gray-900">

      {/* HERO */}
      <div
        className="h-[450px] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f)",
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative px-16">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-gray-900">
            Moliya olamida <br />
            <span className="text-blue-600">yangi standartlar</span>
          </h1>
          <p className="text-black max-w-lg">
            Sizning ishonchli bankingiz va zamonaviy moliyaviy yechimlar markazi
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="px-6 grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
        {services.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl text-sm text-white transition">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CALCULATOR */}
      <section className="max-w-[1400px] mx-auto px-6 py-20  bg-slate-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-3xl p-12 shadow-md border border-gray-200">
            <h3 className="text-3xl font-semibold mb-10">
              Hisoblaymiz sizning daromadingiz
            </h3>

            <div className="mb-10">
              <label className="text-gray-600 text-sm">Investitsiya summasi</label>
              <div className="mt-3 border rounded-xl px-4 py-4 text-xl font-medium bg-gray-50">
                {income} USD
              </div>
              <input
                type="range"
                min={200}
                max={100000}
                step={100}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full mt-4 accent-blue-600"
              />
            </div>

            <div className="mb-10">
              <label className="text-gray-600 text-sm">Muddat</label>
              <div className="mt-3 border rounded-xl px-4 py-4 text-xl font-medium bg-gray-50">
                {term} oy
              </div>
              <input
                type="range"
                min={1}
                max={18}
                step={1}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full mt-4 accent-blue-600"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-3xl p-10 shadow-md border border-gray-200">

            <div className="mb-6">
              <label className="text-gray-700 text-sm mb-2 block font-medium">
                Tarif
              </label>

              <div className="flex gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.value}
                    onClick={() => setRate(plan.value)}
                    className={`cursor-pointer flex-1 text-center py-4 rounded-xl border transition transform hover:scale-105 duration-300
                      ${
                        rate === plan.value
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
                      } font-medium`}
                  >
                    {plan.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 mt-6">
              <div>
                <p className="text-gray-600 text-sm font-medium">Foiz stavkasi</p>
                <div className="bg-gray-50 rounded-xl px-4 py-4 mt-2 text-xl font-semibold">
                  {rate}%
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Muddat oxiridagi summa
                </p>
                <div className="bg-gray-50 rounded-xl px-4 py-4 mt-2 text-xl font-semibold">
                  {total.toFixed(2)} USD
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Sof daromad
                </p>
                <div className="bg-gray-50 rounded-xl px-4 py-4 mt-2 text-xl font-semibold text-green-600">
                  +{(total - income).toFixed(2)} USD
                </div>
              </div>
            </div>

            <button className="w-full mt-8 border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-100 transition">
              Batafsil
            </button>

            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition">
              Investitsiya qilish
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}