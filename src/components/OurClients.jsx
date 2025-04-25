import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import autur from "../Images/autur.jpg";
import cfive from "../Images/cfive.jpg";
import ctwo from "../Images/ctwo.jpg";
import cthree from "../Images/cthree.jpg";
import juan from "../Images/juan.jpg";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/navigation";

function OurClients() {
  const swiperRef = useRef(null);
  const testimonials = [
    {
      text: "Good work. got it right on the first attempt! needed a menu re-designed with less clutter and Muhammad did it in no time. Good job!",
      name: "Ataur",
      country: "CEO Arban life magazine (UK)",
      image: autur,
    },
    {
      text: "Very satisfied with the result and easy to work with this seller. will definitely contact the seller again for the future projects.",
      name: "Juan Florian",
      country: "Canada",
      image: juan,
    },
    {
      text: "Sheharyar is very accomodating! A true visionary who's able to put art to your thoughts and make them come to life.",
      name: "Les Stevens",
      country: "US",
      image: ctwo,
    },
    {
      text: "Great to work with. Finished before the duedate. Easy to work with on revisions. Just a great experience .",
      name: "Jay Wolcott",
      country: "UK",
      image: cthree,
    },
    {
      text: "Amazing work :) He did all the changes i wanted and the resultant was over my expectations. Good communication fast response.",
      name: "Anneli Westlund",
      country: "swedan",
      image: cfive,
    },
  ];

  const handlePrev = () => swiperRef.current.swiper.slidePrev();
  const handleNext = () => swiperRef.current.swiper.slideNext();

  return (
    <section
      id="services"
      className="bg-[#F2F2F2] py-16 px-4 sm:px-10 lg:px-20 "
    >
      <p className="text-black font-bold text-2xl">Our Clients</p>
      <div className="w-full px-5 mx-0 ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 lg:text-6xl">
          See what my <span className="text-[#FFB600]">happy clients</span> say{" "}
          <br /> about me
        </h2>
      </div>

      <div className="max-w-[1900px]  py-10 px-7 bg-gray-100">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          speed={500}
          ref={swiperRef}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-6 ">
                <div className="relative bg-[#797979] text-white py-1 px-6 rounded-xl w-full md:w-3/4 text-lg font-light leading-relaxed shadow-md">
                  <div className="text-yellow-400 text-7xl mb-2 font-serif ">
                    “
                  </div>
                  <span className="text-2xl">{item.text}</span>
                  <div className="text-yellow-400 text-7xl mt-9 font-serif">
                    ”
                  </div>

                  <div className="absolute bottom-[-8px] left-1/4 transform -translate-x-1/2 w-[36px] h-[36px] bg-[#797979] rotate-45"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 rounded-full   shadow-lg object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400">
                      {item.name}
                    </h3>
                    <p className="text-black">{item.country}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-1 mt-6 h-16">
          <button
            onClick={handlePrev}
            className="bg-[#FFB600] text-white px-3 rounded text-6xl hover:bg-black hover:text-white hover:border hover:border-yellow-400"
          >
            {" "}
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-[#FFB600] text-white px-3 rounded text-6xl hover:bg-black hover:text-white hover:border hover:border-yellow-400"
          >
            {" "}
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
