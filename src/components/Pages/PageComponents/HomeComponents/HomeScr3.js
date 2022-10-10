import React from "react";
import ReactPlayer from "react-player";

function HomeScr3() {
  return (
    <div className="w-[100%] md:h-[70vh] flex-col items-center sm:flex-col md:flex-row  flex md:px-14  ">
      <div className=" w-[90%] md:w-1/2 py-10">
        <div className="">
          <h1 className=" text-[25px] md:text-[45px] font-semibold">Why Choose Us?</h1>
        </div>
        <div className="mt-10">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
      </div>
      <div className="  md:w-1/2 h-[100%] flex flex-col justify-center ">
        <div className="h-[70%]" >
          <ReactPlayer
            url="https://youtu.be/EHhDcoMN8-o"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScr3;
