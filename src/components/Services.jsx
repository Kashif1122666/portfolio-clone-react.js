import React from "react";

const services = [
  {
    number: "01",
    title: "Amazon Listing Images",
    description:
      "Elevate your product presence on Amazon with captivating visuals that enhance customer engagement and drive sales, ensuring your products stand out in the competitive marketplace.",
  },
  {
    number: "02",
    title: "Book Cover",
    description:
      "Immerse readers in your narrative from the first glance with meticulously crafted book covers that convey the essence of your story, leaving a lasting impression on potential readers.",
  },
  {
    number: "03",
    title: "Restaurant Menu",
    description:
      "Enhance the dining experience for your customers through visually appealing menu designs that showcase your cuisine, creating anticipation and setting the tone for a delightful meal.",
  },
  {
    number: "04",
    title: "Flyer & Poster",
    description:
      "Make your events or promotions unforgettable with impactful flyer and poster designs, capturing attention and conveying key information in a visually compelling way.",
  },
  {
    number: "05",
    title: "Brochure & Leaflet",
    description:
      "Tell your brand's story with informative and visually appealing brochures and leaflets, creating a tangible and engaging piece that communicates your message effectively.",
  },
  {
    number: "06",
    title: "Social Media Design",
    description:
      "Boost your online presence with visually stunning and shareable social media posts, connecting with your audience and conveying your brand's personality across digital platforms.",
  },
  {
    number: "07",
    title: "Banner & Cover",
    description:
      "Reinforce your brand identity with banner and cover designs, creating a cohesive visual identity across various platforms and leaving a lasting impression on your audience.",
  },
  {
    number: "08",
    title: "UI/UX Design",
    description:
      "Enhance user experiences with intuitive and visually pleasing UI/UX designs, ensuring a seamless and enjoyable interaction with your digital products or platforms.",
  },
  {
    number: "09",
    title: "Packaging & Label",
    description:
      "Wrap your products in eye-catching packaging and label designs that not only protect but also communicate your brand's uniqueness, making a strong visual impact on the retail shelf.",
  },
  {
    number: "10",
    title: "Branding & Logo",
    description:
      "We craft unique and memorable brand identities for your business. Professional logos and branding that give your presence a fresh edge.",
  },
  {
    number: "11",
    title: "Thumbnails & Gigs",
    description:
      "Eye-catching thumbnails and professional gigs that boost your online presence. We design content that grabs clicks and builds trust.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className=" bg-[#F2F2F2] py-16 px-4 sm:px-10 lg:px-20"
    >
      <p className="text-black font-bold text-2xl">Services</p>
      <div className="w-full px-0 mx-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 lg:text-6xl">
          I offer these <span className="text-[#FFB600]">Services</span> for
          your <br /> Graphic design Project
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
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
              </h3>{" "}
              <span className="text-7xl text-[#F5E6C2]">{service.number}</span>
            </div>
            <p className="text-gray-950 ">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
