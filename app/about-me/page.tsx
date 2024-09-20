import Image from 'next/image'
import React from 'react'
import ServiceSlider from '../components/ServiceSlider'

const Page = () => {
  return (
    <div className='bg-[#2F3A7D] h-screen overflow-hidden flex items-center justify-center'>
      <div className="absolute inset-0 bg-black opacity-45"></div> 
        <div className='mt-[160px] flex flex-col justify-center item-center w-3/4 max-w-[1400px] fixed top-100 left-1/2 transform -translate-x-1/2'>
       
            <h1 className='text-[50px] text-white font-semibold '>
              My skills<span className='text-[#d20001] -900'>.</span>
            </h1>
            <p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
            A high level of organization and attention to details
            </p>
            <div className='flex flex-row gap-3 justify-between items-center mt-[30px]'>
                <div className='relative rotate-0 animate-pulse duration-75'>
                  <Image
                      src='/assets/bulb.png'
                      alt='bulb'
                      width={260}
                      height={260}
                      className=' md:block lg:w-[200px] md:w-[200px]'
                  />
              </div>

              <ServiceSlider/>
            </div>
        
        </div>
    </div>
  )
}

export default Page