import { useLocation } from 'react-router-dom'

export function Footer () {
  const location = useLocation()

  return (
    <div className={`${location.pathname === '/' ? 'bg-customOrange' : 'bg-transparent'} p-4 `}>

      <footer className='bg-black/20 rounded-lg shadow'>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-[#f6f6f6]'>
          <span className='text-sm sm:text-center dark:text-gray-400'>© 2024 <a href='https://flowbite.com/' className='hover:underline'>A.I.L.A.A.C.C.</a> All Rights Reserved.
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0'>
            <li>
              <a href='#about' className='hover:underline me-4 md:me-6'>Sobre nosotros</a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>Politicas de privacidad</a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>Licensing</a>
            </li>
            <li>
              <a href='#' className='hover:underline'>Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>

  )
}
