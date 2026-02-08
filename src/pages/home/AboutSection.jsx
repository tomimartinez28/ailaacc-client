import React from 'react'

export function AboutSection () {
  return (

    <section className='py-16 px-6 lg:px-20' id='about'>
      <div className='grid lg:grid-cols-2 gap-12 items-center'>
        {/* Texto */}
        <div>
          <p className='text-orange-500 font-semibold mb-3'>How It Started</p>
          <h2 className='text-4xl font-bold leading-tight mb-6'>
            Our Dream is <br />
            Global Learning <br />
            Transformation
          </h2>
          <p className='text-gray-600 leading-relaxed'>
            Kawruh was founded by Robert Anderson, a passionate lifelong learner,
            and Maria Sanchez, a visionary educator. Their shared dream was to
            create a digital haven of knowledge accessible to all. United by their
            belief in the transformational power of education, they embarked on a
            journey to build 'Kawruh.' With relentless dedication, they gathered a
            team of experts and launched this innovative platform, creating a global
            community of eager learners, all connected by the desire to explore,
            learn, and grow.
          </p>
        </div>

        {/* Imagen + métricas */}
        <div className='flex flex-col gap-6 bg-backgroundColor'>
          <div className='overflow-hidden rounded-2xl shadow-lg'>
            <img
              src='src/assets/img/img4.webp'
              alt='Team working'
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-white rounded-2xl p-6 shadow-md border text-center'>
              <p className='text-3xl font-bold'>+10</p>
              <p className='text-gray-600 text-sm'>Años de experiencia</p>
            </div>
            <div className='bg-white rounded-2xl p-6 shadow-md border text-center'>
              <p className='text-3xl font-bold'>6</p>
              <p className='text-gray-600 text-sm'>Sedes en la provincia</p>
            </div>
            <div className='bg-gray-50 rounded-2xl p-6 shadow-md text-center'>
              <p className='text-3xl font-bold'>+200</p>
              <p className='text-gray-600 text-sm'>Personas trabajando</p>
            </div>
            <div className='bg-gray-50 rounded-2xl p-6 shadow-md text-center'>
              <p className='text-3xl font-bold'>+300</p>
              <p className='text-gray-600 text-sm'>Alumnos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
