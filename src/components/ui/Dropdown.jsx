import { useState, useRef, useEffect } from 'react'
import { UserIcon } from '../icons/UserIcon'
import { AdminIcon } from '../icons/AdminIcon'
import { LogoutIcon } from '../icons/LogoutIcon'

export function Dropdown ({ logout, username }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div ref={dropdownRef} className=''>
      <button className='flex py-1 px-3 bg-customOrange border-2 border-customOrange hover:bg-transparent text-backgroundColor font-bold hover:text-black transition-all duration-700 rounded-full' onClick={() => setIsOpen(!isOpen)}>

        <p className='font-semibold text-sm'>{username}</p>

      </button>
      {
        isOpen && (
          <ul className={`absolute right-3 z-50  w-60
          flex flex-col justify-center gap-2 
          transition-all duration-500
        py-2 bg-[#f6f6f6]
        border rounded-xl`}
          >
            <li className='hover:bg-customOrange hover:text-backgroundColor transition-all px-2 cursor-pointer duration-100 w-full h-full p-1 flex gap-2'><UserIcon /><a href='/profile'>Mi perfil</a></li>
            <li className='hover:bg-customOrange hover:text-backgroundColor transition-all px-2 cursor-pointer duration-100 w-full h-full p-1 flex gap-2 '><AdminIcon /><a href='/dashboard'>Administración</a></li>
            <li className='hover:bg-customOrange hover:text-backgroundColor transition-all px-2 cursor-pointer duration-100 w-full h-full p-1 flex gap-2' onClick={logout}><LogoutIcon /><button>Cerrar sesión</button></li>
          </ul>
        )
      }

    </div>
  )
}
