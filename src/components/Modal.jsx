import React from 'react'
import '../assets/css/Modal.css'
import { LoginForm } from './LoginForm'

export function Modal ({ onClose }) {
  return (

    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          Cerrar
        </button>
        <LoginForm />
      </div>
    </div>
  )
}
