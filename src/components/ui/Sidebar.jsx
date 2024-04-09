'use client'

export function AdminSidebar () {
  return (

    <nav className='w-40 h-full bg-black/60 text-[#f6f6f6]'>
      <ul className='h-full flex flex-col justify-center gap-5 ml-2'>
        <li>Seguimientos</li>
        <li>Agendas</li>
        <li>Recursos</li>
        <li>Cerrar sesión</li>
      </ul>
    </nav>

  )
}
