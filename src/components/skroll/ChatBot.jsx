import React, { useState } from "react";

export default function SimpleChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Assalomu alaykum! Yuksalish Bankga xush kelibsiz!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("kredit")) return "Kredit haqida ma'lumot olish uchun sahifaga o'ting 📄";
    if (lower.includes("valyuta")) return "Valyuta kurslarini ko'rishingiz mumkin 💱";
    if (lower.includes("filial")) return "Filiallar ro'yxati mavjud 📍";
    return "Operator tez orada siz bilan bog'lanadi ☎️";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = { text: getBotReply(input), sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Float Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border shadow-lg rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 font-semibold">
            Yuksalish Bank Chat
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[70%] text-sm ${
                  msg.sender === "user" ? "bg-green-500 text-white ml-auto" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Savolingizni yozing..."
              className="flex-1 px-2 py-1 border rounded"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-3 rounded"
            >
              Yubor
            </button>
          </div>
        </div>
      )}
    </>
  );
}