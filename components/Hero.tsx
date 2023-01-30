'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '@/components/BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] =useTypewriter({
        words:['Hi my name is Shankar','Guy-who-loves-Coffee.tsx', '<ButLovesToCodeMore/>'],
        loop:true,
        delaySpeed:2000,

    });

    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles />
       
        <img  
        className='relative rounded-full h-32 w-32 mx-auto'
        // src="shankar.png/"
        src="https://avatars.githubusercontent.com/u/50977378?v=4" 
        alt="" />
        <div>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Software Engineer
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="orange"/>
          </h1>
        </div>
    </div>
  )
}