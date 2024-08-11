import { SedeCard } from './SedeCard'
import { SEDES } from '../../const'

import { SedesCarousel } from '../../components/ui/SedesCarousel'

export function Sedes () {
  return (

    <div className='bg-[url("/src/assets/svg/wavy-bg.svg")] bg-transparent bg-no-repeat bg-cover h-full'>
      <SedesCarousel />
      <div className='flex flex-col gap-20 mt-10 px-4 py-8'>
        {
        SEDES.map((sede, index) => {
          return (
            <SedeCard key={index} sede={sede} isEven={index % 2 === 0} />
          )
        })
      }
      </div>
    </div>
  )
}
