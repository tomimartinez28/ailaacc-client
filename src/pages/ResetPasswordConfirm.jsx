import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Label, TextInput } from 'flowbite-react'
import { resetPasswordConfirm } from '../actions/auth'

const ResetPasswordConfirm = ({ match, resetPasswordConfirm }) => {
  const { uid } = useParams()
  const { token } = useParams()
  const [requestSent, setRequestSent] = useState(false)
  const [formData, setFormData] = useState({
    newPassword: '',
    re_new_password: ''
  })

  const { newPassword, reNewPassword } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    resetPasswordConfirm(uid, token, newPassword, reNewPassword)
    setRequestSent(true)
  }

  if (requestSent) {
    return <Navigate to='/' />
  }

  return (

    <form className='space-y-6 w-1/2 text-white' onSubmit={e => onSubmit(e)}>

      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password' value='Contraseña' />
        </div>
        <TextInput
          name='new_password'
          type='password'
          placeholder='Nueva contraseña'
          value={newPassword}
          onChange={e => onChange(e)}
          minLength='6'
          required
        />
        <TextInput
          name='re_new_password'
          type='password'
          placeholder='Confirmar contraseña'
          value={reNewPassword}
          onChange={e => onChange(e)}
          minLength='6'
          required
        />

      </div>

      <div className='w-full'>
        <Button type='submit'>Restablecer contraseña</Button>
      </div>

    </form>

  )
}

export default connect(null, { resetPasswordConfirm })(ResetPasswordConfirm)
