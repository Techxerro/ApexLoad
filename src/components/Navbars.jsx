import React, { useState } from "react";
import whatsapp from "../assets/img/1269930_call_social_social media_whatsapp_icon 1.png";
import phone from "../assets/img/3669395_call_ic_icon 1.png";
import emmail from "../assets/img/8665305_envelope_email_icon 1.png";
import drop from "../assets/img/angle-down-solid.svg";
import icon from "../assets/img/apexloads 1.png";
import { Link } from "react-router-dom";


const Navbars = () => {

  


  const [hovered, setHovered] = useState({
    products: false,
    resources: false,
    Transporters: false,
    Service: false,
    Forwarders: false,
  });

  const [clicked, setClicked] = useState({
    products: false,
    resources: false,
    Transporters: false,
    Service: false,
    Forwarders: false,
    menus: false,
  });

  const handleMouseEnter = (menu) => {
    setHovered((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setHovered((prev) => ({ ...prev, [menu]: false }));
  };

  const handleButtonClick = (menu) => {
    setClicked((prev) => ({ ...prev, [menu]: !prev[menu] }));
    setHovered((prev) => ({ ...prev, [menu]: false }));
  };

  const isDropdownOpen = (menu) => {
    return hovered[menu] || clicked[menu];
  };

  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-[#D91E27]  ">
          <div className="container mx-auto lg:px-10 xl:px-0 3xl:px-10 flex justify-between">
            <div className="text-white font-neue flex lg:gap-4 xl:gap-10 py-3">
              <div className="flex items-center gap-1">
                <img src={whatsapp} alt="" className="lg:h-5 xl:h-6" />
                <p className="lg:text-sm xl:text-base">+254 (0) 709 677 400</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={phone} alt="" className="lg:h-5 xl:h-6" />
                <p className="lg:text-sm xl:text-base">+254 (0) 709 677 400</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={emmail} alt="" className="lg:h-5 xl:h-6" />
                <p className="lg:text-sm xl:text-base">Info@Apexloads.com</p>
              </div>
            </div>
            <div className="text-white font-neue flex items-center lg:gap-4 xl:gap-10">
              <Link to="#">
                <div
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={() => handleMouseLeave("products")}
                >
                  <div className="flex items-center gap-1">
                    <h3>Products</h3>
                    <button
                      className=""
                      onClick={() => handleButtonClick("products")}
                    >
                      <img
                        src={drop}
                        className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                          isDropdownOpen("products") ? "rotate-180" : ""
                        }`}
                        alt="dropdown icon"
                      />
                    </button>
                  </div>

                  {isDropdownOpen("products") && (
                    <div
                      className="absolute w-max top-8 z-10"
                      onMouseEnter={() => handleMouseEnter("products")}
                      onMouseLeave={() => handleMouseLeave("products")}
                    >
                      <ul className="bg-[#D91E27] p-4">
                        <li className="py-1" >Search Loads</li>
                        <li className="py-1 " >Post A Truck</li>
                        <li className="py-1">EAC Profile</li>
                      </ul>
                    </div>
                  )}
                </div>
              </Link>
              <Link to="/about">
                <div>
                  <h3>About Us</h3>
                </div>
              </Link>
              <Link to="#">
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={() => handleMouseLeave("resources")}
                >
                  <div className="flex items-center gap-1">
                    <h3>Resources</h3>
                    <button
                      className=""
                      onClick={() => handleButtonClick("resources")}
                    >
                      <img
                        src={drop}
                        className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                          isDropdownOpen("resources") ? "rotate-180" : ""
                        }`}
                        alt="dropdown icon"
                      />
                    </button>
                  </div>

                  {isDropdownOpen("resources") && (
                    <div
                      className="absolute w-max top-8 z-10"
                      onMouseEnter={() => handleMouseEnter("resources")}
                      onMouseLeave={() => handleMouseLeave("resources")}
                    >
                      <ul className="bg-[#D91E27] p-4">
                        <li className="py-1">Search Loads</li>
                        <li className="py-1">Post A Truck</li>
                        <li className="py-1">EAC Profile</li>
                      </ul>
                    </div>
                  )}
                </div>
              </Link>
              <Link to="/login">
                <div>
                  <button className="bg-white text-[#D91E27] rounded-full px-5 py-1">
                    Login
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-black ">
          <div className="container mx-auto py-3 lg:px-10 xl:px-0 3xl:px-10 flex justify-between">
            <div className="flex items-center lg:gap-4 xl:gap-10">
              <Link to="/">
                <img src={icon} alt="logo" className="h-16" />
              </Link>
              <Link to="/transporters">
                <div className="group relative text-white">
                  <div className="flex items-center gap-1">
                    <h3>Transporters</h3>
                  </div>
                </div>
              </Link>
              <Link to="/full-sevice-broker">
                <div className="group relative text-white">
                  <div className="flex items-center gap-1">
                    <h3>Full Service Broker</h3>
                  </div>
                </div>
              </Link>
              <Link to="/freight-forworders">
                <div className="group relative text-white">
                  <div className="flex items-center gap-1">
                    <h3>Freight Forwarders/Brokers</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center lg:gap-4 xl:gap-10">
              <Link to="/pricing">
                <button className="bg-white text-[#D91E27] px-4 py-1 rounded-full ">
                  Pricing
                </button>
              </Link>

              <button className="bg-[#D91E27] text-white px-4 py-1 rounded-full">
                Book A Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* for Table */}
      <div className="hidden sm:block lg:hidden">
        <div className="bg-black">
          <div className="container mx-auto py-4 px-4 flex justify-between">
            <div>
              <Link to="/">
                <img src={icon} alt="logo" className="h-16" />
              </Link>
            </div>
            <div className="flex gap-5 items-center font-neuesmibold">
              <Link to='/about'>
              <button className="py-1 px-4 bg-white text-[#D91E27] rounded-full">
                {" "}
                Login
              </button>
              </Link>
              <Link to="/pricing">
                <button className="py-1 px-4 bg-white text-[#D91E27] rounded-full">
                  {" "}
                  Pricing
                </button>
              </Link>

              <button className="py-1 px-4 bg-[#D91E27] text-white rounded-full">
                Book A Free Demo
              </button>
              <button
                className="lg:hidden"
                onClick={() => handleButtonClick("menus")}
              >
                {isDropdownOpen("menus") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512 "
                    className="stroke-white fill-slate-500 h-8 w-18"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="stroke-white fill-slate-500 h-8 w-18"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isDropdownOpen("menus") && (
            <div className="container mx-auto py-10 px-6">
              <div className="flex justify-between text-white font-neue">
                <div className="">
                  <div className="flex py-2">
                    <h3>Products</h3>
                    <button
                      className=""
                      onClick={() => handleButtonClick("products")}
                    >
                      <img
                        src={drop}
                        className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                          isDropdownOpen("products") ? "rotate-180" : ""
                        }`}
                        alt="dropdown icon"
                      />
                    </button>
                  </div>
                  {isDropdownOpen("products") && (
                    <div className=" w-max  z-10">
                      <ul className=" p-4">
                        <li className="py-1">Search Loads</li>
                        <li className="py-1">Post A Truck</li>
                        <li className="py-1">EAC Profile</li>
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3>About Us</h3>
                  </div>
                  <div className="flex py-2">
                    <h3>Resources</h3>
                    <button
                      className=""
                      onClick={() => handleButtonClick("resources")}
                    >
                      <img
                        src={drop}
                        className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                          isDropdownOpen("recources") ? "rotate-180" : ""
                        }`}
                        alt="dropdown icon"
                      />
                    </button>
                  </div>
                  {isDropdownOpen("resources") && (
                    <div className=" w-max  z-10">
                      <ul className=" p-4">
                        <li className="py-1">Search Loads</li>
                        <li className="py-1">Post A Truck</li>
                        <li className="py-1">EAC Profile</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Link to="/transporters">
                    <div className="flex py-2">
                      <h3>Transporters</h3>
                    </div>
                  </Link>

                  <Link to="/full-sevice-broker">
                    <div className="flex py-2">
                      <h3>Full Service Brokers</h3>
                    </div>
                  </Link>

                  <Link to="/freight-forworders">
                    <div className="flex py-2">
                      <h3>Freight Forwarders/Brokers</h3>
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="flex items-center gap-1 py-2">
                    <img src={whatsapp} alt="" className="h-6" />
                    <p>+254 (0) 709 677 400</p>
                  </div>
                  <div className="flex items-center gap-1 py-2">
                    <img src={phone} alt="" className="h-6" />
                    <p>+254 (0) 709 677 400</p>
                  </div>
                  <div className="flex items-center gap-1 py-2">
                    <img src={emmail} alt="" className="h-6" />
                    <p> Info@Apexloads.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/*For mobile */}
      <div className=" sm:hidden">
        <div className="bg-[#D91E27] container mx-auto py-4 px-2">
          <div className="flex gap-4 items-center font-neuesmibold justify-around">
            <Link to='/login'>
            <button className="py-1 px-4 bg-white text-[#D91E27] rounded-full text-sm">
              {" "}
              Login
            </button>
            </Link>
            <Link to="/pricing">
              <button className="py-1 px-4 bg-white text-[#D91E27] rounded-full text-sm">
                {" "}
                Pricing
              </button>
            </Link>
            <button className="py-1 px-4 bg-white text-[#D91E27] rounded-full text-sm">
              Book A Free Demo
            </button>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto py-4 flex justify-between px-4">
            <div>
              <Link to="/">
                <img src={icon} alt="logo" className="h-16" />
              </Link>
            </div>
            <div className="flex gap-5 items-center font-neuesmibold">
              <button
                className="lg:hidden"
                onClick={() => handleButtonClick("menus")}
              >
                {isDropdownOpen("menus") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512 "
                    className="stroke-white fill-slate-500 h-8 w-18"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="stroke-white fill-slate-500 h-8 w-18"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isDropdownOpen("menus") && (
            <div className="container mx-auto pb-6">
              <div className="text-white font-neue px-10">
                <div className="">
                  <div className="flex py-2">
                    <h3>Products</h3>
                    <button
                      className=""
                      onClick={() => handleButtonClick("products")}
                    >
                      <img
                        src={drop}
                        className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                          isDropdownOpen("products") ? "rotate-180" : ""
                        }`}
                        alt="dropdown icon"
                      />
                    </button>
                  </div>
                  {isDropdownOpen("products") && (
                    <div className=" w-max  z-10">
                      <ul className=" p-4">
                        <li className="py-1">Search Loads</li>
                        <li className="py-1">Post A Truck</li>
                        <li className="py-1">EAC Profile</li>
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3>About Us</h3>
                  </div>
                  <div className="flex py-2">
                    <h3>Resources</h3>
                    <button
                      className=""
                      onClick={() => handleButtonClick("resources")}
                    >
                      <img
                        src={drop}
                        className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                          isDropdownOpen("recources") ? "rotate-180" : ""
                        }`}
                        alt="dropdown icon"
                      />
                    </button>
                  </div>
                  {isDropdownOpen("resources") && (
                    <div className=" w-max  z-10">
                      <ul className=" p-4">
                        <li className="py-1">Search Loads</li>
                        <li className="py-1">Post A Truck</li>
                        <li className="py-1">EAC Profile</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Link to="/transporters">
                    <div className="flex py-2">
                      <h3>Transporters</h3>
                    </div>
                  </Link>

                  <Link to="/full-sevice-broker">
                    <div className="flex py-2">
                      <h3>Full Service Brokers</h3>
                    </div>
                  </Link>

                  <Link to="/freight-forworders">
                    <div className="flex py-2">
                      <h3>Freight Forwarders/Brokers</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbars;
