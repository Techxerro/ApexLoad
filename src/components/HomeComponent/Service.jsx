import React, { useEffect, useState, useRef } from "react";
import grid1 from "../../assets/img/Rectangle 45.png";

import grid3 from "../../assets/img/Rectangle 47.png";
import grid4 from "../../assets/img/Rectangle 48.png";
import { Link } from "react-router-dom";

const Service = () => {
  
  const [ish1Visible, setIsH1Visible] = useState(false);
  const [isbVisible, setIsBVisible] = useState(false);
  const [iscVisible, setIsCVisible] = useState(false);
  const [isdVisible, setIsDVisible] = useState(false);
  const [iseVisible, setIsEVisible] = useState(false);

  
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const eRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      
      if (bRef.current) {
        const rect = bRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsBVisible(true);
        } else {
          setIsBVisible(false);
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
      if (cRef.current) {
        const rect = cRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsCVisible(true);
        } else {
          setIsCVisible(false);
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
    <div className="bg-black">
      <div className="font-neue overflow-hidden container mx-auto 3xl:px-24">
        <div className="bg-black pt-1 mx-2  flex justify-between">
          <h1
            className={`font-neueblack text-3xl xl:text-[72px] lg:text-[58px] md:text-[32px] text-white mt-10 ml-10 transition-all ease-in duration-500 ${
              ish1Visible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: ish1Visible ? "0ms" : "0ms" }}
            ref={h1Ref}
          >
            Services We <span className="text-[#D91E27]">Offer</span>
          </h1>
          <button
            className={` w-[90px] h-[20px] hidden md:block  md:w-[173px] md:h-[30px] bg-[#D91E27] rounded-full text-white mt-[45px] md:mt-[50px] lg:mt-[84px] mr-10  transition-all ease-in duration-500 ${
              iseVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-10 opacity-0"
            } text-[8px] md:text-[18px] `}
            style={{ transitionDelay: ish1Visible ? "500ms" : "0ms" }}
            ref={eRef}
          >
            Book a Free Demo
          </button>
        </div>
        <div className="bg-black py-3 md:py-8">
          <div className="flex lg:grid-cols-3 md:grid-cols-2 gap-4 mx-8 md:mx-[50px] md:mb-[128px] overflow-x-auto no-scrollbar">
            <div className="bg-white flex flex-col justify-between min-w-64 md:min-w-0 ">
              <div>
                <img alt="" src={grid1} />
              </div>
              <div>
                <h3
                  className={`m-4 ml-5 font-neuebold lg:text-2xl xl:text-3xl transition-all ease-in duration-500 ${
                    isbVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isbVisible ? "0ms" : "0ms" }}
                  ref={bRef}
                >
                  Freight Forwardes/ Brokers:{" "}
                </h3>
              </div>
              <div>
                <p
                  className={`mx-5  xl:text-[18px] lg:text-[14px] flex items-start transition-all ease-in duration-500 ${
                    isbVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isbVisible ? "500ms" : "0ms" }}
                  ref={bRef}
                >
                  At Apex Loads, we understand the critical role of freight
                  forwarders and brokers in global logistics.
                </p>
              </div>
              <div>
                <Link to='/freight-forworders'>
                <button
                  className={`w-[136px] h-[30px] text-white bg-[#D91E27] rounded-full m-8 ml-5 mt-4 flex items-center justify-center transition-all ease-in duration-500 ${
                    isbVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isbVisible ? "1000ms" : "0ms" }}
                  ref={bRef}
                >
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-between min-w-64 md:min-w-0 ">
              <div>
                <img alt="" src={grid3} />
              </div>
              <div>
                <h3
                  className={`m-4 ml-5 font-neuebold lg:text-2xl xl:text-3xl transition-all ease-in duration-500 ${
                    iscVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: iscVisible ? "0ms" : "0ms" }}
                  ref={cRef}
                >
                  Transporters:{" "}
                </h3>
              </div>
              <div>
                <p
                  className={`mx-5  xl:text-[18px] lg:text-[14px] flex items-start transition-all ease-in duration-500 ${
                    iscVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: iscVisible ? "500ms" : "0ms" }}
                  ref={cRef}
                >
                  At Apex Loads, we understand the critical role of freight
                  forwarders and brokers in global logistics.
                </p>
              </div>
              <div>
                <Link to='/transporters' >
                <button
                  className={`w-[136px] h-[30px] text-white bg-[#D91E27] rounded-full m-8 ml-5 mt-4 flex items-center justify-center transition-all ease-in duration-500 ${
                    iscVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: iscVisible ? "1000ms" : "0ms" }}
                  ref={cRef}
                >
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-between min-w-64 md:min-w-0">
              <div>
                <img alt="" src={grid4} />
              </div>
              <div>
                <h3
                  className={`m-4 ml-5 font-neuebold  lg:text-2xl xl:text-3xl transition-all ease-in duration-500 ${
                    isdVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isdVisible ? "0ms" : "0ms" }}
                  ref={dRef}
                >
                  Full Service Brokers:{" "}
                </h3>
              </div>
              <div>
                <p
                  className={`mx-5  xl:text-[18px] lg:text-[14px] flex items-start transition-all ease-in duration-500 ${
                    isdVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isdVisible ? "500ms" : "0ms" }}
                  ref={dRef}
                >
                  At Apex Loads, we understand the critical role of freight
                  forwarders and brokers in global logistics.
                </p>
              </div>
              <div>
                <Link to='/full-sevice-broker'>
                <button
                  className={`w-[136px] h-[30px] text-white bg-[#D91E27] rounded-full m-8 ml-5 mt-4 flex items-center justify-center transition-all ease-in duration-500 ${
                    isdVisible
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isdVisible ? "500ms" : "0ms" }}
                  ref={dRef}
                >
                  Know More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div  className="my-6 mx-7">
          <button
            className={` w-[180px] h-[30px] md:hidden  bg-[#D91E27] rounded-full text-white  `}
          >
            Book a Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
