import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-[#0e0d0d] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className=' absolute border border-[#a7a4a4]  rounded-full h-[300px] w-[300px] mt-52 ' />
        <div className='absolute border border-[#969595]  rounded-full h-[500px] w-[500px] mt-52 '/>
        <div className='absolute rounded-full border border-[#47350d] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
        <div className='absolute border border-[#0e0d0d] rounded-full h-[800px] w-[800px] mt-52 animate-ping' />
    </div>
  )
}

export default BackgroundCircles