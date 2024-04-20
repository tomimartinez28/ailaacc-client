import { useState } from 'react'
import { TimeCounterEndpoint } from '../../endpoints'
export function TimeCounter () {
  const [file, setFile] = useState(null)

  const handleFileChange = e => setFile(e.target.files[0])

  const handleSubmit = async e => {
    e.preventDefault()

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

      // Simular un clic en el enlace
      await a.click()

      // Limpiar el enlace y la URL del objeto después de la descarga
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error: ', error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>

      <form method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
        <h3 className='text-2xl font-bold'>Subi tu archivo de horas con el nombre anviz.xlsx</h3>
        <input name='file' type='file' onChange={handleFileChange} />
        <button type='submit'>Subir</button>

      </form>
    </div>
  )
}
