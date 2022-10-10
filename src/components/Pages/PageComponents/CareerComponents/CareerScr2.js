import React from "react";
import businessdevelopmentimg from '../../../../assets/Career/CareerScr2/business-development-executive.png'
import ProjectManagerimg from '../../../../assets/Career/CareerScr2/Project Manager.jpg'
import DigitalMarketingManagerimg from '../../../../assets/Career/CareerScr2/Digital-Marketing-Manager.jpg'

function CareerScr2() {
  return (
    <div>
        <div className=" font-semibold text-center mt-10 text-[30px] ">WHAT WE OFFER </div>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {/* <!-- Column --> */}
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={businessdevelopmentimg}
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-black"
                    href="https://www.financialexpress.com/industry/sme/solutionbuggy-msme-entrepreneurs-need-not-be-at-a-loss-for-way-to-get-started/2565987/"
                  >
                    Business Development Executive / Technical Sales Engineer
                  </a>
                </h1>
               
              </header>

              <footer class="flex items-center justify-center leading-none p-2 md:p-4">
              <a className="bg-[#fd702c] px-5 py-3 rounded " href='https://docs.google.com/forms/d/e/1FAIpQLSezgb0XydThaobRqimumVRY-RqCcNwDdB64-_vtGiA4J5fmZg/viewform' >Apply Now >></a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}

          {/* <!-- Column --> */}
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={DigitalMarketingManagerimg}
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-black"
                    href="https://yourstory.com/2022/06/startups-msmes-alignbooks-recordent-haqdarshak-solutionbuggy-brego/amp"
                  >
                    Digital Marketing Manager
                  </a>
                </h1>
               
              </header>

              <footer class="flex items-center justify-center leading-none p-2 md:p-4">
              <a className="bg-[#fd702c] px-5 py-3 rounded " href='https://docs.google.com/forms/d/e/1FAIpQLSezgb0XydThaobRqimumVRY-RqCcNwDdB64-_vtGiA4J5fmZg/viewform' >Apply Now >></a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}

          {/* <!-- Column --> */}
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={ProjectManagerimg}
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-black"
                    // href="https://www.expresscomputer.in/news/solutionbuggy-celebrated-its-sixth-anniversary-with-fervour-and-gaiety/86479/"
                  >
                    Project Manager
                  </a>
                </h1>
                
              </header>

              <footer class="flex items-center justify-center leading-none p-2 md:p-4">
             <a className="bg-[#fd702c] px-5 py-3 rounded " href='https://docs.google.com/forms/d/e/1FAIpQLSezgb0XydThaobRqimumVRY-RqCcNwDdB64-_vtGiA4J5fmZg/viewform' >Apply Now >></a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}
        </div>
      </div>
    </div>
  );
}

export default CareerScr2;
