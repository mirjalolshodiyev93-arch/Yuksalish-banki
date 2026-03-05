import React, { useState, useEffect, useRef } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [messages, setMessages] = useState([
    { text: "Assalomu alaykum 👋 Yuksalish Bankga xush kelibsiz!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [newMessage, setNewMessage] = useState(false);

  const chatEndRef = useRef(null);

  // Quick reply tugmalari
  const quickReplies = [
    "Kredit haqida",
    "Valyuta kursi",
    "Filiallar ro'yxati",
    "Operator bilan bog'lanish"
  ];

  // Online/offline status
  useEffect(() => {
    const hour = new Date().getHours();
    setIsOnline(hour >= 9 && hour < 18);
  }, []);

  // Scroll chat pastga avtomatik
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Chatbot javobi
  const getBotReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("kredit")) return "Kredit olish uchun 'Kreditlar' sahifasiga oting yoki online ariza topshiring 📄";
    if (lower.includes("valyuta")) return "Valyuta kurslarini 'Valyuta' sahifasida korishingiz mumkin 💱";
    if (lower.includes("filial")) return "Filiallar royxati 'Filiallar' sahifasida mavjud 📍";
    return "Operator tez orada siz bilan boglanadi ☎️";
  };

  // Xabar yuborish
  const handleSend = (msgText = input) => {
    if (!msgText.trim() || !isOnline) return;

    const userMessage = { text: msgText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    if (!open) setNewMessage(true);

    setIsTyping(true);
    setTimeout(() => {
      const botReply = { text: getBotReply(msgText), sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => { setOpen(!open); setNewMessage(false); }}
        className=" fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        💬
        {newMessage && (
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        )}
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[350px] max-h-[80vh] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100 flex flex-col overflow-hidden z-50">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4">
            <p className="font-semibold">Yuksalish Bank Support</p>
            <p className="text-xs">{isOnline ? "🟢 Online" : "🔴 Offline"}</p>

            {/* Quick Replies */}
            <div className="flex gap-2 flex-wrap mt-2">
              {quickReplies.map((q, i) => (
                <button
                  key={i}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-300"
                  onClick={() => handleSend(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-emerald-500 text-white ml-auto"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="p-3 rounded-xl text-sm max-w-[80%] bg-gray-100 text-gray-700">
                Bot yozmoqda...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* INPUT */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder={isOnline ? "Savolingizni yozing..." : "Operator offline"}
              disabled={!isOnline}
              className="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-200"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={() => handleSend()}
              disabled={!isOnline}
              className="bg-emerald-600 text-white px-4 rounded-lg hover:bg-emerald-700 disabled:bg-gray-400"
            >
              Yubor
            </button>
          </div>

        </div>
      )}
    </>
  );
}