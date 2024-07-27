import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Checkbox, Label } from 'flowbite-react'
import { login } from '../../actions/auth'
import { inputStyles } from '../../utils/inputStyles'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [formError, setFormError] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      setFormError(false)
    } else {
      setFormError(true)
    }
  }, [isAuthenticated])

  const { email, password } = formData

  const onChange = e => {
    setFormError(false)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault()

    login(email, password)
  }

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  // is the user authenticated? redirect to the home page
  return (
    <div className='h-screen w-full flex flex-col items-center justify-start'>
      <form className='space-y-6 w-[300px] md:w-[400px] bg-[#fff] border-2 p-5 rounded-xl shadow-lg mt-10' onSubmit={e => onSubmit(e)}>
        <h3 className='text-xl font-medium text-black/80'>Iniciar sesión</h3>

        {
  formError && (
    <div className='border border-red-600 rounded-md w-full bg-red-600/40 p-2'>
      <p className='text-red-700 text-center text-sm'>Usuario o contraseña incorrecto. Intentá denuevo.</p>
    </div>
  )
}

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Email' />
          </div>
          <input
            className={inputStyles()}
            name='email'
            type='email'
            value={email}
            placeholder='ejemplo@gmail.com'
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Contraseña' />
          </div>
          <input
            className={inputStyles()}
            name='password'
            type='password'
            placeholder=''
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
            <Link to='/reset-password' className='text-sm text-customOrange hover:underline'>
              Olvidaste tu contraseña
            </Link>
          </div>
        </div>

        <div className='w-full'>
          <button className='z-0 py-2 px-4 bg-customOrange text-backgroundColor rounded-md border-2 border-customOrange hover:bg-transparent hover:text-customOrange transition-all duration-150 font-semibold' type='submit'>Ingresar</button>
        </div>

        <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
          No tenes una cuenta?&nbsp;
          <Link to='/signup' className='text-customOrange hover:underline'>
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
