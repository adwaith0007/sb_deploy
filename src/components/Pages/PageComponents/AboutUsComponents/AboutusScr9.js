import React from "react";
import worldmap from "../../../../assets/AboutUs/Src9/worldmap.png";
import community from "../../../../assets/AboutUs/Src9/community.png";
import { BsArrowRight } from "react-icons/bs";

function AboutusScr9() {
  return (
    <div
      style={{
        backgroundImage: `url(${worldmap})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
      }}
      className="flex flex-col w-[100%] h-[100%] justify-center items-center"
    >
      <div>
        <div className="text-[#FA3308] text-center mt-[150px] ">
          <p>GROW WITH US</p>
        </div>
        <div className="text-[25px] font-semibold text-center ">
          <h1>What can we help you achieve?</h1>
        </div>
        <div>
          <p className="text-center px-7 mt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <button className="flex flex-row gap-5 py-4 px-7 justify-center items-center bg-[#fa3308] text-white ">
            Let's Get To Work
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="flex h-[100%] ">
        <img className="flex h-[100%] " src={community} alt=""></img>
      </div>
    </div>
  );
}

export default AboutusScr9;
