import React from 'react'
import { WrittenLogo } from './ui/WrittenLogo'
import { WppIcon } from './icons/WppIcon'
import { FacebookIcon } from './icons/FacebookIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import useWindowDimensions from '../customHooks/useWindowDimensions'

export function Footer () {
  const location = window.location.pathname
  const { width } = useWindowDimensions()

  const CustomHR = () => {
    if (width < 768) {
      return (
        <div className='w-full flex items-center justify-center'>
          <hr className='w-52 border-black/30' />
        </div>
      )
    }
  }

  return (

    <footer className='
    flex flex-col
    gap-5
    items-center justify-around
    w-full md:h-[350px] h-[600px]
    bg-backgroundColor
    text-black/70'

    >
      <div className='grid md:grid-cols-3 grid-cols-1 w-full gap-8 items-center'>
        <div className='md:h-16  flex flex-col items-center justify-center md:border-r-[2px]  border-black/30 py-4'>
          <WrittenLogo />
        </div>
        <CustomHR />

        <div className='md:h-16 flex items-center justify-center gap-4 md:border-r-[2px]  border-black/30 py-4'>
          <WppIcon size={width < 768 ? 30 : 50} />
          <div className='flex flex-col gap-2 md:text-base text-sm'>
            <p>¿Tenés consultas?</p>
            <p className=' md:text-2xl text-xl text-black/80'>3644 359654</p>
            <p>Lunes a viernes de 7 a 20hs.</p>
          </div>
        </div>
        <CustomHR />

        <div className='md:h-16 flex flex-col items-center justify-center gap-2 py-4 md:text-base text-sm'>
          <div className='flex flex-col gap-2'>
            <a href={`${location === '/sedes' ? '/#about' : '#about'}`} className='hover:text-customOrange'>SOBRE NOSOTROS</a>

            <a href='/sedes' className='hover:text-customOrange'>NUESTRAS SEDES</a>

            <a href={`${location === '/sedes' ? '/#contact' : '#contact'}`} className='hover:text-customOrange'>CONTACTO</a>
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center gap-4'>

        <div className='flex flex-col items-center'>
          <div className='flex gap-3'>
            <a href='https://www.facebook.com/profile.php?id=100083364459405' target='_blank' rel='noreferrer' className='hover:text-customOrange'><FacebookIcon size={28} /></a>
            <a href='https://www.linkedin.com/company/ailaacc/' target='_blank' rel='noreferrer' className='hover:text-customOrange'><LinkedinIcon size={28} /></a>
            <a href='https://www.instagram.com/ailaacc_sp/' target='_blank' rel='noreferrer' className='hover:text-customOrange'><InstagramIcon size={28} /></a>
          </div>
          <p className=' font-thin'>Copyright. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

  )
}
