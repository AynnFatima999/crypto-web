import Image from 'next/image'
import React from 'react'

const Choose = () => {
  return (
    <section className='bg-[#ffffff] max-w-full h-[230vh] md:h-[250vh]' id='choose'>

    <div className=" mx-auto container w-[80%] min-h-screen ">
    <div className='text-slate-950 font-semibold font-Roboto text-center text-4xl mx-auto pt-[15%] md:pt-[10%]'>Why Choose<span className='text-[#00bbf0]'> Us</span> </div>
        
    <div className="flex flex-col gap-y-4 items-center p-4 mt-[4%] ">
              {" "}
              <div  className="w-40 h-40 relative rounded-full border-4 flex justify-center items-center border-[#00204a]">
              <Image
                src="/images/w1.png"
                alt="Profile Img"
                height={60}
                width={60}
                className='w-20 h-20 md:w-50 md:h-50'
               
              /></div>{" "}
              
                <p className="text-2xl text-slate-950 hover:font-Merienda font-semibold cursor-pointer">
                Expert Management
                </p>
              
              <p className="pt-0 mx-auto text-md text-center font-sans">
              Benefit from our expert management team, guiding you through the volatile crypto market with strategic insights and timely advice.
              </p>
            </div>
        
        
            <div className="flex flex-col gap-y-4 items-center p-4 mt-[4%] ">
              {" "}
              <div  className="w-40 h-40 relative rounded-full border-4 flex justify-center items-center border-[#00204a]">
              <Image
                src="/images/w2.png"
                alt="Profile Img"
                height={60}
                width={60}
                className='w-20 h-20 md:w-50 md:h-50'
               
              /></div>{" "}
              
                <p className="text-2xl text-slate-950 hover:font-Merienda font-semibold cursor-pointer">
                Secure Investment
                </p>
              
              <p className="pt-0 mx-auto text-md text-center font-sans">
              Protect your investments with our robust security measures. Our advanced encryption technology and cold storage solutions safeguard your assets, providing you with peace of mind in the dynamic crypto market.
              </p>
            </div>
        
        
        
            <div className="flex flex-col gap-y-4 items-center p-4 mt-[4%] ">
              {" "}
              <div  className="w-40 h-40 relative rounded-full border-4 flex justify-center items-center border-[#00204a]">
              <Image
                src="/images/w3.png"
                alt="Profile Img"
                height={60}
                width={60}
                className='w-20 h-20 md:w-50 md:h-50'
               
              /></div>{" "}
              
                <p className="text-2xl text-slate-950 hover:font-Merienda font-semibold cursor-pointer">
                Instant Trading
                </p>
              
              <p className="pt-0 mx-auto text-md text-center font-sans">
              Trade Instantly, Anytime, Anywhere.
Experience lightning-fast trade execution with our advanced trading engine, allowing you to capitalize on market opportunities in real-time.
              </p>
            </div>


            <div className="flex flex-col gap-y-4 items-center p-4 mt-[4%] ">
              {" "}
              <div  className="w-40 h-40 relative rounded-full border-4 flex justify-center items-center border-[#00204a]">
              <Image
                src="/images/w4.png"
                alt="Profile Img"
                height={60}
                width={60}
                className='w-20 h-20 md:w-50 md:h-50'
               
              /></div>{" "}
              
                <p className="text-2xl text-slate-950 hover:font-Merienda font-semibold cursor-pointer">
                Happy Customers
                </p>
              
              <p className="pt-0 mx-auto text-md text-center font-sans">
              Join our thriving community of satisfied customers who trust Zen for their crypto journey.
              </p>
            </div>





         </div>
      </section>
  )
}

export default Choose
