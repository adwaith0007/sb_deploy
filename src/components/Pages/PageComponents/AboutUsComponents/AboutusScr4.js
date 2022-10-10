import React from "react";
import aboutusScr4bg1 from "../../../../assets/AboutUs/aboutusScr4bg1.jpg";
import numberbg from "../../../../assets/AboutUs/Scr4/number-bg.76fabbb7ee5eef6e.jpg";
import funfacts1 from "../../../../assets/AboutUs/Scr4/funfacts1.jpg";
import { motion } from "framer-motion";
import "./AboutusScr4.css";

function AboutusScr4() {
  return (
    <div className="w-[100%]">
      <div
        className="w-[100%]"
        style={{ backgroundImage: `url(${aboutusScr4bg1})` }}
      >
        <div className="hidden lg:flex w-[80%] mt-10 items-center m-auto justify-between px-4 ">
          <motion.div
            initial={{ z: 10 }}
            animate={{ z: 120 }}
            transition={{ duration: 1 }}
            exit={{}}
          >
            <img
              className="border-2 rounded-[50px] border-blue-500   "
              src={funfacts1}
              alt=""
            />
          </motion.div>
          <div>
            <img
              className="border-2 rounded-[50px] border-blue-500   "
              src={funfacts1}
              alt=""
            />
          </div>
        </div>

        <div className="flex w-[100%] flex-col md:flex-row lg:flex-row  px-4 justify-center ">
          <div className="flex justify-between items-center  ">
            <div className="flex flex-col">
              <h1 className="text-[#00569A] font-semibold  text-[45px] lg:text-[85px] md:text-[85px] ">175+</h1>
              <h1 className="text-black text-center font-semibold  ">
                ACTIVE PROJECT
              </h1>
            </div>

            <div className="flex  md:hidden lg:hidden flex-col">
              <h1 className="text-[#00569A] text-[45px] font-semibold lg:text-[85px] md:text-[85px] ">150+</h1>
              <h1 className="text-black text-center font-semibold ">
                EXPERT TEAM
              </h1>
            </div>
          </div>

          <div className="">
            <h1 className="imagetext text-[135px]  lg:text-[300px] md:text-[300px]  font-semibold text-center mt-[-30px] ">
              30
            </h1>
            <h1 className="text-center font-semibold text-[30px] ">
              YEARS OF EXPERIENCE
            </h1>
          </div>
          <div className="md:flex lg:flex items-center ml-10 hidden   ">
            <div className="flex flex-col">
              <h1 className="text-[#00569A] text-[85px] ">150+</h1>
              <h1 className="text-black text-center font-semibold ">
                EXPERT TEAM
              </h1>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[80%] mb-10 items-center m-auto justify-between">
          <div>
            <img
              className="border-2 rounded-[50px] border-blue-500   "
              src={funfacts1}
              alt=""
            />
          </div>
          <div>
            <img
              className="border-2 rounded-[50px] border-blue-500   "
              src={funfacts1}
              alt=""
            />
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AboutusScr4;
