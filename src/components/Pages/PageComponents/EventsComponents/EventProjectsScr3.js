import { React, useState } from "react";

import ReactPlayer from "react-player";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
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

function EventProjectsScr3() {
  // const previousWebHandilBar = () => {};

  const [preWeb, setPreWeb] = useState(true);

  return (
    <div className="w-[100%] flex flex-col items-center  ">
      {/* <div className="flex  justify-between w-[60%]  mt-14 gap-5 ">
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
      </div> */}

      {/* <div
        className={preWeb ? "w-[100%] items-center flex flex-col " : "hidden"}
       >
        1st Row

        <div className="flex flex-col lg:flex-row w-[90%]   gap-5  mt-14  ">
          <div className="flex  flex-row gap-5 ">
            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6] shadow-md rounded-[10px]  ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] h-  "
                  src={sup}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      Opportunities in Biodegradable Products Manufacturing
                    </h1>
                  </div>
                  <div className="flex justify-between mx-5 mt-2">
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
                </div>
              </div>
            </div>

            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6]  rounded-[10px] shadow-md ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] h- "
                  src={ansys}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      Accelerating the Development of Drones
                    </h1>
                  </div>
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
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5 ">
            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6] rounded-[10px] shadow-md ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] h- "
                  src={PMKSY}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      Top Food and Agro Schemes Under PMKSY
                    </h1>
                  </div>
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
                </div>
              </div>
            </div>

            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6] rounded-[10px] shadow-md ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] h- "
                  src={edibleoil}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      Edible & Essential Oil Mfg.
                    </h1>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        2nd Row

        <div className="flex flex-col lg:flex-row w-[90%]   gap-5  mt-14  ">
          <div className="flex  flex-row gap-5 ">
            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6] rounded-[10px] shadow-md ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={mompreneurs}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      Mompreneurs
                    </h1>
                  </div>
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
                </div>
              </div>
            </div>

            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6] rounded-[10px] shadow-md ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={ethanol}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      Ethanol
                    </h1>
                  </div>
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
                </div>
              </div>
            </div>
          </div>

          <div className="flex  flex-row gap-5 ">
            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6] rounded-[10px] shadow-md ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={apc}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      APC 2022
                    </h1>
                  </div>
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
                </div>
              </div>
            </div>

            <div className="w-1/2 ">
              <div className="bg-[#f6f6f6] rounded-[10px] shadow-md ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={aiim}
                  alt=""
                ></img>
                <div className="flex flex-col w-[100%] ">
                  <div>
                    <h1 className="text-[22px] font-semibold text-center ">
                      AIIM 2022
                    </h1>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        3rd ROw

        <div className="flex flex-row w-[90%]   gap-5  mt-14  ">
          <div className=" w-1/2 lg:w-1/4 ">
            <div className="bg-[#f6f6f6] rounded-[10px] shadow-md ">
              <img
                className="rounded-bl-[40px] rounded-t-[15px] "
                src={aero4}
                alt=""
              ></img>
              <div className="flex flex-col w-[100%] ">
                <div>
                  <h1 className="text-[22px] font-semibold text-center ">
                    Aerodef 2021
                  </h1>
                </div>
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
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/4 ">
            <div className="bg-[#f6f6f6] flex-col rounded-[10px] shadow-md ">
              <div className="flex ">
                <img
                  className="rounded-bl-[40px] rounded-t-[15px] "
                  src={foodpro}
                  alt=""
                ></img>
              </div>

              <div className="flex flex-col w-[100%] ">
                <div>
                  <h1 className="text-[22px] font-semibold text-center ">
                    FoodPro 2021
                  </h1>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col gap-10 mt-10 mb-10 ">
        <div className="flex flex-col w-[100%]  sm:flex-row md:flex-row lg:flex-row  gap-7">
          <div className=" flex justify-center ">
            <ReactPlayer
              className="w-[50%]"
              url="https://youtu.be/oEyRVQYyN5s"
              width="100%"
              height="100%"
            />
          </div>

          <div>
            <ReactPlayer
              url="https://youtu.be/lWon2KGw2JA"
              width="100%"
              height="100%"
            />
          </div>

          <div>
            <ReactPlayer
              url="https://youtu.be/uyFXcALCXC0"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div>
            <ReactPlayer
              url="https://youtu.be/vYETgjDz2d4"
              width="100%"
              height="100%"
            />
          </div>

          <div>
            <ReactPlayer
              url="https://youtu.be/EHhDcoMN8-o"
              width="100%"
              height="100%"
            />
          </div>

          <div>
            <ReactPlayer
              url="https://youtu.be/_HupLqPhQVo"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventProjectsScr3;
