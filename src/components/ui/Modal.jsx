import React from 'react'
import { motion } from 'framer-motion'

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <motion.div open={isOpen} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} onClick={handleBackdropClick} className='fixed inset-0 flex items-center justify-center bg-black/70 z-50 transitio-all'>
      <div className='w-[80%] flex justify-center'>
        <div className='w-full h-full justify-center items-center'>
          <motion.div onClick={onClose} whileHover={{ scale: 0.9 }} className='flex justify-end items-center bg-backgroundColor rounded-full absolute top-2 right-4 py-2 px-4 cursor-pointer'>
            <button className='font-bold text-black'>
              X
            </button>
          </motion.div>
          {children}
        </div>
      </div>

    </motion.div>
  )
}
