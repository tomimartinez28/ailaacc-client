import axios from 'axios'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL
} from '../actions/types'

export const checkAuthenticated = () => async dispatch => {
  if (window.localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
    const body = JSON.stringify({ token: window.localStorage.getItem('access') })
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/jwt/verify/`, body, config)

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: AUTHENTICATED_SUCCESS
        })
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL
        })
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL
      })
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL
    })
  }
}

export const loadUser = () => async dispatch => {
  if (window.localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${window.localStorage.getItem('access')}`,
        Accept: 'application/json'
      }
    }
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/users/me/`, config)

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL
      })
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL
    })
  }
}

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/jwt/create/`, body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

export const resetPassword = email => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  const body = JSON.stringify({ email })

  try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/users/reset_password/`, body, config)
    dispatch({
      type: PASSWORD_RESET_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL
    })
  }
}

export const resetPasswordConfirm = (uid, token, newPassword, reNewPassword) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
  const body = JSON.stringify({ uid, token, newPassword, reNewPassword })

  try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/users/reset_password_confirm/`, body, config)
    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_CONFIRM_FAIL
    })
  }
}

export const signUp = (name, email, password, re_password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password, re_password })

  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/users/`, body, config)

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())
  } catch (err) {
    console.log(err)
    dispatch({
      type: SIGNUP_FAIL
    })
  }
}

export const verify = ({ uid, token }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ uid, token })

  try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/users/activation/`, body, config)
    dispatch({
      type: ACTIVATION_SUCCESS
    })
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL
    })
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })
}
