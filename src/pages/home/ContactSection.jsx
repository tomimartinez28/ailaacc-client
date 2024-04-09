import { ContactForm } from '../../components/ContactForm'
import { WppIcon } from '../../components/icons/WppIcon'
import { MailIcon } from '../../components/icons/MailIcon'
import { SocialPill } from '../../components/ui/SocialPill'
import { InstagramIcon } from '../../components/icons/InstagramIcon'
import { FacebookIcon } from '../../components/icons/FacebookIcon'
import { LinkedinIcon } from '../../components/icons/LinkedinIcon'
import { motion } from 'framer-motion'

export function ContactSection () {
  return (
    <section className='md:h-[600px] h-[750px] p-4 flex flex-col items-center justify-center bg-customOrange' id='contact'>

      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className='grid md:grid-cols-2 md:gap-32 grid-cols-1 justify-center bg-backgroundColor p-9 rounded-xl text-customOrange'
      >

        <div className=''>
          <h3 className='lg:text-6xl text-4xl font-extrabold'>NO DUDES EN <br />CONTACTARNOS!</h3>

          <div className='flex gap-2 mt-5 md:text-xl'>
            <WppIcon />
            <p>(+54) 3644-338436</p>
          </div>
          <div className='flex gap-2 mt-2 md:text-xl'>
            <MailIcon />
            <p>administracion@ailaaccuep195.com</p>

          </div>
          <ul className='w-full flex gap-4 items-center justify-center mt-6 md:justify-start'>

            <a href='https://www.instagram.com/ailaacc_sp/' target='_blank' rel='noreferrer'><SocialPill> <InstagramIcon /> </SocialPill></a>
            <a href='https://www.facebook.com/profile.php?id=100083364459405' target='_blank' rel='noreferrer'><SocialPill> <FacebookIcon /> </SocialPill></a>
            <a href='https://www.linkedin.com/company/ailaacc/' target='_blank' rel='noreferrer'><SocialPill><LinkedinIcon /></SocialPill></a>

          </ul>

        </div>

        <ContactForm />
      </motion.div>

    </section>
  )
}
