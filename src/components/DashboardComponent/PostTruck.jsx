import React, { useState } from "react";

const PostTruck = ({ trucks, setTrucks }) => {
  const [isFullLoad, setIsFullLoad] = useState(true);

  const [truck, setTruck] = useState({
    equipmentType: "",
    length: "",
    weight: "",
    origin: "",
    destination: "",
    availableDates: "",
    rate: "",
    comments: "",
  });

  const handleChange = (e) => {
    setTruck({
      ...truck,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Posting Truck:", truck); // Debug log
    setTrucks([...trucks, truck]);
    console.log("Updated Trucks List:", trucks); // Debug log
    setTruck({
      equipmentType: "",
      length: "",
      weight: "",
      origin: "",
      destination: "",
      availableDates: "",
      rate: "",
      comments: "",
    });
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Equipment Type</label>
    //     <input
    //       type="text"
    //       name="equipmentType"
    //       value={truck.equipmentType}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Length</label>
    //     <input
    //       type="text"
    //       name="length"
    //       value={truck.length}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Weight</label>
    //     <input
    //       type="text"
    //       name="weight"
    //       value={truck.weight}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Origin</label>
    //     <input
    //       type="text"
    //       name="origin"
    //       value={truck.origin}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Destination</label>
    //     <input
    //       type="text"
    //       name="destination"
    //       value={truck.destination}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Available Dates</label>
    //     <input
    //       type="text"
    //       name="availableDates"
    //       value={truck.availableDates}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Rate</label>
    //     <input
    //       type="text"
    //       name="rate"
    //       value={truck.rate}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Comments</label>
    //     <input
    //       type="text"
    //       name="comments"
    //       value={truck.comments}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <button type="submit">Post Truck</button>
    // </form>

    <>
      <div className=" text-white p-8">
        <h1 className="text-2xl font-semibold mb-6">Post a truck</h1>
        <div className="grid grid-cols-2 gap-10">
          <div className="grid grid-row-1 gap-6">
            {/* Truck Profile */}
            <div className="bg-[#1b1b1b] p-4 rounded">
              <h2 className="text-lg font-medium mb-4">Truck Profile</h2>
              <div className="mb-4">
                <label className="block mb-2">Truck Details</label>
                <div className="flex items-center mb-4">
                  <label className="mr-4">
                    <input type="radio" name="truckType" className="mr-1" />{" "}
                    Full
                  </label>
                  <label>
                    <input type="radio" name="truckType" className="mr-1" />{" "}
                    Partial
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Equipment type"
                  className="w-full p-2 rounded bg-transparent border border-gray-600 mb-4"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Length in"
                    className="w-full p-2 rounded bg-transparent border border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Weight in lbs"
                    className="w-full p-2 rounded bg-transparent border border-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Post Details */}

            {/* Set Minimum Rates */}
            <div className="bg-[#1b1b1b] p-4 rounded">
              <h2 className="text-lg font-medium mb-4">Set Minimum Rates</h2>
              <input
                type="text"
                placeholder="Rate / Mile"
                className="w-full p-2 rounded bg-transparent border border-gray-600 mb-4"
              />
              <textarea
                placeholder="Your comment here"
                className="w-full p-2 rounded bg-transparent border border-gray-600 h-32"
              ></textarea>
            </div>

            {/* Truck Owner Details */}
          </div>

          <div className="grid grid-row-1 gap-10">
            <div className="bg-[#1b1b1b] p-4 rounded">
              <h2 className="text-lg font-medium mb-4">Post Details</h2>
              <div className="mb-4">
                <h2 className="mb-4"> Location</h2>
                <input
                  type="text"
                  placeholder="Origin (City, ST, ZIP)"
                  className="w-full p-2 rounded bg-transparent border border-gray-600 mb-4"
                />
                <input
                  type="text"
                  placeholder="Destination (City/States/Zones)"
                  className="w-full p-2 rounded bg-transparent border border-gray-600 mb-4"
                />
                <div className="">
                <h2 className="mb-2">Available Dates(s)</h2>
                <p className="mb-2 text-[#FFFFFF]">Specific your available date or date range</p>
                <input
                  type="text"
                  placeholder="Available Date(s)"
                  className="w-full p-2 rounded bg-transparent border border-gray-600"
                />
                </div>
              </div>
            </div>
            <div className="bg-[#1b1b1b] p-4 rounded">
              <h2 className="text-lg font-medium mb-4">Truck Owner Details</h2>
              <div className="mb-4">
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet consectetur. Magna fusce interdum
                  orci quisque massa in.
                </p>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-2 rounded bg-transparent border border-gray-600 mb-4"
                />
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full p-2 rounded bg-transparent border border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostTruck;
