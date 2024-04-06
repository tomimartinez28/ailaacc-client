import { motion } from 'framer-motion'
export function AboutSection () {
  return (
    <section id='about' className='h-[400px] flex flex-col justify-center px-3 bg-aboutBg bg-fixed bg-cover text-[#f6f6f6]'>

      <motion.article className='flex flex-col gap-5 w-80 md:w-[70%]' initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 3 }}>
        <h3 className='text-xl md:text-2xl font-mono text-customOrange'>sobre nosotros</h3>
        <p className='text-lg md:base text-justify font-semibold text-[#f6f6f6]/90'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sapiente at numquam praesentium saepe? Laborum, quibusdam nisi saepe aliquam nesciunt commodi officiis voluptate veniam dignissimos sequi nostrum cum laudantium quod?</p>
      </motion.article>

    </section>
  )
}
