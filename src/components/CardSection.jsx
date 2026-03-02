import { cards } from "../data/cards";

export default function CardSection() {
  return (
    <section className="pb-16  pt-32 bg-[#f5f5f5]">
      <div className="max-w-[1400px]  mx-auto px-4 space-y-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl border border-gray-200 p-8 flex  flex-col lg:flex-row items-center justify-between gap-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* LEFT SIDE */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-black">
                {card.title}
              </h2>

              <p className="text-gray-600 text-lg">
                {card.description}
              </p>

              <p className="text-gray-600 text-lg">
                {card.subDescription}
              </p>

              <div className="flex gap-16 pt-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    {card.price}
                  </h3>
                  <p className="text-gray-500">
                    {card.priceLabel}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black">
                    {card.deposit}
                  </h3>
                  <p className="text-gray-500">
                    {card.depositLabel}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                  Оформить онлайн
                </button>

                <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                  Подробнее
                </button>
              </div>
            </div>

       {/* RIGHT SIDE */}
<div className="flex-1 flex justify-center">
  <img
    src={card.image}
    alt={card.title}
    className="w-[550px] max-w-full h-auto object-contain"
  />
</div>
          </div>
        ))}
      </div>
    </section>
  );
}