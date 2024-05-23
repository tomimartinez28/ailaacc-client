import { motion } from 'framer-motion'
export function MainCard ({ imgSrc, title, onClick }) {
  return (
    <motion.div onClick={onClick} whileHover={{ scale: 1.06 }} className='mt-10 h-40 w-72 flex flex-col items-center justify-center  border-black cursor-pointer'>
      <div className='mt-8'>
        <img src={imgSrc} alt='test' className=' size-40' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='md:text-xl text-xl mt-3 text-nowrap text-black/90'>{title}</h3>

      </div>
    </motion.div>

  )
}
