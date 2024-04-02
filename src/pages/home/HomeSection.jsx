import { Button } from '../../components/Button'
export function HomeSection () {
  return (

    <main className='h-[600px] flex flex-col justify-center items-start'>
      <div className='h-full w-full flex flex-col items-center justify-center gap-12 px-5'>
        <h1 className='text-4xl text-center font-extrabold'>
          A.I.L.A.A.C.C.<br />U.E.P. 195
        </h1>
        <p className='text-base'>Abordaje interdisciplinario del lenguaje, la audicion, el aprendizaje, la conducta, y no se que mas. </p>
        <a href='#services'><Button /></a>

      </div>

    </main>

  )
}
