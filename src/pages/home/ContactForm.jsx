import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContactEndpoint } from '../../endpoints'
import { motion } from 'framer-motion'
import { Spinner } from '../../components/ui/Spinner'

export function ContactForm () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)
  const [dataSended, setDataSended] = useState(false)
  const [dataSendError, setDataSendError] = useState(false)

  const onSubmit = handleSubmit(data => {
    setLoading(true)

    fetch(ContactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        console.log('Datos enviados correctamente')
        setDataSended(true)
        setDataSendError(false)
        setLoading(false)
      } else {
        console.log('Error al enviar los datos')
        setLoading(false)
        setDataSended(false)
        setDataSendError(true)
      }
    }).catch(error => {
      console.error('Error al enviar los datos', error)
      setLoading(false)
      setDataSended(false)
      setDataSendError(true)
    })

    reset()
  })

  return (
    <form method='post' onSubmit={onSubmit} className='flex flex-col gap-5 mt-11 md:mt-5'>
      <div className='flex justify-between'>
        <div className='flex flex-col items-start w-2/4'>
          <label htmlFor='name'>Nombre</label>
          <input
            id='name'
            name='name'
            type='text'
            className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-customOrange focus:ease-in text-black/70'
            {...register('name', {
              required: {
                value: true,
                message: 'Nombre es requerido'
              }
            })}
          />

          {
                        errors.name &&
                          <span className='text-sm'>{errors.name.message}</span>
                    }

        </div>
        <div className='flex flex-col items-start w-2/4'>
          <label htmlFor='lastname'>Apellido</label>
          <input
            id='lastname'
            name='lastname'
            type='text'
            className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-customOrange focus:ease-in text-black/70'
            {...register('lastname', {
              required: {
                value: true,
                message: 'Apellido es requerido'
              }
            })}
          />

          {
                        errors.lastname &&
                          <span className='text-sm'>{errors.lastname.message}</span>
                    }

        </div>
      </div>
      <div className='flex flex-col items-start w-full'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-customOrange focus:ease-in text-black/70'
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
                      <span className='text-sm'>{errors.email.message}</span>
                }

      </div>
      <div className='flex flex-col items-start'>
        <label htmlFor='message'>Dejanos un mensaje</label>
        <input
          id='message'
          name='message'
          type='text'
          className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-customOrange focus:ease-in text-black/70'
          {...register('message', {
            required: {
              value: true,
              message: 'Escribinos un mensaje.'
            }
          })}
        />

        {
                    errors.message &&
                      <span className='text-sm'>{errors.message.message}</span>
                }

      </div>

      <div className='flex items-center gap-2'>
        <motion.button whileHover={{ scale: 0.9 }} className='rounded-full bg-customOrange text-[#f6f6f6] w-[100px] h-12 font-semibold' type='submit'>ENVIAR</motion.button>
        {loading &&
          <div role='status' className='w-full flex items-center justify-center'>
            <Spinner />
            <span className='sr-only'>Enviando...</span>
          </div>}

        {
        dataSended && <p className=' text-green-700'>Mensaje enviado correctamente, te enviaremos un correo a la brevedad.</p>

      }
        {
        dataSendError && <p>Error al enviar los datos, intenta nuevamente.</p>
      }
      </div>

    </form>
  )
}
