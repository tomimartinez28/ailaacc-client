import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { connect } from 'react-redux'
import { checkAuthenticated, loadUser } from '../actions/auth'
import { Spinner } from '../components/ui/Spinner'

function Layout (props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAuthData () {
      await props.checkAuthenticated()
      await props.loadUser()
      setLoading(false)
    }
    loadAuthData()
  }, [props.checkAuthenticated, props.loadUser])

  if (loading) {
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  return (
    <div>

      <Navbar />
      <div className=''>

        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default connect(null, { checkAuthenticated, loadUser })(Layout)
