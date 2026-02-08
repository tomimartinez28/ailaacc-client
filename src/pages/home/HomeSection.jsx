import React, { useState } from 'react'
import { ServicesCarousel } from '../../components/ui/ServicesCarousel'
import { MainCard } from '../../components/ui/MainCard'
import { Modal } from '../../components/ui/Modal'
import { Sedes } from '../sedes/Sedes'
import { WorkWithUs } from './WorkWithUs'
import location from '../../assets/svg/location.svg'
import contact from '../../assets/svg/contact.svg'
import workwithus from '../../assets/svg/workwithus.svg'

export function HomeSection () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const renderModal = () => {
    switch (selectedCard) {
      case 'os':
        return
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
      <ServicesCarousel />
      <div className='flex md:flex-row flex-col justify-between items-center px-20 mt-4 mb-4 w-[100%] h-[800px] md:h-[350px] gap-10 md:gap-3 '>
        <a href='https://wa.link/r2dav6' target='_blank' rel='noreferrer noopener'>
          <MainCard imgSrc={contact} title='CONTACTANOS' body='Trabajamos con todas las obras sociales' />
        </a>
        <a href='/sedes'>
          <MainCard imgSrc={location} title='SEDES' body='Conocé todas nuestras sedes.' />
        </a>
        <MainCard onClick={() => { setIsOpen(true); setSelectedCard('work') }} imgSrc={workwithus} title='TRABAJA CON NOSOTROS' body='' />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        {renderModal()}
      </Modal>

    </main>

  )
}
