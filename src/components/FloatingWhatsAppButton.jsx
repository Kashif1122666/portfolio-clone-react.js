import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  return (
    <button
      className="fixed bottom-5 left-5 z-[9999] flex items-center gap-2 rounded-2xl bg-[#25D366] text-white shadow-lg px-5 py-3 text-base font-bold
                 sm:px-6 sm:py-4 sm:text-sm"
    >
      <FaWhatsapp className="text-xl sm:text-lg" />
      <span className="hidden sm:inline">Talk on WhatsApp</span>
      <span className="inline sm:hidden">WhatsApp</span>
    </button>
  );
};

export default FloatingWhatsAppButton;
