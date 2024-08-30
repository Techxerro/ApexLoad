import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import truck from "../../assets/img/Group 4.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const aRef = useRef(null);

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-custom-image bg-cover bg-center md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px] overflow-hidden ">
      <div className="container mx-auto py-4 px-8 md:px-10  3xl:px-24 ">
        <div className=" flex flex-col-reverse md:flex-row gap-2 md:gap-10 justify-between md:h-[500px] lg:h-[600px] xl:h-[700px] ">
          <div className="md:w-1/2 ">
            <h1
              className={`text-white  text-[32px] z-10  md:pt-32    font-neueextrablack transition-all duration-500 ease-in ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform -translate-x-28 opacity-0"
              } xl:text-[72px] lg:text-[58px] md:text-[30px]`}
              style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
              ref={aRef}
            >
              About <span className="text-[#D91E27]">us</span>
            </h1>

            <p
              className={`text-white text-[12px]  font-neuebold w-full transition-all ease-in duration-[500ms] ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform -translate-x-28 opacity-0"
              } text-2xl md:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl xl:w-[721px] 2xl:w-[900px] lg:w-[500px] md:w-[400px]`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              ref={aRef}
            >
              <span className="text-[#D91E27] ">Apexloads.com</span> is a
              premier digital platform designed to revolutionize the logistics
              and transportation industry,
              <span className=" font-neue  xl:text-xl  2xl:text-[25px] ">
                with a special focus on the African market. We aim to bridge the
                gap between shippers and truck owners, providing a seamless and
                efficient solution to manage freight loads. Our platform is
                built on the principles of innovation, reliability, and
                accessibility, ensuring that all users, regardless of their
                location, can optimize their logistics operations and drive
                their businesses forward.
              </span>
            </p>
            <Link to='/about'>
            <button
              className={`text-white mt-4 px-4 md:px-8 lg:px-10 border-2 border-solid border-white rounded-full md:h-[20px] lg:h-[30px] transition-all ease-in duration-500 ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform -translate-x-28 opacity-0"
              } hover:bg-[#D91E37] hover:border-transparent hover:scale-125 hover:tracking-wider hover:duration-150 flex items-center text-[10px] md:text-[14px] lg:text-[18px]`}
              style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
              ref={aRef}
            >
              Know More
            </button>
            </Link>
          </div>
          <div className=" md:w-1/2 md:relative  ">
            <img alt="" 
              src={truck}
              className={` relative top-4 md:absolute transition-all duration-[500ms] ease-in object-contain lg:top-[10%] h-98 md:h-[100%] 2xl:h-[100%] left-28 md:left-[45%] lg:left-[45%] xl:left-[48%] 2xl:left-[35%] 3xl:left-[45%] ${
                isVisible
                  ? "transform translate-x-0 opacity-100"
                  : "transform translate-x-60 opacity-0"
              } `}
              ref={aRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
