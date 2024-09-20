"use client";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import { FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from '../constants';

const ServiceSlider = () => {
  return (
    <div className='relative w-[50%] lg:w-[60%]'>
         <Swiper
            breakpoints={{
               
                700: {
                    slidesPerView: 1,
                    spaceBetween: 45
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 35
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 45
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
        >
            {ServiceData.map((item)=> (
                    <SwiperSlide key={item.title}>
                        <div className=' rounded-md cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg rounde-xl px-6 py-8 overflow-hidden h-[300px] w-[250px] '>
                            <div className='absolute inset-0 bg-cover bg-center'
                            style={{backgroundImage: `url($item.backgroundImage)`}}
                            />
                            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50'/>
                            <div className='relative flex flex-col gap-3 max-w-full '>
                                <item.icon className='text-blue-500 group-hover: text-blue-300 w-[32px] h-[32px] '/>
                                <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                                <p className='lg:text-[18px]'>{item.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
           
        </Swiper>        

    </div>
  )
}

export default ServiceSlider