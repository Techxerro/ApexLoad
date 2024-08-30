import React, {useState} from 'react'

const PostaLoad = () => {

  const [isFullLoad, setIsFullLoad] = useState(true);

  return (
    <>
    <div className="bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Post a Load</h1>
      
      <div className="bg-[#1b1b1b] rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Load Details</h2>
        <h3 className="text-lg mb-2">Location & Timing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Origin" className="bg-[#2b2b2b] rounded p-2 w-full" />
          <input type="text" placeholder="Destination" className="bg-[#2b2b2b] rounded p-2 w-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input type="date" placeholder="Pickup Dates" className="bg-[#2b2b2b] rounded p-2 w-full" />
          <input type="text" placeholder="Pickup Hours" className="bg-[#2b2b2b] rounded p-2 w-full" />
          <input type="date" placeholder="Delivery Dates" className="bg-[#2b2b2b] rounded p-2 w-full" />
          <input type="text" placeholder="Drop Hours" className="bg-[#2b2b2b] rounded p-2 w-full" />
        </div>
      </div>
      
      <div className="bg-[#1b1b1b] rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Equipment Details</h2>
        <div className="flex items-center mb-4">
          <label className="inline-flex items-center mr-6">
            <input type="radio" className="form-radio text-red-600" checked={isFullLoad} onChange={() => setIsFullLoad(true)} />
            <span className="ml-2">Full</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio text-red-600" checked={!isFullLoad} onChange={() => setIsFullLoad(false)} />
            <span className="ml-2">Partial</span>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Equipment Type" className="bg-[#2b2b2b] rounded p-2 w-full" />
          <select className="bg-[#2b2b2b] rounded p-2 w-full">
            <option>Length in cm</option>
          </select>
          <select className="bg-[#2b2b2b] rounded p-2 w-full">
            <option>Weight lbs</option>
          </select>
        </div>
      </div>
      
      <div className="bg-[#1b1b1b] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <textarea placeholder="Comments" rows="4" className="bg-[#2b2b2b] rounded p-2 w-full"></textarea>
          <div>
            <input type="text" placeholder="Commodity" className="bg-[#2b2b2b] rounded p-2 w-full mb-4" />
            <input type="text" placeholder="Reference ID" className="bg-[#2b2b2b] rounded p-2 w-full" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PostaLoad