import React from "react";
import { Link } from "react-router-dom";
import member1 from "../../assets/img/Artboard 1.png";
import member2 from "../../assets/img/Artboard 1 copy.png";
import member3 from "../../assets/img/Artboard 1 copy 2.png";
import member4 from "../../assets/img/Artboard 1 copy 3.png";
import grp1 from "../../assets/img/Group 1.png";
import grp2 from "../../assets/img/Group 2.png";

const Member = () => {
  return (
    <>
      {" "}
      <div className="bg-black flex flex-col items-center pt-[50px] pb-[54px] overflow-hidden">
        <h1 className="text-white text-[25px] xl:text-[72px] lg:text-[58px] md:text-[30px] font-neueextrablack tracking-tight">
          Member of
        </h1>
        <div className="flex justify-evenly gap-2 md:gap-10 lg:gap-20 items-center">
          <img alt="" src={member1} className="xl:w-[216px] lg:w-[186px] md:w-[156px] w-[90px]   xl:h-[200px] md:h-[150px] h-[100px]   lg:h-[160px]" />
          <img alt="" src={member2} className="xl:w-[264px] lg:w-[234px] md:w-[200px] w-[110px]   xl:h-[112px] md:h-[52px]  h-[32px]  lg:h-[82px]" />
          <img alt="" src={member3} className="xl:w-[112px] lg:w-[82px]  md:w-[52px]  w-[40px] xl:h-[180px]  md:h-[120px]  h-[80px] lg:h-[150px]" />
          <img alt="" src={member4} className="xl:w-[171px] lg:w-[141px] md:w-[111px] w-[71px]   xl:h-[158px] md:h-[98px]  h-[58px]  lg:h-[128px]" />
        </div>
      </div>
      <div className="bg-[#d91e27] ">
        <div className="bg-custom-image3   md:bg-custom-imaage2 bg-cover bg-center md:h-[400px] lg:h-[600px] xl:h-[800px] 2xl:h-[1000px]  pb-4">
          <div className=" w-full flex justify-center text-center">
            <h1 className="text-3xl xl:text-[72px] lg:text-[50px] md:text-[30px] text-white font-neueblack  flex justify-center xl:pt-[50px] lg:pt-[40px] md:pt-[30px] pt-[20px] ">
              Download the Apexload Mobile App
            </h1>
          </div>
          <div className="flex gap-4 justify-center md:justify-around 2xl:mt-[400px]  xl:mt-[250px] lg:mt-[200px] md:mt-[150px] mt-[300px]  ">
            <Link className="cursor-pointer 3xl:mr-[10%] 2xl:mr-[28%] xl:mr-[35%] lg:mr-[35%] md:mr-[30%]">
              <img
                alt=""
                src={grp2}
                className="h-[40px] w-[120px] xl:h-[120px] lg:h-[100px] md:h-[80px] xl:w-[300px] lg:w-[250px] md:w-[200px] md:text-[200px]"
              />
            </Link>
            <Link className="cursor-pointer">
              <img
                alt=""
                src={grp1}
                className="h-[35px] w-[120px] xl:h-[90px] lg:h-[70px] md:h-[50px] xl:w-[300px] lg:w-[250px] md:w-[200px] md:mt-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
