'use client';
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function Project({ }: Props) {
        const projects = [1, 2, 3, 4, 5];
        return (
                <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className=' h-screen flex relative  text-center md:flex-row max-w-full xl:px-10 min-h-screen justify-evenly  mx-auto items-center z-0'
                >
                        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>

                                Projects
                        </h3>

                        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                                {projects.map((project, i) => (
                                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                                                <motion.img 
                                                initial={{ y:-300, opacity: 0 }}
                                                whileInView={{ opacity: 1, y:0 }}
                                                transition={{ duration: 1.2 }}
                                                viewport={{once:true}}
                                                src="https://repository-images.githubusercontent.com/252413723/e6f28180-8882-11ea-9e76-78d72dfa2af0" alt="" />

                                                <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                                                        <h4> <span className='underline decoration-[#f7ab0a]/50 '>Case Study {i + 1} of {projects.length}:</span>{""}  UPS clone
                                                        </h4>
                                                        <p className='text-lg text-center md:text-left'> 
                                                        This is a step-by-step guide tailored for those starting out with Sanity for the first time. You will be taken through 3 steps and learn the essential concepts you need to know in order to:
                                                        </p>
                                                </div>
                                        </div>

                                ))}

                                {/* projects */}
                                {/* projects */}
                                {/* projects */}
                                {/* projects */}



                        </div>
                        <div className='w-full absolute top-[48%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12'>

                        </div>

                </motion.div>
        )
}

export default Project