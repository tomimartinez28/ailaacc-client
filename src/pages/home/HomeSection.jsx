import { MyCarousel } from '../../components/ui/MyCarousel'
import { MainCard } from '../../components/ui/MainCard'
import { LocationIcon } from '../../components/icons/LocationIcon'
import { ServiceIcon } from '../../components/icons/ServiceIcon'
import { ObraSocialIcon } from '../../components/icons/ObraSocialIcon'
import { Modal } from '../../components/ui/Modal'
import { Sedes } from '../sedes/Sedes'
import { useState } from 'react'
import { ObrasSociales } from './ObrasSociales'
import { Services } from './Services'

export function HomeSection () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const renderModal = () => {
    switch (selectedCard) {
      case 'os':
        return (<ObrasSociales />)
      case 'lo':
        return (<Sedes />)
      case 'ss':
        return (<Services />)
      default:
        return (
          <h2>Mal</h2>
        )
    }
  }

  const onClose = () => {
    setIsOpen(false)
  }
  return (

    <main className='pb-10'>
      <MyCarousel />
      <div className='flex md:flex-row flex-col justify-between items-center px-20 mt-4 mb-4 w-[100%] md:h-[200px] gap-3'>
        <MainCard onClick={() => { setIsOpen(true); setSelectedCard('os') }} svg={<ObraSocialIcon />} title='OBRAS SOCIALES' body='Trabajamos con todas las obras sociales' />
        <MainCard onClick={() => { setIsOpen(true); setSelectedCard('lo') }} svg={<LocationIcon height='80' />} title='SEDES' body='Conocé todas nuestras sedes.' />
        <MainCard onClick={() => { setIsOpen(true); setSelectedCard('ss') }} svg={<ServiceIcon />} title='SERVICIOS' body='Conocé los servicios que brindamos.' />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        {renderModal()}
      </Modal>

    </main>

  )
}
