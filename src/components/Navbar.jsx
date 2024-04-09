import React, { useEffect, useState } from 'react'
import { logout } from '../actions/auth'
import { Link, useLocation } from 'react-router-dom'
import { MenuButton } from './ui/MenuButton'
import { connect } from 'react-redux'

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
        <button classname=''>INICIAR SESIÓN</button>
      </Link>
    </>
  )

  const authLinks = () => (
    <>

      <button classname='' onClick={logout}>CERRAR SESIÓN</button>

    </>
  )

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className='h-16 flex items-center'>

        <nav className='flex w-full px-2 text-sm md:justify-center items-center justify-between'>
          {/*   <div>
            <img src={logo} alt='Logo  de AILAACC' className='size-16' />
          </div> */}

          <div className={`
          text-[#f6f6f6]
          bg-customOrange
          md:text-black
          
          md:bg-transparent
          h-screen
          md:static absolute
          flex items-center justify-center 
          md:w-auto w-full 
          md:min-h-fit 
          px-5 py-1
          ${isMenuOpen ? 'left-0' : 'left-[-100%]'} 
          top-[9.5%]
          transition-all duration-500`}
          >
            <ul className='flex md:flex-row flex-col items-center gap-5 '>
              <a href={location !== '/' ? '/' : '/#'} className='hover:font-bold hover:text-customOrange transition-all duration-100 hover:scale-110'>INICIO</a>
              <a href={location !== '/' ? '/#services' : '#services'} className='hover:font-bold hover:text-customOrange transition-all duration-100 hover:scale-110'>NUESTROS SERVICIOS</a>
              <a href={location !== '/' ? '/#about' : '#about'} className='hover:font-bold hover:text-customOrange transition-all duration-100 hover:scale-110'>SOBRE NOSOTROS</a>
              <a href={location !== '/' ? '/#contact' : '#contact'} className='hover:font-bold hover:text-customOrange transition-all duration-100 hover:scale-110'>CONTACO</a>

            </ul>
          </div>

          {
            !hideMenuButton &&
              <div className='flex items-center gap-2'>

                <MenuButton onClick={toggleMenu} />

              </div>
          }
          <div className=' md:absolute md:end-4'>
            {isAuthenticated ? authLinks() : guestsLinks()}
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
