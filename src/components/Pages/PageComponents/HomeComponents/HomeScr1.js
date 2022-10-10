import React from 'react'
import { Column, Row, Img, Text, Button } from "../../../../components copy";

function HomeScr1() {
  return (
    <>
      <Column className="bg-white_A700 font-poppins  items-center mx-[auto] lg:pb-[382px] xl:pb-[437px] 2xl:pb-[492px] 3xl:pb-[590px] w-[100%]">
        
        <Row className="items-center flex  flex-col md:flex-row lg:flex-row lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[81%]">
          <Column className="2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] w-[66%]">
            <Text className="font-bold font-lora leading-[normal] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_901 w-[74%]">
              India's Largest Platform
              <br />
              To Accelerate
              <br />
              Manufacturing Business
            </Text>
            <Text className="font-normal font-poppins leading-[126.00%] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[68%]">
              Connect with the best manufacturing consultants & industrial
              consultants accross the country
              <br />
            </Text>
            <Text className="font-bold font-poppins leading-[126.00%] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 w-[30%]">
              80,000+ INDUSTRIES <br />
              10,000+ CONSULTANTS <br />
              2000+ PROJECTS
            </Text>
            <Row className="font-poppins items-center mr-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[47%]">
              <Button
                className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[51%]"
                size="md"
              >
                Find Experts
              </Button>
              <Button
                className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                shape="CustomBorderLR50"
                size="md"
                variant="FillBlue900"
              >
                Find Projects
              </Button>
            </Row>
          </Column>
          <Img
            src="images/img_h1.png"
            className="lg:h-[334px] xl:h-[382px] 2xl:h-[430px] 3xl:h-[516px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[34%]"
            alt="H1"
          />
        </Row>
      </Column>
    </>
  )
}

export default HomeScr1