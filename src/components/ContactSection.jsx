import { ContactForm } from './ContactForm'

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
        <ContactForm />
      </aside>

    </section>
  )
}
