import React from 'react'
import { Socials } from '../constants'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='w-3/4 max-w-[1400px] fixed top-0 left-1/2 transform -translate-x-1/2 py-[30px] bg-transparent z-[20] flex items-start justify-between gap-3'>

{/* крутящийся текст в Лого */}
        <div className="relative w-[150px] h-[150px] md:w-[100px] md:h-[100px]">
        <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={120}
            height={120}
            className="slow-spin"
        />
        </div>

{/* иконки Socials */}
        <div className='flex flex-row mt-[18px] gap-3 sm:gap-3 md:gap-10 lg:gap-20 xl:gap-20'>
            {Socials.map((social) => (
                <Link 
                key={social.name}
                href={social.link} // адресс
                target='_blank'    // Открыть ссылку в новой вкладке
                rel='noopener noreferrer' // Безопасность при открытии новой вкладки
                > 
                <Image
                    key={social.name}
                    alt='socal icon'
                    src={social.src}
                    width={30}
                    height={30} />
                </Link>
            ))}
        </div>

        <h1 className="text-[40px] text-white">Portfolio<span className="text-[#d20001] -900">.</span>
        </h1>

    </div>
  )
}

export default NavBar