import React, { Fragment, useState } from 'react'
import { logout } from '../actions/auth'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import { MenuButton } from './MenuButton'
import { connect } from 'react-redux'

function Navbar ({ logout, isAuthenticated }) {
  const guestsLinks = () => (
    <>
      <Link to='/login'>
        <button className=' rounded-full bg-customYellow px-3 py-1 hover:bg-customYellow/65'>Iniciar sesión</button>
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
      <header className='bg-[#fff] shadow-xl'>
        <nav className='flex justify-between items-center w-[92%] mx-auto bg-[#fff] overflow-scroll'>
          <div>
            <img src={logo} alt='Logo de AILAACC' className='size-16' />
          </div>
          <div className={`
          bg-[#fff]
          md:static absolute
          flex items-center justify-center 
          md:w-auto w-full 
          md:min-h-fit 
          px-5 py-4
          ${isMenuOpen ? 'left-0' : 'left-[-100%]'} 
          top-[9.5%]
          transition-all duration-500`}
          >
            <ul className='flex md:flex-row flex-col items-center md:gap-[4vw] gap-8'>
              <a href='#'>Inicio</a>
              <a href='#services'>Nuestros servicios</a>
              <a href='#contact'>Contacto</a>
            </ul>
          </div>
          <div className='flex items-center gap-6'>
            {isAuthenticated ? authLinks() : guestsLinks()}
            <MenuButton onClick={toggleMenu} />
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
