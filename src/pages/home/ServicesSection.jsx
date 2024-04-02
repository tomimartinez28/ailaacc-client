import { ServiceCard } from '../../components/ServiceCard'
import { SERVICES } from '../../const'

export function ServicesSection () {
  return (
    <section
      id='services' className='flex flex-col md:flex-row justify-center items-center
    gap-5 p-5
    bg-black/80
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
