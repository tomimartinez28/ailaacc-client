export function HomeSection () {
  return (
    <section className='h-screen items-center'>
      <main className='h-full w-full flex flex-col justify-center items-start bg-school bg-cover bg-gradient-to-r from-orange-400 to-orange-300'>
        <div className='m-2 w-2/4'>
          <h1 className='font-mono font-bold font text-7xl text-black/80'>
            A.I.L.A.A.C.C. <br /> U.E.P. 195
          </h1>
          <p className='text-pretty text-2xl'>Abordaje interdisciplinario del lenguaje, la audicion, el aprendizaje, la conducta, y no se que mas. </p>
        </div>
        <button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
          Shimmer
        </button>

      </main>
    </section>
  )
}
