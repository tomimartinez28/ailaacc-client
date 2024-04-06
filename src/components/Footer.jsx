export function Footer () {
  return (
    <div className='p-4'>

      <footer className='bg-black/20 rounded-lg shadow'>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2024 <a href='https://flowbite.com/' className='hover:underline'>Tomas Martinez</a>. All Rights Reserved.
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>Sobre nosotros</a>
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
