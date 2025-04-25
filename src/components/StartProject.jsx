import React from "react";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";

function StartProject() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FFB600] py-10 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center bg-[#FFB600] "
      >
        <div className="flex flex-col justify-center items-center text-center mb-10 gap-5">
          <div className="flex flex-col justify-center items-center text-center ">
            <p className="text-2xl">I am availible for freelancer.</p>
            <h1 className="font-bold text-6xl">
              Start a project with Me today!
            </h1>
          </div>

          <button className="px-6 py-3 bg-white text-black font-semibold rounded border border-transparent hover:bg-black hover:border-yellow-300 hover:text-white transition-all">
            Contact Me
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default StartProject;
