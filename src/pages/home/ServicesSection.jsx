import { ServiceCard } from '../../components/ServiceCard'
import { SERVICES } from '../../const'

export function ServicesSection () {
  return (
    <section
      id='services' className='flex flex-col md:h-[400px] md:flex-row justify-around items-center

    '
    >
      {
      SERVICES.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))
    }
    </section>
  )
}
