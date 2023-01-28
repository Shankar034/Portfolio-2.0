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
    <div>
        <BackgroundCircles />
        <span>{text}</span>
        <Cursor cursorColor="orange"/>
    </div>
  )
}