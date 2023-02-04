'use client';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0'>
        <motion.img 
        initial={{
          y:-100,
          opacity:0,

        }}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.2}}
        viewport={{once:true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
        src="https://static.vecteezy.com/system/resources/thumbnails/004/485/532/small/man-working-at-laptop-work-at-home-concept-design-freelance-man-working-on-laptop-smiling-man-is-sitting-with-laptop-around-the-internet-email-message-icons-freelancer-programmer-with-a-laptop-vector.jpg" alt="" />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
          <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
          <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" />
            <img className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" /> 
            <img className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" />
            <img className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" />
            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
          </div>
          <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>

        </div>
    </article>
  )
}

export default ExperienceCard