import React, { useState } from 'react'
import { LocationIcon } from '../../components/icons/LocationIcon'
import { GpsIcon } from '../../components/icons/GpsIcon'
export function SedeCard ({ sede }) {
  const [isHovered, setIsHovered] = useState(false)

  return (

    <div className='flex flex-col h-96 w-[full] bg-backgroundColor cursor-pointer overflow-hidden shadow-sm rounded-lg' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      <div className='relative w-full h-[70%] overflow-hidden flex items-center justify-center'>
        {
          isHovered &&
            <div className='absolute flex items-center justify-center text-customOrange z-20 transition-all duration-100'>
              <GpsIcon />
            </div>

        }
        <div className='absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-customYellow/30 via-transparent/30' />

        <img src={sede.img} className={`object-cover h-full w-full ${isHovered && 'blur-md'} transition-all duration-100`} alt='' />
      </div>
      <div className='px-3 flex flex-col justify-center py-2 h-[30%] gap-2'>
        <div className='flex gap-1 items-center text-customOrange/80'>
          <LocationIcon width={20} /><p className='flex items-center '>{sede.address}</p>
        </div>
        <h3 className='md:text-4xl text-2xl text-black/80'>{sede.name}</h3>
      </div>

    </div>

  )
}
