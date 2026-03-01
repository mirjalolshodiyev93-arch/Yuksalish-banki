import { useState } from "react";

const BOT_TOKEN = "TOKENNI_BACKENDGA_OLIB_OTING";
const CHAT_ID = "CHAT_ID";

const kreditTurlari = [
  { id: 1, title: "Ipoteka krediti", rate: "18%", max: "1 mlrd so'm", term: "20 yil" },
  { id: 2, title: "Avtokredit", rate: "20%", max: "500 mln so'm", term: "5 yil" },
  { id: 3, title: "Biznes krediti", rate: "22%", max: "2 mlrd so'm", term: "10 yil" },
  { id: 4, title: "Iste’mol krediti", rate: "24%", max: "200 mln so'm", term: "3 yil" },
];

export default function Kredit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  const [summa, setSumma] = useState(10000000);
  const [muddat, setMuddat] = useState(12);
  const [foiz, setFoiz] = useState(20);

  const oylikTolov = () => {
    const r = foiz / 100 / 12;
    return ((summa * r) / (1 - Math.pow(1 + r, -muddat))).toFixed(0);
  };

  const sendToTelegram = async () => {
    if (!name || !phone || !type) {
      alert("Iltimos barcha maydonlarni to‘ldiring");
      return;
    }

    const message = `
📩 Yangi Kredit Ariza

👤 Ism: ${name}
📞 Telefon: ${phone}
💳 Kredit turi: ${type}
    `;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    alert("Ariza yuborildi ✅");
    setName("");
    setPhone("");
    setType("");
  };

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Tez va Ishonchli Kredit Xizmati
          </h1>
          <p className="text-gray-600 mb-6">
            Eng qulay foizlar va tezkor tasdiqlash.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Kredit olish
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl">
              Hisoblash
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
          alt="kredit"
          className="rounded-2xl w-full h-[300px] md:h-[400px] object-cover"
        />
      </section>

      {/* KREDIT TURLARI */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Kredit Turlari
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kreditTurlari.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-6 rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p>Foiz: {item.rate}</p>
              <p>Maks: {item.max}</p>
              <p>Muddat: {item.term}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                Batafsil
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* KALKULYATOR */}
      <section className="max-w-[900px] mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Kredit Kalkulyator
        </h2>

        <div className="bg-gray-100 p-6 md:p-10 rounded-2xl space-y-6">
          <input
            type="number"
            value={summa}
            onChange={(e) => setSumma(+e.target.value)}
            className="w-full p-3 rounded-lg border"
            placeholder="Summa"
          />

          <input
            type="number"
            value={muddat}
            onChange={(e) => setMuddat(+e.target.value)}
            className="w-full p-3 rounded-lg border"
            placeholder="Muddat (oy)"
          />

          <input
            type="number"
            value={foiz}
            onChange={(e) => setFoiz(+e.target.value)}
            className="w-full p-3 rounded-lg border"
            placeholder="Foiz (%)"
          />

          <div className="text-xl md:text-2xl font-bold text-center">
            Oylik to'lov: {oylikTolov()} so'm
          </div>
        </div>
      </section>

      {/* ARIZA */}
      <section className="max-w-[500px] mx-auto px-4 py-12 md:py-20">
        <div className="bg-gray-100 p-6 md:p-10 rounded-2xl space-y-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center">
            Kreditga Ariza Qoldiring
          </h2>

          <input
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border"
          />

          <input
            type="text"
            placeholder="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-lg border"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 rounded-lg border"
          >
            <option value="">Kredit tanlang</option>
            {kreditTurlari.map((item) => (
              <option key={item.id}>{item.title}</option>
            ))}
          </select>

          <button
            onClick={sendToTelegram}
            className="bg-blue-600 text-white w-full py-3 rounded-xl hover:bg-blue-700"
          >
            Yuborish
          </button>
        </div>
      </section>

    </div>
  );
}