'use client';
import Link from 'next/link';
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Bars2Icon } from '@heroicons/react/16/solid';
import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
  

const Header = () => {
  return (
    <div className='bg-transparent border-b w-full h-20'>
        <div className='flex justify-between md:mx-2 items-center px-0 p-7 text-white  '>

      {/* LOGO */}
      <div className=' text-xl md:text-2xl font-bold '>Zen<span>110</span></div>
      {/* links */}
      <div className='hidden md:flex justify-between'>
      <ul className='flex gap-x-6'>
        <li><Link href='/'>HOME</Link></li>
        <li><Link href='#about'>ABOUT</Link></li>
        <li><Link href='#services'>SERVICES</Link></li>
        <li><Link href='#choose'>WHY US</Link></li>
        <li><Link href='#team'>Team</Link></li>
      </ul>
      </div>

      {/* Hamnburger Menu*/}

       <div className='md:hidden'>
       <Sheet>
  <SheetTrigger> <Bars3BottomRightIcon className='size-8 text-white'/> </SheetTrigger>
  <SheetContent>
  <div className='flex-col justify-center w-[80%] h-[100%] text-white pt-[50%]'>
      <ul className='flex flex-col gap-x-6 gap-y-10 items-center pl-12 font-medium '>
        <li><Link href='/'>HOME</Link></li>
        <li><Link href='#about'>ABOUT</Link></li>
        <li><Link href='#services'>SERVICES</Link></li>
        <li><Link href='#choose'>WHY US</Link></li>
        <li><Link href='#team'>TEAM</Link></li>
      </ul>
      </div>
    
  </SheetContent>
</Sheet>

       </div>

    </div>

    </div>
  )
}

export default Header;
