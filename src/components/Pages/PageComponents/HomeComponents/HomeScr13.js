import React from 'react'
import Scr13_img1 from '../../../../assets/Home/HomeScr13/Scr13_img1.png'

function HomeScr13() {
  return (
    <div className='w-[100%] flex flex-col ' >
        <div className="">
            <h1 className="font-semibold text-center text-[25px] md:text-[45px] lg:text-[45px] ">Blogs</h1>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between md:px-24 mt-10 mb-10 ">
            <div className="">
                <img src={Scr13_img1} alt="" />
            </div>

            <div className="">
                <img src={Scr13_img1} alt="" />
            </div>
        </div>

    </div>
  )
}

export default HomeScr13