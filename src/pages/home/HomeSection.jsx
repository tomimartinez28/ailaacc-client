export function HomeSection () {
  return (
    <section className='h-screen items-center'>
      <main className='h-full w-full flex flex-col justify-center items-start bg-school bg-cover'>
        <div className='m-2 w-2/4'>
          <h1 className='font-mono font-bold font text-7xl text-black/80'>
            A.I.L.A.A.C.C. <br /> U.E.P. 195
          </h1>
          <p className='text-pretty text-2xl'>Abordaje interdisciplinario del lenguaje, la audicion, el aprendizaje, la conducta, y no se que mas. </p>
          <button type='button' className='text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 dark:focus:ring-yellow-900'>Forma parte!</button>
        </div>

      </main>
    </section>
  )
}
