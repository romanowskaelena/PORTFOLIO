"use client"

import React from 'react'
import {motion} from 'framer-motion'


const TransitionVariants ={
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%']
    },
}

const Transition = () => {
  return (
    <div>
        <motion.div
            className='fixed top-0 bottom-0 h-screen w-screen right-full z-[30] bg-[#333333]'
            variants={TransitionVariants}
            initial='initial'
            exit='exit'
            animate='animate'
            transition={{delay: 0.2, duration: 0.5, ease: 'easeInOut'}}
        />

        <motion.div
            className='fixed top-0 bottom-0 h-screen w-screen right-full z-[20] bg-[#666666]'
            variants={TransitionVariants}
            initial='initial'
            exit='exit'
            animate='animate'
            transition={{delay: 0.4, duration: 0.5, ease: 'easeInOut'}}
        />

        <motion.div
            className='fixed top-0 bottom-0 h-screen w-screen right-full z-[10] bg-[#cccccc]'
            variants={TransitionVariants}
            initial='initial'
            exit='exit'
            animate='animate'
            transition={{delay: 0.6, duration: 0.5, ease: 'easeInOut'}}
        />


    </div>
  )
}

export default Transition