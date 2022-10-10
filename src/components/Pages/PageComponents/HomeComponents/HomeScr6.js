import React from 'react'
import Scr6_logo1 from '../../../../assets/Home/HomeScr6/Scr6_logo1.png'

import Scr6_logo2 from '../../../../assets/Home/HomeScr6/Scr6_logo2.png'

import Scr6_logo3 from '../../../../assets/Home/HomeScr6/Scr6_logo3.png'
import Scr6_logo4 from '../../../../assets/Home/HomeScr6/Scr6_logo4.png'


import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


function HomeScr6() {
  return (
    <div className='w-[100%] mb-10 mt-10 ' >

      <div className=" w-[100%] text-center ">
        <h1 className='font-semibold text-[25px] md:text-[45px] ' >Trusted By</h1>
      </div>
      {/* <div className=" flex  justify-between py-10 px-20 mt-10 ">
        <div className="">
          <img className='h-[100px]' src={Scr6_logo1} alt="" />
        </div>

        <div className="">
        <img className='h-[100px]' src={Scr6_logo2} alt="" />
        </div>

        <div className="">
        <img className='h-[100px]' src={Scr6_logo3} alt="" />
        </div>

        <div className="">
        <img className='h-[100px]' src={Scr6_logo4} alt="" />
        </div>

        
      </div> */}

      <div className="flex justify-center items-center ">
      <Carousel breakPoints={breakPoints}>
        <Item><div className="">
          <img className='h-[100px]' src={Scr6_logo1} alt="" />
        </div></Item>
        <Item><div className="">
        <img className='h-[100px]' src={Scr6_logo2} alt="" />
        </div></Item>
        <Item><div className="">
        <img className='h-[100px]' src={Scr6_logo3} alt="" />
        </div></Item>
        <Item> <div className="">
        <img className='h-[100px]' src={Scr6_logo4} alt="" />
        </div></Item>
        <Item><div className="">
          <img className='h-[100px]' src={Scr6_logo1} alt="" />
        </div></Item>
        <Item><div className="">
        <img className='h-[100px]' src={Scr6_logo3} alt="" />
        </div></Item>
        <Item><div className="">
          <img className='h-[100px]' src={Scr6_logo1} alt="" />
        </div></Item>
        <Item><div className="">
        <img className='h-[100px]' src={Scr6_logo3} alt="" />
        </div></Item>
      </Carousel>
    </div>

    </div>
  )
}

export default HomeScr6