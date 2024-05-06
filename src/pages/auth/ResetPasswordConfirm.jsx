import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Label } from 'flowbite-react'
import { resetPasswordConfirm } from '../../actions/auth'
import { inputStyles } from '../../utils/inputStyles'

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
    <div className='w-full h-screen flex flex-col items-center justify-start'>

      <form className='space-y-6 w-1/2 flex flex-col text-black/80 mt-20' onSubmit={e => onSubmit(e)}>

        <div className='flex flex-col gap-1'>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Nueva contraseña' />
          </div>
          <input
            className={inputStyles()}
            name='newPassword'
            type='password'
            value={newPassword}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Repita su nueva contraseña' />
          </div>
          <input
            className={inputStyles()}
            name='re_new_password'
            type='password'
            placeholder=''
            value={reNewPassword}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />

        </div>

        <div className='w-full'>
          <button className='z-0 py-2 px-4 bg-customOrange text-backgroundColor rounded-md border-2 border-customOrange hover:bg-transparent hover:text-customOrange transition-all duration-150 font-semibold' type='submit'>Restablecer contraseña</button>
        </div>

      </form>
    </div>
  )
}

export default connect(null, { resetPasswordConfirm })(ResetPasswordConfirm)
