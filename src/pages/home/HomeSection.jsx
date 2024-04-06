import { Button } from '../../components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowSvg } from '../../components/ui/ArrowSvg'
export function HomeSection () {
  return (

    <main className='h-[600px] md:h-screen flex flex-col justify-center items-start'>

      <motion.div className='h-full w-full flex flex-col items-center justify-center gap-12 px-5' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>

        <div>
          <h1 className='text-6xl md:text-9xl text-center text-black/80'>

            A.I.L.A.A.C.C.<br />U.E.P. 195
          </h1>

          <p className=' text-xl md:text-2xl text-pretty'>
            Abordaje interdisciplinario del lenguaje, la audicion, el aprendizaje, la conducta, y la comunicación.
          </p>
        </div>

        <div
          className=' animate-bounce'
        >
          <a href='#services'><Button>CONOCÉ NUESTROS SERVICIOS</Button></a>
        </div>

      </motion.div>

    </main>

  )
}
