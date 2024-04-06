import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import ResetPassword from './pages/auth/ResetPassword'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ResetPasswordConfirm from './pages/auth/ResetPasswordConfirm'
import Activate from './pages/auth/Activate'
import { Provider } from 'react-redux'
import Layout from './hocs/Layout'
import store from './store'
import { Admin } from './pages/admin/Admin'
import { Missing } from './pages/home/Missing'
import PrivateRoutes from './utils/PrivateRoutes'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* public routes */}
            <Route exact path='/' Component={HomePage} />
            <Route exact path='/login' Component={Login} />
            <Route exact path='/signup' Component={Signup} />
            <Route exact path='/reset-password' Component={ResetPassword} />
            <Route exact path='/password/reset/confirm/:uid/:token' Component={ResetPasswordConfirm} />
            <Route exact path='/activate/:uid/:token' Component={Activate} />
            {/* protected routes */}
            <Route element={<PrivateRoutes />}>
              <Route exact path='/dashboard' Component={Admin} />
            </Route>

            {/* catch all */}
            <Route exact path='*' Component={Missing} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
