import { ContactForm } from '../../components/ContactForm'

export function ContactSection () {
  return (
    <section className='h-[500px] flex flex-col items-center px-4' id='contact'>
      <h3 className=' text-2xl font-semibold'>CONTACTO</h3>
      <article className='mt-5'>
        <ContactForm />
      </article>

      <article className='flex flex-col items-center gap-4'>
        <p>Mariano Moreno 551 - Pcia. Roque Sáenz Peña</p>
        <p>administracion@ailaaccuep195.com</p>
        <p>Cel: (+54)3644338436</p>
      </article>

    </section>
  )
}
