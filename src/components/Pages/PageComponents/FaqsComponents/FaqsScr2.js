import React from "react";
import faq from "../../../../assets/Faqs/FaqsScr2/faq.jpg";

function FaqsScr2() {
  return (
    <div className="w-[100%] flex flex-row">
      <div className=" flex md:flex-col w-[100%]  lg:flex-row">
        <div className=" px-5 py-24">
          <div className="">
            <img className="h-[500px] w-[550px] " src={faq} alt="" />
          </div>

          
        </div>
        <div className="w-[100%]">
            {/* <!-- component --> */}
            <div>
              <section class="text-gray-700">
                <div class="container px-5 py-24 mx-auto">
                  <div class="text-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                      Frequently Asked Question
                    </h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                      The most common questions about how our business works and
                      what can do for you.
                    </p>
                  </div>
                  <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div class="w-full lg:w-1/2 px-4 py-2">
                      <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                          What is SolutionBuggy?
                        </summary>

                        <span>
                          SolutionBuggy is India’s largest manufacturing
                          consulting platform, connecting industries with
                          consultants. The platform is one-of-its-kind where
                          industries can post their requirements/problems and
                          find relevant experts. SolutionBuggy also helps new
                          entrepreneurs looking to enter into the manufacturing
                          sector by undertaking end-to-end execution of the
                          project.
                        </span>
                      </details>
                      <details class="mb-4">
                        <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                          How is SolutionBuggy different from others?
                        </summary>

                        <span>
                          SolutionBuggy is one-of-its-kind platform connecting
                          industries with consultants. Below are some points
                          that differentiates SolutionBuggy from others in the
                          market. • No bidding process • No commission/service
                          charges • Confidentiality • Covering all industries in
                          the manufacturing sector
                        </span>
                      </details>
                      <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                          Who can register?
                        </summary>

                        <span>
                          Any person who wants to setup manufacturing plant or
                          who is looking for solutions to problems in their
                          existing business can register. Consultants who are
                          looking for consulting projects and who want to
                          showcase their skills can also register with the
                          platform.
                        </span>
                      </details>
                    </div>
                    <div class="w-full lg:w-1/2 px-4 py-2">
                      <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                          Do I have to pay to Register?
                        </summary>

                        <span class="px-4 py-2">
                          No, the process of registration is absolutely free.
                        </span>
                      </details>
                      <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                          Is my information safe on SolutionBuggy?
                        </summary>

                        <span class="px-4 py-2">
                          Yes, your information is safe. We give utmost priority
                          to the safety of customer data and ensure data
                          privacy.
                        </span>
                      </details>
                      <details class="mb-4">
                        <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                          How do I recover my password?
                        </summary>

                        <span class="px-4 py-2">
                          Click on ‘forgot my password’ on the login page then a
                          link for password change will be sent to your
                          registered email address.
                        </span>
                      </details>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </div>
    </div>
  );
}

export default FaqsScr2;
