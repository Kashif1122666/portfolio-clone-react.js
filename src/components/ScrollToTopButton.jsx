import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-[9999] flex items-center justify-center rounded-full bg-black text-white shadow-lg 
                  transition-all duration-300 hover:bg-gray-800 p-3 sm:p-4
                  ${isVisible ? "opacity-100 animate-bounce" : "opacity-0 pointer-events-none"}`}
    >
      <FaArrowUp className="text-xl sm:text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
