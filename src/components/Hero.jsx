import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white my-4">
          WELCOME TO MY <span className="text-[#FFB600]">WORLD</span>
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#FFB600] font-bold mb-2">
          Shaharyar
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#FFB600] font-bold mb-4">
          Saleem
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-8 text-center px-4">
          I work as freelancer.
          <span className="inline-block">
            <TypeAnimation
              sequence={[
                "Graphic Designer",
                2000,
                "Video Editor",
                2000,
                "UI/UX Designer",
                2000,
                "Pro Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[#FFB600] font-bold"
              repeat={Infinity}
            />
          </span>
        </p>

        <button className="px-6 py-3 bg-[#FFB600] text-white font-semibold rounded border border-transparent hover:bg-black hover:border-yellow-300 hover:text-white transition-all">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
