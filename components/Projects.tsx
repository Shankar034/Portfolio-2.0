'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
type Props = {
        projects: Project[];
}

function Project({projects }: Props) {
        // const projects = [1, 2, 3, 4, 5];
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

                        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 '>
                                {projects?.map((project, i) => (
                                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                                                <motion.img 
                                                initial={{ y:-300, opacity: 0 }}
                                                whileInView={{ opacity: 1, y:0 }}
                                                transition={{ duration: 1.2 }}
                                                viewport={{once:true}}
                                                // src="https://repository-images.githubusercontent.com/252413723/e6f28180-8882-11ea-9e76-78d72dfa2af0" 
                                                src={urlFor(project?.image).url()}
                                                alt="" />

                                                <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                                                        <h4> <span className='underline decoration-[#f7ab0a]/50 '>Case Study {i + 1} of {projects.length}:</span>{""}  
                                                        {project?.title}
                                                        </h4>


                                                        <div className='flex items-center space-x-2 justify-center'>

                                                                {project?.technologies.map(technology =>(
                                                                        <img
                                                                        className='h-5 w-5'
                                                                        key={technology._id} 
                                                                        src={urlFor(technology.image).url()} alt=''/>
                                                                ))}
                                                        </div>
                                                        <p className='text-lg text-center md:text-left'> 
                                                        {project?.summary}
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