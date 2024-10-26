import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'
import { WorkWithUsEndpoint } from '../../endpoints'
import { inputStyles } from '../../utils/customStyles'
import { Spinner } from 'flowbite-react'
import resume from '../../assets/svg/resume.svg'

export function WorkWithUs () {
  const { register, handleSubmit, formState: { errors }, setValue, trigger, reset } = useForm()
  const [isSended, setIsSended] = useState(null)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(null)

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0]
    setFile(uploadedFile)
    setValue('file', uploadedFile, { shouldValidate: true })
    trigger('file')
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    onDropRejected: () => {
      setFile(null)
      setValue('file', null, { shouldValidate: true })
      trigger('file')
    }
  })

  const onSubmit = (data) => {
    setLoading(true)

    const formData = new FormData()
    formData.append('cv', file)
    if (!file) {
      setValue('file', null, { shouldValidate: true })
      trigger('file')
      setLoading(false)
      return
    }
    formData.append('name', data.name)
    formData.append('lastname', data.lastname)
    formData.append('email', data.email)
    formData.append('cell', data.cell)

    // Aquí puedes hacer la llamada a tu API para enviar los datos
    fetch(WorkWithUsEndpoint, {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        console.log('Datos enviados exitosamente')
        setIsSended(true)
        setLoading(false)
        reset()
      } else {
        console.error('Error al enviar los datos')
        setLoading(false)
      }
    }).catch(error => {
      console.error('Error al enviar los datos:', error)
      setLoading(false)
    })
  }

  const renderForm = () => {
    if (isSended) {
      return (
        <div className='h-full flex flex-col items-center justify-center'>
          <img src={resume} alt='Imagen de persona con un curriculum en la mano' className='size-60' />
          <p className='text-xl text-black/70'>Tu CV ha sido enviado.</p>
        </div>
      )
    } else {
      return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full h-full' encType='multipart/form-data'>
          <div className='flex gap-4'>
            <div className='flex flex-col items-start w-2/4'>
              <label htmlFor='name'>Nombre</label>
              <input
                id='name'
                name='name'
                type='text'
                className={inputStyles}
                {...register('name', { required: 'Nombre es requerido' })}
              />
              {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
            </div>
            <div className='flex flex-col items-start w-2/4'>
              <label htmlFor='lastname'>Apellido</label>
              <input
                id='lastname'
                name='lastname'
                type='text'
                className={inputStyles}
                {...register('lastname', { required: 'Apellido es requerido' })}
              />
              {errors.lastname && <span className='text-red-500 text-sm'>{errors.lastname.message}</span>}
            </div>
          </div>
          <div className='flex flex-col items-start w-full'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              className={inputStyles}
              {...register('email', {
                required: 'Email es requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Inserte un correo válido'
                }
              })}
            />
            {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
          </div>
          <div className='flex flex-col items-start w-full'>
            <label htmlFor='cell'>Teléfono</label>
            <input
              id='cell'
              name='cell'
              type='text'
              className={inputStyles}
              {...register('cell', {
                required: 'Teléfono es requerido',
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Ingresa un número de teléfono válido'
                }
              })}
            />
            {errors.cell && <span className='text-red-500 text-sm'>{errors.cell.message}</span>}
          </div>
          <div
            {...getRootProps()}
            className={`h-[100px] border-2 border-dashed p-5 rounded-md flex flex-col items-center justify-center cursor-pointer w-full ${isDragActive ? 'border-customOrange' : 'border-black/70'}`}
          >
            <input id='file' name='file' {...getInputProps()} />
            {file
              ? (
                <p className='font-bold'>{file.name}</p>
                )
              : (
                <p className={`${isDragActive ? 'text-customOrange' : 'text-black/70'}`}>Arrastrá tu CV acá, o hacé clic para seleccionarlo (PDF o DOCX)</p>
                )}
          </div>
          {errors.file && <span className='text-red-500 text-sm'>{errors.file.message}</span>}
          <motion.button
            whileHover={{ scale: 0.9 }}
            className='rounded-full bg-customOrange text-[#f6f6f6] w-[100px] h-12 font-semibold mt-4'
            type='submit'
          >
            ENVIAR
          </motion.button>
        </form>
      )
    }
  }

  return (
    <div className='h-full w-[100%] flex flex-col items-center justify-center'>

      <div className='bg-backgroundColor w-[100%] md:h-[600px] rounded-xl flex flex-col items-center justify-center p-8'>
        <h2 className='text-4xl mb-8'>¿Querés ser parte de nuestro equipo?</h2>
        {
          loading
            ? (
              <div className='h-full flex flex-col items-center justify-center'>
                <Spinner />
              </div>
              )
            : renderForm()
        }
      </div>
    </div>
  )
}
