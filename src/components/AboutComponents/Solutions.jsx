import React from "react";
import logo1 from '../../assets/img/Logo-02 1.png'
import logo2 from '../../assets/img/Logo (1) 1.png'
import founder from '../../assets/img/Rectangle 668.png'

const Solutions = () => {
  return (
    <div className="container mx-auto py-24 font-neue">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-neueextrablack text-white">Our <span className="text-[#D91E27]">Solution</span></h1>
      </div>
      <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-2 gap-10 text-white px-10 ">
        <div className="bg-[#1b1b1b] rounded-xl px-9 py-10 w-full flex-shrink-0">
          <div className="mb-7">
            <h2 className="font-neuesmibold text-xl lg:text-2xl xl:text-3xl">Load Board</h2>
          </div>
          <div>
            <p className="lg:text-lg xl:text-xl">
              Our real-time load board connects cargo owners with transporters,
              facilitating efficient load matching and maximizing the use of
              available resources.
            </p>
          </div>
        </div>
        <div className="bg-[#1b1b1b] font-neue rounded-xl px-9 py-10 flex-shrink-0 w-full">
          <div className="mb-7">
            <h2 className=" font-neuesmibold text-xl lg:text-2xl xl:text-3xl">EAC Profile</h2>
          </div>
          <div >
            <p className="lg:text-lg xl:text-xl mb-4">
              The EAC Profile verification system ensures that 3PLs are
              credentialed and compliant, enhancing trust and transparency
              within the logistics ecosystem.
            </p>
            <a className="text-red-700 text-lg mb-6"> www.eacprofile.com</a>
            <img src={logo1} className="bg-white rounded-full h-14 xl:h-20 mt-4"/>
          </div>
        </div>
        <div className="bg-[#1b1b1b] rounded-xl px-9 py-10 flex-shrink-0 w-full">
          <div className="mb-7">
            <h2 className=" font-neuesmibold text-xl lg:text-2xl xl:text-3xl">Transportation Relationship Manager (TRM) </h2>
          </div>
          <div>
            <p className="lg:text-lg xl:text-xl">
              We are building a Unified Logistics Platform that combines the
              functionalities of a Load Board, Transportation Management System
              (TMS), Customer Relationship Manager (CRM), and real-time shipment
              visibility. The TRM will create a holistic approach to managing
              logistics, enabling higher efficiency and better service delivery.
            </p>
          </div>
        </div>
        <div className="bg-[#1b1b1b] rounded-xl px-9 py-10 flex-shrink-0 w-full">
          <div className="mb-7">
            <h2 className=" font-neuesmibold text-xl lg:text-2xl xl:text-3xl">Invoice Factoring Service</h2>
          </div>
          <div>
            <p className="lg:text-lg xl:text-xl mb-4">
              Our upcoming invoice factoring service will address the critical
              issue of cash flow disruptions by offering faster payment
              solutions, ensuring that 3PLs can meet their financial obligations
              and sustain their operations.
            </p>
            <a className="text-red-700 text-lg ">www.asapfactoring.com</a>
            <img src={logo2} className="mt-4 h-10 xl:h-14 "/>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 my-28 xl:items-center 3xl:items-start px-10">
        <div className="lg:w-1/2 ">
          <img src={founder} alt="founder" className="rounded-xl lg:h-auto md:h-96"/>
        </div>
        <div className="lg:w-1/2 ">
          <div className="mb-4"><h1 className="font-neueextrablack text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl text-white">About <span className="text-[#FF0000] ">Our Founder</span></h1></div>
          <div className="text-white">
            <h2 className="font-neuebold text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl mb-4">Charles Thuo</h2>
            <h3 className="font-neuesmibold md:text-lg xl:text-2xl 3xl:text-3xl mb-4">Visionary Leader and Innovator</h3>
            <p className="font-neue xl:text-xl">Charles Thuo is a visionary leader in the logistics sector, deeply connected to Africa's unique challenges and opportunities. Born in Kenya, he moved to the U.S. at 20, earning an Associate's in General Engineering Technology and a Bachelor's in Aerospace Engineering. His career includes significant roles at Cessna and Boeing Defense, and he serves as a Captain in the Oklahoma Army National Guard.</p>
            <p  className="font-neue xl:text-xl">As the Founder and CEO of Apexloads INC., Charles is revolutionizing Africa's logistics industry with innovative solutions like the Transportation Relationship Manager (TRM) and the EAC Profile. These platforms leverage North American technologies to enhance efficiency, transparency, and reliability in African logistics, driving economic development and implementing valuable global knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
