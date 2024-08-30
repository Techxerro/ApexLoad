import React, { useEffect, useRef, useState } from "react";

const ScrollableSection = () => {
  const scrollContainerRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;

      if (
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 1
      ) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full md:w-1/2 mt-8 md:mt-0 mr-10  relative overflow-hidden">
      <div className="xl:pr-4 lg:pr-4 md:pr-2 pr-1 transition-all ease-in-out duration-1000">
       
        <div className="md:border-l-2 md:border-l-white md:border-solid">
          <div
            className="h-[300px] xl:h-[450px] lg:h-[380px] md:h-[300px] overflow-y-auto no-scrollbar section md:ml-10"
            ref={scrollContainerRef}
          >
            <div
              className="bg-red-600 p-4 mx-7 md:mx-0 mb-4 h-[250px] xl:h-[210px] lg:h-[180px] md:h-[150px] border-l-4 border-[#D91E27] tran overflow-auto no-scrollbar"
              id="section1"
            >
              <h3 className="text-2xl xl:text-2xl lg:text-xl md:text-base font-neuesmibold md:font-neuebold">
                Proven Track Record of Excellence
              </h3>
              <p className="text-[14px] xl:text-[18px] lg:text-[14px] md:text-[11px]">
                At Apex Loads, we pride ourselves on our proven track record of
                excellence in the logistics industry. With years of experience
                and a deep understanding of Africa’s unique logistical
                challenges, we have established ourselves as a trusted partner
                for businesses across the continent.
              </p>
            </div>
            <div className="bg-red-600 p-4 mx-7 md:mx-0 mb-4 h-[250px] xl:h-[210px] lg:h-[180px] md:h-[150px] overflow-auto no-scrollbar" id="section2">
              <h3 className="text-2xl xl:text-2xl lg:text-xl md:text-base font-neuesmibold md:font-neuebold">
                Proven Track Record of Excellence
              </h3>
              <p className="text-[14px] xl:text-[18px] lg:text-[14px] md:text-[11px]">
                At Apex Loads, we pride ourselves on our proven track record of
                excellence in the logistics industry. With years of experience
                and a deep understanding of Africa’s unique logistical
                challenges, we have established ourselves as a trusted partner
                for businesses across the continent.
              </p>
            </div>
            <div className="bg-red-600 p-4 mx-7 md:mx-0 mb-4 h-[250px] xl:h-[210px] lg:h-[180px] md:h-[150px] overflow-auto no-scrollbar" id="section3">
              <h3 className="text-2xl xl:text-2xl lg:text-xl md:text-base font-neuesmibold md:font-neuebold">
                Proven Track Record of Excellence
              </h3>
              <p className="text-[14px] xl:text-[18px] lg:text-[14px] md:text-[11px]">
                At Apex Loads, we pride ourselves on our proven track record of
                excellence in the logistics industry. With years of experience
                and a deep understanding of Africa’s unique logistical
                challenges, we have established ourselves as a trusted partner
                for businesses across the continent.
              </p>
            </div>
            <div className="bg-red-600 p-4 mx-7 md:mx-0 mb-4 h-[250px] xl:h-[210px] lg:h-[180px] md:h-[150px] overflow-auto no-scrollbar" id="section4">
              <h3 className="text-2xl xl:text-2xl lg:text-xl md:text-base font-neuesmibold md:font-neuebold">
                Proven Track Record of Excellence
              </h3>
              <p className="text-[14px] xl:text-[18px] lg:text-[14px] md:text-[11px]">
                At Apex Loads, we pride ourselves on our proven track record of
                excellence in the logistics industry. With years of experience
                and a deep understanding of Africa’s unique logistical
                challenges, we have established ourselves as a trusted partner
                for businesses across the continent.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute h-[40px] xl:h-28 lg:h-[80px] md:h-[60px] bottom-0 left-0 right-0 bg-gradient-to-t from-black from-50% to-transparent   transition-opacity ease-in-out duration-1000 ${
          isAtBottom ? "opacity-0 " : ""
        }`}
      ></div>
    </div>
  );
};

export default ScrollableSection;
