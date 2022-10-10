import React from 'react'
import aboutus_Intro_Img from "../../../../assets/AboutUs/Introimg.jpg";
import { IoIosArrowForward } from "react-icons/io";

function FaqsScr1() {
  return (
    <div
      className="w-[100%] -z-10 "
      style={{
        backgroundImage: `url(${aboutus_Intro_Img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "30rem",
      }}
    >


<div className="flex justify-start  ml-4 md:ml-10 lg:ml-10 te lg:text-[1.3rem] text-white font-semibold items-center h-[100%]">
        <h2>
        DON’T HESITATE TO ASK QUESTIONS <br />
          <span className=" text-[20px] md:text-[30px] lg:text-[2.5rem] font-semibold  ">
          Frequently Asked Questions
          </span>
          <div className="flex items-center gap-3 ">
            <div>
              <button> Home </button>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
            <div>
              <button>FAQ</button>
            </div>
          </div>
        </h2>
      </div>
    </div>
  )
}

export default FaqsScr1