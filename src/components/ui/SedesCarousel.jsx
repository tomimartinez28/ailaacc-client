import React from 'react'
import { Carousel } from 'flowbite-react'
import { CarouselItem } from './CarouselItem'
import { SEDE_CAROUSEL_ITEM } from '../../const'

export function SedesCarousel () {
  return (
    <div className='h-[700px] md:h-[400px] overflow-visible'>
      <Carousel indicators={false} leftControl=' ' rightControl=' ' draggable={false}>
        <CarouselItem item={SEDE_CAROUSEL_ITEM} />
      </Carousel>
    </div>
  )
}
