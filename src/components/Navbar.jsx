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
        <button className=' bg-blue-400 rounded-full px-5 py-2 hover:bg-blue-500'>Iniciar sesión</button>
      </Link>
    </>
  )

  const authLinks = () => (
    <>
      <li>
        <a href='#!' onClick={logout}>Logout</a>
      </li>
    </>
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div>
            <img src={logo} alt='Logo de AILAACC' className='size-16' />
          </div>
          <div className={`
          md:static absolute
          flex items-center justify-center 
          bg-white 
          md:w-auto w-full 
          md:min-h-fit 
          px-5 
          left-0 top-${isMenuOpen ? '[9%]' : '[-100%]'}
          transition-all duration-150`}
          >
            <ul className='flex md:flex-row flex-col items-center md:gap-[4vw] gap-8'>
              <Link to='#'>Inicio</Link>
              <Link>Nuestros servicios</Link>
              <Link>Contacto</Link>
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
