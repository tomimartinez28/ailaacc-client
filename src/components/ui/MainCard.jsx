import { motion } from 'framer-motion'
export function MainCard ({ svg, title, body, onClick }) {
  return (
    <motion.div onClick={onClick} whileHover={{ scale: 1.06 }} className='mt-10 h-40 w-72 flex flex-col items-center justify-center text-black/75 border-black cursor-pointer'>
      <div className='mt-5'>
        {svg}
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='md:text-2xl text-xl font-semibold mt-3 text-nowrap'>{title}</h3>

      </div>
    </motion.div>

  )
}
