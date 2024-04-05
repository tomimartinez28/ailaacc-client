import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Label, TextInput } from 'flowbite-react'
import { signUp } from '../../actions/auth'

const Signup = ({ signUp, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: ''
  })

  const { name, email, password, rePassword } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if (password === rePassword) {
      signUp(name, email, password, rePassword)
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
            <Label htmlFor='name' value='Ingresa tu nombre y apellido' />
          </div>
          <TextInput
            name='name'
            type='text'
            value={name}
            placeholder='Tomas Martinez'
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
          <div className='mb-2 block'>
            <Label htmlFor='rePassword' value='Repita su contraseña' />
          </div>
          <TextInput
            name='rePassword'
            type='password'
            placeholder='**************'
            value={rePassword}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
        </div>

        <div className='w-full'>
          <Button type='submit'>Crear cuenta</Button>
        </div>
        <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
          Ya tenes una cuenta?&nbsp;
          <Link to='/login' className='text-cyan-700 hover:underline dark:text-cyan-500'>
            Incia sesion
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
