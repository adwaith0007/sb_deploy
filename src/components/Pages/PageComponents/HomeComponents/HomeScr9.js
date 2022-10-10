import React from 'react'
import Scr9_img from '../../../../assets/Home/HomeScr9/Scr9_img.png'

function HomeScr9() {
  return (
    <div className='w-[100%] bg-[#0a438d] flex flex-col justify-center items-center  ' >

        <div className="mt-10">
            <h1 className="font-semibold text-[25px] md:text-[45px] text-white ">Satisfied Customers</h1>
        </div>

        <div className="mb-10 ">

        <img className='md:h-[350px]'  src={Scr9_img} alt="" />


        </div>

        

    </div>
  )
}

export default HomeScr9