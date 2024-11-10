import Image from 'next/image';
import React from 'react'


const About = () => {
  return (
    <section className='bg-[#00204a] max-w-full h-[130vh] md:h-[120vh]' id='about'>

    <div className=" mx-auto container w-[80%] min-h-screen ">
      
      {/* Heading div */}
      <div className='text-stone-50 font-semibold font-Roboto text-center text-4xl mx-auto pt-[15%] md:pt-[10%]'>About <span className='text-[#00bbf0]'>Us</span> </div>
        <p className='text-center pt-4 text-sm md:text-[16px] text-stone-50 '>We're your trusted partner in the crypto world, providing secure solutions and expert guidance to help you maximize your digital assets.</p>
      
        <div className='w-70 mx-auto md:w-[100%] md:h-[380px] mt-[10%]  block md:flex gap-8'>
            {/* Rightside Div */}
            <div className='overflow-hidden flex items-center h-max mb-8 translate-x-4 md:-translate-y-16 '>
                <Image src={'/images/about-img.png'} 
                alt='Hero-img' 
                width={380} height={380}
                className='md:w-[490px] md:h-[420px]  '/> </div>
           
           
            {/* leftside Div */}
            <div className='md:w-[80vh] text-center md:text-start '>
                <h3 className='md:text-start text-center font-Poppins p-3 md:pb-0 md:pt-0 text-3xl md:text- tracking-wide  text-stone-50 font-bold'>Zen:</h3>
                <p className='md:text-start text-center text-sm pl-2 text-[#00bbf0]'>Your Serene Space in the Cryptoverse</p>
                <p className='md:text-start p-3 text-center text-md md:text-lg font-light text-stone-50'>"Experience the tranquility of trading with Zen. Our platform offers a seamless and intuitive interface, empowering you to navigate the complex world of cryptocurrencies with ease. With a focus on security, transparency, and customer satisfaction, Zen provides a serene environment for you to invest in the future of finance."</p>
                <p className='md:text-start p-3 text-center text-md md:text-lg font-light text-stone-50'>
                Embrace the digital revolution with our secure and user-friendly platform. Buy, sell, and trade a wide range of cryptocurrencies with confidence.
                </p>
                
            </div>
           

           
            </div>






     </div>
     </section>
  )
}

export default About;
