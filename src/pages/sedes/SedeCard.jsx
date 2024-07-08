import { LocationIcon } from '../../components/icons/LocationIcon'
import { CalendarIcon } from '../../components/icons/CalendarIcon'
export function SedeCard ({ sede, isEven }) {
  return (
    <div className={`flex flex-row p-4 ${isEven ? '' : 'flex-row-reverse'} items-start justify-evenly mt-4`}>

      <div className='flex flex-col gap-4'>
        <h2 className='md:text-4xl'>{sede.name}</h2>
        <ul className='flex flex-col gap-1'>
          <li className='flex'><LocationIcon height={20} />{sede.address}</li>
          <li className='flex'><CalendarIcon height={20} />{sede.schedule}</li>
        </ul>
        <div className='flex gap-2'>
          <button className='bg-customOrange border-2 p-2 text-backgroundColor hover:bg-transparent hover:text-black/80 border-customOrange rounded-full transition-all duration-250'>Ver mapa</button>

        </div>
      </div>
      <div>
        <img src={sede.img} alt={`Imagen de la sede de ${sede.name}`} className='rounded-md size-52' />
      </div>

    </div>
  )
}
