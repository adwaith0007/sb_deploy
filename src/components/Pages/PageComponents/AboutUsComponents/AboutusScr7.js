import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import Scr7team1 from "../../../../assets/AboutUs/Src7/Scr7team1.jpg";
import Scr7team2 from "../../../../assets/AboutUs/Src7/Scr7team2.jpg";
import Scr7team3 from "../../../../assets/AboutUs/Src7/Scr7team3.jpg";
import Scr7team4 from "../../../../assets/AboutUs/Src7/Scr7team4.jpg";

function AboutusScr7() {
  return (
    <div className="w-[100%] justify-center items-center flex mb-10 ">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="text-center text-[#FA3308] font-semibold ">
            <p>OUR EXPERTS</p>
          </div>
          <div className="text-center">
            <h1 className=" text-[25px] md:text-[30px] lg:text-[40px] font-semibold">
              Meet Our Leadership Preparing For Your Success
            </h1>
          </div>
        </div>
        <div className="flex  flex-row  gap-5 px-4 mt-10 ">
          <div className="flex flex-col gap-7  md:flex-row lg:flex-row">
            <div>
              <div className="bg-[#f6f6f6] rounded-[10px] shadow ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={Scr7team1}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      James Anderson
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#0c59db] text-center font-semibold ">
                      CEO & Founder
                    </p>
                  </div>
                  <div className="flex justify-between p-5 mb-5">
                    <div>
                      <BsFacebook className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsTwitter className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsInstagram className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <AiFillGooglePlusCircle className="h-[30px] w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#f6f6f6] rounded-[10px] shadow ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={Scr7team2}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      James Anderson
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#0c59db] text-center font-semibold ">
                      CEO & Founder
                    </p>
                  </div>
                  <div className="flex justify-between p-5 mb-5">
                    <div>
                      <BsFacebook className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsTwitter className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsInstagram className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <AiFillGooglePlusCircle className="h-[30px] w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 md:flex-row lg:flex-row">
            <div>
              <div className="bg-[#f6f6f6] rounded-[10px] shadow ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={Scr7team3}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      James Anderson
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#0c59db] text-center font-semibold ">
                      CEO & Founder
                    </p>
                  </div>
                  <div className="flex justify-between p-5 mb-5">
                    <div>
                      <BsFacebook className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsTwitter className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsInstagram className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <AiFillGooglePlusCircle className="h-[30px] w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#f6f6f6] rounded-[10px] shadow ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={Scr7team4}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      James Anderson
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#0c59db] text-center font-semibold ">
                      CEO & Founder
                    </p>
                  </div>
                  <div className="flex justify-between p-5 mb-5">
                    <div>
                      <BsFacebook className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsTwitter className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <BsInstagram className="h-[30px] w-auto" />
                    </div>
                    <div>
                      <AiFillGooglePlusCircle className="h-[30px] w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusScr7;
