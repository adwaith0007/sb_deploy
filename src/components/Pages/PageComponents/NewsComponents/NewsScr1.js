import React from "react";
import Newsbg from "../../../../assets/News/Newspage-title-bg.jpg";
import img1 from "../../../../assets/News/imgs/01.jpg";

function NewsScr1() {
  return (
    <div className="">
      <div
        className="w-full flex flex-col  justify-center  "
        style={{
          backgroundImage: `url(${Newsbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <h1 className="font-semibold text-[54px] text-white ml-20 ">News</h1>
      </div>

      
    </div>
  );
}

export default NewsScr1;
