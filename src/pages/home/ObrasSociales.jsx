import React from 'react'
import { OBRAS_SOCIALES } from '../../const'
import { Carousel } from 'flowbite-react'

export function ObrasSociales () {
  // Define el número de elementos por slide
  const itemsPerSlide = 4

  // Divide el array OBRAS_SOCIALES en partes iguales
  const slides = []
  for (let i = 0; i < OBRAS_SOCIALES.length; i += itemsPerSlide) {
    slides.push(OBRAS_SOCIALES.slice(i, i + itemsPerSlide))
  }

  return (
    <div className='w-[100%] min-h-[450px] grid grid-cols-1 md:grid-cols-2 items-center bg-backgroundColor p-5 rounded-xl'>
      <div className=''>
        <h2 className='text-black/70 text-3xl md:text-6xl '>Trabajamos con <span className='text-customOrange'>todas</span> las obras sociales.</h2>
      </div>

      <Carousel leftControl=' ' rightControl=' ' indicators={false} slideInterval={2000}>

        {
          slides.map((slide, index) => {
            return (
              <div key={index} className='grid grid-cols-2 items-center justify-center gap-2 w-[80%]'>
                {
                  slide.map((item, index) => {
                    return (

                      item.logo &&
                        (
                          <div
                            key={index}
                            className='md:size-44 size-24 bg-contain bg-no-repeat bg-center rounded-full'
                            style={{ backgroundImage: `url(${item.logo})` }}
                          />
                        )
                    )
                  })
                }
              </div>
            )
          })
        }

      </Carousel>

    </div>
  )
}
