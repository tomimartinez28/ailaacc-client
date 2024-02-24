import { Input } from './Input'

export function ContactSection () {
  return (
    <section className='h-[500px] grid grid-cols-2 p-5 bg-gray-950 text-white' id='contact'>
      <article className='flex flex-col items-center gap-4'>
        <h3>Contacto</h3>
        <h2>Hacenos cualquier consulta</h2>
        <p>Mariano Moreno 551 - Pcia. Roque Sáenz Peña</p>
        <p>administracion@ailaaccuep195.com</p>
        <p>Cel: (+54)3644338436</p>
      </article>
      <aside>
        <form method='post' className='flex flex-col gap-5'>
          <div className='flex justify-between'>
            <div className='flex flex-col items-start w-2/4'>
              <label htmlFor='name'>Nombre</label>
              <Input id='name' type='text' />
            </div>
            <div className='flex flex-col items-start w-2/4'>
              <label htmlFor='lastname'>Apellido</label>
              <Input id='lastname' type='text' />
            </div>
          </div>
          <div className='flex flex-col items-start w-full'>
            <label htmlFor='email'>Email</label>
            <Input id='email' type='email' />
          </div>
          <div className='flex flex-col items-start'>
            <label htmlFor='message'>Dejanos un mensaje</label>
            <Input id='message' type='text' />
          </div>

          <button type='button' class='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900'>Enviar</button>
        </form>
      </aside>

    </section>
  )
}
