import React from 'react'
import Scr12_logo1 from '../../../../assets/Home/HomeScr12/Scr12_logo1.png'
import Scr12_logo2 from '../../../../assets/Home/HomeScr12/Scr12_logo2.png'
import Scr12_logo3 from '../../../../assets/Home/HomeScr12/Scr12_logo3.png'
import Scr12_logo4 from '../../../../assets/Home/HomeScr12/Scr12_logo4.png'
import Scr12_logo5 from '../../../../assets/Home/HomeScr12/Scr12_logo5.png'



function HomeScr12() {
  return (
    <div className='w-[100%] flex flex-col' >
        <div className="font-semibold text-[25px] lg:text-[45px] md:text-[45px] text-center mt-10 mb-10 ">Media & Publication</div>

        <div className="flex items-center justify-between mb-10 px-10 ">
            <div className="">
                <img src={Scr12_logo1} alt="" />
            </div>

            <div className="">
                <img src={Scr12_logo2} alt="" />
            </div>

            <div className="">
                <img src={Scr12_logo3} alt="" />
            </div>

            <div className="">
                <img src={Scr12_logo4} alt="" />
            </div>

            <div className="">
                <img src={Scr12_logo5} alt="" />
            </div>
        </div>

    </div>
  )
}

export default HomeScr12