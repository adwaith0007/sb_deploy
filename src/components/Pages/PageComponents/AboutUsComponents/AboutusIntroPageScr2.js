import React from "react";
import {BsArrowRight} from "react-icons/bs";
import aboutscr2 from "../../../../assets/AboutUs/aboutscr2.jpg";
function AboutusIntroPageScr2() {
  return (
    <div className="w-[100%] h-[100%] flex px-4 flex-col md:flex-col  lg:flex-row mt-20 gap-7  md:px-14  ">
      <div className=" w-[100%] lg:w-[50%] flex justify-center  " >
        <img className="max-h-[500px] min-w-[350px]" src={aboutscr2} alt=""></img>
      </div>
      <div className=" lg:w-[50%] flex flex-col " >
        <div  >
          <h1 className="text-[25px] text-[#FA3308] font-semibold " >About Us</h1>
        </div>
        <div className="mt-5" >
          <h1 className="  text-[25px] md:text-[2rem] font-semibold" >We care for small and medium enterprises in the country</h1>
        </div>
        <div className="text-[15px] font-semibold mt-5" >
          <p>
            SolutionBuggy is one of the pioneers in the Indian manufacturing
            consulting space. We started our journey in 2016 and today we are
            India’s largest manufacturing consulting platform dedicated to small
            and medium scale enterprises.
          </p>
        </div>
        <div className="text-[15px] font-semibold mt-5">
          <p>
            Our innovative AI-based platform enables industries and consultants
            to collaborate and work on projects. We help manufacturing
            industries address their technical and business challenges through
            our network of expert consultants. We also handhold new
            entrepreneurs planning to enter into the manufacturing industry by
            undertaking the complete execution of the project. Till date, we
            have successfully completed more than 2,000+ consulting projects and
            we have mapped 10,000+ experts across various industries throughout
            the country.
          </p>
        </div>
        {/* <div className="flex justify-between px-5 md:p-5 mt-3 mb-3 " >
          <div className="border text-center px-[1.2em] py-[15px] rounded-[20px] " >
              <h1 className="text-[40px] text-[#00569A] font-bold "  >175+</h1>
              <p className=" text-[15px] " >Active Project</p>
          </div>
          <div className="border text-center px-[1.2em] py-[15px] rounded-[20px] " >
            <h1 className="text-[40px] text-[#00569A] font-bold "  >120+</h1>
            <p className=" text-[15px] "  >Expert Team</p>

          </div>
          <div className="border text-center px-[1.2em] py-[15px] rounded-[20px] " >
            <h1 className="text-[40px] text-[#00569A] font-bold "  >30</h1>
            <p className=" text-[15px] " >Years Experience</p>

          </div>
          
        </div> */}
        <div  >
            <button className="flex flex-row gap-5 py-3 px-4 mb-5   md:py-4 md:px-7 justify-center items-center bg-[#fa3308] text-white ">
              Download Brochure
              <BsArrowRight/>
              
            </button>
          </div>
      </div>
    </div>
  );
}

export default AboutusIntroPageScr2;
