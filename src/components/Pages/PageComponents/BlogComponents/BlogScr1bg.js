import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import aboutus_Intro_Img from "../../../../assets/AboutUs/Introimg.jpg";

function BlogScr1bg() {
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
          <span className=" text-[20px] md:text-[30px] lg:text-[2.5rem] font-semibold  ">
            Industry News & Updates <br />
          </span>
          Stay updated about manufacturing sector from leading industry experts.
          Get trending business ideas, How to Start guides, manufacturing tips
          and many more <br />
          <div className="flex items-center gap-3 ">
            <div>
              <button> Home </button>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
            <div>
              <button>About Us</button>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default BlogScr1bg;
