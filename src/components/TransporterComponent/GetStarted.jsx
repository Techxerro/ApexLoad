import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useMediaQuery from "../../hooks/UseMediaQuery";


import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
import left from "../../assets/img/Vector 29.png";
import right from "../../assets/img/Vector 28.png";

const GetStarted = () => {
  const isSmallScreen = useMediaQuery("(max-width: 758px)");

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      img: img1,
      title: "Load Matching",
      description: "End-to-end management of logistics operations",
    },
    {
      img: img2,
      title: "Optimized Routes",
      description:
        "Industry insights and guidance for strategic decision-making.",
    },
    {
      img: img3,
      title: "Payment Assurance",
      description: "Build and maintain strong client relationships.",
    },
    {
      img: img4,
      title: "Technology Integration",
      description: "Advanced tools for streamlined operations.",
    },
    {
      img: img5,
      title: "Business Growth",
      description: "Opportunities to grow your brokerage business and network.",
    },
  ];

  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto px-10 py-24">
          {isSmallScreen ? (
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              
              autoplay={{ delay: 3000 }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                // Assign the custom buttons to swiper navigation
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.update();
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#292929] lg:h-[400px] lg:w-[300px] xl:h-[450px] xl:w-[380px] 2xl:h-[450px] 2xl:w-[460px] 3xl:h-[500px] 3xl:w-[550px]">
                    <div className="h-1/2">
                      <img src={slide.img} alt="" className="h-full w-full" />
                    </div>
                    <div className="flex h-1/2 flex-col justify-between text-white font-neue p-6">
                      <h1 className="mb-4 text-2xl  font-neuebold">
                        {slide.title}
                      </h1>
                      <p className="mb-4 text-lg ">
                        {slide.description}
                      </p>
                      <button className="w-48 py-2 rounded-full bg-[#D91E27]">
                        Get Started
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-10 lg:gap-0 lg:flex justify-between 3xl:justify-around mb-10">
                {slides.slice(0, 3).map((slide, index) => (
                  <div
                    key={index}
                    className="bg-[#292929] lg:h-[400px] lg:w-[300px] xl:h-[450px] xl:w-[380px] 2xl:h-[450px] 2xl:w-[460px] 3xl:h-[500px] 3xl:w-[550px]"
                  >
                    <div className="h-1/2">
                      <img src={slide.img} alt="" className="h-full w-full" />
                    </div>
                    <div className="flex h-1/2 flex-col justify-between text-white font-neue p-6">
                      <h1 className="mb-4 lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-neuebold">
                        {slide.title}
                      </h1>
                      <p className="mb-4 lg:text-lg xl:text-xl 3xl:text-2xl">
                        {slide.description}
                      </p>
                      <button className="w-48 py-2 rounded-full bg-[#D91E27]">
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
                {slides.slice(3).map((slide, index) => (
                  <div
                    key={index}
                    className="bg-[#292929] lg:hidden lg:h-[400px] lg:w-[300px] xl:h-[450px] xl:w-[380px] 2xl:h-[450px] 2xl:w-[460px] 3xl:h-[500px] 3xl:w-[550px]"
                  >
                    <div className="h-1/2">
                      <img src={slide.img} alt="" className="h-full w-full" />
                    </div>
                    <div className="flex h-1/2 flex-col justify-between text-white font-neue p-6">
                      <h1 className="mb-4 lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-neuebold">
                        {slide.title}
                      </h1>
                      <p className="mb-4 lg:text-lg xl:text-xl 3xl:text-2xl">
                        {slide.description}
                      </p>
                      <button className="w-48 py-2 rounded-full bg-[#D91E27]">
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="hidden lg:flex gap-10 items-center justify-center">
            {slides.slice(3).map((slide, index) => (
              <div
                key={index}
                className="bg-[#292929] lg:h-[500px] lg:w-[300px] xl:h-[450px] xl:w-[380px] 2xl:h-[450px] 2xl:w-[480px] 3xl:h-[500px] 3xl:w-[550px]"
              >
                <div className="h-1/2">
                  <img src={slide.img} alt="" className="h-full w-full" />
                </div>
                <div className="flex h-1/2 flex-col justify-between text-white font-neue p-6">
                  <h1 className="mb-4 lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl font-neuebold">
                    {slide.title}
                  </h1>
                  <p className="mb-4 lg:text-lg xl:text-xl 3xl:text-2xl">
                    {slide.description}
                  </p>
                  <button className="w-48 py-2 rounded-full bg-[#D91E27]">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-10 justify-center md:hidden">
            <button
              ref={prevRef}
              className=" border-white border rounded-full w-8 h-8 flex justify-center items-center "
            >
              <img src={left} alt="" className="h-4" />
            </button>
            <button
              ref={nextRef}
              className=" border-white border rounded-full w-8 h-8  flex justify-center items-center"
            >
              <img src={right} alt="" className="h-4" />
            </button>
          </div>

          <div className="flex justify-center items-center mt-16">
            <h2 className="font-neuebold text-white text-lg lg:text-xl xl:text-2xl 3xl:text-3xl w-[900px] text-center">
              Maximize your transportation efficiency with Apex Loads and
              experience the benefits of a trusted logistics partner.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
