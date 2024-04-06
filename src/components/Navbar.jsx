import React, { useEffect, useState } from 'react'
import { logout } from '../actions/auth'
import { Link, useLocation } from 'react-router-dom'
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
        <button className='rounded-full py-1 px-2 hover:bg-backgroundColor hover:text-black transition-all duration-200'>INICIAR SESIÓN</button>
      </Link>
    </>
  )

  const authLinks = () => (
    <>
      <li>
        <button className='rounded-full py-1 px-2 hover:bg-backgroundColor hover:text-black transition-all duration-200' onClick={logout}>CERRAR SESIÓN</button>
      </li>
    </>
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className='h-16 flex items-center'>

        <nav className='flex w-full px-2'>
          {/*   <div>
            <img src={logo} alt='Logo de AILAACC' className='size-16' />
          </div> */}
          <div className='md:w-full flex items-center justify-center'>
            <div className={`
          text-[#f6f6f6]
          backdrop-blur-md
          border-2
          border-black/10
          bg-black/30
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
              <ul className='flex md:flex-row flex-col items-center gap-2 text-sm'>
                <a href={location !== '/' ? '/' : '/#'} className='rounded-full py-1 px-2 hover:bg-backgroundColor hover:text-black transition-all duration-200'>INICIO</a>
                <a href={location !== '/' ? '/#services' : '#services'} className='rounded-full py-1 px-2 hover:bg-backgroundColor hover:text-black transition-all duration-200'>NUESTROS SERVICIOS</a>
                <a href={location !== '/' ? '/#about' : '#about'} className='rounded-full py-1 px-2 hover:bg-backgroundColor hover:text-black transition-all duration-200'>SOBRE NOSOTROS</a>
                <a href={location !== '/' ? '/#contact' : '#contact'} className='rounded-full py-1 px-2 hover:bg-backgroundColor hover:text-black transition-all duration-200'>CONTACO</a>
                {isAuthenticated ? authLinks() : guestsLinks()}
              </ul>
            </div>
          </div>
          {
              !hideMenuButton &&
                <div className='flex items-center gap-2 min-w-36'>

                  <MenuButton onClick={toggleMenu} />

                </div>
}

        </nav>
      </header>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar)
