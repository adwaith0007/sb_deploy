import React from "react";
import aboutScr3img from "../../../../assets/AboutUs/aboutScr3img.jpg";
function AboutusScr3() {
  return (
    <div>
      <div className="w-[100%] flex flex-col lg:flex-row px-4 lg:px-10  md:px-10 justify-center gap-10 ">
        <div className="w-[100%] lg:w-[30%] ">
          <div className="w-[100%] lg:w-[100%] flex justify-center " >
            <img
              className="max-h-[500px] min-w-[340px] rounded-[10px] "
              src={aboutScr3img}
              alt=""
            ></img>
          </div>

          <div className=" text-[18px] lg:text-[22px] sm:text-[20px]  md:text-[22px] text-[#00569A] font-semibold mt-[30px] ">
            <div>
              <h1>
                “I used to be really shy, and I didn’t know how to deal with all
                of the drama in high school.”
              </h1>
            </div>

            <div className="mt-[30px]">
              <h1>“Qian gave me the confidence to succeed in this World.”</h1>
            </div>
          </div>

          <div className="flex  gap-7 mt-5 ">
            <div>
              <p>We have clients in</p>
              <h1 className="text-[70px] text-[#00569A] font-semibold  ">68</h1>
              <p className="">countries</p>
            </div>
            <div>
              <p>Successful work with</p>
              <h1 className="text-[70px] text-[#00569A] font-semibold  ">
                750
              </h1>
              <p className="">clients</p>
            </div>
          </div>
        </div>

        <div className="  lg:w-[55%]  ">
          <div>
            <h1 className=" text-[22px] lg:text-[27px] font-semibold mb-[18px] ">
              We are an employee-owned management consulting
            </h1>
          </div>
          <div className="text-[15px] mb-[18px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              minim veniam.
            </p>
          </div>
          <div className="text-[15px] mb-[18px]">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="text-[15px] mb-[18px]">
            <li>A lack of understanding of business and customer insights</li>
            <li>Uncertainty about current or future market realities</li>
            <li>
              An overall lack of business agility across employees and
              technology
            </li>
            <li>Difficulty innovating or quickly launching new capabilities</li>
            <li>Poor strategy execution and value realization</li>
            <li>A culture of complacency or change fatigue</li>
          </div>
          <div className="text-[15px] mb-[18px]">
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition.
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AboutusScr3;
