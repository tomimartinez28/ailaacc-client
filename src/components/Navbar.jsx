import React, { useEffect, useState } from 'react'
import { logout } from '../actions/auth'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import { MenuButton } from './ui/MenuButton'
import { connect } from 'react-redux'

function Navbar ({ logout, isAuthenticated }) {
  const [hideMenuButton, setHideMenuOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 768) {
        setHideMenuOpen(true)
      } else {
        setHideMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const location = useLocation()

  const guestsLinks = () => (
    <>
      <Link to='/login'>
        <button className='text-[#f6f6f6] rounded-full bg-customOrange border-2 border-customOrange px-3 py-1 hover:bg-transparent hover:text-black transition-all duration-200'>INICIAR SESIÓN</button>
      </Link>
    </>
  )

  const authLinks = () => (
    <>
      <li>
        <a href='#!' onClick={logout}>Cerrar sesión</a>
      </li>
    </>
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className=''>
        <nav className='flex justify-between items-center w-full mx-auto overflow-scroll px-2'>
          <div>
            <img src={logo} alt='Logo de AILAACC' className='size-16' />
          </div>
          <div className={`
          text-[#f6f6f6]
          backdrop-blur-md
          bg-black/60
          md:rounded-full
          md:static absolute
          flex items-center justify-center 
          md:w-auto w-full 
          md:min-h-fit 
          px-5 py-1
          ${isMenuOpen ? 'left-0' : 'left-[-100%]'} 
          top-[9.5%]
          transition-all duration-500`}
          >
            <ul className='flex md:flex-row flex-col items-center md:gap-[4vw] gap-8'>
              <a href={location !== '/' ? '/' : '/#'}>Inicio</a>
              <a href={location !== '/' ? '/#services' : '#services'}>Nuestros servicios</a>
              <a href={location !== '/' ? '/#about' : '#about'}>Sobre nosotros</a>
              <a href={location !== '/' ? '/#contact' : '#contact'}>Contacto</a>
            </ul>
          </div>
          <div className='flex items-center gap-2'>
            {isAuthenticated ? authLinks() : guestsLinks()}

            {
              !hideMenuButton &&
                <MenuButton onClick={toggleMenu} />
            }

          </div>

        </nav>
      </header>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar)
