import React from "react";
import img from "../../assets/img/Group 5507.png";

const Mission = () => {
  return (
    <div className="container mx-auto  bg-black">
      <div className="my-24">
        <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-2 gap-10 md:gap-6 lg:gap-7 xl:gap-8 3xl:gap-10 px-10">
          <div className="p-8 3xl:p-11 bg-[#1b1b1b] rounded-xl flex-shrink-0 w-full">
            <div className="mb-7">
              <h1 className="font-neuesmibold text-white md:text-xl xl:text-2xl 3xl:text-3xl">
                Our Mission
              </h1>
            </div>
            <div>
              <p className="text-white font-neue xl:text-lg 3xl:text-xl">
                At Apexloads, our mission is to be a trusted partner that elevates
                Africa’s logistics community, driving growth and prosperity
                through innovative technology and collaboration. We empower
                logistics service providers, including transporters, freight
                forwarders, and brokers, with the tools they need to find the best
                opportunities, maximize revenue, and make informed decisions.
              </p>
            </div>
          </div>
          <div className="p-8 3xl:p-11 bg-[#1b1b1b] rounded-xl flex-shrink-0 w-full">
            <div className="mb-7">
              <h1 className="font-neuesmibold text-white md:text-xl xl:text-2xl 3xl:text-3xl ">Our Vision</h1>
            </div>
            <div>
              <p className="text-white font-neue lg:text-base xl:text-lg 3xl:text-xl ">
                Our vision is to revolutionize the logistics industry in Africa by
                building a trusted and transparent network. We are committed to
                driving innovation, fostering integrity, and enhancing efficiency
                to create a more successful and equitable experience for all
                involved in freight movement.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-24 gap-10 px-10 items-center">
          <div className="md:w-1/2">
            <div className="mb-5 ">
              <h1 className="font-neueextrablack text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl text-white">
                About <br /><span className="text-[#FF0000]">ApexLoads</span>
              </h1>
            </div>
            <div>
              <p className="text-white text-lg md:text-lg xl:text-xl 3xl:text-2xl font-neuesmibold mb-4">
                Revolutionizing Logistics in Africa
              </p>
              <p className="text-white md:text-sm lg:text-base xl:text-lg 3xl:text-xl font-neue">
                Apexloads is at the forefront of transforming the logistics
                landscape in Africa. We are committed to addressing the critical
                challenges faced by the logistics sector, paving the way for a
                more efficient, transparent, and reliable industry. Our mission is
                to leverage innovative technology and strategic industry-wide
                collaboration to enhance the operations of third-party logistics
                providers (3PLs)—including freight forwarders, brokers, and
                transporters.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={img} className="h-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
