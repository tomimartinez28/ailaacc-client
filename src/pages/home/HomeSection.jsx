import { Button } from '../../components/ui/Button'
import { TextGenerateEffect } from '../../components/ui/text-generate-effect'
export function HomeSection () {
  return (

    <main className='h-[600px] md:h-screen flex flex-col justify-center items-start'>
      <div className='h-full w-full flex flex-col items-center justify-center gap-12 px-5'>
        <h1 className='text-6xl md:text-9xl font-extrabold text-center text-black/80'>
          A.I.L.A.A.C.C.<br />U.E.P. 195
        </h1>
        <TextGenerateEffect words='Abordaje interdisciplinario del lenguaje, la audicion, el aprendizaje, la conducta, y no se que mas.' />

        <a href='#services'><Button className>CONOCÉ NUESTROS SERVICIOS</Button></a>

      </div>

    </main>

  )
}
