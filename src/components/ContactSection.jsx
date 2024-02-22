export function ContactSection () {
  return (
    <section className='h-[500px] grid grid-cols-2 p-5' id='contact'>
      <article className='flex flex-col items-center gap-4'>
        <h3>Contacto</h3>
        <h2>Hacenos cualquier consulta</h2>
        <p>Mariano Moreno 551 - Pcia. Roque Sáenz Peña</p>
        <p>administracion@ailaaccuep195.com</p>
        <p>Cel: (+54)3644338436</p>
      </article>
      <aside>
        <form method='post' className='flex flex-col gap-5'>
          <div className='flex justify-center'>
            <div className='flex flex-col items-start'>
              <label htmlFor='name'>Nombre</label>
              <input type='text' id='name' />
            </div>
            <div className='flex flex-col items-start'>
              <label htmlFor='lastname'>Apellido</label>
              <input type='text' id='lastname' />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='flex flex-col items-start'>
            <label htmlFor='message'>Dejanos un mensaje</label>
            <input type='text' id='message' />
          </div>

          <button type='button' class='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900'>Yellow</button>
        </form>
      </aside>

    </section>
  )
}
