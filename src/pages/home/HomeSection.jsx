import { Button } from '../../components/ui/Button'
import { motion } from 'framer-motion'

export function HomeSection () {
  return (

    <main className='h-[600px] md:h-screen flex flex-col justify-center items-start'>

      <motion.div className='h-full w-full flex flex-col items-center justify-center gap-12 px-5' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>

        <div>
          <h1 className='text-6xl lg:text-[200px] md:text-[100px]  text-center text-black/80'>

            A.I.L.A.A.C.C.<br />U.E.P. 195
          </h1>

          <p className=' text-xl md:text-2xl text-pretty'>
            Abordaje interdisciplinario del lenguaje, la audición, el aprendizaje, conducta , y la comunicación.
          </p>
        </div>

        <a href='#services'><Button classname='bg-customOrange border hover:bg-transparent hover:text-customOrange hover:border border-customOrange'>CONOCÉ NUESTROS SERVICIOS</Button></a>

      </motion.div>

    </main>

  )
}
