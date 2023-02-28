'use client';
import { urlFor } from '@/sanity';
import { Experience } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500] md:w-[600]  snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden xl:w-[400] xl:h-[450]'>
        <motion.img 
        initial={{
          y:-100,
          opacity:0,

        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
        // src="https://static.vecteezy.com/system/resources/thumbnails/004/485/532/small/man-working-at-laptop-work-at-home-concept-design-freelance-man-working-on-laptop-smiling-man-is-sitting-with-laptop-around-the-internet-email-message-icons-freelancer-programmer-with-a-laptop-vector.jpg" 

        src= {urlFor(experience?.companyImage).url()}

        alt="" />

        <div className='px-0 md:px-10'>
          <h4 className='text-3xl font-light'>CEO of PAPAFAM</h4>
          <p className='font-bold text-1xl mt-1'>PAPAFAM</p>
          <div className='flex space-x-2 my-2'>
            {/* <img 
              className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" 
            />
            <img 
              className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt=""
            /> 
            <img 
              className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" 
            />
            <img 
              className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" 
      /> */}


          {experience.technologies.map((technology) =>(
            <img
            key={technology._id}
            className="h-10 w-10 rounded-full"
            src={urlFor(technology.image).url()}
            />
          ))}
            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
          </div>
          <p className='uppercase py-3 text-gray-300'>Started work... -Ended...</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
           
           
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard