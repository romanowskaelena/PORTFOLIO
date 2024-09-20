"use client";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { ProImages2 } from '../constants';
import { ProImages } from '../constants';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

const ProjectSlider = () => {
  return (
    <div className='relative w-[40%] lg:w-[60%]'>
    <Swiper
      breakpoints={{
        1024: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
    >
      <SwiperSlide className='mb-14 flex justify-center'>
        <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center'>
            {ProImages.map((image) => (
            <div
                className='relative group w-[150px] h-[150px] lg:w-[230px] lg:h-[230px]'
                key={image.name}
            >
        {/* Оборачиваем всю структуру внутри ссылки */}
        <Link
          href={image.link} // Адрес ссылки
          target='_blank'    // Открыть ссылку в новой вкладке
          rel='noopener noreferrer' // Безопасность при открытии новой вкладки
        >
          {/* Изображение проекта */}
          <Image
            src={image.src}
            alt='project image'
            fill
            className='rounded-md h-full w-full object-cover'
          />
          {/* Градиентный фон при наведении */}
          <div className='absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-400 to-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300' />
          {/* Текст "View Project" при наведении */}
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg'>
            View Project
            <Image
              src='/assets/arrow-right.svg'
              alt='arrow right'
              width={20}
              height={20}
              className='invert brightness-0 ml-2'
            />
          </div>
        </Link>
      </div>
    ))}
        </div>
      </SwiperSlide>

      <SwiperSlide className='mb-14 flex justify-center'>
        <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center'>
          {ProImages2.map((image) => (
            <div
              className='relative group w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] cursor-pointer'
              key={image.name}
            >
            {/* Оборачиваем всю структуру внутри ссылки */}
            <Link
                    href={image.link} // Адрес ссылки
                    target='_blank'    // Открыть ссылку в новой вкладке
                    rel='noopener noreferrer' // Безопасность при открытии новой вкладки
            >
              <Image
                src={image.src}
                alt='project image'
                fill
                className='rounded-md h-full w-full object-cover'
              />
              {/* Градиентный фон при наведении */}
              <div className='absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-400 to-gray-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300' />
              {/* Текст "View Project" при наведении */}
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg'>
                View Project
                <Image
                  src='/assets/arrow-right.svg'
                  alt='arrow right'
                  width={20}
                  height={20}
                  className='invert brightness-0 ml-2'
                />
              </div>
            </Link>
            </div>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  )
}

export default ProjectSlider