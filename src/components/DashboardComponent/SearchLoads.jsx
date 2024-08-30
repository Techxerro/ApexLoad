import React from "react";

const SearchLoads = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Search Loads</h1>
      <div className="bg-[#1b1b1b] rounded-lg p-4">
        <h2 className="text-2xl mb-4">New Search</h2>
        <form>
          <div className="grid grid-cols-5 gap-4 text-lg text-[#ffffff] font-neue">

          <input
              type="text"
              placeholder="Origin"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-2"
            />

            <div className="col-span-3 grid grid-cols-6 gap-4">
            <input
              type="text"
              placeholder="Destination"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-1"
            />
             <input
              type="text"
              placeholder="Destination"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-4"
            />
             <input
              type="text"
              placeholder="Destination"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-1"
            />
            </div>
            
            
            <input
              type="text"
              placeholder="Equipment type"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-2"
            />
            <input
              type="text"
              placeholder="Load type "
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-1"
            />

<input
              type="text"
              placeholder="Length in"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-2"
            />

            <input
              type="text"
              placeholder="Weight"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-2"
            />
            <input
              type="date"
              placeholder="Date Range"
              className="border border-[#b4b4b4] bg-transparent p-2 rounded col-span-2"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white text-lg font-neue px-4 py-1 rounded-full mt-4"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchLoads;
