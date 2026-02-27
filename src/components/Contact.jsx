import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <div className="pt-[120px] bg-[#0B1F3B] min-h-screen py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Контакты
          </h1>
          <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 border border-white/20">
            <div className="flex items-center gap-3 sm:gap-4">
              <Phone className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-white">Телефон</h3>
                <p className="text-gray-300 text-sm sm:text-base">+998 71 123 45 67</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Mail className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-white">Email</h3>
                <p className="text-gray-300 text-sm sm:text-base">info@bank.uz</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <MapPin className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-white">Адрес</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  г. Ташкент, ул. Амира Темура 108
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Clock className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-white">Режим работы</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Пн-Пт: 09:00 – 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
              Напишите нам
            </h2>

            <form className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Ваш Email"
                className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              />

              <textarea
                rows="4"
                placeholder="Ваше сообщение"
                className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}