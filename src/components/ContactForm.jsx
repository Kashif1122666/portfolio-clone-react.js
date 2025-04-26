import React from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const ContactForm = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg "
      id="contact"
    >
      <div className=" mb-8">
        <motion.h2
          variants={itemVariants}
          className="text-lg font-bold text-gray-800 mt-16"
        >
          Contact
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-5xl text-black mt-2 font-bold"
        >
          Get in <span className="text-[#FFB600]">touch</span>
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl  text-black font-bold">Call Us.</h3>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-[#FFB600]" />
              <span>+92313-7515057</span>
            </div>
            <div className="flex items-center gap-2">
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-[#FFB600]" />
              <span>+92313-7515057</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl  text-black font-bold">Email.</h3>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-[#FFB600]" />
              <span>Shaharyar261@gmail.com</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl  text-black font-bold">Location.</h3>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-[#FFB600]" />
              <span>Burewala Pakistan</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-semibold text-black mt-16 mb-6"
          >
            Send A Message
          </motion.h3>

          <motion.form variants={itemVariants} className="space-y-4">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2  gap-4"
            >
              <div className="md:min-w-[300px]">
                <label
                  htmlFor=""
                  className="text-black block mb-1 lg:ml-[-150px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className=" bg-[#E2E2E2] w-full lg:min-w-[350px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB600] lg:ml-[-150px]"
                />
              </div>
              <div className="md:min-w-[300px]">
                <label htmlFor="" className="text-black block mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-[#E2E2E2] w-full lg:min-w-[350px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB600] "
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="md:min-w-[300px]">
                <label
                  htmlFor=""
                  className="text-black block mb-1 lg:ml-[-150px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className=" bg-[#E2E2E2] w-full lg:min-w-[350px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB600] lg:ml-[-150px]"
                />
              </div>
              <div className="md:min-w-[300px]">
                <label htmlFor="" className="text-black block mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className=" bg-[#E2E2E2]  w-full lg:min-w-[350px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB600]"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor=""
                className="text-black block mb-1 lg:ml-[-150px]"
              >
                Message
              </label>
              <textarea
                placeholder="Message"
                rows="4"
                className="bg-[#E2E2E2] w-full lg:min-w-[700px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB600] lg:ml-[-150px]"
              ></textarea>
            </motion.div>
            <motion.button
              variants={itemVariants}
              type="submit"
              className="px-9 py-2 bg-[#FFB600] text-black font-medium rounded-md hover:bg-black hover:text-white  lg:ml-[-150px]"
            >
              Send A Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
