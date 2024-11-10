import React from 'react'
import Cards from './card';


const Services = () => {
  return (
    <section className='bg-[#ffffff] max-w-full h-[150vh] md:h-[110vh]' id='services'>

    <div className=" mx-auto container w-[80%] min-h-screen ">
        {/* Heading div */}
        <div className='text-gray-900 font-semibold font-Roboto text-center text-4xl pb-0 md:pt-[5%]'>Our<span className='text-[#00bbf0] p-4'>Services</span> </div>
        <p className='text-center pt-4 text-sm md:text-[16px] pb-5 md:pb-0 '>Buy,sell and trade crypto currency easily. Experience cutting-edge crypto technologies and services.</p>
        {/* cards */}
        <Cards />
        






     </div>
     </section>
  )
}

export default Services;
