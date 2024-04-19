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
      const data = await response.json()
      console.log('Response', data)
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
