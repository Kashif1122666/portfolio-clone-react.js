import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "SHAHARYAR",
    "home",
    "aboutMe",
    "services",
    "portfolio",
    "why Chose",
    "Experience & Reference",
    "our Clients",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // add background if scrolled past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full px-4 py-1 shadow-lg z-50 transition-colors duration-300 ${
        scrolled || isOpen ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: "30%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="flex flex-col py-6">
        <div className="lg:hidden flex justify-between items-center">
          <div className="text-white font-extrabold text-2xl">SHAHARYAR</div>

          <div
            className="bg-amber-300 p-1 rounded cursor-pointer flex flex-col justify-center items-center gap-0.5 w-8 h-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center space-x-5 mt-4">
          <ul className="flex space-x-5">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="active"
                  className={`capitalize px-2 pb-1 border-b-2 text-white ${
                    item === "contact"
                      ? "border border-white text-white text-xl px-10 mr-[15px] hover:text-[#FFB600]"
                      : item === "SHAHARYAR"
                      ? "font-extrabold border-none text-2xl"
                      : "text-xl border-transparent hover:border-[#ffb600] hover:text-[#ffb600]"
                  } transition-all duration-300 cursor-pointer relative`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center space-y-3 mt-4 lg:hidden"
            >
              <ul className="flex flex-col items-center space-y-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-70}
                      activeClass="active"
                      className={`capitalize px-2 pb-1 border-b-2 text-white ${
                        item === "contact"
                          ? "border border-white text-white text-xl px-10 mr-[15px] hover:text-[#FFB600]"
                          : item === "SHAHARYAR"
                          ? "font-extrabold border-none text-2xl"
                          : "text-xl border-transparent hover:border-[#ffb600] hover:text-[#ffb600]"
                      } transition-all duration-300 cursor-pointer relative`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
