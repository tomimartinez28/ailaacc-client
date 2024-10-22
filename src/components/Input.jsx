import React from 'react'
export function CustomInput ({ id, type, name }) {
  return (
    <input id={id} type={type} name={name} className='bg-transparent w-full border-t-0 border-x-0 focus:border-none focus:ring-yellow-300 focus:ease-in' />
  )
}
