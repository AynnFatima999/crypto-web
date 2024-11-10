import React from 'react'
import Header from './header';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='bg-[url(/images/hero-bg.png)] bg-no-repeat bg-cover max-w-full min-h-screen'>

        <div className=" mx-auto container w-[80%] min-h-screen ">
        <Header />
        
        {/* Hero Div */}
          <div className='w-70 mx-auto md:w-[100%] md:h-[340px] mt-[10%]  block md:flex justify-between'>
            {/* leftside Div */}
            <div className='md:w-[60vh] text-center md:text-start '>
                <h1 className='md:text-start text-center font-Poppins p-3 text-3xl md:text-5xl tracking-wide leading-10 md:leading-[58px] text-stone-50 font-bold'>CRYPTO CURRENCY</h1>

                <p className='md:text-start p-3 text-center text-md md:text-xl font-light text-stone-50'>"Explore the world of cryptocurrency with our secure, user-friendly platform. Buy, sell, and manage digital assets in one place — whether you're a beginner or a pro."</p>
            </div>
            {/* Rightside Div */}
            <div className='overflow-hidden flex items-center h-max mb-8 translate-x-4 md:-translate-y-16 '>
                <Image src={'/images/slider-img.png'} alt='Hero-img' width={350} height={380}
                className='md:w-[580px] md:h-[500px]  '/>

            </div>

          </div>

          
        </div>
        


    </section>
  )
}

export default Hero;
