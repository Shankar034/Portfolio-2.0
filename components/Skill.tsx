'use client';
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
    <motion.img 
    initial={{
        x:directionLeft ?-200:200,
        opacity:0
    }}
    transition={{duration:1.2}}
    whileInView={{opacity:1, x:0}}
    src="https://static.javatpoint.com/images/javascript/javascript_logo.png"
    className='h-10 w-10 rounded-full'
    />
    </div>
  )
}

export default Skill