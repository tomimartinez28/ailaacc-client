import React from 'react'
import { TimeCounterIcon } from '../icons/TimeCounterIcon'
import { PenIcon } from '../icons/PenIcon'

export function AdminSidebar ({ setSelectedSection, selectedSection }) {
  return (
    <nav className='w-[18%] h-full bg-fixed border-r border-black/20'>
      <ul className='h-full flex flex-col gap-2 mt-8 px-2 text-sm md:text-base'>
        <li
          onClick={() => setSelectedSection('timecounter')}
          className={`${selectedSection === 'timecounter' ? 'bg-customOrange text-backgroundColor' : 'text-black/80'} flex gap-2 rounded-md px-2 py-1 cursor-pointer hover:bg-customOrange hover:text-backgroundColor `}
        >
          <TimeCounterIcon />
          Contador de horas
        </li>
        <li
          onClick={() => setSelectedSection('tracing')}
          className={`${selectedSection === 'tracing' ? 'bg-customOrange text-backgroundColor' : 'text-black/80'} flex gap-2 rounded-md px-2 py-1 cursor-pointer hover:bg-customOrange hover:text-backgroundColor `}
        >
          <PenIcon />
          Seguimientos
        </li>
      </ul>
    </nav>
  )
}
