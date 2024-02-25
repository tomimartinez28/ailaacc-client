import { useForm } from 'react-hook-form'

export function ContactForm () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log('Datos enviados: ', data)
    reset()
  })

  return (
    <form method='post' onSubmit={onSubmit} className='flex flex-col gap-5'>
      <div className='flex justify-between'>
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
        <label htmlFor='message'>Dejanos un mensaje</label>
        <input
          id='message'
          name='message'
          type='text'
          className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-yellow-300 focus:ease-in'
          {...register('message', {
            required: {
              value: true,
              message: 'Escribinos un mensaje.'
            }
          })}
        />

        {
            errors.message &&
              <span className='text-red-500 text-sm'>{errors.message.message}</span>
          }

      </div>

      <button type='submit' className='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900'>Enviar</button>
    </form>
  )
}
