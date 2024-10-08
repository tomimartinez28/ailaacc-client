import { useState } from 'react'
import { LocationIcon } from '../../components/icons/LocationIcon'
import { CalendarIcon } from '../../components/icons/CalendarIcon'
import { Modal } from '../../components/ui/Modal'

export function SedeCard ({ sede }) {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <div className='flex flex-col h-96 w-72 bg-backgroundColor rounded rounded-t-xl rounded-ee-xl cursor-pointer overflow-hidden shadow-md'>
      <div className='w-full h-[70%] overflow-hidden'>
        <img src={sede.img} className='object-cover h-full w-full' alt='' />
      </div>
      <div className='px-2 flex flex-col justify-center py-3'>
        <div className='flex gap-1 items-center'>
          <LocationIcon width={20} /><p className='flex items-center text-black/60'>{sede.address}</p>
        </div>
        <h3 className='md:text-2xl text-xl font-medium text-customOrange'>{sede.name}</h3>
        <div className='flex flex-col justify-center text-black/70'>

          <p className='flex items-center'>Lunes a viernes de   {sede.schedule}</p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className='w-full h-full flex items-center justify-center'>
          <iframe className='w-[600px] h-[600px] rounded-lg' src={sede.map} frameborder='0' />
        </div>
      </Modal>

    </div>
  )
}
