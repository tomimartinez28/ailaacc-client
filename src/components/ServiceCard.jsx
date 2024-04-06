import { motion } from 'framer-motion'
import { useRef } from 'react'
export function ServiceCard ({ service }) {
  const { name, imgSrc } = service
  const scrollRef = useRef(null)

  return (
    <div ref={scrollRef}>
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div
          className=' size-64 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer'
        >

          <img className='rounded-full size-44 md:size-64' src={imgSrc} alt='' />
          <h5 className='font-bold text-center text-sm md:text-2xl mt-4 text-black/80'>
            {name}
          </h5>

        </div>
      </motion.div>
    </div>

  )
}
