'use client'

export function AdminSidebar () {
  return (

    <nav className='w-40 h-[600px] bg-black/60 rounded-e-lg text-[#f6f6f6] absolute top-[20%]'>
      <ul className='h-full flex flex-col justify-center gap-5 ml-2'>
        <li>Seguimientos</li>
        <li>Agendas</li>
        <li>Recursos</li>
        <li>Cerrar sesión</li>
      </ul>
    </nav>

  )
}
