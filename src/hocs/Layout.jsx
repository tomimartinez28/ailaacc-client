import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'

export function Layout (props) {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Navbar />
      {props.children}
    </div>
  )
}
