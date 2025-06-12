import React, { useEffect, useState } from 'react'
import { logout } from '../actions/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { WrittenLogo } from './ui/WrittenLogo'
import { Dropdown } from './ui/Dropdown'
import HamburgerMenu from './ui/HamburguerIcon'
import useIsDesktop from '../customHooks/useIsDesktop'

function Navbar ({ logout, isAuthenticated, user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useIsDesktop()
  const location = useLocation()
  const navigate = useNavigate()
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  const handleNavigation = (path, id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen])

  const guestsLinks = () => (
    <>
      <Link to='/login'>
        <button className='py-1 px-3 bg-customOrange border-2 border-customOrange hover:bg-transparent text-backgroundColor font-bold hover:text-black transition-all duration-700 rounded-full text-sm'>INICIAR SESIÓN</button>
      </Link>
    </>
  )

  const authLinks = () => (
    <>
      {
          user && <Dropdown logout={logout} username={`${user.name} ${user.last_name}`} />
        }
    </>
  )

  return (
    <>
      <header className='flex items-center border border-black/20 justify-between px-5 py-3 md:h-[150px]'>
        <WrittenLogo />

        <nav className='flex px-2 text-sm md:justify-center items-center justify-between z-10'>

          <div className={`
          text-black/70
          bg-backgroundColor
          h-screen
          px-5 py-20
          absolute top-20
          
          
          md:h-10
          md:text-black
          md:bg-transparent
          md:static 
          md:w-auto w-full
          md:min-h-fit 
          flex md:items-center md:justify-center   
          
          ${isMenuOpen ? 'left-0' : 'left-[-100%]'} 
          
          transition-all duration-500`}
          >
            <ul className='flex md:flex-row flex-col md:items-center gap-2 lg:gap-5 text-base text-nowrap w-full'>

              <Link onClick={!isDesktop ? toggleMenu : undefined} to={location !== '/' ? '/#top' : '#top'} className='p-2 rounded-full hover:font-bold md:hover:text-customOrange md:hover:bg-customOrange/10 transition-all duration-100 flex justify-between'>INICIO</Link>

              <Link onClick={!isDesktop ? toggleMenu : undefined} to={location !== '/' ? '/#about' : '#about'} className='p-2 rounded-full hover:font-bold md:hover:text-customOrange md:hover:bg-customOrange/10 transition-all duration-100'>SOBRE NOSOTROS</Link>
              <Link onClick={!isDesktop ? toggleMenu : undefined} to={location !== '/' ? '/#contact' : '#contact'} className='p-2 rounded-full hover:font-bold md:hover:text-customOrange md:hover:bg-customOrange/10 transition-all duration-100'>CONTACO</Link>
              <Link onClick={!isDesktop ? toggleMenu : undefined} to='/sedes' className='p-2 rounded-full hover:font-bold md:hover:text-customOrange md:hover:bg-customOrange/10 transition-all duration-100'>SEDES</Link>

            </ul>
          </div>

        </nav>
        {
            !isDesktop

              ? (

                <div className='flex items-center gap-2'>
                  <HamburgerMenu
                    onClick={toggleMenu}
                    isMenuOpen={isMenuOpen}
                  />
                </div>
                )

              : (
                <div className='' />
                )
          }

      </header>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, { logout })(Navbar)
