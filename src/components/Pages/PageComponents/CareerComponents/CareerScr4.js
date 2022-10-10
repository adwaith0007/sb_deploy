import React from "react";
import { BsArrowRight } from "react-icons/bs";

function CareerScr4() {
  return (
    <div>
      <div className="w-[100%]">
        {/* <!-- component --> */}
        <div>
          <section class="text-gray-700">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  WHY CHOOSE US
                </h1>
              </div>
              <div class="flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="w-full lg:w-1/2 px-4 py-2">
                  <details class="mb-4">
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                      Why work with us ?
                    </summary>

                    <span>
                      At SolutionBuggy, we care for our employee’s aspirations
                      and needs. We recognize and respect the voice and opinion
                      of everyone, embracing diversity. Work with SolutionBuggy
                      in a diverse environment to learn, grow, build an exciting
                      career and realize your dreams.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                      Who we are ?
                    </summary>

                    <span>
                      SolutionBuggy is one of the pioneers in the Indian
                      manufacturing consulting space. We started our journey in
                      2016 and today we are India’s largest manufacturing
                      consulting platform dedicated to small and medium scale
                      enterprises. Till date, we have successfully completed
                      more than 2,000+ consulting projects and we have mapped
                      10,000+ experts across various industries throughout the
                      country.
                    </span>
                  </details>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CareerScr4;
