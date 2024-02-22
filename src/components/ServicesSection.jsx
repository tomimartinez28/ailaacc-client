import { ServiceCard } from './ServiceCard'
import { SERVICES } from '../const'
import { useId } from 'react'

export function ServicesSection () {
  const serviceId = useId()

  return (
    <section id='services' className='h-screen grid grid-cols-2 justify-center items-center gap mt-8 p-5 '>
      {
      SERVICES.map(service => (

        <ServiceCard key={serviceId} service={service} />

      ))
    }
    </section>
  )
}
