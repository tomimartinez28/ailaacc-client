import React, { useState } from 'react'
import { UploadIcon } from '../icons/UploadIcon'
import { DropFileIcon } from '../icons/DropFileIcon'

export function DragAndDropInput ({ setFile, file }) {
  const [dragingOver, setDragingOver] = useState(false)

  const handleDrop = e => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    setFile(file)
  }

  const handleDragOver = e => {
    e.preventDefault()
    setDragingOver(true)
  }
  const handleDragEnd = e => {
    setDragingOver(false)
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    setFile(file)
  }
  const handleClick = e => {
    document.getElementById('fileInput').click()
  }

  const renderDragzoneContain = () => {
    if (file) {
      return (
        <p className='font-bold'>{file.name}</p>
      )
    } else {
      if (dragingOver) {
        return (
          <div>
            <DropFileIcon />
            <p>Soltar</p>
          </div>
        )
      } else {
        return (
          <div>
            <UploadIcon />
          </div>
        )
      }
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onClick={handleClick}
      className='h-[200px] border-2 border-dashed border-customOrange p-5 rounded-md flex flex-col items-center justify-center cursor-pointer w-[300px]'
    >
      <input
        type='file'
        id='fileInput'
        className='hidden'
        accept='.xls, .xlsx'
        onChange={handleFileChange}
      />
      {
        renderDragzoneContain()
      }

    </div>
  )
}
