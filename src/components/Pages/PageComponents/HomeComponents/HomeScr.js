import React from "react";
import bggif from "../../../../assets/Home/HomeScr1/H1.gif";
import BgScr1 from "../../../../assets/Home/HomeScr1/BgScr1.png";
import boxShape from "../../../../assets/Home/HomeScr1/box-shape 1.png";

import cnct_icon from "../../../../assets/Home/HomeScr1/cnct_icon.png";
import interf_icon from "../../../../assets/Home/HomeScr1/interf_icon.png";
import team_ico from "../../../../assets/Home/HomeScr1/team_ico.png";
// import mobilehero from "../../../../assets/Home/HomeScr1/mobile_hero 1.png";
import mobilehero from "../../../../assets/Home/HomeScr1/mobile_hero.gif";

function HomeScr() {
  return (
    <div className="w-[100%]  flex flex-col    ">
      <div
        className="
      flex flex-col md:hidden lg:hidden
      "
      >
        <div className="ml-2">
          
          <div className="w-[100%] md:w-[70%] mt-5">
            <h1 className="text-[25px] font-semibold">
              India's Largest Platform To Accelerate Manufacturing Business
            </h1>
          </div>
          <div className=" w-[100%] md:w-[70%]">
            <p className="mt-2">
              Connect with the best manufacturing consultants & industrial
              consultants accross the country
            </p>
          </div>
          <div className="w-[70%]">
            <h1 className="text-[15px] font-semibold mt-2 " >80,000+ INDUSTRIES 10,000+ CONSULTANTS 2000+ PROJECTS</h1>
          </div>
          <div className="absolute mt-5 ">
          <button className="bg-[#ff661b] py-[10px]  px-[20px]  md:px-[30px] rounded-l-[10px] text-white  ">
              Find Experts
            </button>
            <button className="bg-[#0a438d] py-[10px] px-[20px]  md:px-[30px] rounded-tr-[30px] text-white ">
              Find Projects
            </button>
          </div>
        </div>

        <div className="flex justify-end ">

          <img className="" src={mobilehero} alt="" />
        </div>
      </div>
      <div
        className=" hidden lg:flex w-[100%] md:flex px-20 justify-between mt-14 py-5"
        style={{
          backgroundImage: `url(${BgScr1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "37rem",
        }}
      >
        <div className="w-[50%]">
          <div className="flex flex-col gap-5">
            <div className="">
              <h1 className="text-black font-semibold text-[45px] ">
                India's Largest Platform To Accelerate Manufacturin Business
              </h1>
            </div>
            <div className="">
              <p className="">
                Connect with the best manufacturing consultants & industrial
                consultants accross the country
              </p>
            </div>
            <div className="">
              <p className="font-semibold">
                80,000+ INDUSTRIES • 10,000+ CONSULTANTS • 2000+ PROJECTS{" "}
              </p>
            </div>
          </div>
          <div className="mt-10 ">
            <button className="bg-[#ff661b] py-[10px] px-[30px] rounded-l-[10px] text-white  ">
              Find Experts
            </button>
            <button className="bg-[#0a438d] py-[10px] px-[30px] rounded-tr-[30px] text-white ">
              Find Projects
            </button>
          </div>
        </div>
        <div className="w-[40%]   flex ">
          <img className="h-[454px] " src={bggif} alt="" />
        </div>
      </div>

      <div className=" w-[100%] gap-8 flex flex-col sm:flex-col md:flex-row  lg:flex-row  items-center   lg:justify-between md:justify-between  md:pl-20 md:pr-20 mt-10 mb-10    ">
        
        <div className=" w-[85%]  md:w-1/4 border-2  ">
          <div className="w-[100%] flex items-center justify-between ">
            <div className="">
              <img className="h-[50px] ml-3 md:ml-5 " src={cnct_icon} alt="" />
            </div>
            <div className="">
              <img className="h-[140px]" src={boxShape} alt="" />
            </div>
          </div>
          <div className=" ml-3 md:ml-5 ">
            <div className="">
              <h1 className="font-semibold text-[30px] md:text-[48px] ">Connect</h1>
            </div>
            <div className="">
              <p className="text-[20px]">
                Connecting with manufacturing industries & understanding their
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[85%]  md:w-1/4 border-2  ">
          <div className="w-[100%] flex items-center justify-between ">
            <div className="">
              <img className="h-[80px] ml-5 " src={interf_icon} alt="" />
            </div>
            <div className="">
              <img className="h-[140px]" src={boxShape} alt="" />
            </div>
          </div>
          <div className=" ml-5 ">
            <div className="">
              <h1 className="font-semibold  text-[30px] md:text-[48px] ">Connect</h1>
            </div>
            <div className="">
              <p className="text-[20px]">
                Connecting with manufacturing industries & understanding their
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[85%]  md:w-1/4 border-2 h-[350px] ">
          <div className="w-[100%] flex items-center justify-between ">
            <div className="">
              <img className="h-[80px] ml-5 " src={team_ico} alt="" />
            </div>
            <div className="">
              <img className="h-[140px]" src={boxShape} alt="" />
            </div>
          </div>
          <div className="ml-5">
            <div className="">
              <h1 className="font-semibold  text-[30px] md:text-[48px] ">Connect</h1>
            </div>
            <div className="">
              <p className="text-[20px]">
                Connecting with manufacturing industries & understanding their
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomeScr;
