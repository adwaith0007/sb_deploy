import React from "react";
import Scr10bg from "../../../../assets/AboutUs/Scr10/Scr10bg.png";
import newsletter from "../../../../assets/AboutUs/Scr10/newsletter.png";
import { BsArrowRight } from "react-icons/bs";

function AboutusScr10() {
  return (
    <div className="flex flex-col mt-[115px] w-[100%] justify-center items-center text-white ">
      <div
        className="bg-[#0a428d] flex  py-10 w-[100%]  "
        style={{
          backgroundImage: `url(${Scr10bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col  lg:flex-row w-[100%] items-center">
          <div>
            <img className=" h-auto " src={newsletter} alt=""></img>
          </div>

          <div className="w-[100%] md:w-[50%] lg:w-[50%] " >
            <div>
              <p className="text-center">NEWSLETTER</p>
            </div>
            <div>
              <h1 className="text-[35px] text-center font-semibold ">
                Subscribe To Our Newsletter
              </h1>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row w-[100%] mt-10 ">
              <div className=" w-[100%]  md:w-[70%]  flex justify-center  " >

              <input
                placeholder="Enter your email"
                className="flex flex-row gap-5 py-4  px-5 w-[85%]  md:w-[100%]    text-black "
              ></input>

              </div>


              <div className=" w-[100%]  md:w-[30%]  flex justify-center mt-7 md:mt-0 lg:mt-0 " >

              <button className="flex flex-row gap-5 py-4  w-[50%] md:w-[100%]  justify-center items-center bg-[#fa3308] text-white ">
                Subscribe Now
                <BsArrowRight />
              </button>
                
              </div>
              

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusScr10;
