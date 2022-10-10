import React from "react";

import Scr11_bg from "../../../../assets/Home/HomeScr11/Scr11_bg.png";

function HomeScr11() {
  return (
    <div
      className="w-[100%] -z-10 flex flex-col justify-center "
      style={{
        backgroundImage: `url(${Scr11_bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:px-20  ">
        <div className="">
          <h1 className="font-semibold text-[25px]   md:text-[45px] text-white ">
            Industries Across 50+ Cities
          </h1>
        </div>

        <div className="text-white mt-5 md:mt-0   md:ml-28">
          <p>
            We mentor small and medium scale industries and provide them advice
            and strategies for business growth. Serving across the country with
            presence in 50+ major cities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeScr11;
