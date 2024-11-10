import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    
      <section className='bg-[#00204a] max-w-full h-[200vh] md:h-[120vh]' id='team'>
     <div className=" mx-auto container w-[80%] min-h-screen ">
        {/* heading */}
     <div className='text-stone-50 font-semibold font-Roboto text-center text-4xl pb-0 pt-[15%] md:pt-[10%]'>Our<span className='text-[#00bbf0] p-4'>Team</span></div>
      {/* card container */}
     <div className='container mt-[6%] md:mt-[10%] w-[100%] md:h-[300px] mx-auto block md:flex gap-4 space-y-6 md:space-y-0'>

     <div className='md:w-[280px] w-[290px] h-80 md:h-70 flex-1 items-center bg-[#002b64] mx-auto'>

     <div className="flex flex-col gap-y-1 items-center text-center p-6">
              {" "}
              <Image
                src="/images/team-1.jpg"
                alt="currency-wallet"
                height={100}
                width={100}
                className="md:w-28 md:h-28 w-24 h-24 mb-2 rounded-full border-4 mt-[6%]"
              />
            <div className='font-bold text-xl md:font-extrabold text-[#00bbf0] md:text-xl px-2'>Joseph Brown </div>
              <p className="pt-0 pb-2 p-4 text-sm font-md tracking-wide  text-stone-50">
              Marketing Head
              </p>
              <p className="text-md text-stone-50 font-sans tracking-wide font-semibold hover:text-[#00bbf0] cursor-pointer mt-6 md:mb-0 pb-4">
                <Link href='/'>Read More</Link> 
                </p>
            </div>

     </div>
     
     
     <div className='md:w-[280px] w-[290px] h-80 md:h-70 flex-1 items-center bg-[#002b64] mx-auto'>

<div className="flex flex-col gap-y-1 items-center text-center p-6">
         {" "}
         <Image
           src="/images/team-2.jpg"
           alt="currency-wallet"
           height={100}
           width={100}
           className="md:w-28 md:h-28 w-24 h-24 mb-2 rounded-full border-4 mt-[6%]"
         />
       <div className='font-bold text-xl md:font-extrabold text-[#00bbf0] md:text-xl px-2'>Nancy White</div>
         <p className="pt-0 pb-2 p-4 text-sm font-md tracking-wide  text-stone-50">
         Marketing Head
         </p>
         <p className="text-md text-stone-50 font-sans tracking-wide font-semibold hover:text-[#00bbf0] cursor-pointer mt-6 md:mb-0 pb-4">
           <Link href='/'>Read More</Link> 
           </p>
       </div>

</div>



    <div className='md:w-[280px] w-[290px] h-80 md:h-70 flex-1 items-center bg-[#002b64] mx-auto'>

     <div className="flex flex-col gap-y-1 items-center text-center p-6">
              {" "}
              <Image
                src="/images/team-3.jpg"
                alt="currency-wallet"
                height={100}
                width={100}
                className="md:w-28 md:h-28 w-24 h-24 mb-2 rounded-full border-4 mt-[6%]"
              />
            <div className='font-bold text-xl md:font-extrabold text-[#00bbf0] md:text-xl px-2'>Earl Martinez</div>
              <p className="pt-0 pb-2 p-4 text-sm font-md tracking-wide  text-stone-50">
              Marketing Head
              </p>
              <p className="text-md text-stone-50 font-sans tracking-wide font-semibold hover:text-[#00bbf0] cursor-pointer mt-6 md:mb-0 pb-4">
                <Link href='/'>Read More</Link> 
                </p>
            </div>

     </div>

     <div className='md:w-[280px] w-[290px] h-80 md:h-70 flex-1 items-center bg-[#002b64] mx-auto'>

<div className="flex flex-col gap-y-1 items-center text-center p-6">
         {" "}
         <Image
           src="/images/team-4.jpg"
           alt="currency-wallet"
           height={100}
           width={100}
           className="md:w-28 md:h-28 w-24 h-24 mb-2 rounded-full border-4 mt-[6%]"
         />
       <div className='font-bold text-xl md:font-extrabold text-[#00bbf0] md:text-xl px-2'>Josephine Allard</div>
         <p className="pt-0 pb-2 p-4 text-sm font-md tracking-wide  text-stone-50">
         Marketing Head
         </p>
         <p className="text-md text-stone-50 font-sans tracking-wide font-semibold hover:text-[#00bbf0] cursor-pointer mt-6 md:mb-0 pb-4">
           <Link href='/'>Read More</Link> 
           </p>
       </div>

</div>


     <div>
        


     </div>
{/*  */}
</div>

     </div>
</section>
    
  )
}

export default Team
