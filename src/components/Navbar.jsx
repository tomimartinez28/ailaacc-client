import React, { useEffect, useState } from 'react'
import { logout } from '../actions/auth'
import { Link, useLocation } from 'react-router-dom'
import { MenuButton } from './ui/MenuButton'
import { connect } from 'react-redux'
import logo from '../assets/logo/logo.png'

function Navbar ({ logout, isAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para determinar si se debe ocultar el botón del menú
  const shouldHideMenuButton = () => window.innerWidth > 768

  const [hideMenuButton, setHideMenuButton] = useState(shouldHideMenuButton())

  // Función para manejar el cambio de tamaño de la ventana
  const handleResize = () => {
    // Actualiza el estado en función del ancho de la ventana
    setHideMenuButton(shouldHideMenuButton())
  }

  useEffect(() => {
    if (isMenuOpen) {
      // Agregar el estilo al cuerpo para deshabilitar el scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Eliminar el estilo del cuerpo para habilitar el scroll
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  useEffect(() => {
    // Agrega el evento de cambio de tamaño de la ventana al montar el componente
    window.addEventListener('resize', handleResize)

    // Elimina el evento de cambio de tamaño de la ventana al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Se ejecuta solo una vez al montar el componente

  const location = useLocation()

  const guestsLinks = () => (
    <>
      <Link to='/login'>
        <button className='py-1 px-3 bg-customOrange border-2 border-customOrange hover:bg-transparent text-backgroundColor font-bold hover:text-black transition-all duration-700 rounded-full'>INICIAR SESIÓN</button>
      </Link>
    </>
  )

  const authLinks = () => (
    <>

      <button onClick={logout}>CERRAR SESIÓN</button>

    </>
  )

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      window.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      <header className='flex items-center border justify-between px-5 md:h-[150px]'>

        <a href='/'>
          <div className='flex justify-center items-center gap-2'>
            <img
              src={logo} alt='Logo de AILAACC UEP 195'
              className='w-12'
            />
            <h1 className='text-xl md:text-4xl flex flex-col font-bold text-black/75 text-nowrap'>
              AILAACC <span className='text-base text-end'>U.E.G.P. N˚ 195</span>
            </h1>

          </div>
        </a>

        <nav className='flex px-2 text-sm md:justify-center items-center justify-between z-10'>

          <div className={`
          text-[#f6f6f6]
          bg-customOrange
          h-screen
          md:h-10
          
          md:text-black
          md:bg-transparent
          md:static absolute
          md:w-auto w-full
          md:min-h-fit 
          flex items-center justify-center 
           
          
          px-5 py-1
          ${isMenuOpen ? 'left-0' : 'left-[-100%]'} 
          top-[0%]
          transition-all duration-1000`}
          >
            <ul className='flex md:flex-row flex-col md:items-center md:gap-2 lg:gap-5 gap-12 md:text-sm text-xl text-nowrap'>
              <a onClick={!hideMenuButton ? toggleMenu : undefined} href={location !== '/' ? '/#top' : '#top'} className='hover:font-bold md:hover:text-customOrange transition-all duration-100 hover:scale-110'>INICIO</a>
              <a onClick={!hideMenuButton ? toggleMenu : undefined} href={location !== '/' ? '/services' : '/services'} className='hover:font-bold md:hover:text-customOrange transition-all duration-100 hover:scale-110'>NUESTROS SERVICIOS</a>
              <a onClick={!hideMenuButton ? toggleMenu : undefined} href={location !== '/' ? '/#about' : '#about'} className='hover:font-bold md:hover:text-customOrange transition-all duration-100 hover:scale-110'>SOBRE NOSOTROS</a>
              <a onClick={!hideMenuButton ? toggleMenu : undefined} href={location !== '/' ? '/#contact' : '#contact'} className='hover:font-bold md:hover:text-customOrange transition-all duration-100 hover:scale-110'>CONTACO</a>

            </ul>
          </div>

        </nav>
        {
            !hideMenuButton

              ? (

                <div className='flex items-center gap-2'>

                  <MenuButton onClick={toggleMenu} />

                </div>
                )

              : (
                <div className=''>
                  {isAuthenticated ? authLinks() : guestsLinks()}
                </div>
                )
          }

      </header>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar)
