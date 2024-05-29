import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { WorkWithUsEndpoint } from '../../endpoints'

export function WorkWithUs () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = handleSubmit(data => {
    setLoading(true)

    fetch(WorkWithUsEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Datos enviados', data)
      setLoading(false)
    })

    reset()
  })

  return (
    <div className='h-full w-[100%] flex flex-col items-center justify-center'>

      <div className='bg-backgroundColor w-[100%] md:h-[600px] rounded-xl flex flex-col items-center justify-center'>

        <h2 className='text-4xl mb-20'>¿Querés ser parte de nuestro equipo?</h2>

        <form method='post' onSubmit={onSubmit} className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='flex flex-col items-start w-2/4'>
              <label htmlFor='name'>Nombre</label>
              <input
                id='name'
                name='name'
                type='text'
                className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-yellow-300 focus:ease-in'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Nombre es requerido'
                  }
                })}
              />

              {
                        errors.name &&
                          <span className='text-red-500 text-sm'>{errors.name.message}</span>
                    }

            </div>

            <div className='flex flex-col items-start w-2/4'>
              <label htmlFor='lastname'>Apellido</label>
              <input
                id='lastname'
                name='lastname'
                type='text'
                className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-yellow-300 focus:ease-in'
                {...register('lastname', {
                  required: {
                    value: true,
                    message: 'Apellido es requerido'
                  }
                })}
              />

              {
                        errors.lastname &&
                          <span className='text-red-500 text-sm'>{errors.lastname.message}</span>
                    }

            </div>
          </div>
          <div className='flex flex-col items-start w-full'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-yellow-300 focus:ease-in'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email es requerido'
                },
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: 'Inserte un correo válido'
                }
              })}
            />

            {
                    errors.email &&
                      <span className='text-red-500 text-sm'>{errors.email.message}</span>
                }

          </div>
          <div className='flex flex-col items-start'>
            <label htmlFor='cell'>Celular</label>
            <input
              id='cell'
              name='cell'
              type='text'
              className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-yellow-300 focus:ease-in'
              {...register('cell', {
                required: {
                  value: true,
                  message: 'Dejanos tu celular para poder contactarnos.'
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Ingresa un numero de celular válido.'
                }
              })}
            />

            {
                    errors.cell &&
                      <span className='text-red-500 text-sm'>{errors.cell.message}</span>
                }

          </div>

          <div className='flex flex-col items-start'>
            <label htmlFor='cell'>CV</label>
            <input
              id='cv'
              name='cv'
              type='file'
              className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-yellow-300 focus:ease-in'
              {...register('cell')}
            />

            {
                    errors.cell &&
                      <span className='text-red-500 text-sm'>{errors.cell.message}</span>
                }

          </div>

          <motion.button whileHover={{ scale: 0.9 }} className='rounded-full bg-customOrange text-[#f6f6f6] w-[100px] h-12 font-semibold' type='submit'>ENVIAR</motion.button>

        </form>
      </div>

    </div>
  )
}
