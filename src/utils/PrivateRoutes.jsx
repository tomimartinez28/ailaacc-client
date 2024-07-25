import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoutes ({ isAuthenticated, isStaff }) {
  return (
    isAuthenticated && isStaff ? <Outlet /> : <Navigate to='/login' />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isStaff: state.auth.user ? state.auth.user.is_staff : false
})

export default connect(mapStateToProps)(PrivateRoutes)
