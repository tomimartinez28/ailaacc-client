import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Checkbox, Label } from 'flowbite-react'
import { login } from '../../actions/auth'

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
    return <Navigate to='/dashboard' />
  }

  // is the user authenticated? redirect to the home page
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <form className='space-y-6 w-[300px] md:w-[400px] bg-[#fff] border-2 px-5 py-2 rounded-xl shadow-lg' onSubmit={e => onSubmit(e)}>
        <h3 className='text-xl font-medium text-gray-900'>Iniciar sesión</h3>

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Tu email' />
          </div>
          <input
            className='w-full rounded-md bg-[#f6f6f6] border-gray-300'
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
          <input
            className='w-full rounded-md bg-[#f6f6f6] border-gray-300'
            name='password'
            type='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
        </div>

        <div className='flex justify-between'>
          <div className='flex items-center gap-2 w-[50%]'>
            <Checkbox id='remember' />
            <Label htmlFor='remember'>Recordarme</Label>
          </div>
          <div className='w-[50%] text-end'>
            <Link to='/reset-password' className='text-sm text-cyan-700 hover:underline dark:text-cyan-500'>
              Olvidaste tu contraseña
            </Link>
          </div>
        </div>

        <div className='w-full'>
          <Button className='z-0' type='submit'>Ingresar</Button>
        </div>

        <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
          No tenes una cuenta?&nbsp;
          <Link to='/signup' className='text-cyan-700 hover:underline dark:text-cyan-500'>
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
