'use client'
import React from 'react'
import { Carousel } from 'flowbite-react'
import { CarouselItem } from './CarouselItem'
import { SERVICES } from '../../utils/const'

export const customTheme = {
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth',
    snap: 'snap-x'
  }
}

export function ServicesCarousel () {
  return (
    <div className='h-[700px] md:h-[400px] overflow-visible'>
      <Carousel theme={customTheme}>
        {
          SERVICES.map((service, index) => (
            <CarouselItem key={index} item={service} />
          ))
        }
      </Carousel>
    </div>
  )
}
