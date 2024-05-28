import { MyCarousel } from '../../components/ui/MyCarousel'
import { MainCard } from '../../components/ui/MainCard'
import { Modal } from '../../components/ui/Modal'
import { Sedes } from '../sedes/Sedes'
import { useState } from 'react'
import { ObrasSociales } from './ObrasSociales'
import { WorkWithUs } from './WorkWithUs'
import location from '../../assets/svg/location.svg'
import os from '../../assets/svg/os.svg'
import workwithus from '../../assets/svg/workwithus.svg'

export function HomeSection () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const renderModal = () => {
    switch (selectedCard) {
      case 'os':
        return (<ObrasSociales />)
      case 'lo':
        return (<Sedes />)
      case 'work':
        return (<WorkWithUs />)
    }
  }

  const onClose = () => {
    setIsOpen(false)
  }
  return (

    <main className='pb-10'>
      <MyCarousel />
      <div className='flex md:flex-row flex-col justify-between items-center px-20 mt-4 mb-4 w-[100%] h-[800px] md:h-[350px] gap-10 md:gap-3 '>
        <MainCard onClick={() => { setIsOpen(true); setSelectedCard('os') }} imgSrc={os} title='OBRAS SOCIALES' body='Trabajamos con todas las obras sociales' />
        <MainCard onClick={() => { setIsOpen(true); setSelectedCard('lo') }} imgSrc={location} title='SEDES' body='Conocé todas nuestras sedes.' />
        <MainCard onClick={() => { setIsOpen(true); setSelectedCard('work') }} imgSrc={workwithus} title='TRABAJA CON NOSOTROS' body='' />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        {renderModal()}
      </Modal>

    </main>

  )
}
