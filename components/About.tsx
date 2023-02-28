'use client';
import { urlFor } from '@/sanity';
import { PageInfo } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill';

type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
    
        <motion.img 
        initial={{
            x: -200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            x:0,
            opacity:1
            
        }}
        viewport={{
            once:true
        }}
        // src='https://pbs.twimg.com/media/Fn0CPDeaYAEB23m?format=jpg&name=large'
        src={urlFor(pageInfo?.profilePic).url()}

        className='-mb-15 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] ' 
        />

        <div className='space-y-10 md:px-10 '>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background </h4>
            <p className='text-base'>
            {/* I'm Shankar. As a software engineer, i have a passion for designing, developing, and maintaining high-quality software applications, and are constantly striving to improve your skills and stay up-to-date with the latest technologies. With my strong background in computer science and experience in programming, i am able to write, test, and debug code with ease, and collaborate effectively with other developers, designers, and stakeholders to ensure that software meets the needs of users. Whether i was working on a large-scale project or a small app, i bring dedication, professionalism, and a drive to succeed to everything i do. */}

            {pageInfo?.backgroundInformation}
            </p>
        </div>

    </motion.div>
  )
}

export default About