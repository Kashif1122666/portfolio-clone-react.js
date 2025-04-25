import { motion } from "framer-motion";
import { 
  FaTwitter, 
  FaFacebook, 
  FaInstagram,
  FaLinkedin,
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className=" py-12 bg-[#F2F2F2]">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={container}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center space-y-8">
          {/* Name */}
          <motion.h2 
            variants={fadeUp}
            className="text-5xl font-bold text-black"
          >
            Shaharyar
          </motion.h2>
          
          {/* Social Icons */}
          <motion.div 
            variants={container}
            className="flex space-x-8"
          >
            <motion.a 
              variants={slideIn}
              href="#" 
              className="text-black hover:text-[#FFB600] transition-colors duration-300"
             
            >
              <FaTwitter className="w-6 h-6" />
            </motion.a>
            
            <motion.a 
              variants={slideIn}
              href="#" 
              className="text-black hover:text-[#FFB600] transition-colors duration-300"
              
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
            
            <motion.a 
              variants={slideIn}
              href="#" 
              className="text-black hover:text-[#FFB600] transition-colors duration-300"
              
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
            
            <motion.a 
              variants={slideIn}
              href="#" 
              className="text-black hover:text-[#FFB600] transition-colors duration-300"
              
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a 
              variants={slideIn}
              href="#" 
              className="text-black hover:text-[#FFB600] transition-colors duration-300"
              
            >
              <FaYoutube className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p 
            variants={fadeUp}
            className="text-black text-sm"
          >
            2025 © shaharyarsIdeem.com
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;