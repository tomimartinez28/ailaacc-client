import { ServiceCard } from '../../components/ServiceCard'
import { SERVICES } from '../../const'

export function ServicesSection () {
  return (
    <section id='services' className='grid grid-cols-3 justify-center items-center gap-5 px-5 bg-gray-950'>
      {
      SERVICES.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))
    }
    </section>
  )
}