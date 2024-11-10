import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './button'

const Cards = () => {
  return (
    <div>
      <div className='container mt-[6%] md:mt-[10%] w-[100%] md:h-[300px] mx-auto block md:flex gap-4 space-y-6 md:space-y-0'>

        <div className='md:w-[290px] w-[290px] h-70 md:h-70 flex-1 items-center bg-[#f8f8f9]  mx-auto '>
       
        <div className="flex flex-col gap-y-1 items-center text-center p-2">
              {" "}
              <Image
                src="/images/s1.png"
                alt="currency-wallet"
                height={80}
                width={80}
                className="md:w-24 md:h-24 w-16 h-16 mb-2"
              />
            <div className='font-bold md:font-extrabold md:text-xl px-2'>CURRENCY WALLET </div>
              <p className="pt-0 pb-2 p-4 text-sm font-md">
              A cryptocurrency wallet is your digital safe, storing and managing your cryptocurrencies with advanced security features.
              </p>
              <p className="text-md text-blue-950 font-sans font-semibold hover:text-[#00bbf0] cursor-pointer md:mb-0 pb-4">
                <Link href='/'>Read More</Link> 
                </p>
            </div>
        </div>

        <div className='md:w-[290px] w-[290px] h-70 md:h-70 flex-1 items-center bg-[#f8f8f9]  mx-auto '>
       
       <div className="flex flex-col gap-y-1 items-center text-center p-2">
             {" "}
             <Image
               src="/images/s2.png"
               alt="currency-wallet"
               height={80}
               width={80}
               className="md:w-24 md:h-24 w-16 h-16 mb-2"
             />
           <div className='font-bold md:font-extrabold md:text-xl px-2'>SECURITY STORAGE </div>
             <p className="pt-0 pb-2 p-4 text-sm font-md">
             Safeguard your digital assets with robust security storage solutions, protecting your cryptocurrencies from unauthorized access and potential threats.
             </p>
             <p className="text-md text-blue-950 font-sans font-semibold hover:text-[#00bbf0] cursor-pointer md:mb-0 pb-4">
               <Link href='/'>Read More</Link> 
               </p>
           </div>
       </div>


       <div className='md:w-[290px] w-[290px] h-70 md:h-70 flex-1 items-center bg-[#f8f8f9]  mx-auto '> 
       <div className="flex flex-col gap-y-1 items-center text-center p-2">
             {" "}
             <Image
               src="/images/s3.png"
               alt="currency-wallet"
               height={80}
               width={80}
               className="md:w-24 md:h-24 w-16 h-16 mb-2"
             />
           <div className='font-bold md:font-extrabold md:text-xl px-2'>EXPERT SUPPORT </div>
             <p className="pt-0 pb-2 p-4 text-sm font-md">
             Benefit from expert support to navigate the complex world of cryptocurrency, ensuring your investments are secure and optimized.
             </p>
             <p className="text-md text-blue-950 font-sans font-semibold hover:text-[#00bbf0] cursor-pointer md:mb-0 pb-4">
               <Link href='/'>Read More</Link> 
               </p>
           </div>
          
       </div>
        

</div>
        <Button name='View All' />
    </div>
  )
}

export default Cards
