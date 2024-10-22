import React from 'react'
import { ContactForm } from '../../pages/home/ContactForm'
import { WppIcon } from '../../components/icons/WppIcon'
import { MailIcon } from '../../components/icons/MailIcon'
import { SocialPill } from '../../components/ui/SocialPill'
import { InstagramIcon } from '../../components/icons/InstagramIcon'
import { FacebookIcon } from '../../components/icons/FacebookIcon'
import { LinkedinIcon } from '../../components/icons/LinkedinIcon'

export function ContactSection () {
  return (
    <section className='md:h-[600px] h-[750px] p-4 flex flex-col items-center justify-center bg-customOrange' id='contact'>

      <div
        className='grid md:grid-cols-2 md:gap-32 grid-cols-1 justify-center bg-backgroundColor p-9 rounded-xl text-customOrange'
      >

        <div className=''>
          <h3 className='lg:text-6xl text-4xl font-extrabold'>NO DUDES EN <br />CONTACTARNOS!</h3>

          <div className='flex gap-2 items-center mt-5 md:text-xl'>
            <WppIcon size={24} />
            <p>(+54)3644359654</p>
          </div>
          <div className='flex gap-2 items-center mt-2 md:text-xl'>
            <MailIcon size={24} />
            <p>admisioneingresosailaacc195@gmail.com</p>

          </div>
          <ul className='w-full flex gap-4 items-center justify-center mt-6 md:justify-start'>

            <a href='https://www.instagram.com/ailaacc_sp/' target='_blank' rel='noreferrer'><SocialPill> <InstagramIcon size={24} /> </SocialPill></a>
            <a href='https://www.facebook.com/profile.php?id=100083364459405' target='_blank' rel='noreferrer'><SocialPill> <FacebookIcon size={24} /> </SocialPill></a>
            <a href='https://www.linkedin.com/company/ailaacc/' target='_blank' rel='noreferrer'><SocialPill><LinkedinIcon size={24} /></SocialPill></a>

          </ul>

        </div>

        <ContactForm />
      </div>

    </section>
  )
}
