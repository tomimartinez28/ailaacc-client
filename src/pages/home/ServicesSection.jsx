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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}

        >
          <ServiceCard service={service} />
        </motion.div>
      ))
    }
    </section>
  )
}
