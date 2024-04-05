export function AboutSection () {
  return (
    <section id='about' className='h-[400px] flex flex-col justify-center px-3 bg-aboutBg bg-fixed bg-cover text-[#f6f6f6]'>

      <article className='flex flex-col gap-5 w-48 md:w-80'>
        <h3 className='text-xl md:text-2xl font-bold'>SOBRE NOSOTROS</h3>
        <p className='text-sm md:base text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum, maxime autem necessitatibus perferendis accusamus magni numquam, repudiandae odit, ab exercitationem asperiores. Laborum a aliquam tempora soluta quod autem ut?</p>
      </article>

      {/*  <aside className='h-full'>
        <img className='h-full' src='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' alt='' />
      </aside> */}
    </section>
  )
}
