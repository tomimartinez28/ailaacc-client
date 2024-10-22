import React from 'react'
import logo from '../../assets/logo/logo.png'
export function WrittenLogo () {
  return (
    <a href='./'>
      <div className='flex justify-center items-center gap-2'>
        <img
          src={logo} alt='Logo de AILAACC UEP 195'
          className='w-12'
        />
        <h1 className='text-xl md:text-4xl flex flex-col font-bold text-black/70 text-nowrap'>
          AILAACC <span className='text-base text-end'>U.E.G.P. N˚ 195</span>
        </h1>

      </div>
    </a>
  )
}
