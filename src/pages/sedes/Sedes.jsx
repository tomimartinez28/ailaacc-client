import React from 'react'
import { SedeCard } from './SedeCard'
import { SEDES } from '../../const'

import { SedesCarousel } from '../../components/ui/SedesCarousel'

export function Sedes () {
  return (

    <div className='bg-[url("/src/assets/svg/wavy-bg.svg")] bg-transparent bg-no-repeat bg-cover h-full'>
      <SedesCarousel />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 px-32 gap-y-8 py-20'>

        {
        SEDES.map((sede, index) => {
          return (
            <a href={sede.map} target='_blank' key={index} rel='noreferrer'>
              <SedeCard key={index} sede={sede} />
            </a>
          )
        })
      }
      </div>
    </div>
  )
}
