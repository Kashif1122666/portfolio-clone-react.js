import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "08/2023 Till Today",
    title: "Full-time Graphic Designer at Maxtrenza",
    description:
      "My primary focus on social media design, I play a crucial role in visually representing the brand and engaging the audience across various platforms.",
  },
  {
    date: "08/2021 Till Today",
    title: "Freelance at People Per Hour, Fiverr and Upwork",
    description:
      "I work as a freelance graphic designer and offering a range of design services to enhance your visual presence. My expertise encompasses social media design, flyer and brochure design, banner ads, UI/UX, poster design, menu design, Amazon listing image design, and packaging and label design. Let's collaborate to bring your ideas to life through creative and impactful visual solutions.",
  },
];

const skills = [
  { name: "PHOTOSHOP", percentage: 90 },
  { name: "ILLUSTRATOR", percentage: 95 },
  { name: "INDESIGN", percentage: 91 },
  { name: "FIGMA", percentage: 85 },
  { name: "PREMIERE PRO", percentage: 80 },
  { name: "FILMORA", percentage: 100 },
];
export default function ExpRef() {
  return (
    <>
      <section className="py-12 px-4 sm:px-10 lg:px-20" id="Experience & Reference">
        <h2 className="text-3xl font-bold text-black mb-12">
          Experience and Reference
        </h2>
        <div className="relative border-l-4 border-yellow-500 pl-8 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-12 top-0 bg-yellow-500 text-white rounded-full p-2">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
              <div className="mb-2">
                <span className="bg-[#FFB600] text-xs text-white px-3 py-1 rounded-full uppercase font-semibold">
                  {exp.date}
                </span>
              </div>
              <h5 className="text-2xl font-bold text-black">{exp.title}</h5>
              <p className="text-gray-900 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div
        className="mx-[62px] mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-28 gap-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center gap-3.5">
                <span className="text-2xl font-bold text-[#FFB600]">
                  {skill.percentage}%
                </span>
                <span className="text-2xl font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#FFB600] h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
