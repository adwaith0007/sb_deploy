import React from 'react'
import Scr7_img1 from '../../../../assets/Home/HomeScr7/Arjun.png'

import Scr7_img2 from '../../../../assets/Home/HomeScr7/Guru.png'

import Scr7_img3 from '../../../../assets/Home/HomeScr7/Vikas.png'

function HomeScr7() {
  return (
    <div className='w-[100%]  ' >

      <div className="">
        <h1 className=" font-semibold text-[25px] md:text-[45px] text-center ">Our Professional Team</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-5 md:justify-between  md:p-10">
        <div className="">
          <img className='h-[350px]'  src={Scr7_img1} alt="" />
        </div>
        <div className="">
          <img className='h-[350px]'  src={Scr7_img2} alt="" />
        </div>

        <div className="">
          <img className='h-[350px]'  src={Scr7_img3} alt="" />
        </div>
      </div>

    </div>
  )
}

export default HomeScr7