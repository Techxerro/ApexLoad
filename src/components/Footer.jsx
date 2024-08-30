import React from "react";
import icon from "../assets/img/apexloads 1.png";
import vector from "../assets/img/Vector 14.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:flex   bg-[#171715] p-6 lg:pb-10 lg:pt-10 font-neue overflow-hidden  ">
        <div className="container mx-auto md:px-10 md:flex">
          <div className="flex flex-col md:w-1/2  md:text-[18px] text-[10px] mb-10 md:mb-0 container mx-auto ">
            <img alt="" 
              src={icon}
              className="lg:w-[216px] w-[216px] md:w-[150px] lg:h-[68px] h-[68px] md:h-[40px]"
            />
            <p className="text-gray-400 pl-2 p-6  font-medium text-base md:text-[16px] md:w-[80%]">
              The first free end-to-end analytics for the site, designed to work
              with the enterprises of various levels and business segments.
            </p>
            <h6 className="text-[#D91E37] pl-2 pb-4">FEEDBACK</h6>
            <p className="text-gray-500 pl-2 pb-2 text-xl md:text-lg">
              Seeking Personalized support ?
            </p>
            <p className="text-white pl-2 pb-4 text-xl md:text-lg">
              Request a call from our team
            </p>
            <input
              className=" xl:w-[340px] lg:w-[240px] md:w-[200px] w-[300px] xl:h-[50px] lg:h-[40px] md:h-[40px] h-[50px] border border-solid border-gray-600 rounded-2xl bg-black pl-2 mb-2 text-white placeholder:text-[8px] md:placeholder:text-[12px] lg:placeholder:text-[16px]"
              placeholder="YOUR NAME"
            />
            <input
              className="xl:w-[340px] lg:w-[240px] md:w-[200px] w-[300px] xl:h-[50px] lg:h-[40px] md:h-[40px] h-[50px] border border-solid border-gray-600 rounded-2xl bg-black pl-2 mb-2 text-white placeholder:text-[8px] md:placeholder:text-[12px] lg:placeholder:text-[16px]"
              placeholder="PHONE NUMBER"
            />
            <button className="h-[30px] md:h-[30px] lg:h-[30px] md:w-[120px] w-[170px] lg:w-[160px] bg-[#D91E37] rounded-full text-white text-[10px] md:text-[14px] lg:text-[18px]">
              Send a Request
            </button>
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 lg:gap-5    text-base lg:text-[20px] font-neue container mx-auto">
            <div className="flex gap-10 md:gap-0 md:grid  md:grid-cols-3    ">
              <div className="flex-col justify-items-center justify-center items-center">
                <h2 className="text-[#D91E37] pb-2 font-medium  ">
                  Useful Links
                </h2>
                <ul className="">
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px]  hover:text-white">About Us</li>
                  </Link>
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px] hover:text-white">
                      Privacy Policy
                    </li>
                  </Link>
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px] hover:text-white">
                      Contact Us
                    </li>
                  </Link>
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px] hover:text-white">
                      NewsLetter
                    </li>
                  </Link>
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px] hover:text-white">Pricing</li>
                  </Link>
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px] hover:text-white">Our Blog</li>
                  </Link>
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px] hover:text-white">FAQsFAC</li>
                  </Link>
                  <Link className="cursor-pointer ">
                    <li className="text-gray-500 lg:text-[18px] hover:text-white">Profile</li>
                  </Link>
                </ul>
                <div className="md:hidden text-base font-neue mt-6">
                  <div className=" text-base">
                    <h3 className="text-gray-500 font-medium my-4">
                      CONTACT US
                    </h3>
                    <p className="text-white py-1">+254 (0) 709 677 400</p>
                    <p className="text-white py-1">info@apexloads.com</p>
                    <p className="text-[#D91E37] py-1">Call me back</p>
                  </div>

                  <div>
                    <p className="text-gray-500 ">
                      2972 Westheimer Rd. Santa Ana, lllinois 85486
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:grid grid-cols-2 gap-2 md:col-span-2">
                <div>
                  <h3 className="text-[#D91E37] pb-2 font-medium">Services</h3>
                  <h6 className="text-white pb-1">Transporters</h6>
                  <ul className="pb-2">
                    <Link className="cursor-pointer ">
                      <li className="text-gray-500 text-[14px] lg:text-[18px] hover:text-white">
                        Post Trucks
                      </li>
                    </Link>
                    <Link className="cursor-pointer ">
                      <li className="text-gray-500 text-[14px] lg:text-[18px] hover:text-white">
                        Search For Loads
                      </li>
                    </Link>
                  </ul>
                  <h6 className="text-white md:pb-1">Shipper</h6>
                  <ul>
                    <Link className="cursor-pointer ">
                      <li className="text-gray-500 md:text-[14px] lg:text-[18px] hover:text-white">
                        Post Trucks
                      </li>
                    </Link>
                    <Link className="cursor-pointer ">
                      <li className="text-gray-500 md:text-[14px] lg:text-[18px] hover:text-white">
                        Search For Loads
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="font-neue">
                  <h6 className="text-white pt-7 pb-1 md:text-sm lg:text-base">
                    Brokers /Freight-Forwarders
                  </h6>
                  <ul className="pb-2">
                    <Link className="cursor-pointer hover:text-white ">
                      <li className="text-gray-500 md:text-[14px] lg:text-[18px] hover:text-white">
                        Post Trucks
                      </li>
                    </Link>
                    <Link className="cursor-pointer ">
                      <li className="text-gray-500 md:text-[14px] lg:text-[18px] hover:text-white">
                        Search For Loads
                      </li>
                    </Link>
                  </ul>

                  <h6 className="text-white pb-1 md:text-sm lg:text-base ">
                    Full-Service Brokers
                  </h6>
                  <ul>
                    <Link className="cursor-pointer ">
                      <li className="text-gray-500 md:text-[14px] lg:text-[18px] hover:text-white">
                        Post Trucks/Loads
                      </li>
                    </Link>
                    <Link className="cursor-pointer ">
                      <li className="text-gray-500 md:text-[14px] lg:text-[18px] hover:text-white">
                        Search Trucks/Loads
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" md:grid hidden md:grid-cols-2">
              <div>
                <h3 className="text-gray-500 font-medium ">CONTACT US</h3>
                <p className="text-white py-1">+254 (0) 709 677 400</p>
                <p className="text-white py-1">info@apexloads.com</p>
                <p className="text-[#D91E37] lg:text-[16px] py-1">Call me back</p>
              </div>
              <div>
                <p className="text-gray-500 text-[8px] md:text-[12px] xl:text-[16px]">
                  2972 Westheimer Rd. Santa Ana, lllinois 85486
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="mt-2 md:mt-12">
                <h3 className="text-gray-500 ">FOLLOW US</h3>
                <p className="text-white text-[14px] md:text-[12px] lg:text-[18px] flex ">
                  <Link className="cursor-pointer  "><p className="hover:scale-125">Telegram</p></Link>
                  <span className="px-1 md:px-4">/</span>
                  <Link className="cursor-pointer "><p className="hover:scale-125">Whatsapp</p></Link>
                  <span className="px-1 md:px-4">/</span>
                  <Link className="cursor-pointer "><p className="hover:scale-125">Instagram</p></Link>
                </p>
              </div>
              <button className=" w-[50px] md:w-[50px] lg:w-[100px] h-[50px] md:h-[50px] lg:h-[100px] rounded-full border-2 border-solid border-gray-400 flex justify-center items-center">
                <img alt=""  src={vector} className=" h-4 md:h-8 lg:h-12" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171715] flex justify-center pb-4">
        <p className="text-gray-500 ">&copy; 2024 - COPYRIGHT PRIVACY</p>
      </div>
    </>
  );
};

export default Footer;
