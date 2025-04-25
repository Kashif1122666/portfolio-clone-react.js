import React from "react";
import wone from "../Images/wone.jpg";
import wtwo from "../Images/wtwo.jpg";
import wthree from "../Images/wthree.jpg";
import wfour from "../Images/wfour.jpg";
import wfive from "../Images/wfive.jpg";
import wsix from "../Images/wsix.jpg";
import wseven from "../Images/wseven.jpg";
import weight from "../Images/weight.jpg";
import wnine from "../Images/wnine.jpg";
import wten from "../Images/wten.jpg";
import wtwelve from "../Images/wtwelve.jpg";
import remaining from "../Images/remaining.jpg";

function Portfolio() {
  const works = [
    {
      text: "AMAZON LISTING IMAGES",
    },
    {
      text: "BOOK COVER",
    },
    {
      text: "RESTAURANT MENU",
    },
    {
      text: "FLYER & POSTER",
    },
    {
      text: "BROCHURE & LEAFLET",
    },
    {
      text: "SOCIAL MEDIA DESIGN",
    },
    {
      text: "BANNER AND COVER",
    },
    {
      text: "UI/UX",
    },
    {
      text: "PACAGE & LABEL",
    },
    {
      text: "PBRANDING & LOGO",
    },
    {
      text: "THUMBNAIL & GIGS",
    },
  ];

  const workImages = [
    {
      src: wtwelve,
      title: "Amazon Listing Images",
      alt: "Amazon Listing Images",
    },
    {
      src: wten,
      title: "Book Cover",
      alt: "Book Cover",
    },
    {
      src: wnine,
      title: "Restaurant Menu",
      alt: "Restaurant Menu",
    },
    {
      src: weight,
      title: "Flyer & Poster",
      alt: "Flyer & Poster",
    },
    {
      src: wseven,
      title: "Brochure & Leaflet",
      alt: "Brochure & Leaflet",
    },
    {
      src: wsix,
      title: "Social Media Design",
      alt: "Social Media Design",
    },

    {
      src: wfour,
      title: "Banner and Cover",
      alt: "Banner and Cover",
    },
    {
      src: wthree,
      title: "UI/UX",
      alt: "UI/UX",
    },
    {
      src: wtwo,
      title: "Package & Label",
      alt: "Package & Label",
    },
    {
      src: wone,
      title: "Pbranding & Logo",
      alt: "Pbranding & Logo",
    },
    {
      src: remaining,
      title: "Thumbnail & Gigs",
      alt: "Thumbnail & Gigs",
    },
  ];

  return (
    <section
      id="services"
      className=" bg-[#F2F2F2] py-16 px-4 sm:px-10 lg:px-20"
    >
      <p className="text-black font-bold text-2xl">Portfolio</p>
      <div className="w-full px-0 mx-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 lg:text-6xl">
          I help you build <span className="text-[#FFB600]">brand</span> for
          your <br /> business
        </h2>
      </div>
      <div className="flex gap-9 mt-8 flex-wrap">
        <button className="bg-[#FFB600] text-black px-3 py-2 rounded ">
          RECENT WORK
        </button>
        {works.map((work, index) => (
          <span
            key={index}
            className="text-black hover:text-[#FFB600] cursor-pointer text-xl"
          >
            {work.text}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
        {workImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-300 "
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
