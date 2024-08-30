import React, { useState } from "react";
import grp1 from "../../assets/img/Group 1.png";
import grp2 from "../../assets/img/Group 2.png";
import { Link } from "react-router-dom";

const Plans = () => {
  const [activePlan, setActivePlan] = useState("Monthly");

  const plans = {
    Monthly: [
      {
        type: "Transporter",
        price: "$5",
        time: "/month",
        features: [
          "Unlimited load searching",
          "Unlimited truck posting",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Full-Service Broker",
        price: "$15",
        time: "/month",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Freight Forwarder/Broker",
        price: "$10",
        time: "/month",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
    ],
    Quarterly: [
      {
        type: "Transporter",
        price: "$15",
        time: "/3-months",
        features: [
          "Unlimited load searching",
          "Unlimited truck posting",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Full-Service Broker",
        price: "$45",
        time: "/3-months",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Freight Forwarder/Broker",
        price: "$30",
        time: "/3-months",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
    ],
    SemiAnnual: [
      {
        type: "Transporter",
        price: "$30",
        time: "/6-months",
        features: [
          "Unlimited load searching",
          "Unlimited truck posting",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Full-Service Broker",
        price: "$90",
        time: "/6-months",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Freight Forwarder/Broker",
        price: "$60",
        time: "/6-months",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
    ],
    Yearly: [
      {
        type: "Transporter",
        price: "$55",
        time: "/year",
        features: [
          "Unlimited load searching",
          "Unlimited truck posting",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Full-Service Broker",
        price: "$165",
        time: "/year",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
      {
        type: "Freight Forwarder/Broker",
        price: "$110",
        time: "/year",
        features: [
          "Unlimited load/truck posting",
          "Unlimited truck searching",
          "EAC Profile Verification",
        ],
      },
    ],
  };

  return (
    <>
      <div className="bg-black">
        <div className=" container mx-auto py-20 px-6 md:p-20 lg:px-10 xl:px-10  2xl:p-20 3xl:p-24 ">
          <div className="flex justify-between rounded-full mb-20 bg-[#444444]">
            {Object.keys(plans).map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`w-full py-3 md:py-4  rounded-full font-neuesmibold text-white text-xs md:text-base lg:text-xl xl:text-2xl hover:bg-[#D91E27] ${
                  activePlan === plan ? "bg-[#D91E27] " : ""
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-10  ">
            {plans[activePlan].map((planDetail) => (
              <div
                key={planDetail.type}
                className="p-6 md:p-10 rounded-lg bg-[#292929] text-white flex flex-col justify-between"
              >
                <h2 className="text-2xl md:text-3xl font-neuebold mb-10">
                  {planDetail.type}
                </h2>
                <p className="text-4xl md:text-4xl xl:text-5xl font-neuebold mb-2 md:mb-4">
                  <span className="text-[#D91e27]">{planDetail.price}</span>
                  {planDetail.time}
                </p>
                <ul className="list-image-checkmark p-8 text-sm md:text-xl font-neue ">
                  {planDetail.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full  py-2 bg-[#d91e27] rounded-full text-sm md:text-xl font-neue">
                  Get Started
                </button>
              </div>
            ))}
          </div>
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

export default Plans;
