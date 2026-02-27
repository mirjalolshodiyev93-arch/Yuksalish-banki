import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const [form, setForm] = useState({
    fullName: "",
    region: "",
    city: "",
    email: "",
    phone: "",
    requestType: "complaint",
    subjectType: "legal",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Funksiya: xatolarni tilga mos holda tekshirish
  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "fullName":
        const words = value.trim().split(/\s+/);
        if (words.length > 3) errorMsg = t("translation.errors.fullNameWords");
        else if (words.some((w) => w.length === 0)) errorMsg = t("translation.errors.fullNameFormat");
        break;
      case "region":
        if (!value.trim()) errorMsg = t("translation.errors.region");
        break;
      case "city":
        if (!value.trim()) errorMsg = t("translation.errors.city");
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMsg = t("translation.errors.email");
        break;
      case "phone":
        if (!/^\+998 \d{2} \d{3}-\d{2}-\d{2}$/.test(value)) errorMsg = t("translation.errors.phone");
        break;
      case "message":
        if (value.trim().length < 10) errorMsg = t("translation.errors.message");
        break;
      case "agree":
        if (!value) errorMsg = t("translation.agree");
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setForm({ ...form, [name]: fieldValue });

    // Real-time validation
    setErrors({ ...errors, [name]: validateField(name, fieldValue) });
  };

  // Agar til o'zgarsa, xatolarni ham yangilash
  useEffect(() => {
    const newErrors = {};
    Object.keys(errors).forEach((key) => {
      newErrors[key] = validateField(key, form[key]);
    });
    setErrors(newErrors);
  }, [i18n.language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // FIO formatlash
    let fullNameFormatted = form.fullName.trim().split(/\s+/);
    if (fullNameFormatted.length !== 3) newErrors.fullName = t("errors.fullNameWords");
    else form.fullName = fullNameFormatted.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");

    // Boshqa maydonlar
    ["region","city","email","phone","message","agree"].forEach((field) => {
      const err = validateField(field, form[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Telegram xabari
    const message = `
${t("fullName")}: ${form.fullName}
${t("region")}: ${form.region}
${t("city")}: ${form.city}
${t("email")}: ${form.email}
${t("phone")}: ${form.phone}
${t("requestType")}: ${t(form.requestType)}
${t("subjectType")}: ${t(form.subjectType)}
${t("message")}: ${form.message}
${t("agree")}: ${form.agree ? "Да" : "Нет"}
`;

    const BOT_TOKEN ="8397312064:AAFoqmc2-7rbK7pSWIwZsLZWTEXcqp11Mgw";
    const CHAT_ID = "8429418799";

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
      const data = await res.json();

      if (data.ok) {
        alert(t("alerts.success"));
        setForm({ fullName: "", region: "", city: "", email: "", phone: "", requestType: "complaint", subjectType: "legal", message: "", agree: false });
        setErrors({});
      } else alert(t("alerts.error"));
    } catch (error) {
      console.error(error);
      alert(t("alerts.network"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl">
        {/* Til tugmalari */}
     

        <div className="bg-white rounded-2xl p-10 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">{t("translation.send")}</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* FIO */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">{t("translation.fullName")}</label>
              <input type="text" name="fullName" placeholder={t("translation.fullName")} value={form.fullName} onChange={handleChange} className={`w-full border p-3 rounded-lg focus:outline-none ${errors.fullName ? "border-red-500" : "border-gray-300"}`} />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Region + City */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">{t("translation.region")}</label>
                <input type="text" name="region" placeholder={t("translation.region")} value={form.region} onChange={handleChange} className={`w-full border p-3 rounded-lg focus:outline-none ${errors.region ? "border-red-500" : "border-gray-300"}`} />
                {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">{t("translation.city")}</label>
                <input type="text" name="city" placeholder={t("translation.city")} value={form.city} onChange={handleChange} className={`w-full border p-3 rounded-lg focus:outline-none ${errors.city ? "border-red-500" : "border-gray-300"}`} />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">{t("translation.email")}</label>
                <input type="email" name="email" placeholder={t("translation.email")} value={form.email} onChange={handleChange} className={`w-full border p-3 rounded-lg focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">{t("translation.phone")}</label>
                <input type="tel" name="phone" placeholder="+998 XX XXX-XX-XX" value={form.phone} onChange={handleChange} className={`w-full border p-3 rounded-lg focus:outline-none ${errors.phone ? "border-red-500" : "border-gray-300"}`} />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Selects */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">{t("translation.requestType")}</label>
                <select name="requestType" value={form.requestType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500">
                  <option value="complaint">{t("translation.complaint")}</option>
                  <option value="suggestion">{t("translation.suggestion")}</option>
                  <option value="question">{t("translation.question")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">{t("translation.subjectType")}</label>
                <select name="subjectType" value={form.subjectType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500">
                  <option value="legal">{t("translation.legal")}</option>
                  <option value="physical">{t("translation.physical")}</option>
                </select>
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">{t("translation.message")}</label>
              <textarea name="message" rows="5" placeholder={t("translation.message")} value={form.message} onChange={handleChange} className={`w-full border p-3 rounded-lg focus:outline-none ${errors.message ? "border-red-500" : "border-gray-300"}`}></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mt-1 accent-red-600" />
              <p className="text-sm text-gray-600">{t("translation.agree")}</p>
            </div>
            {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

            {/* Submit */}
            <div className="flex justify-end">
              <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">{t("translation.send")}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}