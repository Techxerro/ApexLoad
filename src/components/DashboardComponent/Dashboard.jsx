import React from "react";

import { Link } from "react-router-dom";
import img from "../../assets/img/pngegg  copy 1.png";
import user from "../../assets/img/user.png";

const Dashboard = () => {
  return (
    <>
      <div className="bg-black">
        <div className=" flex gap-10 container ">
          <section className="p-8 ">
            <div className="text-white font-neuebold text-4xl mb-6">
              Dashboard
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="grid gap-5">
                  <div className="bg-[#1b1b1b] px-5 py-2 w-full rounded-lg flex gap-10 justify-start">
                    <Link>
                      <button className="px-8 py-1 text-white border rounded-full ">
                        Post a Load
                      </button>
                    </Link>
                    <Link>
                      <button className="px-8 py-1 text-white border rounded-full ">
                        Search Trucks
                      </button>
                    </Link>
                  </div>
                  <div className="flex bg-[#1b1b1b] rounded-lg justify-between">
                    <div className="p-5">
                      <h1 className="text-white font-neuebold text-3xl mb-4">
                        Apexloads App
                      </h1>
                      <p className="font-neue text-lg text-[#E5E5E5] mb-4">
                        Lorem ipsum dolor sit amet consectetur. Netus amet in
                        sapien mattis mi massa.
                      </p>
                      <button className="bg-[#d91e27] text-white font-neue text-xl px-5 py-2 rounded-full">
                        {" "}
                        Get the app
                      </button>
                    </div>
                    <div className="bg-[#313131] rounded-lg">
                      <img src={img} alt="" className="h-40" />{" "}
                    </div>
                  </div>
                  <div className="bg-[#1b1b1b] rounded-lg p-5 text-white ">
                    <h1 className="text-white font-neuebold text-3xl mb-4">
                      Help Center
                    </h1>
                    <p className="text-lg text-[#E5E5E5] font-neue mb-4">
                      Lorem ipsum dolor sit amet consectetur. Netus amet in
                      sapien mattis mi massa.
                    </p>
                    <button className="bg-[#d91e27] text-white font-neue text-xl px-5 py-2 rounded-full">
                      {" "}
                      Help Center
                    </button>
                  </div>
                  <div className="bg-[#1b1b1b] rounded-lg p-5 text-white ">
                    <h1 className="text-white font-neuebold text-3xl mb-4">
                      What's New
                    </h1>
                    <p className="text-lg text-[#E5E5E5] font-neue">
                      Lorem ipsum dolor sit amet consectetur. Nullam tincidunt
                      quam porttitor volutpat lorem elementum. In in fermentum
                      sem posuere. Ultrices penatibus id maecenas ipsum iaculis.
                      Vitae sed odio scelerisque sagittis blandit felis nunc
                      amet tortor. Metus vivamus in vitae at elit purus ante eu
                      blandit. Praesent mi in elementum nisl cursus ut viverra.
                      Consectetur suspendisse dignissim volutpat ornare
                      porttitor.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1b1b1b] flex flex-col gap-5 p-5">
                <div className="border p-4 rounded-lg border-[#6D6D6D]">
                  <div className="flex justify-between mb-4">
                  <h2 className="text-white text-2xl ">Total Customers</h2>
                  <img src={user} className="border p-1 h-11 w-11 rounded-full " />
                  </div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-4xl font-bold ">
                    4500+
                    </h1>
                    <p className="text-[#169D00] bg-[#A7FFB5] rounded-full px-4 py-1 bg-">+5%</p>
                  </div>
                  
                </div>

                <div className="border p-4 rounded-lg border-[#6D6D6D]">
                  <div className="flex justify-between mb-4">
                  <h2 className="text-white text-2xl ">Active Customers</h2>
                  <img src={user} className="border p-1 h-11 w-11 rounded-full " />
                  </div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-4xl font-bold ">
                    2700+
                    </h1>
                    <p className="text-[#D91E27] bg-[#FFA7A7] rounded-full px-4 py-1">-3%</p>
                  </div>
                 
                </div>

                <div className="border p-4 rounded-lg border-[#6D6D6D]">
                  <h2 className="text-white text-2xl mb-4">
                    Upcoming Schedules
                  </h2>
                  <ul className="text-gray-400">
                    <li className="flex justify-between">
                      <span>Business Analysis</span>
                      <span>05/20/24</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Project Meeting</span>
                      <span>05/22/24</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Client Call</span>
                      <span>05/24/24</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
