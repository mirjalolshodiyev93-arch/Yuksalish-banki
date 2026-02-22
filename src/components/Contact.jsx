import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <div className=" pt-[120px] bg-[#0B1F3B] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Контакты
          </h1>
          <p className="text-gray-300 mt-3">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6 border border-white/20">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg text-white">Телефон</h3>
                <p className="text-gray-300">+998 71 123 45 67</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg text-white">Email</h3>
                <p className="text-gray-300">info@bank.uz</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg text-white">Адрес</h3>
                <p className="text-gray-300">
                  г. Ташкент, ул. Амира Темура 108
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg text-white">Режим работы</h3>
                <p className="text-gray-300">
                  Пн-Пт: 09:00 – 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Напишите нам
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Ваш Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Ваше сообщение"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
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


