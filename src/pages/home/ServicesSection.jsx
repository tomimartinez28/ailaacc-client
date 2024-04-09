import { ServiceCard } from '../../components/ServiceCard'
import { SERVICES } from '../../const'
import { motion } from 'framer-motion'
export function ServicesSection () {
  return (
    <section
      id='services' className='flex flex-col md:h-[400px] md:flex-row justify-around items-center

    '
    >
      {

      SERVICES.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.5, duration: 1 }}
          viewport={{ once: true }}

        >
          <ServiceCard service={service} />
        </motion.div>
      ))
    }
    </section>
  )
}
