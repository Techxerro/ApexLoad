import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";

import img from "../../assets/img/Vector 8.png";
import img1 from "../../assets/img/Vector 9.png";
import img2 from "../../assets/img/Vector 10.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const Headers = () => {
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
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay:8000
        }}
       
        pagination={{
          clickable:true
        }}
        modules={[ Pagination, Autoplay]} className="mySwiper"
      
      >
        <SwiperSlide>
          <div className="relative h-[500px] bg-custom-image1 bg-cover md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
            <div className="relative top-16 md:top-28 lg:top-28 xl:top-32 2xl:top-44 h-[287px] w-[274px] md:h-[317px] md:w-[304px] lg:h-[387px] lg:w-[374px] xl:h-[417px] xl:w-[404px]">
              <img alt="" 
                src={img2}
                className={`absolute h-[213px] md:h-[243px] lg:h-[313px] xl:h-auto xl:w-full bottom-0 transition-all duration-[1000ms] ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[200px] translate-x-[-200px] opacity-0"
                }`}
                ref={aRef}
              />
              <img alt="" 
                src={img1}
                className={`absolute h-[241px] md:h-[271px] lg:h-[341px] xl:h-auto top-0 transition-all duration-[1000ms] ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[-200px] translate-x-[-200px] opacity-0"
                }`}
              />
              <img alt="" 
                src={img}
                className={`absolute h-[72px] md:h-[82px] xl:h-auto lg:h-[92px] bottom-0 left-[50px] md:left-[60px] lg:left-[70px] xl:left-20 transition-all ease-in duration-1000 ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[-10px] translate-x-[-10px] opacity-0"
                }`}
              />
            </div>
            <h1
               className={`text-white tracking-tight font-neueextrablack text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl w-[400px] md:w-[400px] lg:w-[700px] xl:w-[600px] 2xl:w-[1000px] absolute top-[20%] md:top-[28%] lg:top-[20%] xl:top-[20%] left-[4%] md:left-[40%] lg:left-[38%] xl:left-[32%] 2xl:left-[25%] transition-all ease-in duration-500 container z-20 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform -translate-y-28 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
              ref={aRef}
            >
              RELIABLE TRANSPORT
            </h1>
            <h3
               className={`text-white font-neueblack text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl md:w-[300px] lg:w-[300px] xl:w-[500px] w-[220px] absolute top-[39%] md:top-[48%] lg:top-[41%] xl:top-[45%] left-[5%] md:left-[54%] lg:left-[57%] xl:left-[44%] 2xl:top-[49%] 3xl:top-[49%] 2xl:left-[42%] 3xl:left-[40%] transition-all ease-in duration-[500ms] container z-10 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform -translate-y-28 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              ref={aRef}
            >
              SOLUTION FOR YOUR FREIGHT
            </h3>
            <button
             className={`w-[262px] 2xl:w-[350px] 2xl:h-[38px] lg:w-[282px] md:w-[250px] h-[29px] lg:h-[32px] md:h-[30px] border border-solid border-white rounded-[17px] absolute text-white top-[52%] md:top-[64%] lg:top-[57%] xl:top-[62%] 2xl:top-[65%] 3xl:top-[67%] left-[5%] md:left-[55%] lg:left-[55%] xl:left-[50%] 2xl:left-[50%] 3xl:left-[43%] transition-all ease-in duration-[500ms] container z-0 ${
              isVisible
                ? "transform translate-y-0 opacity-100"
                : "transform -translate-y-28 opacity-0"
            }`}
              style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
              ref={aRef}
            >
              Book Your Free Trial
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] bg-custom-image1 bg-cover md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
            <div className="relative top-16 md:top-28 lg:top-28 xl:top-32 2xl:top-44 h-[287px] w-[274px] md:h-[317px] md:w-[304px] lg:h-[387px] lg:w-[374px] xl:h-[417px] xl:w-[404px]">
              <img alt="" 
                src={img2}
                className={`absolute h-[213px] md:h-[243px] lg:h-[313px] xl:h-auto xl:w-full bottom-0 transition-all duration-[1000ms] ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[200px] translate-x-[-200px] opacity-0"
                }`}
                ref={aRef}
              />
              <img alt="" 
                src={img1}
                className={`absolute h-[241px] md:h-[271px] lg:h-[341px] xl:h-auto top-0 transition-all duration-[1000ms] ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[-200px] translate-x-[-200px] opacity-0"
                }`}
              />
              <img alt="" 
                src={img}
                className={`absolute h-[72px] md:h-[82px] xl:h-auto lg:h-[92px] bottom-0 left-[50px] md:left-[60px] lg:left-[70px] xl:left-20 transition-all ease-in duration-1000 ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[-10px] translate-x-[-10px] opacity-0"
                }`}
              />
            </div>
            <h1
              className={`text-white tracking-tight font-neueextrablack text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl w-[310px] md:w-[500px] lg:w-[600px] xl:w-[900px] 2xl:w-[1000px] absolute top-[20%] md:top-[35%] lg:top-[25%] xl:top-[20%] left-[4%] md:left-[32%] lg:left-[35%] xl:left-[32%] 2xl:left-[28%] transition-all ease-in duration-500 container z-20 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform -translate-y-28 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
              ref={aRef}
            >
              GET REAL-TIME LOAD TRACKING
            </h1>
            <h3
              className={`text-white font-neueblack text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl md:w-[350px] lg:w-[500px] xl:w-[500px] w-[306px] absolute top-[49%] md:top-[55%] lg:top-[45%] xl:top-[45%] left-[5%] md:left-[65%] lg:left-[65%] xl:left-[68%] 2xl:top-[48%] 2xl:left-[65%] 3xl:left-[55%] transition-all ease-in duration-[500ms] container z-10 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform -translate-y-28 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              ref={aRef}
            >
              EFFICIENT PLANNING
            </h3>
            <button
              className={`w-[262px] 2xl:w-[350px] 2xl:h-[38px] lg:w-[282px] md:w-[250px] h-[29px] lg:h-[32px] md:h-[30px] border border-solid border-white rounded-[17px] absolute text-white top-[56%] md:top-[72%] lg:top-[65%] xl:top-[62%] 2xl:top-[65%] left-[5%] md:left-[65%] lg:left-[65%] xl:left-[70%] 2xl:left-[65%] 3xl:left-[55%] transition-all ease-in duration-[500ms] container z-0 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform -translate-y-28 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
              ref={aRef}
            >
              Book Your Free Trial
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] bg-custom-image6 bg-cover md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
            <div className="relative top-16 md:top-28 lg:top-28 xl:top-32 2xl:top-44 h-[287px] w-[274px] md:h-[317px] md:w-[304px] lg:h-[387px] lg:w-[374px] xl:h-[417px] xl:w-[404px]">
              <img alt="" 
                src={img2}
                className={`absolute h-[213px] md:h-[243px] lg:h-[313px] xl:h-auto xl:w-full bottom-0 transition-all duration-[1000ms] ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[200px] translate-x-[-200px] opacity-0"
                }`}
                ref={aRef}
              />
              <img alt="" 
                src={img1}
                className={`absolute h-[241px] md:h-[271px] lg:h-[341px] xl:h-auto top-0 transition-all duration-[1000ms] ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[-200px] translate-x-[-200px] opacity-0"
                }`}
              />
              <img alt="" 
                src={img}
                className={`absolute h-[72px] md:h-[82px] xl:h-auto lg:h-[92px] bottom-0 left-[50px] md:left-[60px] lg:left-[70px] xl:left-20 transition-all ease-in duration-1000 ${
                  isVisible
                    ? "transform translate-y-0 translate-x-0 opacity-30 md:opacity-100"
                    : "transform translate-y-[-10px] translate-x-[-10px] opacity-0"
                }`}
              />
            </div>
            <h1
               className={`text-white tracking-tight font-neueextrablack text-5xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl w-[400px] md:w-[600px] lg:w-[800px] xl:w-[800px] 2xl:w-[1000px] absolute top-[20%] md:top-[25%] lg:top-[20%] xl:top-[20%] left-[4%] md:left-[38%] lg:left-[38%] xl:left-[40%] 2xl:left-[25%] transition-all ease-in duration-500 container z-20 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform -translate-y-28 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
              ref={aRef}
            >
              TRUSTED NETWORK
            </h1>
            <h3
               className={`text-white font-neueblack text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl md:w-[350px] lg:w-[500px] xl:w-[500px] 2xl:w-[700px] w-[220px] absolute top-[39%] md:top-[50%] lg:top-[47%] xl:top-[44%] left-[5%] md:left-[48%] lg:left-[50%] xl:left-[48%] 2xl:top-[48%] 3xl:top-[48%] 2xl:left-[40%] 3xl:left-[38%] transition-all ease-in duration-[500ms] container z-10 ${
                isVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform -translate-y-28 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
              ref={aRef}
            >
              CUTTING-EDGE TECHNOLOGY
            </h3>
            <button
             className={`w-[262px] 2xl:w-[350px] 2xl:h-[38px] lg:w-[282px] md:w-[250px] h-[29px] lg:h-[32px] md:h-[30px] border border-solid border-white rounded-[17px] absolute text-white top-[52%] md:top-[68%] lg:top-[66%] xl:top-[60%] 2xl:top-[65%] 3xl:top-[66%] left-[5%] md:left-[55%] lg:left-[55%] xl:left-[59%] 2xl:left-[48%] 3xl:left-[43%] transition-all ease-in duration-[500ms] container z-0 ${
              isVisible
                ? "transform translate-y-0 opacity-100"
                : "transform -translate-y-28 opacity-0"
            }`}
              style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
              ref={aRef}
            >
              Book Your Free Trial
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Headers;
