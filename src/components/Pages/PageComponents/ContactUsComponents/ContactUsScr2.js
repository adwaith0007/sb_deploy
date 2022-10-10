import React from "react";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

function ContactUsScr2() {
  return (
    <div className="w-[100%] lg:max-w-[1100px] flex  flex-col md:flex-row  m-auto  lg:flex-row   ">
      <div className="w-[100%]  md:w-[50%] lg:w-[50%] py-8 lg:py-10 px-4 mx-auto max-w-screen-md ">
        <div className="flex flex-col">
          <div className="text-black text-[23px] mb-5 font-semibold ">
            Happy to Assist You 24x7 on Your Requirements
          </div>

          <div className="text-[#606060]  text-[15px] ">
            Have a inquiry or some feedback for us? Fill out the form below to
            contact our team. For partnership and business development
            inquiries, please contact us at hello@qian.com.
          </div>
        </div>

        <div className=" flex  items-center mt-10 mb-10  ">
          <div className="text-[#FA3308] hover:text-white w-[75px] h-[65px] rounded-[10px] flex items-center justify-center bg-[#f9f9f9] hover:bg-[#FA3308] ">
            <GoLocation className="w-[30px] h-[30px]" />
          </div>

          <div className="pl-5">
            <h5 className="text-black text-[20px] ">Our Address</h5>
            <p className="text-[#606060]">
              #249, 2nd floor, 14th Main Rd, Sector 7, H.S.R Layout , Bangalore
              - 560102
            </p>
          </div>
        </div>

        <div className="flex items-center mb-10">
          <div className="text-[#FA3308] hover:text-white w-[65px] h-[65px] rounded-[10px] flex items-center justify-center bg-[#f9f9f9] hover:bg-[#FA3308] ">
            <BiPhoneCall className="w-[30px] h-[30px]" />
          </div>
          <div className="pl-5">
            <h5 className="text-black text-[20px] ">Phone/Email</h5>
            <a href="tel:+91 9353 714 647" className="text-[#606060]">
              Mobile:+91 9353 714 647
            </a>
            <a href="tel:+91 80 4217 1111" className="text-[#606060]">
              ,+91 80 4217 1111
            </a>
            <div className="">
              <a
                href="mailto:info@solutionbuggy.com"
                className="text-[#606060]"
              >
                Email:info@solutionbuggy.com
              </a>
            </div>
          </div>
        </div>

        <div className=" flex items-center ">
          <div className="text-[#FA3308] hover:text-white w-[65px] h-[65px] rounded-[10px] flex items-center justify-center bg-[#f9f9f9] hover:bg-[#FA3308] ">
            <AiOutlineClockCircle className="w-[30px] h-[30px]" />
          </div>
          <div className="pl-5">
            <h5 className="text-black text-[20px] ">Hours of Operation</h5>
            <p className="text-[#606060]">Monday - Friday: 09:00 - 20:00</p>
            <p className="text-[#606060]">Sunday & Saturday: 10:30 - 22:00</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-[50%] lg:w-[50%] ">
      <section class="bg-white ">
  <div class="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-1  text-center text-[#fb6544] font-medium sm:text-xl">CONTACT WITH US</p>
      <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-center text-black">Have Any Questions? Let’s Talk!</h2>
      <form action="#" class="space-y-8">
      <div className="flex w-[100%] gap-10 " >
              <div className="w-[100%]"><label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   " placeholder="" required/></div>
              <div className="w-[100%]">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   " placeholder="" required/>
              </div>
          </div>

          <div className="flex w-[100%] gap-10 " >
              <div className="w-[100%]"><label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   " placeholder="" required/></div>
              <div className="w-[100%]">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   " placeholder="" required/>
              </div>
          </div>
          {/* <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   " placeholder="name@gmail.com" required/>
          </div> */}
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
      </form>
  </div>
</section>
      </div>
    </div>
  );
}

export default ContactUsScr2;
