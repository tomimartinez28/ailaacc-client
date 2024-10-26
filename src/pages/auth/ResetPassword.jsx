import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Label } from 'flowbite-react'
import { resetPassword } from '../../actions/auth'
import { inputStyles } from '../../utils/customStyles'

const ResetPassword = ({ resetPassword }) => {
  const [requestSent, setRequestSent] = useState(false)
  const [formData, setFormData] = useState({
    email: ''
  })

  const { email } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()

    resetPassword(email)
    setRequestSent(true)
  }

  if (requestSent) {
    return <Navigate to='/' />
  }

  // is the user authenticated? redirect to the home page
  return (

    <div className='w-full h-screen flex flex-col items-center justify-start'>

      <form className='space-y-6 w-[300px] md:w-[400px] bg-[#fff] border-2 px-5 py-2 rounded-xl shadow-lg mt-40' onSubmit={e => onSubmit(e)}>
        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Recuperar contraseña</h3>

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Tu email' />
          </div>
          <input
            className={inputStyles}
            name='email'
            type='email'
            value={email}
            placeholder='ejemplo@gmail.com'
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className='w-full'>
          <button className='z-0 py-2 px-4 bg-customOrange text-backgroundColor rounded-md border-2 border-customOrange hover:bg-transparent hover:text-customOrange transition-all duration-150 font-semibold' type='submit'>Ingresar</button>
        </div>

      </form>
    </div>
  )
}

export default connect(null, { resetPassword })(ResetPassword)
