import React from "react";
import aboutMe from "../Images/aboutMe.jpg";

function About() {
  return (
    <div
      id="aboutaboutMe"
      className="bg-[#FFFFFF] flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 pt-20"
    >
      <img src={aboutMe} alt="picccc" className="w-[80%] lg:w-[35%] rounded" />

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="lg:mt-16">
          <h2 className="text-2xl font-bold text-gray-800 ">About Me</h2>
          <h3 className="text-6xl text-[#FFB600] font-bold mb-2">
            <span className="text-6xl text-black font-bold">Hello!</span> I'm
            Shaharyar Saleem
          </h3>
          <p className="text-gray-600 mb-6 font-bold mx-5">
            As a freelance graphic designer, I bring a unique blend of
            creativity and technical expertise to my work. With a keen eye for
            detail and a passion for visual storytelling, I specialize in
            creating compelling designs that captivate and engage audiences. My
            dedication to delivering high-quality and{" "}
            <span className="text-[#FFB600] font-bold">
              innovative solutions
            </span>{" "}
            has enabled me to build strong relationships with clients across a
            diverse range of industries.
          </p>
          <p className="text-gray-600 mb-6 font-bold mx-5">
            By staying abreast of the latest design trends and technologies, I
            aim to consistently exceed expectations and bring visions to life.{" "}
            <span className="text-[#FFB600] font-bold">
              Let's work together
            </span>{" "}
            to transform your ideas into impactful visuals that resonate with
            your audience.
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row  justify-around w-full lg:justify-around gap-8 mt-8">
          <div>
            <h4 className="text-4xl font-bold text-black">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp; 4+
            </h4>
            <p className="text-xl text-black">Years Experience</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-black">
              &nbsp;&nbsp;&nbsp;50+
            </h4>
            <p className="text-xl text-black">Happy Clients</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-black">&nbsp;&nbsp;200+</h4>
            <p className="text-xl text-black">Projects Done</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 items-center mb-6">
          <button className="mt-8 bg-[#FFB600] rounded text-black font-bold py-2 px-10   hover:bg-[#000000] hover:text-white transition duration-300">
            About <br />
            <span> more</span>
          </button>
          <a href="#" className="border-b text-gray-900 hover:text-[#FFB600]">
            Discover my work
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
