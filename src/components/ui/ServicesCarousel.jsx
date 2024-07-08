'use client'

import { Carousel } from 'flowbite-react'
import { CarouselItem } from './CarouselItem'
import { SERVICES } from '../../const'

export function ServicesCarousel () {
  return (
    <div className='h-[700px] md:h-[400px] overflow-visible'>
      <Carousel>
        {
          SERVICES.map((service, index) => (
            <CarouselItem key={index} item={service} />
          ))
        }
      </Carousel>
    </div>
  )
}
