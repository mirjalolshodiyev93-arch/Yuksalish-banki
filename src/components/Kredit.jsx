import { useState } from "react";


const BOT_TOKEN ="8397312064:AAFoqmc2-7rbK7pSWIwZsLZWTEXcqp11Mgw";
const CHAT_ID = "8429418799";


const kreditTurlari = [
  {
    id: 1,
    title: "Ipoteka krediti",
    rate: "18%",
    max: "1 mlrd so'm",
    term: "20 yil",
  },
  {
    id: 2,
    title: "Avtokredit",
    rate: "20%",
    max: "500 mln so'm",
    term: "5 yil",
  },
  {
    id: 3,
    title: "Biznes krediti",
    rate: "22%",
    max: "2 mlrd so'm",
    term: "10 yil",
  },
  {
    id: 4,
    title: "Iste’mol krediti",
    rate: "24%",
    max: "200 mln so'm",
    term: "3 yil",
  },
];

export default function Kredit() {

      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [type, setType] = useState("");
    
      const sendToTelegram = async () => {
        const message = `
    📩 Yangi Kredit Ariza
    
    👤 Ism: ${name}
    📞 Telefon: ${phone}
    💳 Kredit turi: ${type}
        `;
    
        await fetch(
          `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              text: message,
            }),
          }
        );
    
        alert("Ariza yuborildi ✅");
        setName("");
        setPhone("");
        setType("");
      };
    
  const [summa, setSumma] = useState(10000000);
  const [muddat, setMuddat] = useState(12);
  const [foiz, setFoiz] = useState(20);

  const oylikTolov = () => {
    const r = foiz / 100 / 12;
    return ((summa * r) / (1 - Math.pow(1 + r, -muddat))).toFixed(0);
  };

  return (
    <div className="bg-[#071B2E] text-white">

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Tez va Ishonchli Kredit Xizmati
          </h1>
          <p className="text-gray-300 mb-6">
            Orzularingizni bugunoq amalga oshiring. Eng qulay foizlar va tezkor
            tasdiqlash.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700">
              Kredit olish
            </button>
            <button className="border border-white px-6 py-3 rounded-xl">
              Hisoblash
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            alt="kredit"
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* KREDIT TURLARI */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Kredit Turlari
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {kreditTurlari.map((item) => (
            <div
              key={item.id}
              className="bg-[#0E2A47] p-6 rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p>Foiz: {item.rate}</p>
              <p>Maks: {item.max}</p>
              <p>Muddat: {item.term}</p>
              <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg w-full">
                Batafsil
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* KALKULYATOR */}
      <section className="max-w-[900px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Kredit Kalkulyator
        </h2>

        <div className="bg-[#0E2A47] p-10 rounded-2xl space-y-6">
          <div>
            <label>Summa (so'm)</label>
            <input
              type="number"
              value={summa}
              onChange={(e) => setSumma(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-[#071B2E] border border-gray-600"
            />
          </div>

          <div>
            <label>Muddat (oy)</label>
            <input
              type="number"
              value={muddat}
              onChange={(e) => setMuddat(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-[#071B2E] border border-gray-600"
            />
          </div>

          <div>
            <label>Foiz (%)</label>
            <input
              type="number"
              value={foiz}
              onChange={(e) => setFoiz(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-[#071B2E] border border-gray-600"
            />
          </div>

          <div className="text-2xl font-bold text-center mt-6">
            Oylik to'lov: {oylikTolov()} so'm
          </div>
        </div>
      </section>

      {/* ARIZA */}
     <div className="bg-[#071B2E] text-white min-h-screen flex items-center justify-center">
      <div className="bg-[#0E2A47] p-10 rounded-2xl w-[400px] space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Kreditga Ariza Qoldiring
        </h2>

        <input
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#071B2E]"
        />

        <input
          type="text"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#071B2E]"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#071B2E]"
        >
          <option value="">Kredit tanlang</option>
          {kreditTurlari.map((item) => (
            <option key={item.id}>{item.title}</option>
          ))}
        </select>

        <button
          onClick={sendToTelegram}
          className="bg-blue-600 w-full py-3 rounded-xl hover:bg-blue-700"
        >
          Yuborish
        </button>
      </div>
    </div>

    </div>
  );
}