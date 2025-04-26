import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingWhatsAppButton = () => {
  return (
 <motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    <button
      className=" fixed bottom-5 left-5 z-[9999] flex items-center gap-2  transition-all duration-300 hover:scale-110 group rounded-3xl hover:bg-green-400 bg-[#2ef175] text-white shadow-lg px-5 py-3 text-base font-bold
                 sm:px-6 sm:py-4 sm:text-sm "
    >
      <FaWhatsapp className="text-xl sm:text-lg hover:scale-110 group" />
      <span className="hidden sm:inline font-bold group-hover:text-[#ffb700c7]">Talk on WhatsApp</span>
      <span className="inline sm:hidden font-bold group-hover:text-[#ffb700c7]">WhatsApp</span>
    </button>
    </motion.div>
  );
};

export default FloatingWhatsAppButton;
