"use client"
import React from 'react'
import Navbar from "@/app/components/Navbar";
import Intro from './Intro';
import FormPrintingCost from './FormPrintingCost';


const HomePage = () => {
  return (
    <div className='bg-black'>
      <div className='top-0 sticky z-50 w-full'>
        <div className='py-[2rem] relative w-full flex items-center justify-center  '>
          <Navbar />
        </div>
      </div>
      <div className='block'>
        <Intro />
      </div>
      <div className='flex bg-black items-center  justify-center flex-col'>
        <div className='my-8'>
          <FormPrintingCost/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
