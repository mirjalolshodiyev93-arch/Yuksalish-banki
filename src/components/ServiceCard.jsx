import { CreditCard, Landmark, PiggyBank, RefreshCcw } from "lucide-react";

export default function servicesData() {
  const services = [
    {
      icon: <CreditCard size={28} />,
      title: "Plastik kartalar",
      desc: "Barcha turdagi xalqaro Visa/Mastercard va milliy Humo/Uzcard kartalari.",
    },
    {
      icon: <Landmark size={28} />,
      title: "Kreditlar",
      desc: "Imtiyozli foiz stavkalari va tezkor rasmiylashtirish bilan mikroqarzlar.",
      active: true,
    },
    {
      icon: <PiggyBank size={28} />,
      title: "Omonatlar",
      desc: "Mablag'laringizni ishonchli va yuqori daromad bilan ko'paytiring.",
    },
    {
      icon: <RefreshCcw size={28} />,
      title: "Valyuta",
      desc: "Eng foydali kurslarda 24/7 onlayn valyuta ayirboshlash xizmati.",
    },
  ];

  return (
    <section className="bg-[#0B1F3B] py-20 text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Bizning xizmatlar</h2>
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
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 ${
                  item.active
                    ? "bg-green-600/20 text-green-400"
                    : "bg-blue-600/20 text-blue-400"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.desc}
              </p>

              <button className="text-blue-400 flex items-center gap-2 hover:gap-3 transition-all">
                Batafsil →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
