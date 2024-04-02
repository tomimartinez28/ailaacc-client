import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { verify } from '../actions/auth'

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false)
  const uid = useParams()
  const token = useParams()

  const verifyAccount = e => {
    verify(uid, token)
    setVerified(true)
  }

  if (verified) {
    return <Navigate to='/' />
  }

  // is the user authenticated? redirect to the home page
  return (

    <div>
      <button onClick={verifyAccount}>Verifica tu cuenta.</button>
    </div>

  )
}

export default connect(null, { verify })(Activate)
