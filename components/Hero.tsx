'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


type Props = {}

export default function Hero({}: Props) {
    const [text, count] =useTypewriter({
        words:['Hi my name is Shankar','Guy-who-loves-Coffee.tsx', '<ButLovesToCodeMore/>'],
        loop:true,
        delaySpeed:2000,

    });

    
  return (
    <div>
        <span>{text}</span>
        <Cursor cursorColor="orange"/>
    </div>
  )
}