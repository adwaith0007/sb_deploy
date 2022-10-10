import React from "react";
import Scr1_bg1 from "../../../../assets/Seo/Food_Industry/Scr1/Scr1_bg1.jpg";

function FoodScr1() {
  return (
    <div
      className="w-[100%] -z-10 "
      style={{
        backgroundImage: `url(${Scr1_bg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "30rem",
      }}
    >
      <div className="">
        <div className="">
          <h1 className="text-white  ">
            India’s Top Food Consultants Under One Roof
          </h1>
        </div>
        <div className="">
          
        </div>
      </div>
    </div>
  );
}

export default FoodScr1;
