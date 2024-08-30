import React, { useState, useEffect, useRef } from "react";
import Headers from "../components/HomeComponent/Headers";
import About from "../components/HomeComponent/About";
import rectangle from "../assets/img/Rectangle 30.png";

import photo1 from "../assets/img/Ellipse 3.png";
import photo2 from "../assets/img/Ellipse 4.png";
import photo3 from "../assets/img/Ellipse 5.png";
import star from "../assets/img/16231558095-star-rating 1.png";
import Service from "../components/HomeComponent/Service";
import Member from "../components/HomeComponent/Member";
import video from "../assets/video/videoplayback.mp4";
import ScrollableSection from "../components/HomeComponent/Scroll";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ish1Visible, setIsH1Visible] = useState(false);
  const [isbVisible, setIsBVisible] = useState(false);
  const [iscVisible, setIsCVisible] = useState(false);
  const [isdVisible, setIsDVisible] = useState(false);
  const [iseVisible, setIsEVisible] = useState(false);

  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const eRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aRef.current) {
        const rect = aRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
      if (bRef.current) {
        const rect = bRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsBVisible(true);
        } else {
          setIsBVisible(false);
        }
      }
      if (cRef.current) {
        const rect = cRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsCVisible(true);
        } else {
          setIsCVisible(false);
        }
      }
      if (h1Ref.current) {
        const rect = h1Ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsH1Visible(true);
        } else {
          setIsH1Visible(false);
        }
      }
      if (dRef.current) {
        const rect = dRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsDVisible(true);
        } else {
          setIsDVisible(false);
        }
      }
      if (eRef.current) {
        const rect = eRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsEVisible(true);
        } else {
          setIsEVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Headers />
      <About />
      <div className="bg-black font-neue  ">
        <div className="relative bg-black md:container md:mx-auto text-white py-8 items-start 3xl:px-24">
          <div className="flex justify-start md:justify-end ml-7 md:ml-0 md:mr-28 2xl:mr-56 2xl:mt-6 md:mb-5 mb-10">
            <h2 className="xl:text-[72px] lg:text-[58px] md:text-[30px] text-[32px]  font-neueextrablack tracking-tight ">
              Why Choose<span className="text-[#D91E27]"> Us </span>
            </h2>
          </div>
          <div className="md:flex">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-[-20px] lg:mt-[-60px] xl:mt-[-80px] 2xl:mt-[-80px] md:pl-10 lg:pl-0">
              <img alt="" 
                src={rectangle}
                className="rounded-lg w-[80%]  h-[371px] xl:h-[563px] lg:h-[400px] md:h-[300px] xl:w-[499px] lg:w-[380px] xl:ml-10 lg:ml-8"
              />
            </div>

            <ScrollableSection />
          </div>
        </div>
      </div>
      <Service />
      <div className="bg-[#D91E27] font-neue ">
        <div className=" h-[30px]  xl:h-[200px] lg:h-[140px] md:h-[130px] w-full flex flex-col items-center text-center relative">
          <h1
            className={`text-[32px] lg:text-[72px] md:text-[40px] text-white font-neueblack tracking-tight  leading-none my-4 lg:my-16 transition-all ease-in duration-500 ${
              ish1Visible
                ? "transform translate-y-0 opacity-100"
                : "transform -translate-x-28 opacity-0"
            }`}
            ref={h1Ref}
          >
            Lorem ipsum dolor sit amet
            <br className="md:block hidden" /> consectetur.
          </h1>
          <p className=" text-[8px] hidden md:block lg:text-[18px] md:text-[14px] text-white lg:w-[850px] md:w-[600px] w-[300px]">
            At Apex Loads, we pride ourselves on our proven track record of
            excellence in the logistics industry. With years of experience and a
            deep understanding of Africa’s unique logistical challenges, we have
            established ourselves as a trusted partner for businesses across the
            continent.
          </p>
        </div>
        <video
          src={video}
          controls="controls"
          
          className="w-[250px] h-[150px] xl:w-[840px] lg:w-[600px] md:w-[400px] md:h-[200px] lg:h-[525px] object-contain  relative xl:top-[200px] lg:top-[170px] top-[60px] mx-auto   z-10"
        />
        <div className="bg-black text-white xl:pt-[60px] lg:pt-[20px] md:pt-4 w-full h-full">
          <div className="mt-[10px] md:mt-[100px] lg:mt-[200px]">
            <div className="md:mt-10 pb-4 pt-20 md:pt-10 mx-auto">
              <div className="grid grid-cols-3 text-white xl:w-[950px] w-[200px] lg:w-[600px] mx-auto md:w-[400px]">
                <div
                  className={`text-center  transition-all ease-in duration-[500ms] ${
                    isVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-28 opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
                  ref={aRef}
                >
                  <h2 className="text-[20px] xl:text-[72px] lg:text-[50px] md:text-[25px] font-neuebold">
                    4500+
                  </h2>
                  <p className="mt-1 text-[8px] md:text-sm">Users Signup</p>
                </div>
                <div
                  className={`text-center transition-all ease-in duration-[500ms] ${
                    isVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-28 opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                  ref={aRef}
                >
                  <h2 className="text-[20px] xl:text-[72px] lg:text-[50px] md:text-[25px] font-neuebold">
                    9988
                  </h2>
                  <p className="mt-1 text-[8px] md:text-sm">
                    Loads Posted and Covered
                  </p>
                </div>
                <div
                  className={`text-center  transition-all ease-in duration-[500ms] ${
                    isVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-28 opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
                  ref={aRef}
                >
                  <h2 className="text-[20px] xl:text-[72px] lg:text-[50px] md:text-[25px] font-neuebold">
                    500+
                  </h2>
                  <p className="mt-1 text-[8px] md:text-sm">Trucks Posted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black flex flex-col justify-center items-center pb-10 overflow-hidden 3xl:px-24">
        <h1
          className={`text-white xl:text-[72px] lg:text-[58px] md:text-[30px] text-3xl font-neueblack tracking-tight md:mt-10 lg:mt-28 transition-all ease-in duration-500 ${
            isbVisible
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-28 opacity-0"
          }`}
          ref={bRef}
        >
          What People <span className="text-[#D91E37]">Say</span>
        </h1>
        <div className="mt-[60px] lg:mt-[98px] container mx-auto px-10">
          <div className="flex overflow-x-auto no-scrollbar md:grid xl:grid-cols-3 gap-10 md:grid-cols-2  ">
            <div className="bg-[#1B1B1B]  flex flex-col  rounded-md  justify-start  flex-shrink-0 w-full py-10">
              <div className="flex  h-auto gap-5 ">
                <img alt="" 
                  src={photo1}
                  className="w-[40px] md:w-[87px] h-[40px] md:h-[87px] ml-10 rounded-full z-10"
                />
                <div
                  className={`flex flex-col transition-all ease-in duration-500 ${
                    iscVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: iscVisible ? "0ms" : "0ms" }}
                  ref={cRef}
                >
                  <h6 className="text-white font-medium text-[14px] md:text-[24px]">
                    Moses Smith
                  </h6>
                  <p className="text-white text-[10px] md:text-[18px] ">
                    Transporter
                  </p>
                  <img alt="" 
                    src={star}
                    className="w-[40px] md:w-[89px] h-[7px] md:h-[13px]"
                  />
                </div>
              </div>
              <p
                className={`text-white text-sm md:text-[16px] mx-5 mt-5  transition-all ease-in duration-500 ${
                  iscVisible
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-10 opacity-0"
                } `}
                style={{ transitionDelay: iscVisible ? "500ms" : "0ms" }}
                ref={cRef}
              >
                I did not have to leave the house to find a load. It was so
                easy; I was watching the news while searching for my next load.
                Got the information, called the broker, got there and just
                loaded it up. This would otherwise have been a 5 hour wait or
                even much longer if the loads were not at a particular station.
                Did it in less than 1 hour.
              </p>
            </div>
            <div className="bg-[#1B1B1B]  flex flex-col  rounded-md  justify-start flex-shrink-0 w-full py-10">
              <div className="flex  h-auto gap-5 ">
                <img alt="" 
                  src={photo2}
                  className="w-[40px] md:w-[87px] h-[40px] md:h-[87px] ml-10 rounded-full z-10"
                />
                <div
                  className={`flex flex-col transition-all ease-in duration-500 ${
                    isdVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isdVisible ? "0ms" : "0ms" }}
                  ref={dRef}
                >
                  <h6 className="text-white font-medium text-[14px] md:text-[24px]">
                    Lora Kisa
                  </h6>
                  <p className="text-white text-[10px] md:text-[18px] ">
                    Broker
                  </p>
                  <img alt="" 
                    src={star}
                    className="w-[40px] md:w-[89px] h-[7px] md:h-[13px]"
                  />
                </div>
              </div>
              <p
                className={`text-white text-sm md:text-[16px] mx-5 mt-5  transition-all ease-in duration-500 ${
                  isdVisible
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-10 opacity-0"
                } `}
                style={{ transitionDelay: isdVisible ? "500ms" : "0ms" }}
                ref={dRef}
              >
                I did not have to leave the house to find a load. It was so
                easy; I was watching the news while searching for my next load.
                Got the information, called the broker, got there and just
                loaded it up. This would otherwise have been a 5 hour wait or
                even much longer if the loads were not at a particular station.
                Did it in less than 1 hour.
              </p>
            </div>
            <div className="bg-[#1B1B1B]   flex flex-col  rounded-md  justify-start flex-shrink-0 w-full py-10 ">
              <div className="flex  h-auto gap-5 ">
                <img alt="" 
                  src={photo3}
                  className="w-[40px] md:w-[87px] h-[40px] md:h-[87px] ml-10 rounded-full z-10"
                />
                <div
                  className={`flex flex-col transition-all ease-in duration-500 ${
                    iseVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: iseVisible ? "0ms" : "0ms" }}
                  ref={eRef}
                >
                  <h6 className="text-white font-medium text-[14px] md:text-[24px]">
                    Faith Mukasa
                  </h6>
                  <p className="text-white text-[10px] md:text-[18px] ">
                    Shipper
                  </p>
                  <img alt="" 
                    src={star}
                    className="w-[40px] md:w-[89px] h-[7px] md:h-[13px]"
                  />
                </div>
              </div>
              <p
                className={`text-white text-sm md:text-[16px] mx-5 mt-5  transition-all ease-in duration-500 ${
                  iseVisible
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-10 opacity-0"
                } `}
                style={{ transitionDelay: iseVisible ? "500ms" : "0ms" }}
                ref={eRef}
              >
                I did not have to leave the house to find a load. It was so
                easy; I was watching the news while searching for my next load.
                Got the information, called the broker, got there and just
                loaded it up. This would otherwise have been a 5 hour wait or
                even much longer if the loads were not at a particular station.
                Did it in less than 1 hour.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Member />
    </>
  );
};

export default Home;
