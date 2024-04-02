import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { login } from '../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()

    login(email, password)
  }

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  // is the user authenticated? redirect to the home page
  return (

    <form className='space-y-6 w-1/2 text-white' onSubmit={e => onSubmit(e)}>
      <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Iniciar sesión</h3>

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

      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password' value='Contraseña' />
        </div>
        <TextInput
          name='password'
          type='password'
          placeholder='**************'
          value={password}
          onChange={e => onChange(e)}
          minLength='6'
          required
        />
      </div>

      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Recordarme</Label>
        </div>
        <Link to='/reset-password' className='text-sm text-cyan-700 hover:underline dark:text-cyan-500'>
          Olvidaste tu contraseña
        </Link>
      </div>

      <div className='w-full'>
        <Button type='submit'>Ingresar</Button>
      </div>

      <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
        No tenes una cuenta?&nbsp;
        <Link to='/signup' className='text-cyan-700 hover:underline dark:text-cyan-500'>
          Crear cuenta
        </Link>
      </div>
    </form>

  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
