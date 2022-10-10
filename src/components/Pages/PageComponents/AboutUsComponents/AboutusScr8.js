import React from "react";
import Scr8icon from "../../../../assets/AboutUs/Src8/Scr8icon.png";
import user3 from "../../../../assets/AboutUs/Src8/user3.jpg";
import Scr8bg from "../../../../assets/AboutUs/Src8/Scr8bg.png";
import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

function AboutusScr8() {
  return (
    <div
      className="bg-[#00569a] justify-center items-center  flex flex-col w-[100%] "
      style={{
        backgroundImage: `url(${Scr8bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "700px",
      }}
    >
      <div className=" flex flex-col text-center text-white font-semibold mt-28 md:mt-20 lg:mt-10 ">
        <div>
          <p>FEEDBACK</p>
        </div>
        <div>
          <h1 className=" text-[20px] md:text-[30px] lg:text-[30px]">What Our Clients Say About Us</h1>
        </div>
      </div>
      <div className="w-[100%] mt-10 mb-20">
         {/* <OwlCarousel autoplay={true} className="owl-theme " loop margin={10} nav > */}
          <div className="flex w-[100%] justify-center"  >
            <div className="bg-black text-white p-10 max-w-[900px]  ">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum minim veniam.
                </p>
              </div>

              <div className="flex justify-between mt-5 items-center">
                <div className="flex gap-5">
                  <div>
                    <img
                      className="h-[65px] w-auto rounded-[50px] "
                      src={user3}
                      alt=""
                    ></img>
                  </div>
                  <div className="flex flex-col justify-center ">
                    <div className="flex  ">
                      <h1>Jadid Luis</h1>
                    </div>
                    <div>
                      <p>Design Lead</p>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={Scr8icon} alt=""></img>
                </div>
              </div>
            </div>
          </div>
          
        {/* </OwlCarousel>;  */}



{/* <OwlCarousel item='3' autopla={true} className='owl-theme' loop margin={10} >
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>; */}
      </div>
    </div>
  );
}

export default AboutusScr8;
