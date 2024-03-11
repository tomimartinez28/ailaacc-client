import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { ResetPassword } from './pages/ResetPassword'
import { Signup } from './pages/Signup'
import Login from './pages/Login'
import { ResetPasswordConfirm } from './pages/ResetPasswordConfirm'
import { Activate } from './pages/Activate'
import { Provider } from 'react-redux'
import { Layout } from './hocs/Layout'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route exact path='/login' Component={Login} />
            <Route exact path='/signup' Component={Signup} />
            <Route exact path='/reset-password' Component={ResetPassword} />
            <Route exact path='/password/reset/confirm/:uid/:token' Component={ResetPasswordConfirm} />
            <Route exact path='/activate/:uid/:token' Component={Activate} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
