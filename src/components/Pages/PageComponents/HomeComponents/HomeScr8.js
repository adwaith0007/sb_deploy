import React from "react";
import Scr8_1img from "../../../../assets/Home/HomeScr8/Scr8_1img.png";
import Scr8_2img from "../../../../assets/Home/HomeScr8/Scr8_2img.png";
import Scr8_3img from "../../../../assets/Home/HomeScr8/Scr8_3img.png";

import Scr8_4img from "../../../../assets/Home/HomeScr8/Scr8_4img.png";
import Scr8_5img from "../../../../assets/Home/HomeScr8/Scr8_5img.png";
import Scr8_6img from "../../../../assets/Home/HomeScr8/Scr8_6img.png";
import "./Scr.css";

function HomeScr8() {
  return (
    <div className="w-[100%] flex flex-col  mt-10 ">
      <div className="text-center  ">
        <h1 className="font-semibold text-[25px] md:text-[45px] ">Our Popular Projects</h1>
      </div>

      <div className="flex flex-col gap-10 mt-10 mb-10 ">
        <div className=" flex flex-col lg:flex-row items-center md:justify-center gap-10">
          <div className="wrapper">
            <div className="card">
              <img className="h-[300px]  " src={Scr8_1img} alt="" />
              <div className="info">
                <h1>Food & Beverages 600 Projects</h1>
                <button>View Details {">"}</button>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="card">
              <img className="h-[300px]" src={Scr8_2img} alt="" />
              <div className="info">
                <h1>Food & Beverages 600 Projects</h1>
                <button>View Details {">"}</button>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="card">
              <img className="h-[300px]" src={Scr8_3img} alt="" />
              <div className="info">
                <h1>Food & Beverages 600 Projects</h1>
                <button>View Details {">"}</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex w-[100%] flex-col lg:flex-row items-center md:justify-center gap-10 ">
          <div className="wrapper">
            <div className="card">
              <img className=" h-[300px]" src={Scr8_4img} alt="" />

              <div className="info">
                <h1>Food & Beverages 600 Projects</h1>
                <p></p>
                <button>View Details {">"}</button>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="card">
              <img className="h-[300px]" src={Scr8_5img} alt="" />
              <div className="info">
                <h1>Food & Beverages 600 Projects</h1>
                <button>View Details {">"}</button>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="card">
              <img className="h-[300px]" src={Scr8_6img} alt="" />
              <div className="info">
                <h1>Food & Beverages 600 Projects</h1>
                <button>View Details {">"}</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="wrapper">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              alt=""
              srcset=""
            />
            <div className="info">
              <h1>Mountain</h1>
              <p>
                Lorem Ipsum is simply dummy text from the printing and
                typeseting industry e
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div> */}



      </div>
    </div>
  );
}

export default HomeScr8;
