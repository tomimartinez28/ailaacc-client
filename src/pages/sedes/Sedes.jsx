import { useState } from 'react'
import img5 from '../../assets/img/img5.webp'
import { SedeCard } from './SedeCard'
import { SEDES } from '../../const'

import { SedesCarousel } from '../../components/ui/SedesCarousel'

export function Sedes () {
  return (

    <div className=''>

      <SedesCarousel />
      <div className='flex flex-col gap-10'>
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
