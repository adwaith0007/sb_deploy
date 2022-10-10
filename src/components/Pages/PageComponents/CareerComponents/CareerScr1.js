import React from 'react'
import Newsbg from "../../../../assets/News/Newspage-title-bg.jpg";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../../assets/News/imgs/01.jpg";

function CareerScr1() {
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
       <div className="flex justify-start  ml-4 md:ml-10 lg:ml-10 te lg:text-[1.3rem] text-white font-semibold items-center h-[100%]">
        <h2>
          
          <span className=" text-[20px] md:text-[30px] lg:text-[2.5rem] font-semibold  ">
            Career
          </span>
          <div className="flex items-center gap-3 ">
            <div>
              <button className='text-[14px]' > Home </button>
            </div>
            <div>
              <IoIosArrowForward className='text-[14px] text-end ' />
            </div>
            <div>
              <button className='text-[14px]' >Career</button>
            </div>
          </div>
        </h2>
      </div>
    </div>

    
  </div>
  )
}

export default CareerScr1