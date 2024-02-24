import { ServiceCard } from './ServiceCard'
import { SERVICES } from '../const'
import { useId } from 'react'

export function ServicesSection () {
  const serviceId = useId()

  return (
    <section id='services' className='h-[500px] grid grid-cols-3 justify-center items-center gap-5 px-5 bg-gray-950'>
      {
      SERVICES.map(service => (

        <ServiceCard key={serviceId} service={service} />

      ))
    }
    </section>
  )
}
