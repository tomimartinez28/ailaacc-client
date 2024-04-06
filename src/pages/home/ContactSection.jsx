import { ContactForm } from '../../components/ContactForm'
import { WppIcon } from '../../components/icons/WppIcon'
import { MailIcon } from '../../components/icons/MailIcon'
import { SocialPill } from '../../components/ui/SocialPill'
import { InstagramIcon } from '../../components/icons/InstagramIcon'
import { FacebookIcon } from '../../components/icons/FacebookIcon'
import { LinkedinIcon } from '../../components/icons/LinkedinIcon'

export function ContactSection () {
  return (
    <section className='h-[600px] p-4 flex flex-col' id='contact'>
      <h3 className='text-xl md:text-2xl mb-5 text-customOrange font-mono'>contactanos</h3>
      <div className='md:grid grid-cols-2'>
        <div className='flex flex-col md:justify-center'>
          <ul className='w-full flex gap-4 items-center'>

            <a href='https://www.instagram.com/ailaacc_sp/' target='_blank' rel='noreferrer'><SocialPill> <InstagramIcon /> </SocialPill></a>
            <a href='https://www.facebook.com/profile.php?id=100083364459405' target='_blank' rel='noreferrer'><SocialPill> <FacebookIcon /> </SocialPill></a>
            <a href='https://www.linkedin.com/company/ailaacc/' target='_blank' rel='noreferrer'><SocialPill><LinkedinIcon /></SocialPill></a>

          </ul>
          <div className=''>
            <div className='flex gap-2 mt-5'>
              <WppIcon />
              <p>Cel: (+54)3644338436</p>
            </div>
            <div className='flex gap-2 mt-2'>
              <MailIcon />
              <p>administracion@ailaaccuep195.com</p>

            </div>
          </div>
        </div>

        <article className='mt-5 border-black/70 p-12 shadow-md rounded-2xl bg-[#f6f6f6]/90 w-[90%] md:w-[400px]'>
          <ContactForm />
        </article>
      </div>
    </section>
  )
}
