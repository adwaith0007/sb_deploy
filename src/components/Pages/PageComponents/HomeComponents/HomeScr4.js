import React from "react";
import Scr4_img from "../../../../assets/Home/HomeScr4/Scr4_img.png";
import Scr4_logo1 from "../../../../assets/Home/HomeScr4/Scr4_logo1.png";
import Scr4_logo2 from "../../../../assets/Home/HomeScr4/Scr4_logo2.png";
import Scr4_logo3 from "../../../../assets/Home/HomeScr4/Scr4_logo3.png";
import Scr4_logo4 from "../../../../assets/Home/HomeScr4/Scr4_logo4.png";
import Scr4_logo5 from "../../../../assets/Home/HomeScr4/Scr4_logo5.png";
import Scr4_logo6 from "../../../../assets/Home/HomeScr4/Scr4_logo6.png";
import Scr4_logo7 from "../../../../assets/Home/HomeScr4/Scr4_logo7.png";
import Scr4_logo8 from "../../../../assets/Home/HomeScr4/Scr4_logo8.png";
import Scr4_logo9 from "../../../../assets/Home/HomeScr4/Scr4_logo9.png";
import Scr4_logo10 from "../../../../assets/Home/HomeScr4/Scr4_logo10.png";
import Scr4_logo11 from "../../../../assets/Home/HomeScr4/Scr4_logo11.png";
import Scr4_logo12 from "../../../../assets/Home/HomeScr4/Scr4_logo12.png";
// import Scr4_logo1 from "../../../../assets/Home/HomeScr4/Scr4_logo1.png";

function HomeScr4() {
  return (
    <div
      className="w-[100%]  -z-10 flex flex-col items-center   "
      style={{
        backgroundImage: `url(${Scr4_img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}
    >
      <div className="mt-10 md:mt-0 lg:mt-0">
        <h1 className=" font-semibold text-[35px] md:text-[45px]  ">Industry Solutions</h1>
      </div>
      <div className="w-[100%] mt-10 px-2 md:px-20 mb-20 ">
        <div class="grid sm:grid-col-2 md:grid-cols-3 gap-10">
          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo1} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Food</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo2} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Textile</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo3} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Aerospace & Defence</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo4} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Beverages</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo5} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>FMCG</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo6} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Automotive</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo7} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Chemical</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo8} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Packaging</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo9} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Energy</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo10} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Pharmaceutical</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[40px]" src={Scr4_logo11} alt="" />
              </div>
              <div className="text-white font-semibold ml-3 ">
                <h5>Electronics</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="bg-[#0a438d] flex items-center py-3 w-[65%] rounded-[10px] ">
              <div className="ml-5 ">
                <img className="h-[10px] w-[55px] " src={Scr4_logo12} alt="" />
              </div>
              <div className="text-white font-semibold -ml-2 ">
                <h5>Many More</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScr4;
