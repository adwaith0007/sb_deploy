import { React, useState } from "react";

import sup from "../../../../assets/Event/Previous webinar/sup.jpg";
import ansys from "../../../../assets/Event/Previous webinar/ansys.jpg";
import PMKSY from "../../../../assets/Event/Previous webinar/PMKSY.jpg";
import edibleoil from "../../../../assets/Event/Previous webinar/edible-oil.jpg";
import mompreneurs from "../../../../assets/Event/Previous webinar/mompreneurs.jpg";
import ethanol from "../../../../assets/Event/Previous webinar/ethanol.jpg";
import apc from "../../../../assets/Event/Previous webinar/apc.jpg";
import aiim from "../../../../assets/Event/Previous webinar/aiim.jpg";
import aero4 from "../../../../assets/Event/Previous webinar/aero4.jpg";
import foodpro from "../../../../assets/Event/Previous webinar/foodpro-2021.jpeg";

function EventCardsScr2() {

  const [preWeb, setPreWeb] = useState(true);
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">

<div className="flex  justify-between w-[60%]  mt-14 gap-5 ">
        <div className="">
          <button className="bg-black rounded-[20px] text-white hover:text-[#fb6544] px-5 py-2 ">
            ALL
          </button>
        </div>

        <div className="">
          <button className="bg-black rounded-[20px] text-white hover:text-[#fb6544] px-5 py-2 ">
            Upcoming webinar
          </button>
        </div>

        <div className="">
          <button
            className="bg-black rounded-[20px] text-white hover:text-[#fb6544] px-5 py-2 "
            onClick={() => setPreWeb(!preWeb)}
          >
            Previous webinars
          </button>
        </div>

        <div className="">
          <button className="bg-black rounded-[20px] text-white hover:text-[#fb6544] px-5 py-2 ">
            Previous webinar's Videos
          </button>
        </div>
      </div>


    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={sup}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Opportunities in Biodegradable Products Manufacturing 
                        </a>
                    </h1>
                    
                </header>
                <div className="flex justify-between mx-5 ">
                    <p className="text-[#949191] text-center font-semibold ">
                      09-08-2022
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      11:30 AM TO 1:30 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full"  src={ansys}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Accelerating the Development of Drones 
                        </a>
                    </h1>
                   
                </header>
                <div className="flex justify-between mx-5 mt-2">
                    <p className="text-[#949191] text-center font-semibold ">
                      29-07-2022
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      4:00 PM TO 5:30 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={PMKSY}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Top Food and Agro Schemes Under PMKSY
                        </a>
                    </h1>
                   
                </header>

                <div className="flex justify-between mx-5 mt-2">
                    <p className="text-[#949191] text-center font-semibold ">
                      09-07-2022
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      11:30 AM TO 1:30 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={edibleoil}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Edible & Essential Oil Mfg.
                        </a>
                    </h1>
                    
                </header>

                <div className="flex justify-between mx-5 mt-2">
                    <p className="text-[#949191] text-center font-semibold ">
                      28-05-2022
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      11:30 AM TO 4:30 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full"  src={mompreneurs} />
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Mompreneurs
                        </a>
                    </h1>
                    
                </header>

                <div className="flex justify-between mx-5 mt-2">
                    <p className="text-[#949191] text-center font-semibold ">
                      10-05-2022
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      11:30 AM TO 2:00 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={ethanol}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Ethanol
                        </a>
                    </h1>
                   
                </header>

                <div className="flex justify-between mx-5 mt-2">
                    <p className="text-[#949191] text-center font-semibold ">
                      09-04-2022
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      11:30 AM TO 1:00 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}



        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* <!-- Article --> */}
<article class="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" src={apc}/>
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href="#">
            APC 2022
            </a>
        </h1>
        
    </header>
    <div className="flex justify-between mx-5 mt-2">
                    <p className="text-[#949191] text-center font-semibold ">
                      16-03-2022
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      11:00 AM TO 1:30 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

</article>
{/* <!-- END Article --> */}

</div>
{/* <!-- END Column --> */}


 <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={aiim}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        AIIM 2022
                        </a>
                    </h1>
                    
                </header>

                <div className="flex justify-between mx-5 mt-2">
                    <p className="text-[#949191] text-center font-semibold ">
                      02-12-2021
                    </p>
                    <p className="text-[#949191] text-center font-semibold ">
                      11:00 AM TO 4:30 PM
                    </p>
                  </div>

                  <div className="flex justify-center p-5 mb-2 text-white  ">
                    <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                      Know More
                    </button>
                  </div>

            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* <!-- Article --> */}
<article class="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" src={aero4}/>
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href="#">
            Aerodef 2021
            </a>
        </h1>
     
    </header>
    <div className="flex justify-between mx-5 mt-2">
                  <p className="text-[#949191] text-center font-semibold ">
                    24-08-2021
                  </p>
                  <p className="text-[#949191] text-center font-semibold ">
                    11:00 AM TO 12:30 PM
                  </p>
                </div>

                <div className="flex justify-center p-5 mb-2 text-white  ">
                  <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                    Know More
                  </button>
                </div>

</article>
{/* <!-- END Article --> */}

</div>
{/* <!-- END Column --> */}


<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

{/* <!-- Article --> */}
<article class="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" src={foodpro}/>
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href="#">
            FoodPro 2021
            </a>
        </h1>
        
    </header>

    <div className="flex justify-between mx-5 mt-2">
                  <p className="text-[#949191] text-center font-semibold ">
                    24-09-2021
                  </p>
                  <p className="text-[#949191] text-center font-semibold ">
                    11:00 AM TO 12:30 PM
                  </p>
                </div>

                <div className="flex justify-center p-5 mb-2 text-white  ">
                  <button className="bg-[#fb6544] px-7 py-2 rounded-[5px] ">
                    Know More
                  </button>
                </div>

</article>
{/* <!-- END Article --> */}

</div>
{/* <!-- END Column --> */}

    </div>
</div>
  )
}

export default EventCardsScr2
