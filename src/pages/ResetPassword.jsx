import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Label, TextInput } from 'flowbite-react'
import { resetPassword } from '../actions/auth'

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

    <form className='space-y-6 w-1/2 text-white' onSubmit={e => onSubmit(e)}>
      <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Recuperar contraseña</h3>

      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email' value='Tu email' />
        </div>
        <TextInput
          name='email'
          type='email'
          value={email}
          placeholder='tu_email@gmail.com'
          onChange={e => onChange(e)}
          required
        />
      </div>

      <div className='w-full'>
        <Button type='submit'>Restablecer contraseña</Button>
      </div>

    </form>

  )
}

export default connect(null, { resetPassword })(ResetPassword)
