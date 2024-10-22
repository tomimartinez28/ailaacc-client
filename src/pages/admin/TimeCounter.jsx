import React, { useState } from 'react'
import { Spinner } from '../../components/ui/Spinner'
import { TimeCounterEndpoint } from '../../endpoints'
import { DragAndDropInput } from '../../components/ui/DragAndDropInput'
import { motion } from 'framer-motion'

export function TimeCounter () {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!file) return
    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch(TimeCounterEndpoint, {
        method: 'POST',
        body: formData
      })
      if (!response.ok) {
        throw new Error('Network response was no ok')
      }

      // Leer la respuesta como un Blob
      const blob = await response.blob()
      // Crear una URL de objeto para el Blob
      const url = await window.URL.createObjectURL(blob)
      // Crear un enlace de descarga
      const a = await document.createElement('a')
      a.href = await url
      a.download = await 'contadas.xlsx' // Nombre de archivo deseado
      await document.body.appendChild(a)

      setLoading(false)
      // Simular un clic en el enlace
      await a.click()

      setFile(null)

      // Limpiar el enlace y la URL del objeto después de la descarga
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error: ', error)
    }
  }

  return (
    <div className='flex flex-col p-10 mt-10'>

      <form method='post' onSubmit={handleSubmit} encType='multipart/form-data' className='flex flex-col gap-3'>
        <h3 className='text-2xl font-bold text-black/70'>Subi tu archivo de horas</h3>
        <DragAndDropInput setFile={setFile} file={file} />
        <div className='flex items-center justify-center'>
          {
          loading
            ? <Spinner />
            : <motion.button
                whileHover={{ scale: 0.9 }}
                type='submit'
                className='w-full rounded-full bg-customOrange text-[#f6f6f6] font-semibold py-2'
              >
              Contar horas
            </motion.button>
        }
        </div>

      </form>
    </div>
  )
}
