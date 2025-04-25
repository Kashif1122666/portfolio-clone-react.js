import { title } from "framer-motion/client";
import React from "react";

function WhChose() {
  const abilities = [
    {
      title: "Creative Brilliance",
      description:
        "My designs showcase an innovative blend of intelligence and artistic prowess, ensuring each project is a testament to our unique and strategic approach.",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    },
    {
      title: "Work Ethic",
      description:
        "I tirelessly pursue design excellence, delivering meticulously crafted visuals that not only meet but exceed expectations, setting a standard of unwavering.",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732201.png",
    },
    {
      title: "Open Communication",
      description:
        "Approachable and communication-focused, I make client collaboration effortless, ensuring ideas are not just heard but vividly translated into impactful designs.",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732208.png",
    },
    {
      title: "Strategic Thinking",
      description:
        "Remaining adaptable in a dynamic industry, I stay ahead of design trends, offering designs that resonate with contemporary audiences.",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732213.png",
    },
    {
      title: "Deadline Commitment",
      description:
        "With a keen understanding of project timelines, we prioritize meeting deadlines without compromising the quality of our work.",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
    },
    {
      title: "Passion for Impact",
      description:
        "Beyond aesthetics, our ultimate goal is to create designs that leave a lasting impact, resonating with audiences and achieving the intended objectives.",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732203.png",
    },
  ];

  return (
    <section id="services" className="  py-16 px-4 sm:px-10 lg:px-20">
      <p className="text-black font-bold text-2xl">Why Chose</p>
      <div className="w-full px-0 mx-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 lg:text-6xl">
          I'm smart, <span className="text-[#FFB600]">hard working,</span> easy
          to talk <br /> to, and I love a challenged project.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        {abilities.map((service, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex gap-16">
              <h3 className="text-3xl font-bold text-black mb-2">
                <span className="text-[#FFB600]">
                  {service.title.split(" ")[0]}
                </span>{" "}
                {service.title.split(" ").slice(1).join(" ")}
              </h3>
            </div>
            <p className="text-gray-950 ">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhChose;
