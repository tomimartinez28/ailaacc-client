import { Button } from '../../components/ui/Button'
import { motion } from 'framer-motion'
import logo from '../../assets/logo/logo.png'

export function HomeSection () {
  return (

    <main className='h-[600px] md:h-screen flex flex-col justify-center items-start'>

      <motion.div className='h-full w-full flex flex-col items-center justify-center gap-12 px-5'>

        <div className='flex justify-center items-center py-5'>
          <motion.img
            animate={
              {
                scale: 2

              }
            }
            transition={{ duration: 5 }}
            src={logo} alt='Logo de AILAACC UEP 195'
            className='w-32 md:w-72 opacity-25 -z-10 absolute'
          />
          <h1 className='md:text-8xl text-4xl flex flex-col font-bold text-black/75'>
            A.I.L.A.A.C.C. <span className='text-2xl text-end md:text-4xl'>U.E.G.P. N˚ 195</span>
          </h1>

        </div>

        <a href='#services'><Button classname='bg-customOrange border hover:bg-transparent hover:text-customOrange hover:border border-customOrange'>CONOCÉ NUESTROS SERVICIOS</Button></a>

      </motion.div>

    </main>

  )
}
