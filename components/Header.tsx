import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { ReactDOM } from 'react';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <div className='flex  flex-row items-center'>
            {/* Social Icons */}
            
            <SocialIcon url="https://youtube.com/@shankarbhandari9914" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://youtube.com/@shankarbhandari9914" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://youtube.com/@shankarbhandari9914" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://youtube.com/@shankarbhandari9914" fgColor='gray' bgColor='transparent'/>
        </div>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            {/* Avatar */}
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase  md:inline-flex text-gray-400'>Get in Touch</p>
        </div>

    </header>
  );
}