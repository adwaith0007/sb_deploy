import React from 'react'
import EventScr1Bg from '../../../../assets/Event/EventScr1Bg.jpg'

function EventIntroScr1() {
  return (
    <div
      className="w-[100%]  "
      style={{
        backgroundImage: `url(${EventScr1Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "400px",
        // backgroundBlendMode:'darken',
        // background:'rgba(0,0,0,0.7)'
        
      }}>
        <div className="absolute  bg-gray-900 "></div>

       <div className="flex flex-col  h-[100%] justify-center items-center">
        <h1 className="font-semibold text-white text-[32px] ">A Series of Knowledge Sessions with Industry Experts  </h1>
        <p className='text-white' >
        Learn, interact and network with top experts, successful entrepreneurs and government bodies
                     </p>
        </div>

    </div>
  )
}

export default EventIntroScr1