import React from "react";
import about_img from "../../../../assets/Home/HomeScr2/about_img.png";

function HomeScr2() {
  return (
    <div className="bg-[#0a438d] flex-col md:flex-row lg:flex-row  w-[100%] flex  md:p-10 justify-center items-center ">
      <div className="">
        <img className="h-[550px]  "  src={about_img} alt="" />
      </div>
      <div className="md:p-10 w-[90%]  md:w-1/2  gap-5 flex flex-col">
        <div className="">
          <h1 className="font-semibold text-[45px] text-white ">About Us</h1>
        </div>

        <div className="text-white">
          <p className="">
            SolutionBuggy is one of the pioneers in the Indian manufacturing
            consulting space. We started our journey in 2016 and today we are
            India’s largest manufacturing consulting platform dedicated to small
            and medium scale enterprises.
          </p>

          <p className="">
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
        <div className="mb-10">
            <button className="px-5 py-3 bg-white text-black rounded-l-[10px] rounded-tr-[30px] font-semibold " >
            Download Brochure {">"}
            </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScr2;
