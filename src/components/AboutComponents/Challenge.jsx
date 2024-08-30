import React from 'react'

const Challenge = () => {
  return (
    <div className='bg-[#D91E27]'>
      <div className='container mx-auto py-20 px-10'>
        <div className='flex-col justify-center items-center'>
        <div className='flex justify-center mb-5 text-center'>
          <h1 className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-neueextrablack mb-6'>The Triple Challenge</h1>
        </div>
        <div className='flex justify-center text-center text-sm md:text-base lg:text-lg xl:text-2xl text-white font-neuesmibold mb-12 '>
          <p>
          Africa's logistics sector is essential for economic growth, yet it is plagued by formidable challenges that hamper efficiency and stifle progress. At Apexloads, we understand these challenges deeply and have crafted our solutions to tackle them head-on:
          </p>
        </div>
        </div>
        <div className='flex overflow-x-auto no-scrollbar md:grid md:grid-cols-2 2xl:grid-cols-3 gap-10 font-neue text-white '>
          <div className='bg-[#AE131A] rounded-lg py-10 px-7 flex-shrink-0 w-full '><h2 className='mb-4 font-neuesmibold text-lg lg:text-xl xl:text-2xl'>Limited Visibility and Connectivity</h2><p className='xl:text-xl'>The logistics landscape in Africa suffers from a lack of visibility and connectivity among 3PLs, cargo owners, and transporters. This fragmentation results in cargo owners struggling to find available transportation capacity, while transporters miss out on potential loads. Apexloads addresses this by offering a centralized digital freight marketplace that streamlines the freight-truck matching process, reducing inefficiencies and maximizing resource utilization.</p></div>
          <div className='bg-[#AE131A] rounded-lg py-10 px-7 flex-shrink-0 w-full '><h2 className=' mb-4 font-neuesmibold text-lg lg:text-xl xl:text-2xl'>The Absence of Standards and Regulations</h2><p className='xl:text-xl'>Unlike regions with more developed logistics
          frameworks, Africa lacks a centralized authority to enforce standards and regulations. This regulatory vacuum breeds an environment where trust is scarce and transparency is elusive. Our EAC Profile verification system ensures that all players adhere to high standards of professionalism and compliance, building the trust necessary for smooth operations and growth.</p></div>
          <div className='bg-[#AE131A] rounded-lg py-10 px-7 flex-shrink-0 w-full'><h2 className=' mb-4 font-neuesmibold text-lg lg:text-xl xl:text-2xl'>Cash Flow Disruption</h2><p className='xl:text-xl'>The logistics industry's payment practices, characterized by extended invoice terms, pose significant cash flow challenges for 3PLs. These delays can be devastating,
          especially for smaller transporters. To address this, we are developing an invoice factoring service that will provide quicker payment processes, helping 3PLs maintain healthy cash flows and ensuring operational sustainability.</p></div>
        </div>
      </div>
    </div>
  )
}

export default Challenge