import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function MessagingWidget() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      {/* WhatsApp */}
      <a
        href="https://wa.me/123456789" // Remplacez par votre numéro
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/YourTelegramUsername" // Remplacez par votre lien
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-400 hover:bg-blue-500 text-white"
      >
        <FaTelegramPlane size={24} />
      </a>
    </div>
  );
}

export default MessagingWidget;
