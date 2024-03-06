import logo from '../assets/logo/logo.png'
import { useState, useRef } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react'

export function Navbar () {
  const [openModal, setOpenModal] = useState(false)
  const emailInputRef = useRef(null)

  return (
    <>
      <nav className='bg-gray-900/60 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} className='h-8' alt='LOGO DE AILAACC' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>A.I.L.A.A.C.C.</span>
          </a>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <button onClick={() => setOpenModal(true)} type='button' className='text-black bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Iniciar sesión</button>
            <button data-collapse-toggle='navbar-sticky' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-sticky' aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
              </svg>
            </button>
          </div>
          <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <a href='#' className='block py-2 px-3 text-white hover:text-yellow-400 rounded md:bg-transparent md:text-gray-900 md:p-0 transition' aria-current='page'>Inicio</a>
              </li>
              <li>
                <a href='#services' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Nuestros servicios</a>
              </li>
              <li>
                <a href='#about' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Sobre nosotros</a>
              </li>
              <li>
                <a href='#contact' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal show={openModal} size='md' popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
          <Modal.Header />
          <Modal.Body>

            <form className='space-y-6'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Iniciar sesión</h3>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='email' value='Tu email' />
                </div>
                <TextInput id='email' ref={emailInputRef} placeholder='tomas@gmail.com' required />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='password' value='Contraseña' />
                </div>
                <TextInput id='password' type='password' required />
              </div>

              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='remember' />
                  <Label htmlFor='remember'>Recordarme</Label>
                </div>
                <a href='#' className='text-sm text-cyan-700 hover:underline dark:text-cyan-500'>
                  Olvidaste tu contraseña
                </a>
              </div>

              <div className='w-full'>
                <Button>Ingresar</Button>
              </div>

              <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
                No tenes una cuenta?&nbsp;
                <a href='#' className='text-cyan-700 hover:underline dark:text-cyan-500'>
                  Crear cuenta
                </a>
              </div>
            </form>

          </Modal.Body>

        </Modal>

      </Modal>
    </>
  )
}
