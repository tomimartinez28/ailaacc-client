import { Carousel } from 'flowbite-react'
import { CarouselItem } from './CarouselItem'
import { SEDE_CAROUSEL_ITEM } from '../../const'

export function SedesCarousel () {
  return (
    <div className='h-[700px] md:h-[400px] overflow-visible'>
      <Carousel>

        <CarouselItem item={SEDE_CAROUSEL_ITEM} />

      </Carousel>
    </div>
  )
}
