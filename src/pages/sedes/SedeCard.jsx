import { useState } from 'react'
import { LocationIcon } from '../../components/icons/LocationIcon'
import { CalendarIcon } from '../../components/icons/CalendarIcon'
import { motion } from 'framer-motion'
import { Modal } from '../../components/ui/Modal'

export function SedeCard ({ sede, isEven }) {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <div className={`flex md:flex-row flex-col w-[80%]p-4 ${isEven ? '' : 'md:flex-row-reverse'} items-start justify-evenly mt-4 gap-5`}>

      <motion.div
        initial={{ x: isEven ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className='flex flex-col gap-4'
      >
        <hr className='h-1 w-14 bg-customOrange border-customOrange' />
        <h2 className='md:text-4xl text-2xl font-bold'>{sede.name}</h2>
        <ul className='flex flex-col gap-1 md:text-xl text-base text-black/70 '>
          <li className='flex gap-2'><LocationIcon height={20} />{sede.address}</li>
          <li className='flex gap-2'><CalendarIcon height={20} />{sede.schedule}</li>
        </ul>
        <div className='flex gap-2'>
          <button onClick={() => setIsOpen(true)} className='bg-customOrange md:text-base text-sm border-2 p-2 text-backgroundColor/80 hover:bg-transparent hover:text-black/60 border-customOrange rounded-full transition-all duration-250'>Ver mapa</button>

        </div>
      </motion.div>
      <motion.div
        initial={{ x: isEven ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}

      >
        <img src={sede.img} alt={`Imagen de la sede de ${sede.name}`} className='md:size-[400px] size-[200px] shadow-2xl rounded-2xl hover:scale-105 transition-all duration-500' />
      </motion.div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className='w-full h-full flex items-center justify-center'>
          <iframe className='w-[600px] h-[600px] rounded-lg' src={sede.map} frameborder='0' />
        </div>
      </Modal>

    </div>
  )
}
