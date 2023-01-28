import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border bg-green-400 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border bg-green-300 rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
        <div className='absolute border bg-green-200 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div />
        <div />
    </div>
  )
}

export default BackgroundCircles