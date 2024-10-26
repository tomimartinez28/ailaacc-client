import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Label } from 'flowbite-react'
import { signUp } from '../../actions/auth'
import { inputStyles } from '../../utils/customStyles'

const Signup = ({ signUp, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    rePassword: ''
  })

  const { name, last_name, email, password, rePassword } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if (password === rePassword) {
      signUp(name, last_name, email, password, rePassword)
      setAccountCreated(true)
    }
  }

  if (isAuthenticated) {
    return <Navigate to='/' />
  }
  if (accountCreated) {
    return <Navigate to='/login' />
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <form className='space-y-6 w-[300px] md:w-[400px] bg-[#fff] border-2 px-5 py-2 rounded-xl shadow-lg' onSubmit={e => onSubmit(e)}>
        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Crea tu cuenta</h3>

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='name' value='Tu nombre' />
          </div>
          <input
            name='name'
            className={inputStyles}
            type='text'
            value={name}
            placeholder='Tomas'
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='name' value='Tu apellido' />
          </div>
          <input
            className={inputStyles}
            name='last_name'
            type='text'
            value={last_name}
            placeholder='Martinez'
            onChange={e => onChange(e)}
            required
          />
        </div>

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

        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Contraseña' />
          </div>
          <input
            className={inputStyles}
            name='password'
            type='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
          <div className='mb-2 block'>
            <Label htmlFor='rePassword' value='Repita su contraseña' />
          </div>
          <input
            className={inputStyles}
            name='rePassword'
            type='password'
            value={rePassword}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
        </div>

        <div className='w-full'>
          <button className='z-0 py-2 px-4 bg-customOrange text-backgroundColor rounded-md border-2 border-customOrange hover:bg-transparent hover:text-customOrange transition-all duration-150 font-semibold' type='submit'>Crear cuenta</button>
        </div>
        <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
          Ya tenes una cuenta?&nbsp;
          <Link to='/login' className='text-customOrange'>
            Inciar sesion
          </Link>
        </div>

      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signUp })(Signup)
