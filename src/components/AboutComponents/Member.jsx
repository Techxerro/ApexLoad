import React from 'react'
import member1 from '../../assets/img/Artboard 1.png'
import member2 from '../../assets/img/Artboard 1 copy.png'
import member3 from '../../assets/img/Artboard 1 copy 2.png'
import member4 from '../../assets/img/Artboard 1 copy 3.png'

const Member = () => {
  return (
    <div>
      <div>
      <div className="bg-black flex flex-col items-center pt-[50px] pb-[54px] overflow-hidden">
        <h1 className="text-white text-[25px] xl:text-[72px] lg:text-[58px] md:text-[30px] font-neueextrablack tracking-tight">
          Member of
        </h1>
        <div className="flex justify-evenly gap-2 md:gap-10 lg:gap-20 3xl:gap-32 items-center">
          <img src={member1} className="xl:w-[216px] lg:w-[186px] md:w-[156px] w-[90px]   xl:h-[200px] md:h-[150px] h-[100px]   lg:h-[160px]" />
          <img src={member2} className="xl:w-[264px] lg:w-[234px] md:w-[200px] w-[110px]   xl:h-[112px] md:h-[52px]  h-[32px]  lg:h-[82px]" />
          <img src={member3} className="xl:w-[112px] lg:w-[82px]  md:w-[52px]  w-[40px] xl:h-[180px]  md:h-[120px]  h-[80px] lg:h-[150px]" />
          <img src={member4} className="xl:w-[171px] lg:w-[141px] md:w-[111px] w-[71px]   xl:h-[158px] md:h-[98px]  h-[58px]  lg:h-[128px]" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Member