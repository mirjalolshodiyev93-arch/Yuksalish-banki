import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contacts() {
  return (
    // bg-white va pt-[120px] (Navbar uchun joy) qo'shildi
    <div className="pt-[100px] sm:pt-[140px] bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Title - Yozuvlar to'q rangga o'zgartirildi */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Контактлар
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Biz bilan o'zingizga qulay usulda bog'laning. Biz har doim yordamga tayyormiz.
          </p>
        </div>

        {/* Grid - 1 ustun (mobil), 2 ustun (planshet/kompyuter) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Contact Info - Fon och kulrang va border berildi */}
          <div className="bg-gray-50 p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100 space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Phone className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Telefon</h3>
                <p className="text-gray-600 mt-1 text-base">+998 71 123 45 67</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Mail className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Email</h3>
                <p className="text-gray-600 mt-1 text-base">info@bank.uz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <MapPin className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Manzil</h3>
                <p className="text-gray-600 mt-1 text-base">
                  Toshkent sh., Amir Temur ko'chasi, 108-uy
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Ish tartibi</h3>
                <p className="text-gray-600 mt-1 text-base">
                  Dush-Jum: 09:00 – 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Oq fon va soya (Shadow) */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-50">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Xabar yo'llash
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ismingiz</label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email manzilingiz</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Xabaringiz</label>
                <textarea
                  rows="4"
                  placeholder="Xabaringizni shu yerga yozing..."
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200"
              >
                Xabarni yuborish
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}