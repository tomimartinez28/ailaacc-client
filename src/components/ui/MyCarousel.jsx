'use client'

import { Carousel } from 'flowbite-react'
import { CarouselItem } from './CarouselItem'
import { SERVICES } from '../../const'

export function MyCarousel () {
  return (
    <div className='h-[400px] md:h-[400px]'>
      <Carousel className=' rounded-none'>
        {
          SERVICES.map((service, index) => (
            <CarouselItem key={index} service={service} />
          ))
        }
      </Carousel>
    </div>
  )
}
