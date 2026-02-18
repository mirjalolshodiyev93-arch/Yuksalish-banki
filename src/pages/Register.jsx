import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Ism kiritish majburiy";
    if (!form.email.includes("@")) newErrors.email = "Email noto‘g‘ri";
    if (form.phone.length < 9) newErrors.phone = "Telefon noto‘g‘ri";
    if (form.password.length < 6) newErrors.password = "Parol kamida 6 ta belgi";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Parollar mos emas";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("user", JSON.stringify(form));
      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="max-w-[1400px] m-auto min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-800 w-full sm:max-w-md p-6 sm:p-8 rounded-3xl shadow-xl text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Bankka ro‘yxatdan o‘tish
        </h2>

        {success && (
          <div className="bg-green-600 text-white p-3 rounded-xl mb-4 text-sm text-center">
            Muvaffaqiyatli ro‘yxatdan o‘tdingiz 🎉
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* FULL NAME */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="To‘liq ism"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqam"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Parol"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-3 cursor-pointer text-sm text-gray-400 select-none"
            >
              {showPass ? "Yashirish" : "Ko‘rsat"}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Parolni tasdiqlash"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>
      </div>
    </div>
  );
}
