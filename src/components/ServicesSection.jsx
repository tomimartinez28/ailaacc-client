import { ServiceCard } from './ServiceCard'
import { SERVICES } from '../const'

export function ServicesSection () {
  return (
    <section id='services' className='h-[500px] grid grid-cols-3 justify-center items-center gap-5 px-5 bg-gray-950'>
      {
      SERVICES.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))
    }
    </section>
  )
}
