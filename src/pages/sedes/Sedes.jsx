import { useState } from 'react'
import img5 from '../../assets/img/img5.webp'
import { SedeCard } from './SedeCard'
import { SEDES } from '../../const'
import { LocationIcon } from '../../components/icons/LocationIcon'
import { CalendarIcon } from '../../components/icons/CalendarIcon'

export function Sedes () {
  const [selectedCard, setSelectedCard] = useState(0)
  const { name, address, map, schedule } = SEDES[selectedCard]
  const handleCardClick = (index) => {
    setSelectedCard(index)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='grid grid-cols-2 w-[100%] text-black/80 overflow-hidden shadow-2xl rounded-xl'>
        <div className=''>
          {
            SEDES.map((sede, index) => (
              <SedeCard key={index} selected={selectedCard === index} onClick={() => handleCardClick(index)} title={sede.name} address={sede.address} imgSrc={sede.img ? sede.img : img5} />
            )
            )
          }
        </div>

        <div className='h-full flex flex-col p-5 bg-backgroundColor justify-between'>
          <div className='flex flex-col justify-between'>
            <h2 className='md:text-6xl text-2xl font-bold '>{name}</h2>

            <div className='my-5 flex flex-col justify-center gap-2 md:text-xl text-base text-black/60'>
              <div className='flex items-center gap-2'>
                <LocationIcon width='20px' strokeWidth={2} />
                <p className=''>{address}</p>
              </div>
              <div className='flex items-center gap-2'>
                <CalendarIcon width='20px' strokeWidth={2} />
                <p className=''>{schedule}</p>
              </div>
            </div>
          </div>
          <div className='rounded-lg overflow-hidden h-[300px] w-[100%]'>
            <iframe src={map} width='100%' height='100%' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
          </div>
        </div>
      </div>
    </div>
  )
}
