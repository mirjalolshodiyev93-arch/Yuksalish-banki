import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    region: "",
    city: "",
    email: "",
    phone: "+998 ",
    requestType: "complaint",
    subjectType: "legal",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // KUCHAYTIRILGAN VALIDATSIYA
  const validateField = (name, value) => {
    let errorMsg = "";
    const cleanValue = typeof value === "string" ? value.trim() : value;

    switch (name) {
      case "fullName":
        const nameParts = cleanValue.split(/\s+/).filter(p => p.length > 0);
        const nameRegex = /^[a-zA-Zà-яÀ-ЯUzUzO'o'G'g'shchSHCHsS\s]+$/; 
        if (!cleanValue) errorMsg = t("translation.errors.required");
        else if (nameParts.length !== 3) errorMsg = t("translation.errors.fullNameThreeWords");
        else if (!nameRegex.test(cleanValue)) errorMsg = t("translation.errors.onlyLetters");
        else if (nameParts.some(p => p.length < 2)) errorMsg = t("translation.errors.tooShortName");
        break;

      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!cleanValue) errorMsg = t("translation.errors.required");
        else if (!emailRegex.test(cleanValue)) errorMsg = t("translation.errors.invalidEmail");
        break;

      case "phone":
        const phoneRegex = /^\+998 \d{2} \d{3}-\d{2}-\d{2}$/;
        if (!cleanValue || cleanValue === "+998 ") errorMsg = t("translation.errors.required");
        else if (!phoneRegex.test(cleanValue)) errorMsg = t("translation.errors.invalidPhone");
        break;

      case "message":
        if (!cleanValue) errorMsg = t("translation.errors.required");
        else if (cleanValue.length < 20) errorMsg = t("translation.errors.tooShortMessage");
        else if (cleanValue.length > 2000) errorMsg = t("translation.errors.tooLongMessage");
        break;

      case "region":
      case "city":
        if (!cleanValue) errorMsg = t("translation.errors.required");
        else if (cleanValue.length < 3) errorMsg = t("translation.errors.tooShortLocation");
        break;

      case "agree":
        if (!value) errorMsg = t("translation.errors.mustAgree");
        break;

      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let fieldValue = type === "checkbox" ? checked : value;

    // Telefon maskasi (avtomatik formatlash)
    if (name === "phone") {
      const numbers = value.replace(/\D/g, "").slice(3);
      fieldValue = "+998 ";
      if (numbers.length > 0) fieldValue += numbers.substring(0, 2);
      if (numbers.length > 2) fieldValue += " " + numbers.substring(2, 5);
      if (numbers.length > 5) fieldValue += "-" + numbers.substring(5, 7);
      if (numbers.length > 7) fieldValue += "-" + numbers.substring(7, 9);
    }

    setForm({ ...form, [name]: fieldValue });
    if (errors[name]) setErrors({ ...errors, [name]: "" }); // Xatoni real-vaqtda o'chirish
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // To'liq tekshiruv
    Object.keys(form).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Xato bor birinchi elementga fokus berish
      const firstError = Object.keys(newErrors)[0];
      document.getElementsByName(firstError)[0]?.focus();
      return;
    }

    setLoading(true);

    // Ma'lumotlarni tozalash va formatlash
    const sanitizedFullName = form.fullName
      .trim()
      .split(/\s+/)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");

    const telegramText = `
📌 *Yangi Murojaat*
👤 *FIO:* ${sanitizedFullName}
📍 *Manzil:* ${form.region}, ${form.city}
📧 *Email:* ${form.email}
📞 *Tel:* ${form.phone}
📝 *Turi:* ${t(`translation.${form.requestType}`)}
🏢 *Subyekt:* ${t(`translation.${form.subjectType}`)}
💬 *Xabar:* ${form.message}
    `;

    const BOT_TOKEN = "8397312064:AAFoqmc2-7rbK7pSWIwZsLZWTEXcqp11Mgw";
    const CHAT_ID = "8429418799";

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: telegramText, parse_mode: "Markdown" }),
      });

      if (res.ok) {
        alert(t("translation.alerts.success"));
        setForm({ fullName: "", region: "", city: "", email: "", phone: "+998 ", requestType: "complaint", subjectType: "legal", message: "", agree: false });
        setErrors({});
      } else throw new Error();
    } catch (err) {
      alert(t("translation.alerts.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-red-600 p-6 text-center">
          <h2 className="text-2xl font-bold text-white">{t("translation.send")}</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {/* FIO */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">{t("translation.fullName")}</label>
            <input 
              name="fullName" 
              type="text"
              value={form.fullName} 
              onChange={handleChange} 
              placeholder="Familiya Ism Sharif"
              className={`w-full border-2 p-3 rounded-xl outline-none transition-all ${errors.fullName ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-500"}`} 
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">{t("translation.region")}</label>
              <input name="region" value={form.region} onChange={handleChange} className={`w-full border-2 p-3 rounded-xl outline-none ${errors.region ? "border-red-500" : "border-gray-200 focus:border-red-500"}`} />
              {errors.region && <p className="text-red-500 text-xs">{errors.region}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">{t("translation.city")}</label>
              <input name="city" value={form.city} onChange={handleChange} className={`w-full border-2 p-3 rounded-xl outline-none ${errors.city ? "border-red-500" : "border-gray-200 focus:border-red-500"}`} />
              {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">{t("translation.email")}</label>
              <input name="email" value={form.email} onChange={handleChange} className={`w-full border-2 p-3 rounded-xl outline-none ${errors.email ? "border-red-500" : "border-gray-200 focus:border-red-500"}`} />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">{t("translation.phone")}</label>
              <input name="phone" value={form.phone} onChange={handleChange} maxLength="17" className={`w-full border-2 p-3 rounded-xl outline-none ${errors.phone ? "border-red-500" : "border-gray-200 focus:border-red-500"}`} />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">{t("translation.message")}</label>
            <textarea 
              name="message" 
              rows="4" 
              value={form.message} 
              onChange={handleChange} 
              className={`w-full border-2 p-3 rounded-xl outline-none ${errors.message ? "border-red-500" : "border-gray-200 focus:border-red-500"}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="w-5 h-5 accent-red-600" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition">{t("translation.agree")}</span>
            </label>
            {errors.agree && <p className="text-red-500 text-xs">{errors.agree}</p>}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all ${loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-200"}`}
          >
            {loading ? "..." : t("translation.send")}
          </button>
        </form>
      </div>
    </div>
  );
}