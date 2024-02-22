export function AboutSection () {
  return (
    <section id='about' className='grid grid-cols-2 h-screen items-center p-5'>

      <article className='flex flex-col items-center gap-5'>
        <h3>ACERCA DE</h3>
        <h2>Nuestros profesionales son los mejores</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum, maxime autem necessitatibus perferendis accusamus magni numquam, repudiandae odit, ab exercitationem asperiores. Laborum a aliquam tempora soluta quod autem ut?</p>
      </article>

      <aside className='h-full'>
        <img className='h-full' src='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' alt='' />
      </aside>
    </section>
  )
}
