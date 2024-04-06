import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoutes ({ isAuthenticated }) {
  return (
    isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoutes)
