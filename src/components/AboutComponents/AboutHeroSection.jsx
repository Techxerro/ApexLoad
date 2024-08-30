import React from "react";
import img1 from "../../assets/img/Rectangle 673.png";
import img2 from "../../assets/img/Rectangle 674.png";

const AboutHeroSection = () => {
  return (
    <section>
      <div className="">
        <div className="bg-custom-image4  bg-cover bg-center bg-no-repeat h-[400px] md:h-[600px] lg:h-screen bg-black flex justify-center items-center ">
          <div className="flex flex-col justify-center items-center container mx-auto px-10">
            <h1 className="font-neueextrablack text-white text-4xl md:text-5xl lg:text-7xl  xl:text-8xl 3xl:text-9xl mb-4 md:mb-8">
              ABOUT US
            </h1>
            <p className="font-neue text-white text-sm md:text-base lg:text-lg  xl:text-xl 3xl:text-2xl text-center md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[700px] 3xl-[900px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio{" "}
             
              in et, lectus sit lorem id integer.
            </p>
          </div>
        </div>
        <div className=" bg-custom-image5 bg-cover top-[-70px] md:top-[-135px] 3xl:top-[-150px]  text-white p-8 lg:p-20 relative  ">
          <div className="container mx-auto">
            <div className="md:flex md:items-center md:justify-center 3xl:mt-32 2xl:mt-28 xl:mt-24 lg:mt-16 md:mt-16 mt-10 gap-10">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl  font-neueblack mb-6">Our Story</h2>
                <div className="md:w-[90%]">
                  <p className="mb-4 font-neue md:text-sm lg:text-base xl:text-lg 3xl:text-xl">
                    Apexloads.com was founded with a clear vision to address the
                    critical challenges facing the logistics industry in Africa.
                    Our journey began when our founder, who has extensive
                    experience in logistics and technology, recognized the
                    inefficiencies and hurdles in the transportation sector.
                    From poor infrastructure and lack of real-time information
                    to fragmented services and inadequate connectivity, the
                    problems were evident and needed a comprehensive solution.
                  </p>
                  <p className="mb-4 font-neue md:text-sm lg:text-base xl:text-lg 3xl:text-xl">
                    Inspired by the potential of technology to transform
                    industries, our founder assembled a team of experts in
                    logistics, software development, and business strategy.
                    Together, they embarked on a mission to create a platform
                    that would not only solve these problems but also set new
                    standards for efficiency and reliability in the industry.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 mt-28 3xl:mt-36">
                <div className=" md:h-[300px] lg:h-[400px] xl:h-[500px] 3xl:h-[600px] relative">
                  
                    <img src={img1} className=" absolute z-10  top-0 left-0 h-[90%] w-[70%]" />
                  
                    <img src={img2} className=" absolute z-10 bottom-0 h-[50%] w-[40%] right-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
