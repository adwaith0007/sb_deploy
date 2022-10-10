import React from "react";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Scr10_bg from "../../../../assets/Home/HomeScr10/Scr10_bg.png";
import Scr10_img1 from "../../../../assets/Home/HomeScr10/Src10_img1.png";
import Scr10_img2 from "../../../../assets/Home/HomeScr10/Src10_img2.png";

function HomeScr10() {
  return (
    <div className="w-[100%] flex justify-center lg:justify-between lg:py-10 lg:px-20 mt-10 mb-10 ">
      <div className=" w-[90%] lg:w-1/2 md:w-1/2  ">
        <form className="  flex w-[100%]  border-2 border-black p-5 h-[100%] rounded-[40px] justify-center ">
          <div className="w-[100%]">
            <div className="">
              <h1 className="font-semibold text-[25px] md:text-[30px] text-center ">Register Now!</h1>
            </div>
            <div className="flex gap-5 md:gap-40 justify-center mt-5 ">
              <div className="  flex justify-center items-center gap-1 ">
                <div className="">
                  <img src={Scr10_img1} alt="" />
                </div>

                <div className="flex gap-1">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <p>Industry</p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-1 ">
                <div className="">
                  <img src={Scr10_img2} alt="" />
                </div>

                <div className="flex gap-1">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />

                  <p>Consultant</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-10 ">
              <input
                placeholder="Your Name"
                className="border-2 hover border-[#4772a9] px-5 py-1 rounded-[50px]  text-[#898989]  "
              ></input>

              <input
                placeholder=" Mail ID"
                className="border-2 border-[#4772a9] px-5  py-1 rounded-[50px]  text-[#898989] "
              ></input>

              <input
                placeholder="Mobile Number"
                className="border-2 border-[#4772a9] px-5 py-1 rounded-[50px]  text-[#898989] "
              ></input>
            </div>
            <div className=" flex bg-[#0a438d] mt-10 text-white rounded-[50px] justify-center">
                <button className="flex items-center py-3 " type="Submit" >Submit Request
                
                <div className="">
                <MdOutlineKeyboardArrowRight/>
                </div>
                
                </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-1/2 hidden lg:block ">
        <img className="h-[500px]" src={Scr10_bg} alt="" />
      </div>
    </div>
  );
}

export default HomeScr10;
