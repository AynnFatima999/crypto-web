'use client';
import React from 'react'
interface pass {name: string}

const Button = ({name}:pass) => {
  return (
    <div className='mx-auto flex justify-center mt-8 md:mt-4 text-stone-50'>
    <button className='bg-[#00bbf0] py-5 px-12 justify-center'>
      {name}
    </button></div>
  )
}

export default Button
