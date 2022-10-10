import React from 'react'
import partner1 from "../../../../assets/AboutUs/Partners/partner1.png";
import partner2 from "../../../../assets/AboutUs/Partners/partner2.png";
import partner3 from "../../../../assets/AboutUs/Partners/partner3.png";
import partner4 from "../../../../assets/AboutUs/Partners/partner4.png";
import partner5 from "../../../../assets/AboutUs/Partners/partner5.png";
import partner6 from "../../../../assets/AboutUs/Partners/partner6.png";

function AboutusIconsScr3() {
  return (
    <div className='mt-[75px] mb-[75px]' >
        <div className='flex justify-between px-[100px]' >
          <div> <img src={partner1} alt="" ></img>

          </div>
          <div> <img src={partner2} alt="" ></img>

          </div>
          <div> <img src={partner3} alt="" ></img>

          </div>
          <div> <img src={partner4} alt="" ></img>

          </div>
          <div> <img src={partner5} alt="" ></img>

          </div>
          <div> <img src={partner6} alt="" ></img>

          </div>
        </div>
    </div>
  )
}

export default AboutusIconsScr3