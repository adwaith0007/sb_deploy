import React from 'react'
import CareerScr3bgmap from '../../../../assets/Career/CareerScr3/CareerScr3bgmap.png'




import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function CareerScr3() {
  return (
    <div
    className="w-[100%] -z-10 flex flex-col justify-center  "
    style={{
      backgroundImage: `url(${CareerScr3bgmap})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "30rem",
    }}
  >
    <div className="text-center mb-7">
    <h1 className="text-[25px] font-semibold" >Core Values</h1>
<p >Our guiding principles for everything we do</p>

    </div>

    <div className="flex justify-center items-center ">
      <Carousel breakPoints={breakPoints}>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
        <Item>Six</Item>
        <Item>Seven</Item>
        <Item>Eight</Item>
      </Carousel>
    </div>


  </div>
  )
}

export default CareerScr3