import { OBRAS_SOCIALES } from '../../const'
import { Carousel } from 'flowbite-react'

export function ObrasSociales () {
  // Define el número de elementos por slide
  const itemsPerSlide = 10

  // Divide el array OBRAS_SOCIALES en partes iguales
  const slides = []
  for (let i = 0; i < OBRAS_SOCIALES.length; i += itemsPerSlide) {
    slides.push(OBRAS_SOCIALES.slice(i, i + itemsPerSlide))
  }

  return (
    <div className='w-[100%] min-h-[450px] grid grid-cols-1 md:grid-cols-2 items-center bg-backgroundColor p-5 rounded-xl'>
      <div>
        <h2 className='text-black/70 text-3xl md:text-6xl '>Trabajamos con <span className='text-customOrange'>todas</span> las obras sociales.</h2>
      </div>

      <Carousel leftControl=' ' rightControl=' ' indicators={false} slideInterval={2000}>

        {
          slides.map((slide, index) => {
            return (
              <ul key={index} className='flex items-start justify-start gap-2 flex-wrap '>
                {
                  slide.map((item, index) => {
                    return (

                      item.logo &&
                        (<li key={index}><img className='md:size-24 size-12 bg-cover rounded-full shadow-sm border-2 border-customOrange/50 bg-white' src={item.logo} alt={`Logo de ${item.name}`} /> </li>)

                    )
                  })
                }
              </ul>
            )
          })
        }

      </Carousel>

    </div>
  )
}
