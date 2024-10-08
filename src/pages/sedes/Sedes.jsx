import { SedeCard } from './SedeCard'
import { SEDES } from '../../const'

import { SedesCarousel } from '../../components/ui/SedesCarousel'

export function Sedes () {
  return (

    <div className='bg-[url("/src/assets/svg/wavy-bg.svg")] bg-transparent bg-no-repeat bg-cover h-full'>
      <SedesCarousel />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 mt-10 px-20 py-8'>
        {
        SEDES.map((sede, index) => {
          return (
            <SedeCard key={index} sede={sede} />
          )
        })
      }
      </div>
    </div>
  )
}
